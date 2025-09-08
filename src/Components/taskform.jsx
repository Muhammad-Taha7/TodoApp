export const TaskForm = ({ inputValue, setInputValue, priority, setPriority, handleFormSubmit }) => {
  return (
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
  );
};
