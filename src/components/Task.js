import { useParams, Link } from "react-router-dom";
import { getTask } from "../data";

export default function Task() {
  const params = useParams();
  const task = getTask(parseInt(params.id));
  return (
    <>
      <p>Task {task.name}</p>
      <Link to="/tasks">Back tasks</Link>
    </>
  );
}
