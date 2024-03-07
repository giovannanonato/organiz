
import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
    // Estado para armazenar a lista de tarefas
    const [todos, setTodos] = useState([]);
    // Estado para armazenar o texto da nova tarefa
    const [newTodoText, setNewTodoText] = useState('');

    // Efeito para carregar a lista de tarefas do localStorage no carregamento
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(storedTodos);
    }, []);

    // Função para salvar a lista de tarefas no localStorage
    const saveTodosToLocalStorage = (todos) => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    // Função para adicionar uma nova tarefa à lista
    const addTodo = () => {
        if (newTodoText.trim() !== '') {
            const newTodo = {
                id: Date.now(),
                text: newTodoText,
                completed: false,
            };
            setTodos((prevTodos) => {
                const updatedTodos = [...prevTodos, newTodo];
                saveTodosToLocalStorage(updatedTodos); // Salva no localStorage
                return updatedTodos;
            });
            setNewTodoText('');
        }
    };

    // Função para alternar o status de conclusão de uma tarefa
    const toggleTodo = (id) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
        saveTodosToLocalStorage(updatedTodos); // Salva no localStorage
    };

    // Função para excluir uma tarefa da lista
    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
        saveTodosToLocalStorage(updatedTodos); // Salva no localStorage
    };

    return (
        <div className="todo-list">
            <h1 className="h1-cl">Check List</h1>
            {/* Adicionar uma nova tarefa */}
            <div className="add-todo">
                <input
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)}
                />
                <button onClick={addTodo} className="button-add">Adicionar</button>
            </div>
            {/* Lista de tarefas */}
            <div className="todos">
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
