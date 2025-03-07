import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} task={todo.task} deleteTodo={() => deleteTodo(todo.id)} />
      ))}
    </div>
  );
}
export default  TodoList