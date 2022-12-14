import React from "react";
import Image from "next/image";
import DateWidget from "./DateWidget";
import MenuButton from "./MenuButton";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Categories from "./Categories";
import Button from "../common/Button";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-section">
        <div className="row">
          <MenuButton />
          <DateWidget />
        </div>
        <Logo />
        <div className="row">
        <SearchBar />
        </div>
      </div>
      <Categories />
    </nav>
  );
}
