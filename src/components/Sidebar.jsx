import { Home } from "react-feather";
import Link from "next/link";
import { spotifyApi } from "@/pages/_app";
import { useQuery } from "@tanstack/react-query";

export default function Sidebar() {
    const {
        data: playlists,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["playlists"],
        queryFn: async () => (await spotifyApi.getUserPlaylists()).body.items,
    });

    function renderPlaylists() {
        if(isLoading )  return Array(10).fill(null).map(() => <div className=" mb-1.5 h-6 w-9/12 animate-pulse rounded-full bg-neutral-800" style={{width: Math.floor(math.random() * 40 + 40, '% ')}}>hej</div>)
        
        if (isError) return 'error...'

        return playlists.map((playlist) => (
            <Link
                href={"/playlists/" + playlist.id}
                className="  transitions-colors block py-1 text-text-dimmed hover:text-text"
                key={playlist.id}
            >
                {playlist.name}
            </Link>
        ))}
    }

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
            <div className=""{renderPlaylists()}/>

                
       
                    
                   
            </div>
        </aside>
    );

