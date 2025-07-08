export const Edit = ({ task, id, setTask }) => {
  return (
    <button
      className={`border border-green2 p-1 mr-1.5 bg-green1 hover:bg-green2 rounded-full flex items-center justify-center md:p-2 md:mr-2.5 `}
      data-index={id}
      onClick={() => {
        setTask(task);
        console.log(task);
      }}
    >
      ✏️
    </button>
  );
};
