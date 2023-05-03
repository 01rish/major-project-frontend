import React from "react";

function SearchBar() {
  return (
    <>
      <div className="flex space-x-3">
        <input type="text" placeholder="Search" className="px-10 py-2 rounded-xl" />
        <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-12 p-3 text-white bg-[#692dff] rounded-xl"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        </button>
      </div>
    </>
  );
}

export default SearchBar;
