import { useState } from "react";

export const TodoApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [tasks, setTasks] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTask = {
      text: inputValue,
      done: false,
      priority: priority,
    };

    setTasks((prev) => [...prev, newTask]);
    setInputValue("");
    setPriority("Medium");
  };

  const deleteTask = (index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const toggleDone = (index) => {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index ? { ...task, done: !task.done } : task
      )
    );
  };

  const clearAll = () => {
    setTasks([]); // 🔥 saare tasks clear ho jayenge
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.done).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="layout min-h-screen w-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <div className="todo-app h-[40rem] w-[32rem] bg-white rounded-2xl shadow-2xl flex flex-col p-6">
        
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-5">
          Professional Todo App
        </h2>

        <div className="flex justify-around mb-5 text-sm font-semibold">
          <span className="text-blue-600">Total: {totalTasks}</span>
          <span className="text-green-600">Completed: {completedTasks}</span>
          <span className="text-red-600">Pending: {pendingTasks}</span>
        </div>

        <form className="flex gap-3 mb-5" onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="border border-gray-400 rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="border border-gray-400 rounded px-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="High">🔥 High</option>
            <option value="Medium">⚡ Medium</option>
            <option value="Low">🌱 Low</option>
          </select>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </form>

        <ul className="w-full flex-1 overflow-y-auto pr-2">
          {tasks.map((task, index) => (
            <li
              key={index}
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
                    task.done
                      ? "bg-green-600 text-white"
                      : "bg-gray-300 text-black"
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
          ))}
        </ul>

        {/* ✅ Clear All Button */}
       
          <button
            onClick={clearAll}
            className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 rounded"
          >
            Clear All
          </button>
     
      </div>
    </div>
  );
};
