import { redirectURL } from "@/config";
import "@/styles/globals.css";
import SpotifyWebApi from "spotify-web-api-node";
import { getAccessTokenFromUrl } from "../../utils/getAccessTokenFromUrl";
import { useRouter } from "next/router";

export const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    redirectUri: redirectURL,
});

export default function App({ Component, pageProps }) {
    const router = useRouter();
    if (typeof window !== "undefined" && router.asPath !== "login") {
        const accessToken =
            getAccessTokenFromUrl() || sessionStorage.getItem("spotify key");
        console.log(accessToken);

        if (accessToken) {
            sessionStorage.setItem("spotify-key", accessToken);
            spotifyApi.setAccessToken(accessToken);
        } else {
            router.replace("/login");
        }
    }

    return <Component {...pageProps} />;
}
