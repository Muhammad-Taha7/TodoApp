import { useState } from "react";
import { TaskForm } from "./taskform";
import { TaskList } from "./tasklist";

export const TodoApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [tasks, setTasks] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTask = { text: inputValue, done: false, priority };
    setTasks((prev) => [...prev, newTask]);
    setInputValue("");
    setPriority("Medium");
  };

  const deleteTask = (index) => setTasks((prev) => prev.filter((_, i) => i !== index));
  const toggleDone = (index) => setTasks((prev) => prev.map((task, i) => i === index ? { ...task, done: !task.done } : task));
  const clearAll = () => setTasks([]);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.done).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="layout min-h-screen w-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <div className="todo-app h-[40rem] w-[32rem] bg-white rounded-2xl shadow-2xl flex flex-col p-6">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-5">Professional Todo App</h2>

        <div className="flex justify-around mb-5 text-sm font-semibold">
          <span className="text-blue-600">Total: {totalTasks}</span>
          <span className="text-green-600">Completed: {completedTasks}</span>
          <span className="text-red-600">Pending: {pendingTasks}</span>
        </div>

        <TaskForm
          inputValue={inputValue}
          setInputValue={setInputValue}
          priority={priority}
          setPriority={setPriority}
          handleFormSubmit={handleFormSubmit}
        />

        <TaskList tasks={tasks} toggleDone={toggleDone} deleteTask={deleteTask} />

        <button onClick={clearAll} className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 rounded">
          Clear All
        </button>
      </div>
    </div>
  );
};
