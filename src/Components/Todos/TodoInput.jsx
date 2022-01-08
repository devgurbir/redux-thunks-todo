import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../../Redux/Todos/actions";

function TodoInput() {
  const [state, setState] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        value={state}
        onChange={(e) => setState(e.target.value)}
        type="text"
        placeholder="Add Todo"
      />
      <button onClick={() => dispatch(addTodos(state, false))}>Add</button>
    </div>
  );
}

export default TodoInput;
