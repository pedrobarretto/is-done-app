import React, { useState } from 'react';
import { UserLogin } from '../interfaces/User/Auth';
import { login } from '../service/authService';
import { createTodo, getTodos } from '../service/todosService';

export function Home() {
  const [loginModel, setLoginModel] = useState<UserLogin>({
    email: '',
    password: '',
  });

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState([]);

  const handleLogin = async () => {
    const res = await login(loginModel);
    console.log(res);
    localStorage.setItem('AuthToken', res.token);
  };

  const handleListTodos = async () => {
    const res = await getTodos();
    setTodos(res);
    console.log(res);
  };

  const handleCreateTodo = async () => {
    const res = await createTodo(todo);
    console.log(res);
  };

  return (
    <div>
      <div>
        <input
          type='text'
          value={loginModel.email}
          onChange={(event) =>
            setLoginModel({ ...loginModel, email: event.target.value })
          }
        />
        <input
          type='password'
          value={loginModel.password}
          onChange={(event) =>
            setLoginModel({ ...loginModel, password: event.target.value })
          }
        />
        <button type='button' onClick={handleLogin}>
          Login
        </button>

        <button type='button' onClick={handleListTodos}>
          Get Todos
        </button>
      </div>
      <div>
        <input
          type='text'
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        />
        <button type='button' onClick={handleCreateTodo}>
          Create Todo
        </button>
      </div>
      <div>
        {todos.map((x: any) => {
          return <span key={x.id}>{x.text}</span>;
        })}
      </div>
    </div>
  );
}
