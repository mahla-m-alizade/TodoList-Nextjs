"use client";
import { useState } from "react";
export const Category = ({ setCategoryFilterStatuse }) => {
  const [isFilter, setFilter] = useState(false);
  const [hidden, sethidden] = useState(true);

  return (
    <div className={`relative inline-block  `}>
      <button
        id="dropdownButton"
        onMouseEnter={() => sethidden(false)}
        onMouseLeave={() => sethidden(true)}
        onClick={() => {
          setFilter(false);
          setCategoryFilterStatuse("all");
        }}
        className={`px-1 py-1 h-10 w-20 text-xs md:px-2 md:py-2  md:text-sm flex items-center justify-center font-medium text-green-900 bg-blueGreen3 border border-blueGreen3 rounded-lg hover:bg-gray hover:text-gray-800  ${
          isFilter ? "ring-4 outline-none ring-green2" : ""
        } `}
        type="button"
      >
        Categories
      </button>
      <div
        onMouseEnter={() => sethidden(false)}
        onMouseLeave={() => sethidden(true)}
        className={` ${
          hidden ? "hidden" : ""
        } absolute z-50 bg-white divide-y divide-gray-50 rounded-lg shadow-md shadow-green2`}
      >
        <ul className=" text-sm text-gray-700 ">
          <li>
            <button
              onClick={() => {
                setFilter(true);
                setCategoryFilterStatuse("Personal");
              }}
              className={` whitespace-nowrap px-4 py-4 w-full hover:bg-green1 hover:rounded-t-lg`}
            >
              Personal
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setFilter(true);
                setCategoryFilterStatuse("Work");
              }}
              className="block whitespace-nowrap px-4 py-4  w-full hover:bg-green1 hover:rounded-b-lg"
            >
              Work
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setFilter(true);
                setCategoryFilterStatuse("Chores");
              }}
              className="block whitespace-nowrap px-4 py-4  w-full hover:bg-green1 hover:rounded-b-lg"
            >
              Chores
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setFilter(true);
                setCategoryFilterStatuse("Health & wellness");
              }}
              className="block whitespace-nowrap px-4 py-4  w-full hover:bg-green1 hover:rounded-b-lg"
            >
              Health & wellness
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setFilter(true);
                setCategoryFilterStatuse("Shopping");
              }}
              className="block whitespace-nowrap px-4 py-4  w-full hover:bg-green1 hover:rounded-b-lg"
            >
              Shopping
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
