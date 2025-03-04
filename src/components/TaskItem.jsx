export default function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <li
      className="list-group-item my-1"
      style={{ textDecoration: task.completed ? "line-through" : "none" }}
    >
      <div className="row">
        <div className="col">
          <span className="text-left" onClick={() => toggleComplete(task.id)}>
            {task.text}
          </span>
        </div>
        <div className="col">
          <button
            className="btn btn-danger btn-sm float-end"
            onClick={() => deleteTask(task.id)}
          >
            delete
          </button>
        </div>
      </div>
    </li>
  );
}
