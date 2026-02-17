import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)} action="">
      <div className="flex justify-center items-center min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-2xl font-bold text-center">
              Welcome Back Buddy
            </h1>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                {...register("email", { required: "Name Is Required" })}
                type="email"
                className="input"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-400">{errors.email.message}</p>
              )}
              <label className="label">Password</label>
              <input
                {...register("password", {
                  required: "Please enter a valid password",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 character",
                  },
                })}
                type="password"
                className="input"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <p>
              Not Have Any Account ?{" "}
              <Link
                className="my-4 text-blue-400 hover:text-blue-900 font-semibold"
                to={"/register"}
              >
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
