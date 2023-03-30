import { useEffect, useState } from "react";
import { spotifyApi } from "@/pages/_app";
import PlayerControls from "./PlayerControls";
import PlayerVolume from "./PlayerVolume";
import PlayerOverlay from "./PlayerOverlay";

export default function Player() {
    const [device, setDevice] = useState(null);
    const [localPlayer, setLocalPlayer] = useState(null);
    const [track, setTrack] = useState(null);
    const [isPaused, setIsPaused] = useState(false);
    const [position, setPosition] = useState(null);
    const [playerOverlayIsOpen, setPlayerOverlayIsOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem("spotify-key");
        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;
        document.body.appendChild(script);

        window.onSpotifyWebPlaybackSDKReady = () => {
            const player = new window.Spotify.Player({
                name: "Spotify Playback",
                getOAuthToken: (cb) => {
                    cb(token);
                },
                volume: 0.5,
            });
            console.log("player: ", player);

            player.addListener("ready", ({ device_id }) => {
                console.log("Ready with device_id: ", device_id);
                setDevice(device_id);
                setLocalPlayer(player);
            });

            player.addListener("player_state_changed", (state) => {
                if (!state || !state.track_window?.current_track) {
                    return;
                }

                console.log("state changed:", state);
                setTrack(state.track_window.current_track);
                setIsPaused(state.paused);
                setPosition(state.position);

                player.getCurrentState().then((state) => {
                    if (!state) {
                        setIsActive(false);
                    } else {
                        setIsActive(true);
                    }
                });
            });

            player.connect();
        };
        spotifyApi.skipToPrevious;
    }, []);

    useEffect(() => {
        if (!localPlayer) return;

        localPlayer.connect();

        return () => {
            localPlayer.disconnect();
        };
    }, [localPlayer]);

    if (!isActive || !localPlayer || !track)
        return <div>No active session</div>;

    return (
        <div>
            <div
                className="flex items-center p-4"
                onClick={() => {
                    setPlayerOverlayIsOpen(!playerOverlayIsOpen);
                }}
            >
                <div className="flex flex-1 items-center">
                    <img
                        src={track.album.images[0].url}
                        alt=""
                        className="mr-2 h-12 w-12 flex-shrink-0"
                    />
                    <div>
                        <h4 className="">{track.name}</h4>
                        <p className="text-xs text-text-dimmed">
                            {track.artists[0].name}
                        </p>
                    </div>
                </div>
                <div className="flex-1 text-center max-md:hidden">
                    <PlayerControls
                        player={localPlayer}
                        isPaused={isPaused}
                        position={position}
                        track={track}
                    />
                </div>
                <div className="flex flex-1 justify-end max-md:hidden">
                    <PlayerVolume player={localPlayer} />
                </div>
            </div>
            <PlayerOverlay
                setPlayerOverlayIsOpen={setPlayerOverlayIsOpen}
                playerOverlayIsOpen={playerOverlayIsOpen}
                track={track}
                isPaused={isPaused}
                position={position}
            />
        </div>
    );
}
