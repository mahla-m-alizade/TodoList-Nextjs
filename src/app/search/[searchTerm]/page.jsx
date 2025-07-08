"use client";

import { use, useEffect, useState } from "react";

export default function page({ params }) {
  const { searchTerm } = use(params);

  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    setTaskList(JSON.parse(localStorage.getItem("taskList")));
    console.log(searchTerm);
  }, [searchTerm]);

  const searchTask = [...taskList].filter((task) =>
    task.task.includes(searchTerm)
  );

  const toggleCheck = (index) => {
    const updated = [...taskList];
    updated[index].checked = !updated[index].checked;
    setTaskList(updated);
  };
  const bgColorMap = {
    Personal: "bg-indigo-200",
    Work: "bg-blue-200",
    Chores: "bg-green-200",
    "Health & wellness": "bg-rose-200",
    Shopping: "bg-orange-200",
    none: "bg-yellow2",
  };
  const taskStyle = (task, id) => {
    return (
      <li
        className={`w-[96%] my-2 mx-auto py-2 flex flex-col justify-center border rounded-lg 
    ${bgColorMap[task.category]}
            ${task.pinned ? "border-4 border-green2 " : "border-green1"} 
  
           `}
        key={id}
      >
        <p className="flex justify-center "> Category : {task.category}</p>
        <div className="flex items-center justify-center py-2 ps-3">
          <input
            type="checkbox"
            value=""
            checked={task.checked}
            onChange={() => toggleCheck(id)}
            className="w-6 h-6 checked:bg-green2 accent-green2 text-green2 bg-yellow1 border border-green1 rounded-sm focus:ring-green2 focus:ring-1 "
          />
          <label className="w-full  ms-2 text-md font-medium text-gray-900 break-all">
            {task.task}
          </label>
        </div>
      </li>
    );
  };
  return (
    <div className="flex justify-center  px-6">
      <ul className="w-full  flex flex-col text-sm font-medium text-green2 bg-yellow-50/40 border border-green1 rounded-b-lg p-3  justify-center">
        {[...searchTask]
          .reverse()
          .map((task, index) =>
            taskStyle(task, [...searchTask].length - index - 1)
          )}
      </ul>
    </div>
  );
}
