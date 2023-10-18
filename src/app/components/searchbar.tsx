import React from "react";

export default function SearchComponent() {
    return (
        <div className="flex items-center">
            <div className="flex border border-black rounded">
                <input
                    type="text"
                    className="block w-full px-4 py-2 font-mono text-black-400 bg-white border rounded-md focus:border-black-400 focus:ring-slate-black focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="countryname..."
                />
                <button className="px-4 text-white bg-black border-l rounded font-mono">
                    Search
                </button>
            </div>
        </div>
    );
}