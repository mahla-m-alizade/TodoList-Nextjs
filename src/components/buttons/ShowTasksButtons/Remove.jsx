export const Remove = ({ id, taskList, setTaskList }) => {
  const handleDelete = (e) => {
    const id = e.currentTarget.getAttribute("data-index");
    setTaskList([...taskList].filter((el) => el !== taskList[id]));
  };

  return (
    <button
      className="flex items-center justify-center border border-green2 p-1 mx-1.5 ms-3 bg-green1 text-green-800 hover:bg-green2 rounded-full md:p-2 "
      data-index={id}
      onClick={handleDelete}
    >
      🗑️
    </button>
  );
};
