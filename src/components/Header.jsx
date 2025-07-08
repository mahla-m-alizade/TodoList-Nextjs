"use client";
import { useState } from "react";
export const Header = ({ taskList, setTaskList, task, setTask }) => {
  const [newTaskValue, setNewTaskValue] = useState("");
  const [hidden, sethidden] = useState(true);
  const [category, setCategory] = useState("none");
  const Handlesub = (event) => {
    event.preventDefault();
    if (task) {
      const newtaskList = taskList.map((el) =>
        el.date === task.date
          ? {
              task: task.task,
              checked: task.checked,
              date: new Date().toISOString(),
              pinned: task.pinned,
              category: category !== "none" ? category : task.category,
            }
          : el
      );
      setTaskList(newtaskList);
      setTask(null);
      setCategory("none");
      setNewTaskValue("");
    } else {
      const newTask = {
        task: event.target.addTask.value,
        checked: false,
        date: new Date().toISOString(),
        pinned: false,
        category: category ? category : "none",
      };
      setTaskList([...taskList, newTask]);
      setNewTaskValue("");
      setCategory("none");
    }
  };

  return (
    <header className="flex flex-col justify-center m-auto ">
      <p className="text-3xl font-bold flex justify-center text-green-900 ">
        To Do List
      </p>

      <form className="p-6" onSubmit={Handlesub}>
        <div className="relative ">
          <input
            type="text"
            name="addTask"
            value={task?.task ?? newTaskValue}
            onChange={(e) => {
              task
                ? setTask((prev) => ({ ...prev, task: e.target.value }))
                : setNewTaskValue(e.target.value);
            }}
            className="block w-full p-4 text-sm text-gray-900 border border-green1 rounded-lg  bg-yellow1 focus:ring-2 focus:ring-green2 
            focus:outline-none focus:border-green2 "
            placeholder="add your task"
            required
          />
          <div className="block absolute end-1 top-1">
            <div className="flex flex-row justify-end m-0.5">
              <button
                id="dropdownButton"
                onMouseEnter={() => sethidden(false)}
                onMouseLeave={() => sethidden(true)}
                className={`px-1 py-1 mr-1 w-16 h-10 md:w-20 text-xs md:px-2 md:py-2 md:mr-2 flex items-center justify-center  md:text-sm text-green-900 bg-blueGreen3 border border-blueGreen3 rounded-lg hover:bg-gray hover:text-gray-800  `}
                type="button"
              >
                Category
              </button>
              <button
                type="submit"
                className="text-gray-700 ml-1 w-16 md:w-20 flex items-center justify-center bg-green1 hover:bg-green2 focus:ring-2 focus:outline-none focus:ring-green2 rounded-lg text-xs md:text-sm px-4 py-2 "
              >
                {task ? "Edit" : "Add+"}
              </button>
            </div>
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
                    type="button"
                    onClick={() => {
                      setCategory("Personal");
                    }}
                    className={` whitespace-nowrap px-4 py-4 w-full hover:bg-green1 hover:rounded-t-lg focus:bg-green2`}
                  >
                    Personal
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setCategory("Work");
                    }}
                    className="block whitespace-nowrap px-4 py-4  w-full hover:bg-green1 hover:rounded-b-lg focus:bg-green2"
                  >
                    Work
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setCategory("Chores");
                    }}
                    className="block whitespace-nowrap px-4 py-4  w-full hover:bg-green1 hover:rounded-b-lg focus:bg-green2"
                  >
                    Chores
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setCategory("Health & wellness");
                    }}
                    className="block whitespace-nowrap px-4 py-4  w-full hover:bg-green1 hover:rounded-b-lg focus:bg-green2"
                  >
                    Health & wellness
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setCategory("Shopping");
                    }}
                    className="block whitespace-nowrap px-4 py-4  w-full hover:bg-green1 hover:rounded-b-lg focus:bg-green2"
                  >
                    Shopping
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </form>
    </header>
  );
};
