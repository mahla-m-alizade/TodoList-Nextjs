"use client";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { useState, useEffect, createContext, useContext } from "react";
const taskContext = createContext();

export const ClientLayout = ({ children }) => {
  const [taskList, setTaskList] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [categoryFilterStatuse, setCategoryFilterStatuse] = useState("all");
  const [searchStatus, setSearchStatus] = useState("all");
  const [SortStatus, setSortStatus] = useState(false);
  const [task, setTask] = useState(null);

  useEffect(() => {
    const storedTasks = localStorage.getItem("taskList");
    storedTasks ? setTaskList(JSON.parse(storedTasks)) : [];
  }, []);

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="py-2 md:p-5 m-4 md:m-20 bg-white rounded-lg border border-green1 min-h-[100vh]">
      <Header
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
      <Navbar
        taskList={taskList}
        setTaskList={setTaskList}
        setFilterStatus={setFilterStatus}
        setCategoryFilterStatuse={setCategoryFilterStatuse}
        setSearchStatus={setSearchStatus}
        isSort={SortStatus}
        setSort={setSortStatus}
      />
      <taskContext.Provider
        value={{
          taskList,
          setTaskList,
          filterStatus,
          searchStatus,
          setTask,
          SortStatus,
          setSortStatus,
          categoryFilterStatuse,
        }}
      >
        {children}
      </taskContext.Provider>
    </div>
  );
};

export const useTasks = () => useContext(taskContext);
