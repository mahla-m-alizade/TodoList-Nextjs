"use client";

import { ShowTasks } from "@/components/ShowTasks";

import { useTasks } from "@/app/ClientLayout";

export default function Home() {
  const {
    taskList,
    setTaskList,
    filterStatus,
    searchStatus,
    setTask,
    SortStatus,
    setSortStatus,
    categoryFilterStatuse,
  } = useTasks();
  return (
    <div>
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
