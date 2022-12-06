import React from "react";
import Image from "next/image";

export default function MenuButton() {
  return (
    <Image
      src={"/icons/menu_white_18dp.svg"}
      alt="Menu icon"
      width={18}
      height={18}
      className="pointer"
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
  );
}
