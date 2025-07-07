export const DeleteAll = ({ setTaskList }) => {
  const DeleteAll = () => {
    setTaskList([]);
  };
  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={DeleteAll}
        className={`px-1 py-1 h-10 w-20 text-xs md:px-2 md:py-2  md:text-sm  font-medium  flex items-center justify-center text-green-900  bg-red-300  md:w-20 border border-red-300  rounded-lg hover:bg-red-400  hover:border-red-600 hover:text-gray-800  `}
      >
        Delete All
      </button>
    </div>
  );
};
