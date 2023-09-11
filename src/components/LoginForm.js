import React, { useState } from 'react';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    //eventHandler
    const handleLogin = async (e) => {
      e.preventDefault();
      
      // Send a POST request to your Express.js server for validation
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        // Successful login, you can redirect the user or perform other actions
      } else {
        // Handle login error, display a message to the user
        console.error('Login failed');
      }
    };
  
    return (
      <div className="flex justify-center items-center h-screen  shadow-md">
        <form className="bg-sky-200 p-8 rounded shadow-md w-1/3">
          <h2 className="text-2xl mb-4">Login</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition ease-in-out delay-150"
              type="submit"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
  
  export default LoginForm;
  