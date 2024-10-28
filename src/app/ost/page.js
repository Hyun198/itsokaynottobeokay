'use client';
import axios from 'axios';
import { useEffect, useState } from 'react'
import './ost.style.css'
export default function Page() {

    const client_Id = process.env.NEXT_PUBLIC_SPOTIFY_API_KEY;
    const client_SecretId = process.env.NEXT_PUBLIC_SPOTIFY_API_SECRET_KEY

    const [tracks, setTracks] = useState([])

    async function getAccessToken() {
        const response = await axios.post(
            "https://accounts.spotify.com/api/token",
            "grant_type=client_credentials",
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization:
                        "Basic " +
                        Buffer.from(client_Id + ":" + client_SecretId).toString("base64"),
                },
            }
        );
        return response.data.access_token;
    }

    async function getPlaylistTracks() {
        const access_token = await getAccessToken();

        // 1. '사이코지만 괜찮아' 관련 플레이리스트 검색
        const searchResponse = await axios.get(
            "https://api.spotify.com/v1/search",
            {
                headers: { Authorization: "Bearer " + access_token },
                params: {
                    q: "사이코지만 괜찮아",
                    type: "album",
                    limit: 5, // 첫 번째로 나온 플레이리스트만 가져옴
                },
            }
        );
        const albums = searchResponse.data.albums.items;

        let allTracks = [];

        for (const album of albums) {
            if (album.name.includes("OST") || album.name.includes("사이코지만 괜찮아")) {
                const albumResponse = await axios.get(
                    `https://api.spotify.com/v1/albums/${album.id}/tracks`,
                    { headers: { Authorization: "Bearer " + access_token } }
                );

                const albumTracks = albumResponse.data.items.map((item) => ({
                    name: item.name,
                    artist: item.artists.map((artist) => artist.name).join(", "),
                    albumCover: album.images ? album.images[0]?.url : album.images[0],
                    albumName: album.name,
                }));

                allTracks = [...allTracks, ...albumTracks];
            }
        }
        setTracks(allTracks);
    }

    useEffect(() => {
        getPlaylistTracks();
    }, [])

    useEffect(() => {
        console.log("tracks:", tracks)
    }, [tracks]);

    return (
        <div className="play-list-container">
            <ul>
                {tracks.map((track, index) => {
                    return (
                        <li key={index}>
                            <img src={track.albumCover} alt={track.name} />
                            <div>
                                <strong>{track.name}</strong>
                            </div>
                            <div>
                                {track.artist}
                            </div>

                        </li>
                    )
                })}
            </ul>
        </div>
    )
}