import React from "react";
import { Home } from "react-feather";
import Link from "next/link";

export default function () {
    return (
        <aside className="w-full max-w-xs overflow-y-scroll bg-bg p-6 ">
            <Link
                href="/"
                className="flex items-center gap-4 text-text-dimmed transition-colors hover:text-text "
            >
                <Home className="h-6 w-6 " />
                <p className="font-semibold">Home</p>
            </Link>
            <hr className="my-3 border-text-dimmed/50"></hr>
            <div className="">
                {Array(100)
                    .fill(null)
                    .map(() => (
                        <Link
                            href="/playlist/abc"
                            className="transitions-colors block py-1 text-text-dimmed hover:text-text"
                        >
                            hej
                        </Link>
                    ))}
            </div>
        </aside>
    );
}
