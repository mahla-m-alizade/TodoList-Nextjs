"use client";
import { useState } from "react";
import { SearchBox } from "./buttons/NavbarButtons/SearchBox";
import { DeleteAll } from "./buttons/NavbarButtons/DeleteAll";
import { Sort } from "./buttons/NavbarButtons/Sort";
import { Filter } from "./buttons/NavbarButtons/Filter";
import { Category } from "./buttons/NavbarButtons/Category";
export const Navbar = ({
  taskList,
  setTaskList,
  setFilterStatus,
  setCategoryFilterStatuse,
  setSearchStatus,
  isSort,
  setSort,
}) => {
  const [isHidden, setHidden] = useState(true);

  return (
    <div className="flex justify-center items-center px-6">
      <div
        className={`w-full font-medium text-green2 bg-yellow-50/40 border border-green1 ${
          taskList.length === 0 ? "rounded-lg" : "rounded-t-lg"
        } p-2 flex items-center justify-between `}
      >
        <p
          className={`${
            !isHidden ? "hidden " : "md:flex w-[100%] md:w-[25%]"
          }  text-sm md:text-l px-2 font-bold text-green2  md:text-xl `}
        >
          {taskList.length > 0 ? "you're task list" : "Enter you're task list"}
        </p>

        <div className={`flex justify-end items-center w-full`}>
          {/* Mobile Menu Button */}
          <div className="flex  ">
            <button
              onClick={() => setHidden(!isHidden)}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center m-1 p-1  w-8 h-8 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green2"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className={`${
              isHidden ? "hidden" : ""
            } flex w-full gap-2 flex-col my-auto justify-end flex-wrap md:flex md:flex-row max-w-[90%] lg:flex-nowrap items-center sm:flex-row sm:order-2 `}
          >
            <SearchBox
              taskList={taskList}
              setTaskList={setTaskList}
              setSearchStatus={setSearchStatus}
            />
            <div className="mx-auto xl:m-2 flex sm:gap-2 flex-col sm:flex-row items-center">
              <div className=" flex my-2 gap-2 items-center  ">
                <DeleteAll taskList={taskList} setTaskList={setTaskList} />
                <Sort
                  taskList={taskList}
                  setTaskList={setTaskList}
                  isSort={isSort}
                  setSort={setSort}
                />
              </div>
              <div className="flex items-center gap-2 ">
                <Filter
                  taskList={taskList}
                  setTaskList={setTaskList}
                  setFilterStatus={setFilterStatus}
                />
                <Category setCategoryFilterStatuse={setCategoryFilterStatuse} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
