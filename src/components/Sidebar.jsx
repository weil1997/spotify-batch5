import { Home } from "react-feather";
import Link from "next/link";
import { spotifyApi } from "@/pages/_app";
import { useQuery } from "@tanstack/react-query";

export default function Sidebar() {
    const {
        data: playlists,
        isloading,
        isError,
    } = useQuery({
        queryKey: ["playlists"],
        queryFn: async () => (await spotifyApi.getUserPlaylists()).body.items,
    });

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
                {'isLoading...'
                    : playlists.map((playlist) => (
                          <Link
                              href="/playlist/abc"
                              className="transitions-colors block py-1 text-text-dimmed hover:text-text"
                          >
                              {playlist.name}
                          </Link>
                      ))
                   }
            </div>
        </aside>
    );
}
