import React from "react";
import "./Login.css";

const Signup = () => {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
    confirmPassword: "",
    signUpNewsLetter: false,
    // isPasswordMatch: false,
  });

  const handleFormChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        // [name]: type === "checkbox" ? checked : value,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

//   console.log(formData);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted sign up')
    console.log(formData);
  };

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-form-title">Sign Up</h1>
        <input
          className="login-input-text"
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleFormChange}
        />
        <input
          className="login-input-text"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleFormChange}
        />
        <input
          className="login-input-text"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleFormChange}
        />
        {/* {!formData.isPasswordMatch && (
          <p className="login-match-text">PASSWORDS DO NOT MATCH</p>
        )} */}
        <div>
          <input
            className="login-input-radio"
            type="checkbox"
            name="signUpNewsLetter"
            id="signUpNewsLetter"
            checked={formData.signUpNewsLetter}
            onChange={handleFormChange}
          />
          <label className="login-input-radio" htmlFor="signUpNewsLetter">
            Sign Up For News Letter
          </label>
        </div>
        <button className="login-input-login">Login</button>
        <h3>
          Have an account? <a href="/Login">Login</a> here
        </h3>
      </form>
    </>
  );
};

export default Signup;
