import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Authentication/AuthContext";
import Swal from "sweetalert2";
import { Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { loginUser, googleLogin } = useContext(AuthContext);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });

  const handleLogin = (data) => {
    loginUser(data.email, data.password)
      .then(() => {
        Toast.fire({
          icon: "success",
          title: "স্বাগতম! লগইন সফল হয়েছে",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "লগইন ব্যর্থ",
          text: "ইমেইল বা পাসওয়ার্ড সঠিক নয়। আবার চেষ্টা করুন।",
          confirmButtonColor: "#2563eb",
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Toast.fire({
          icon: "success",
          title: "গুগল দিয়ে লগইন সফল হয়েছে",
        });
        navigate("/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "গুগল লগইন সম্পন্ন করা যায়নি।",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
      {/* Background Decorative Circles */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 blur-[100px] opacity-50 rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-200 blur-[100px] opacity-50 rounded-full"></div>

      <div className="card w-full max-w-md bg-white/80 backdrop-blur-lg shadow-2xl border border-white p-2">
        <div className="card-body">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">
              ICT<span className="text-blue-600">SEBA</span>
            </h1>
            <p className="text-slate-500 font-medium mt-2">
              আপনার আইসিটি যাত্রা এখান থেকে শুরু
            </p>
          </div>

          <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
            {/* Email Field */}
            <div className="form-control">
              <label className="label font-semibold text-slate-700">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                  <Mail size={18} />
                </span>
                <input
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  className="input input-bordered w-full pl-10 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="name@example.com"
                />
              </div>
              {errors.email && (
                <p className="text-error text-xs mt-1 italic">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label font-semibold text-slate-700">
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                  <Lock size={18} />
                </span>
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "At least 6 characters" },
                  })}
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full pl-10 pr-10 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-blue-500 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-error text-xs mt-1 italic">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <a
                href="#"
                className="text-sm text-blue-600 hover:underline font-medium"
              >
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button className="btn btn-primary w-full bg-gradient-to-r from-blue-600 to-blue-700 border-none hover:shadow-lg transition-all transform active:scale-95 text-white gap-2">
              <LogIn size={20} /> লগইন করুন
            </button>
          </form>

          {/* Divider */}
          <div className="divider text-slate-400 text-xs uppercase tracking-widest my-6">
            অথবা
          </div>

          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full border-slate-200 hover:bg-slate-50 hover:text-slate-700 gap-3 group transition-all"
          >
            <svg
              aria-label="Google logo"
              width="20"
              height="20"
              viewBox="0 0 512 512"
            >
              <path
                fill="#4285f4"
                d="M495.9 256.6c0-15.5-1.4-30.5-4-45h-235.9v92.1h134.4c-5.8 31-23.3 57.2-49.7 74.9v62.3h80.4c47-43.2 74.8-107 74.8-184.3Z"
              />
              <path
                fill="#34a853"
                d="M256 504c67 0 123.1-22.2 164.3-60.2l-80.4-62.3c-22.3 14.9-50.8 23.7-83.9 23.7-64.7 0-119.3-43.7-138.9-102.4h-83v64.4c41.1 81.7 125.1 136.8 221.9 136.8Z"
              />
              <path
                fill="#fbbc04"
                d="M117.1 302.8c-4.9-14.9-7.7-30.7-7.7-47s2.8-32.1 7.7-47v-64.4H34.1C12.4 187.3 0 220.2 0 255.8s12.4 68.5 34.1 111.4l83-64.4Z"
              />
              <path
                fill="#ea4335"
                d="M256 107.7c36.4 0 69.1 12.5 94.8 37.1l71.1-71.1C379.1 33.1 323 11 256 11c-96.8 0-180.8 55.1-221.9 136.8l83 64.4c19.6-58.7 74.2-102.4 138.9-102.4Z"
              />
            </svg>
            Google দিয়ে কন্টিনিউ করুন
          </button>

          {/* Footer Link */}
          <p className="text-center text-slate-600 mt-6">
            অ্যাকাউন্ট নেই?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-bold hover:underline"
            >
              রেজিস্ট্রেশন করুন
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
