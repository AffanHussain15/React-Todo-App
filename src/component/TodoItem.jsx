function TodoItem({ task, deleteTodo }) {
    return (
      <div>
        <span>{task}</span>
        <button onClick={deleteTodo}>Delete</button>
      </div>
    );
  }

  export default TodoItem