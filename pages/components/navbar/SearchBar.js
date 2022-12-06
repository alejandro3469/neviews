import React from 'react';
import Image from "next/image";

export default function SearchBar() {
  return (
    <div className="searchbar-container">
          <Image
            src={"/icons/search_white_18dp.svg"}
            alt="Search icon"
            width={18}
            height={18}
            className="searchbar-icon"
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <input
            type={"text"}
            placeholder="Search titles, topics or anything"
          />
        </div>
  )
}
