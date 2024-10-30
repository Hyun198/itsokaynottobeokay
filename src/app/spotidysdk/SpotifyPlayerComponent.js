'use client'
import { useEffect, useState } from 'react';
export default function SpotifyPlayerComponent({ accessToken, selected_track }) {

    const [player, setPlayer] = useState(null);
    const [track, setTrack] = useState(null);
    const [id, setId] = useState(null);
    const [ready, setReady] = useState(false);


    useEffect(() => {
        if (!accessToken) return;
        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;
        document.body.appendChild(script);

        window.onSpotifyWebPlaybackSDKReady = () => {
            const newPlayer = new Spotify.Player({
                name: "My Web Playback SDK",
                getOAuthToken: cb => { cb(accessToken); },
                volume: 0.5,
            });
            setPlayer(newPlayer);


            // Ready
            newPlayer.addListener('ready', ({ device_id }) => {
                setId(device_id);
                setReady(true);

            });

            // Not Ready
            newPlayer.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });

            newPlayer.addListener('initialization_error', ({ message }) => {
                console.error(message);
            });

            newPlayer.addListener('authentication_error', ({ message }) => {
                console.error(message);
            });

            newPlayer.addListener('account_error', ({ message }) => {
                console.error(message);
            });


            newPlayer.connect();
        };
    }, [accessToken]);

    useEffect(() => {
        if (player && ready && selected_track) {
            player.activateElement().then(() => {
                player._options.getOAuthToken((access_token) => {
                    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
                        method: 'PUT',
                        body: JSON.stringify({ uris: [selected_track] }),
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${access_token}`
                        },
                    }).catch(error => console.error('Error playing track:', error));
                });
            });
        }
    }, [selected_track, player, ready]);

    const handlePlayPause = () => {
        player.togglePlay().then(() => {
            console.log('Toggled playback!');
        }).catch(error => {
            console.error('Error toggling playback', error);
        });
    };

    const handleNextTrack = () => {
        player.nextTrack().then(() => {
            console.log('Skipped to next track!');
        }).catch(error => {
            console.error('Error skipping to next track', error);
        });
    };

    const handlePrevTrack = () => {
        player.previousTrack().then(() => {
            console.log('Skipped to previous track!');
        }).catch(error => {
            console.error('Error skipping to previous track', error);
        });
    };


    return (
        <div className='player-container'>
            Player
        </div>
    )
}