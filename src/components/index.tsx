import React, { useState } from 'react';
import { UserLogin } from '../interfaces/User/Auth';
import { login } from '../service/authService';

export function Home() {
  const [loginModel, setLoginModel] = useState<UserLogin>({
    email: '',
    password: '',
  });

  const handleLogin = async () => {
    const res = await login(loginModel);
    console.log(res);
  };

  return (
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

      <button type='button' onClick={handleLogin}>
        Get Todos
      </button>
    </div>
  );
}
