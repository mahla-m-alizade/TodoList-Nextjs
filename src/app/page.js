"use client";
import { Navbar } from "@/components/Navbar";
import { ShowTasks } from "@/components/ShowTasks";
import { useState } from "react";
import { useTasks } from "@/app/ClientLayout";

export default function Home() {
  const [filterStatus, setFilterStatus] = useState("all");
  const [categoryFilterStatuse, setCategoryFilterStatuse] = useState("all");
  const [searchStatus, setSearchStatus] = useState("all");
  const [SortStatus, setSortStatus] = useState(false);
  const [task, setTask] = useState(null);
  const { taskList, setTaskList } = useTasks();
  return (
    <div>
      <Navbar
        taskList={taskList}
        setTaskList={setTaskList}
        setFilterStatus={setFilterStatus}
        setCategoryFilterStatuse={setCategoryFilterStatuse}
        setSearchStatus={setSearchStatus}
        isSort={SortStatus}
        setSort={setSortStatus}
      />
      <ShowTasks
        taskList={taskList}
        setTaskList={setTaskList}
        filterStatus={filterStatus}
        searchStatus={searchStatus}
        setTask={setTask}
        isSort={SortStatus}
        setSort={setSortStatus}
        categoryFilterStatuse={categoryFilterStatuse}
      />
    </div>
  );
}
