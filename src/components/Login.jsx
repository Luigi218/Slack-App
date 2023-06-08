import { useState } from 'react';
import './Login.css';

export default function Login({ onSignUpClick, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, password });

    const response = await fetch('http://206.189.91.54/api/v1/auth/sign_in', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const body = await response.json();
    console.log(body);

    if (response.ok) {
      // Call the onLogin callback function passed from the App component
      onLogin(body.data);
    }
    console.log(response.headers.get('access-token'))
    //testing getting of headers
  };

  return (
    <div className="login-body">
      <div className="home-image-container">
        <img className="home-image" src="./src/assets/home-bg.png" alt="Home Background" />
      </div>
      <div className="form-container">
        <div>
          <h1 className="form-title">Login</h1>
        </div>
        <form className="form-contents" onSubmit={onSubmit}>
          <input
            type="email"
            value={email}
            placeholder="Enter your email..."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            type="password"
            value={password}
            placeholder="Enter your password..."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <button type="submit" style={{ cursor: 'pointer' }}>Login</button>
        </form>
        <p>
          Don't have an account?{' '}
          <span onClick={onSignUpClick} style={{ cursor: 'pointer' }}>
            Sign up here!
          </span>
        </p>
      </div>
    </div>
  );
}
