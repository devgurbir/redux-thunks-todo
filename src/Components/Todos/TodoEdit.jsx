import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { patchTodo } from "../../Redux/Todos/actions";

const getSingleTodoTitle = (id, todoArr) => {
  for (let todo of todoArr) {
    if (todo.id === Number(id)) {
      return todo.title;
    }
  }
};

const TodoEdit = () => {
  const { id } = useParams();
  const todos = useSelector((state) => state.todo.todos);
  const ourTodoTitle = getSingleTodoTitle(id, todos);
  const [title, setTitle] = useState(ourTodoTitle);
  const dispatch = useDispatch();

  return (
    <div>
      <input defaultValue={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={() => dispatch(patchTodo(id, title))}>Change</button>
    </div>
  );
};

export default TodoEdit;
