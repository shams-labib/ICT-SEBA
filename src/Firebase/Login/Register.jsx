import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Authentication/AuthContext";
import Swal from "sweetalert2";
import { User, Mail, Phone, Lock, Eye, EyeOff, UserPlus } from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, googleLogin } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  // স্বয়ংক্রিয় টোস্ট নোটিফিকেশন
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Toast.fire({
          icon: "success",
          title: "সফলভাবে রেজিস্ট্রেশন সম্পন্ন হয়েছে!",
        });
        navigate("/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "গুগল রেজিস্ট্রেশন সফল হয়নি।",
        });
      });
  };

  const handleRegister = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        Toast.fire({
          icon: "success",
          title: "ICT-SEBA-তে আপনাকে স্বাগতম!",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "রেজিস্ট্রেশন ব্যর্থ",
          text: error.message || "কিছু একটা ভুল হয়েছে, আবার চেষ্টা করুন।",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50 px-4 py-10">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-purple-200 blur-[120px] opacity-40 rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-200 blur-[120px] opacity-40 rounded-full"></div>

      <div className="card w-full max-w-lg bg-white/80 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50">
        <div className="card-body p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">
              Create <span className="text-purple-600">Account</span>
            </h1>
            <p className="text-slate-500 text-sm mt-2">
              ICT-SEBA মেম্বার হতে নিচের তথ্যগুলো পূরণ করুন
            </p>
          </div>

          <form
            onSubmit={handleSubmit(handleRegister)}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {/* Name Field */}
            <div className="form-control md:col-span-2">
              <label className="label text-xs font-bold uppercase text-slate-500 tracking-wider">
                Full Name
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                  <User size={18} />
                </span>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="John Doe"
                  className="input input-bordered w-full pl-10 focus:ring-2 focus:ring-purple-200 outline-none"
                />
              </div>
              {errors.name && (
                <span className="text-error text-xs mt-1">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Phone Field */}
            <div className="form-control">
              <label className="label text-xs font-bold uppercase text-slate-500 tracking-wider">
                Phone
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                  <Phone size={18} />
                </span>
                <input
                  {...register("phone", { required: "Phone is required" })}
                  type="text"
                  placeholder="017XX-XXXXXX"
                  className="input input-bordered w-full pl-10 focus:ring-2 focus:ring-purple-200 outline-none"
                />
              </div>
              {errors.phone && (
                <span className="text-error text-xs mt-1">
                  {errors.phone.message}
                </span>
              )}
            </div>

            {/* Email Field */}
            <div className="form-control">
              <label className="label text-xs font-bold uppercase text-slate-500 tracking-wider">
                Email
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                  <Mail size={18} />
                </span>
                <input
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  placeholder="name@mail.com"
                  className="input input-bordered w-full pl-10 focus:ring-2 focus:ring-purple-200 outline-none"
                />
              </div>
              {errors.email && (
                <span className="text-error text-xs mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password Field */}
            <div className="form-control md:col-span-2">
              <label className="label text-xs font-bold uppercase text-slate-500 tracking-wider">
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                  <Lock size={18} />
                </span>
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Min 6 characters required",
                    },
                  })}
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="input input-bordered w-full pl-10 pr-10 focus:ring-2 focus:ring-purple-200 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-slate-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <span className="text-error text-xs mt-1">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Register Button */}
            <div className="md:col-span-2 mt-4">
              <button className="btn btn-primary w-full bg-gradient-to-r from-purple-600 to-blue-600 border-none hover:shadow-lg transition-all transform active:scale-95 text-white gap-2">
                <UserPlus size={20} /> অ্যাকাউন্ট তৈরি করুন
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="divider text-slate-400 text-[10px] uppercase tracking-[0.2em] my-6">
            অথবা
          </div>

          {/* Google Button */}
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full border-slate-200 hover:bg-slate-50 hover:text-slate-700 gap-3 transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 512 512">
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
            Google দিয়ে সাইন-আপ করুন
          </button>

          {/* Login Link */}
          <p className="text-center text-slate-500 text-sm mt-8">
            ইতিমধ্যেই অ্যাকাউন্ট আছে?{" "}
            <Link
              to="/login"
              className="text-purple-600 font-bold hover:underline transition-all"
            >
              লগইন করুন
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
