import React from "react";
import Image from "next/image";
import { BiMenuAltLeft } from "react-icons/bi";
import { IconContext } from "react-icons";

export default function MenuButton() {
  return (
    <IconContext.Provider value={{ color: "black", className: "" }}>
      <div className="pointer">
        <BiMenuAltLeft />
      </div>
    </IconContext.Provider>
  );
}
