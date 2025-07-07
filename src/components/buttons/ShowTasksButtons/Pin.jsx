"use client";
import { useEffect } from "react";
export const Pin = ({
  task,
  id,
  taskList,
  setTaskList,
  filterStatus,
  isSort,
}) => {
  const handlePin = (pintask) => {
    const updated = [...taskList];

    if (pintask.pinned === false) {
      pintask.pinned = !pintask.pinned;
      updated.sort((a, b) => (b.pinned === a.pinned ? 0 : b.pinned ? -1 : 1));
      setTaskList(updated);
    } else {
      pintask.pinned = !pintask.pinned;
      const pinned = taskList.filter((t) => t.pinned);
      const unpinned = taskList.filter((t) => !t.pinned);

      console.log();
      setTaskList([
        ...[...unpinned].sort((a, b) => a.date.localeCompare(b.date)),
        ...pinned,
      ]);
    }
  };

  useEffect(() => {
    if (isSort) return;
    const pinned = taskList.filter((t) => t.pinned);
    const unpinned = taskList.filter((t) => !t.pinned);
    setTaskList([...unpinned, ...pinned]);
  }, [taskList.length, filterStatus]);

  return (
    <button
      className={`flex items-center justify-center border border-green2 p-1 mx-1.5 bg-green1 hover:bg-green2 rounded-full md:p-2  ${
        task.pinned
          ? "bg-red-100 text-bold hover:bg-red-300 border-red-500 "
          : "bg-green1"
      }`}
      data-index={id}
      onClick={() => handlePin(task)}
    >
      📌
    </button>
  );
};
