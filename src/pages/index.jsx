import Layout from "@/components/Layout";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { spotifyApi } from "./_app";

export default function Index() {
  const {
    data: playlists,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["playlists"],
    queryFn: async () => (await spotifyApi.getUserPlaylists()).body.items,
  });

  if (isLoading) return <p>loading...</p>;

  if (isError) return <p>Error...</p>;

  return (
    <Layout>
      <div className="p-10">
        <h1 className="mb-12 text-4xl font-bold">
          Welcome to my Spotify Clone
        </h1>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {playlists.map((playlist) => (
            <Link
              href={`/playlists/${playlist.id}`}
              key={playlist.id}
              className="rounded-md bg-bg p-4"
            >
              <img
                src={playlist.images[0]?.url}
                alt=""
                className="aspect-square"
              />
              <p className="mt-4 truncate text-sm">{playlist.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
