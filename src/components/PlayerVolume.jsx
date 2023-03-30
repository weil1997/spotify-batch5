import React, { useState } from "react";
import { Volume1, Volume2, VolumeX } from "react-feather";

export default function PlayerVolume({ player }) {
    const [volume, setVolume] = useState(0.5);
    return (
        <div className="flex items-center gap-2">
            {volume > 0.5 ? (
                <Volume2 />
            ) : volume > 0 ? (
                <Volume1 />
            ) : (
                <VolumeX />
            )}

            <div className="group relative w-36">
                <label
                    htmlFor=""
                    className="relative block h-1 rounded-sm bg-text-dimmed/30"
                >
                    <div className="h-full overflow-hidden rounded-sm">
                        <div
                            className="h-full w-full rounded-sm bg-text group-hover:bg-primary"
                            style={{
                                transform: `translateX(${
                                    -100 + 100 * volume
                                }%)`,
                            }}
                        ></div>
                    </div>
                    <div
                        className="absolute hidden h-3 w-3 rounded-full bg-text group-hover:block"
                        style={{
                            left: `${100 * volume}%`,
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    ></div>
                </label>
                <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    onMouseUp={() => {
                        player.setVolume(volume);
                    }}
                    className="absolute inset-0 opacity-0"
                />
            </div>
        </div>
    );
}
