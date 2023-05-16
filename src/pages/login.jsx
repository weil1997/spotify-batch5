import React from "react";
import { accessUrl } from "@/config";

export default function login() {
  return (
    <div className="py-10 text-center">
      <h1 className="text-4xl font-bold">Welcome to my Spotify Clone</h1>
      <p className="mb-10 text-text-dimmed">Please sign in to use the app</p>
      <a
        href={accessUrl}
        className="rounded-md bg-primary py-1.5 px-5 text-xl font-semibold"
      >
        Sign in
      </a>
    </div>
  );
}
