import { ChevronDown } from "react-feather";
import PlayerControls from "./PlayerControls";

export default function PlayerOverlay({
    setPlayerOverlayIsOpen,
    PlayerOverlayIsOpen,
    track,
    localPlayer,
    isPaused,
    position,
}) {
    console.log(track);
    return (
        <div
            className="to fixed top-0 h-screen bg-gradient-to-b from-primary  to-bg-dimmed transition-transform duration-500 md:hidden"
            style={{
                transform: `translateY${PlayerOverlayIsOpen ? "0%" : "100&"})`,
            }}
        >
            <div
                className="hover: fixed  top-3 left-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-text-dimmed/20 "
                onclick={() => setPlayerOverlayIsOpen(false)}
            >
                <ChevronDown />
            </div>
            <div className="absolute top-6 left-1/2 max-w-[30ch] -translate-x-1/2 truncate text-lg font-bold">
                {track.album.name}
            </div>
            <div className="flex h-full flex-col gap-20 px-5 pb-36 pt-14">
                <div className=" aspect-sqaure mx-auto max-w-[450px] bg-red-500">
                    <img
                        src={track.album.images[0]?.url}
                        alt=""
                        className="h-full w-full"
                    />
                </div>
                <div>
                    <h2 className="text-lg font-bold">{track.name}</h2>
                    <p className="text-text-dimmed">{track.artists[0].name}</p>
                    <div className="mt-auto">
                        <PlayerControls
                            player={localPlayer}
                            isPaused={isPaused}
                            position={position}
                            track={track}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
