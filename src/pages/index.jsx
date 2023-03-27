import React from "react";

export default function index() {
    return (
        <div className=" flex h-screen flex-col">
            <div className="flex flex-1 bg-pink-500  ">
                <aside className="w-full max-w-xs bg-orange-400">Sidebar</aside>
                <main className="h-full flex-1 bg-blue-500">main</main>
            </div>
            <footer className="h-20 bg-green-500">player</footer>
        </div>
    );
}
