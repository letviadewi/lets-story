import React from "react";

export default function Header() {
  return (
    <div className="shadow top-0 fixed left-72 bg-white w-full p-6">
        <div className=" flex gap-8">
        <p className="text-2xl">
        Let us know your story.
        </p>
        <div>
            <input className="h-10 w-[500px] rounded-lg bg-white p-2 border-gray-200 text-xl border-[1px]" placeholder="Browse" />
        </div>
        </div>
    </div>
  );
}
