import React from 'react';
import {useNavigate} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import './Login.css';

function Login({email,password,handleLogin,handleEmail,handlePassword}) {
  const navigate = useNavigate()
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmail}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
          <br />
          <br />
          <button type='submit'>Login</button>
        </form>
        <a><span onClick={()=>{navigate('/signup')}}>Signup</span></a>
      </div>
    </div>
  );
}

export default Login;
