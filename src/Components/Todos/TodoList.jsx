import TodoListItem from "./TodoListItem";

function TodoList({ todos }) {
  return (
    <div>
      {todos?.map((item) => (
        <TodoListItem
          title={item.title}
          status={item.status}
          key={item.id}
          id={item.id}
        />
      ))}
    </div>
  );
}

export default TodoList;
