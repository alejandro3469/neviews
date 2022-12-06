import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="logo">
      {/*<Image
            src={"/logo/text-1670289747279.png"}
            alt="Menu icon"
            width={323}
            height={78}
            className="pointer"
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />*/}
      <span className="logo-color-letters">Ne</span>vie
      <span className="logo-color-letters">ws</span>
    </div>
  );
}
