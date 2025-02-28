import React from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { ToastContainer, toast } from "react-toastify";
import { BASE_URL } from "../utils/constant";

const Login = () => {
  const [email, setEmail] = useState("ram@gg.com");
  const [password, setPassword] = useState("ram123");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { email, password },
        {
          withCredentials: true, // this is for cookies. It will allow to set Cookies in browser.
        }
      );
      dispatch(addUser(res.data.data));
      navigate("/feed");
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <div className=" flex justify-center my-10">
      <ToastContainer position="top-center" theme="light" />
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div className="card-actions justify-end mt-5">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
          <label className="w-full max-w-xs">
            <div className="label">
              <span className="label-text">
                New User?{" "}
                <Link className="underline" to="/signup">
                  SignUp
                </Link>{" "}
                here
              </span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
