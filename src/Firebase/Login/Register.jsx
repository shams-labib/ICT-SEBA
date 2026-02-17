import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  

  const handleRegister = (data) => {
    
  };

  return (
    <form onSubmit={handleSubmit(handleRegister)} action="">
      <div className="flex justify-center items-center min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-2xl font-bold text-center">
              ICT-SEBA Is Now for you boobie
            </h1>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                {...register("name", { required: "Name Is Required" })}
                type="text"
                className="input"
                placeholder="Name"
              />
              {errors.name && (
                <p className="text-red-400">{errors.name.message}</p>
              )}
              <label className="label">Phone Number</label>
              <input
                {...register("phone", {
                  required: "Contact Number Is Required",
                })}
                type="text"
                className="input"
                placeholder="Phone"
              />
              {errors.phone && (
                <p className="text-red-400">{errors.phone.message}</p>
              )}
              <label className="label">Email</label>
              <input
                {...register("email", { required: "Email Is Required" })}
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
                  required: "Please enter your password",
                  minLength: {
                    value: 6,
                    message: "Password must be in 6 character",
                  },
                })}
                type="password"
                className="input"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-400">{errors.password.message}</p>
              )}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
            <p>
              Already have an account?{" "}
              <Link
                className="my-4 text-blue-400 hover:text-blue-800 font-semibold"
                to={"/login"}
              >
                Login Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
