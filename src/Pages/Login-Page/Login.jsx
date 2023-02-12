import React from "react";
import { useForm } from "react-hook-form";
import "./Login.css";

const Login = ({onSubmit}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleLogin = (data) => {
    onSubmit(data);
  };
  return (
    <div className="login-page">
      <div className="login-box">
        <form className="login-form" onSubmit={handleSubmit(handleLogin)}>
          <h1>Login Now</h1>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            {...register("name", { required: true })}
          />
           {errors.name && (
              <span className='text-xs text-red-600'>Name is required</span>
            )}
          <label htmlFor="name">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            {...register("password", { required: true, minLength: 6 })}
          />
           {errors.password && (
              <span className='text-xs text-red-600'>Password is required</span>
            )}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && (
              <span className='text-xs text-red-600'>Email is required</span>
            )}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
