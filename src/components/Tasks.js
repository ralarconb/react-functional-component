import { Link } from "react-router-dom";
import { getTasks } from "../data";

export default function Tasks() {
  const tasks = getTasks();

  return (
    <div>
      <p>Tasks</p>
      <div>
        {tasks.map((task) => (
          <p key={task.id}>
            Task {task.name} <Link to={`/tasks/${task.id}`}>detail</Link>
          </p>
        ))}
      </div>
      <Link to="/">Back home</Link>
    </div>
  );
}
