import { useState } from 'react';

function AddTodo({ addTodo }) {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border p-2 rounded w-full"
        placeholder="Enter task"
      />
      <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
    </div>
  );
}


export default  AddTodo