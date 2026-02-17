import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Authentication/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, googleLogin } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          title: "Login Success!",
          text: "Conggrass you are now a ict-seba member!",
          icon: "success",
        });
        navigate("/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  const handleRegister = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        Swal.fire({
          title: "Login Success!",
          text: "Conggrass you are now a ict-seba member!",
          icon: "success",
        });
        navigate("/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
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

              <p className="my-2 text-center">OR</p>
              {/* Google */}
              <button
                onClick={() => handleGoogleLogin()}
                type="button"
                className="btn bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
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
