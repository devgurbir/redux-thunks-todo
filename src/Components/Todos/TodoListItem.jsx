import { useDispatch } from "react-redux";
import { toggleTodos, deleteTodo } from "../../Redux/Todos/actions";
import { Link } from "react-router-dom";

function TodoListItem({ title, status, id }) {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <p>{title}</p>
      <span>{status ? "true" : "false"}</span>
      <button onClick={() => dispatch(toggleTodos(id, status))}>Toggle</button>
      <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
      <button>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={"/todos/".concat(id).concat("/edit")}
        >
          Edit Todo
        </Link>
      </button>
    </div>
  );
}

export default TodoListItem;
