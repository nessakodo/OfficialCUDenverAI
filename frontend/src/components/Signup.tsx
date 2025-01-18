import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './Signup.css'; 

function AuthPage() {
  ///////////////////////////
  // States
  ///////////////////////////

  const navigate = useNavigate(); 

  /**
  * @typedef {Object} signupData
  * @description Signup data set redux state
  */
  const [signupData, setSignupData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
  });

  /**
  * @typedef {Object} loginData
  * @description Login data set redux state
  */
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  ///////////////////////////
  // Functions
  ///////////////////////////

  /**
  * Handles the current signup form changes
  * 
  */

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  /**
  * Handles the current login form changes
  * 
  */

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  /**
  * POST signup information to the backend API
  * 
  */

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Signup Data:', signupData);
    
    fetch('http://localhost:8080/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Signup successful:', data);
        navigate('/home'); // Redirect to home page on successful signup
      })
      .catch((error) => {
        console.log('Signup failed:', error);
      });
  };

  /**
  * POST login information to the backend API
  * 
  */

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', loginData);

    fetch('http://localhost:8080/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Login successful:', data);
        navigate('/home'); // Redirect to home page on successful login
      })
      .catch((error) => {
        console.log('Login failed:', error);
      });
  };

    ///////////////////////////
    // TSX Rendering
    ///////////////////////////

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        height: '100vh',
        alignItems: 'center',
      }}
    >
      {/* Signup Form */}
      <section>
      <div className= "SignUp" style={{ width: '35%', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignupSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label>First Name</label>
            <input
              type="text"
              name="fname"
              value={signupData.fname}
              onChange={handleSignupChange}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Last Name</label>
            <input
              type="text"
              name="lname"
              value={signupData.lname}
              onChange={handleSignupChange}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={signupData.email}
              onChange={handleSignupChange}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={signupData.password}
              onChange={handleSignupChange}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Sign Up
          </button>
        </form>
      </div>
      </section>
      
      {/* Login Form */}
      <section>
      <div className="Login" style={{ width:  '35%', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Log In</h2>
        <form onSubmit={handleLoginSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleLoginChange}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#007BFF',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Log In
          </button>
        </form>
      </div>
      </section>
    </div>
  );
}

export default AuthPage;
