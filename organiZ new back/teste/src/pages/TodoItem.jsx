
import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {/* Checkbox para marcar tarefa como concluída */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      {/* Texto da tarefa */}
      <p>{todo.text}</p>
      {/* Botão para excluir tarefa */}
      <button onClick={() => deleteTodo(todo.id)} className = "but-delet">Concluir</button>
    </div>
  );
};

export default TodoItem;
