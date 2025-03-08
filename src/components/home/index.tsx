import React from "react";
import Image from "next/image";
import { dummy } from "./data";

function HomeSection() {
  return (
    <section>
      <div>
        <p className="text-3xl font-bold text-gray-800">You may like</p>
      </div>
      <div className="flex flex-col gap-8 mt-8">
        {dummy.map((item: any, index: number) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-xl shadow flex items-center gap-4"
          >
            <div className="flex gap-4 w-2/3">
              <div>
                <Image
                  width={100}
                  height={100}
                  alt="cover"
                  className="w-[120px] h-[168px]"
                  src={item.image}
                />
              </div>
              <div>
                <p className="text-2xl">{item.title}</p>
                <p className="text-xl font-extralight">{item.summary}</p>
              </div>
            </div>
            <div className="w-1/3 flex flex-col gap-2">
              <button className="bg-black text-white p-4 text-lg rounded-2xl">Add to liblary</button>
              <button className="bg-black text-white p-4 text-lg rounded-2xl">Read more</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeSection;
