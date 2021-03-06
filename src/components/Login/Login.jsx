import React from 'react'
import './Login.css'

const Login = () => {

  const [formData, setFormData] = React.useState({
    username:"",
    password:"",
    rememberMe:false,
  })

  const handleFormChange = (event) => {
    const {name,value,type,checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }
  console.log(formData)
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-form-title">Sign In</h1>
        <input className="login-input-text" type="text" name="username" placeholder="Username" value={formData.username} onChange={handleFormChange} />
        <input className="login-input-text" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleFormChange} />
        <div>
          <input className="login-input-radio" type="checkbox" name="rememberMe" id="rememberMe" checked={formData.rememberMe} onChange={handleFormChange} />
          <label className="login-input-radio" htmlFor="rememberMe">Remember Me?</label>
        </div>
        <button className="login-input-login">Login</button>
        <h3>Don't have an account? Sign up <a href="/Signup">here</a></h3>
      </form>
    </>
  )
}

export default Login