import { useState } from "react";
import { BsPerson, BsTelephone } from "react-icons/bs";
import { FiBell, FiHeart, FiShoppingCart } from "react-icons/fi";
import { HiOutlineTruck } from "react-icons/hi";
import { Link } from "react-router-dom";
import SearchInput from "./controls/SearchInput";

const Header = ({ search, setSearch }) => {
  return (
    <div>
      <div className="bg-white flex justify-between content-center px-3 md:px-20 py-6">
        <h2 className="text-orange-500 text-4xl font-semibold">Dealerz.</h2>
        <div className="flex gap-x-4">
          <span className="flex items-center text-gray-700 space-x-1">
            <BsTelephone className="text-lg" />{" "}
            <span className="font-medium">Call Center</span>
          </span>
          <span className="flex items-center text-gray-700 space-x-1">
            <HiOutlineTruck className="text-2xl" />
            <span className="font-medium">Shipping & Returns</span>
          </span>
        </div>
      </div>
      <div className="hidden md:flex justify-between items-center px-20 py-6 bg-gray-200">
        <div className=" space-x-10">
          <Link to={"#"} className={"text-lg"}>
            Shop
          </Link>
          <Link to={"#"} className={"text-lg"}>
            Promo
          </Link>
          <Link to={"#"} className={"text-lg"}>
            About
          </Link>
          <Link to={"#"} className={"text-lg"}>
            Blog
          </Link>
        </div>
        <SearchInput value={search} setValue={setSearch} />
        <div className="flex items-center text-2xl font-medium text-gray-800 space-x-10">
          <FiHeart />
          <span className="relative">
            <span className="absolute flex justify-center items-center bg-orange-400 w-5 h-5 rounded-full text-sm -top-2 -right-3">
              3
            </span>
            <FiShoppingCart />
          </span>
          <BsPerson />
          <FiBell />
        </div>
      </div>
    </div>
  );
};

export default Header;
