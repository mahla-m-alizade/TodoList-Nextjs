"use client";
import { Header } from "@/components/Header";

import { useState, useEffect, createContext, useContext } from "react";
const taskContext = createContext();

export const ClientLayout = ({ children }) => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("taskList");
    storedTasks ? setTaskList(JSON.parse(storedTasks)) : [];
  }, []);

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="py-2 md:p-5 m-4 md:m-20 bg-white rounded-lg border border-green1 h-[100vh]">
      <Header taskList={taskList} setTaskList={setTaskList} />
      <taskContext.Provider value={{ taskList, setTaskList }}>
        {children}
      </taskContext.Provider>
    </div>
  );
};

export const useTasks = () => useContext(taskContext);
