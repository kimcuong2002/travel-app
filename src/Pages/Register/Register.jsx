import React from "react";
import { useForm } from "react-hook-form";
import "./Register.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    onSubmit(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Register</h1>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Your Name"
        {...register("name", { required: true })}
      />
      {errors.email && (
        <span>Email is required</span>
      )}
      <label htmlFor="name">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        {...register("password", { required: true, minLength: 6 })}
      />
      
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
