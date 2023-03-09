import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchInput = ({
  value,
  setValue,
}: {
  value: string;
  setValue: (v: string) => void;
}) => {
  return (
    <div className="flex justify-between items-center bg-white rounded-lg px-3 lg:w-96 flex-1 mx-3 lg:mx-10">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={"w-full h-14 bg-transparent flex-1 outline-none"}
        placeholder={"Search what you need"}
      />
      <FiSearch className="text-2xl text-gray-600" />
    </div>
  );
};

export default SearchInput;
