import React from "react";
import Image from "next/image";
import DateWidget from "./DateWidget";
import MenuButton from "./MenuButton";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Categories from "./Categories";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-section small-column">
        <div className="small-row">
          <div className="column small-row">
            <MenuButton />
            <DateWidget />
          </div>
          <Logo />
        </div>
        <SearchBar />
      </div>
      <Categories />
    </nav>
  );
}
