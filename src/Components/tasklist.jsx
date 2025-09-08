import { TaskItem } from "./taskitems";

export const TaskList = ({ tasks, toggleDone, deleteTask }) => {
  return (
    <ul className="w-full flex-1 overflow-y-auto pr-2">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          toggleDone={toggleDone}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};
