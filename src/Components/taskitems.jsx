export const TaskItem = ({ task, index, toggleDone, deleteTask }) => {
  return (
    <li
      className={`flex justify-between items-center border-b py-2 px-2 rounded ${
        task.done ? "bg-green-50" : "bg-gray-50"
      }`}
    >
      <div>
        <span
          className={`cursor-pointer block font-medium ${
            task.done ? "line-through text-gray-500" : "text-gray-800"
          }`}
          onClick={() => toggleDone(index)}
        >
          {task.text}
        </span>
        <span
          className={`text-xs ${
            task.priority === "High"
              ? "text-red-600"
              : task.priority === "Medium"
              ? "text-yellow-600"
              : "text-green-600"
          }`}
        >
          {task.priority} Priority
        </span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => toggleDone(index)}
          className={`px-3 py-1 text-xs rounded ${
            task.done ? "bg-green-600 text-white" : "bg-gray-300 text-black"
          }`}
        >
          {task.done ? "Done" : "Mark"}
        </button>
        <button
          onClick={() => deleteTask(index)}
          className="px-3 py-1 text-xs rounded bg-red-500 text-white"
        >
          DEL
        </button>
      </div>
    </li>
  );
};
