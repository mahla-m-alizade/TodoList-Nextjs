"use client";
import { useState, useEffect } from "react";

export const Sort = ({ taskList, setTaskList, isSort, setSort }) => {
  const [hidden, sethidden] = useState(true);
  const [AtoZ, setAtoZ] = useState(true);

  useEffect(() => {
    const pinned = taskList.filter((t) => t.pinned);
    const unpinned = taskList.filter((t) => !t.pinned);

    const sortedUnpinned = [...unpinned].sort((a, b) =>
      AtoZ ? b.task.localeCompare(a.task) : a.task.localeCompare(b.task)
    );
    isSort && setTaskList([...sortedUnpinned, ...pinned]);
  }, [taskList.length]);

  return (
    <div className={`relative inline-block`}>
      <button
        id="dropdownButton"
        onMouseEnter={() => sethidden(false)}
        onMouseLeave={() => sethidden(true)}
        onClick={() => {
          const pinned = taskList.filter((t) => t.pinned);
          const unpinned = taskList.filter((t) => !t.pinned);
          setTaskList([
            ...[...unpinned].sort((a, b) => a.date.localeCompare(b.date)),
            ...pinned,
          ]);
          setSort(false);
        }}
        className={` px-1 py-1 h-10 w-20 text-xs md:px-2 md:py-2 md:text-sm flex items-center justify-center font-medium text-green-900 bg-blueGreen3 border border-blueGreen3  rounded-lg hover:bg-gray hover:text-gray-800  ${
          isSort ? "ring-4 outline-none ring-green2" : ""
        } `}
        type="button"
      >
        Sort
      </button>

      <div
        onMouseEnter={() => sethidden(false)}
        onMouseLeave={() => sethidden(true)}
        className={` ${
          hidden ? "hidden" : ""
        } absolute z-50 bg-white divide-y divide-gray-100 rounded-lg shadow-md shadow-green2`}
      >
        <ul className=" text-sm text-gray-700 ">
          <li>
            <button
              onClick={() => {
                const pinned = taskList.filter((t) => t.pinned);
                const unpinned = taskList.filter((t) => !t.pinned);

                setTaskList([
                  ...[...unpinned].sort((a, b) => b.task.localeCompare(a.task)),
                  ...pinned,
                ]);
                setSort(true);
                setAtoZ(true);
              }}
              className="block whitespace-nowrap px-4 py-4  w-full hover:bg-green1 hover:rounded-t-lg"
            >
              A to Z
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                const pinned = taskList.filter((t) => t.pinned);
                const unpinned = taskList.filter((t) => !t.pinned);

                setTaskList([
                  ...[...unpinned].sort((a, b) => a.task.localeCompare(b.task)),
                  ...pinned,
                ]);
                setSort(true);
                setAtoZ(false);
              }}
              className="block whitespace-nowrap px-4 py-4  w-full hover:bg-green1 hover:rounded-b-lg"
            >
              Z to A
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
