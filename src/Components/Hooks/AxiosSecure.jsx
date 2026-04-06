import axios from "axios";
import React from "react";

const instance = axios.create({
  baseURL: "https://ict-seba-server.vercel.app",
});

const useAxiosSecure = () => {
  return instance;
};

export default useAxiosSecure;
