import React from 'react'

export default function Navbar() {
    return (
        <div className="flex justify-between w-full h-10">
            <div className="ml-3 my-3">
                <h1 className="font-bold text-3xl text-white">Habitus</h1>
            </div>
            <div className="mr-3 my-3">
                <button className="bg-purple font-medium rounded-md text-white py-2 px-4 text-lg">My Habits</button>
            </div>
        </div>
    );
}
