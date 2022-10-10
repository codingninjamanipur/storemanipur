import React from 'react'
import '../Styles/Login.css';
function Login() {
  return (
    <div className='login'>
            <h1>Connect with Us</h1>
            <form id='login_form' method='POST'>
            <label htmlFor='email'>Email</label>
            <input name='email' placeholder='Enter your Email' type='email'/>
            <label htmlFor='email'>Password</label>
            <input name='email' placeholder='Enter your Password' type='email'/>
            <button>Login</button>
            </form>
    </div>
  )
}

export default Login