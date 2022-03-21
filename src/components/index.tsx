import React, { useState } from 'react';
import { UserLogin } from '../interfaces/User/Auth';
import { authService } from '../service/authService';
import { todosService } from '../service/todosService';

export function Home() {
  const [loginModel, setLoginModel] = useState<UserLogin>({
    email: '',
    password: '',
  });

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState([]);

  const handleLogin = async () => {
    const res = await authService.login(loginModel);
    console.log(res);
    localStorage.setItem('AuthToken', res.token);
  };

  const handleListTodos = async () => {
    const res = await todosService.getTodos();
    setTodos(res);
    console.log(res);
  };

  const handleCreateTodo = async () => {
    const res = await todosService.createTodo(todo);
    console.log(res);
  };

  const handleMarkAsDone = async (id: string) => {
    const res = await todosService.markAsDone(id);
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
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {todos.map((x: any) => {
          return (
            <div>
              <span key={x.id}>{x.text}</span>
              <button
                type='button'
                key={x.createdDate}
                onClick={() => handleMarkAsDone(x.id)}
              >
                Check
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
