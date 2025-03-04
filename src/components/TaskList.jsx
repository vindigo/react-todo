import TaskItem from "./TaskItem";

export default function TaskList({ tasks, toggleComplete, deleteTask }) {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}
