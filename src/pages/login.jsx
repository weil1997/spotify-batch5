import React from "react";
import { accessUrl } from "../config";

export default function login() {
    return (
        <div className="py-10 text-center">
            login
            <h1 className="text-4xl font-bold mb-1">
                Welcome to my Spotify Clone
            </h1>
            <p className="text-text-dimmed mb-10">
                Please sign in to use the app
            </p>
            <a
                href={accessUrl}
                className="py-1.5 px-5 bg-primary rounded-md text-lg font-semibold"
            >
                Sign in
            </a>
        </div>
    );
}
