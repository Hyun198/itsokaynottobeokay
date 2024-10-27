'use client';
import axios from 'axios';
import { useEffect, useState } from 'react'

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
                    q: "사이코지만 괜찮아 OST",
                    type: "playlist",
                    limit: 1, // 첫 번째로 나온 플레이리스트만 가져옴
                },
            }
        );
        const playlistId = searchResponse.data.playlists.items[0].id;

        // 2. 플레이리스트의 트랙 정보 가져오기
        const playlistResponse = await axios.get(
            `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
            { headers: { Authorization: "Bearer " + access_token } }
        );

        const trackList = playlistResponse.data.items.map((item) => ({
            name: item.track.name,
            artist: item.track.artists.map((artist) => artist.name).join(", "),
            albumCover: item.track.album.images[0]?.url,
        }))
        setTracks(trackList); // 가져온 트랙을 상태로 설정
    }

    useEffect(() => {
        getPlaylistTracks();
    }, [])

    useEffect(() => {
        console.log("tracks:", tracks)
    }, [tracks]);

    return (
        <div>
            <h2>Playlist</h2>
            <ul>
                {tracks.map((track, index) => {
                    return (
                        <li key={index}>
                            <img src={track.albumCover} alt={track.name} />

                            <strong>{track.name}</strong>-{track.artist}</li>
                    )
                })}
            </ul>
        </div>
    )
}