import React from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';

const Signup = ({username,email,password,phone,handleUsername,handleEmail,handlePassword,handlePhone,handleSubmit}) => {
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" alt="" src={Logo}></img>

        <form onSubmit={handleSubmit}>
          <div>
          <label htmlFor="name">Username</label><br />
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            value = {username}
            onChange={handleUsername}     
          /><br />

          <label htmlFor="email">Email</label><br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmail}         
          /><br />

          <label htmlFor="phone">Phone</label><br />
          <input
            className="input"
            type="number"
            id="phone"
            name="phone"
            value={phone}
            onChange={handlePhone} 
          /><br />

          <label htmlFor="password">Password</label><br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePassword}  
          /><br /><br />
          </div>
          <button type='submit'>Submit</button>
        </form>

        <a href="/">Login</a>
      </div>
    </div>
  );
}

export default Signup;