import React from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSingUp = async () => {
    try {
      const res = await axios.post(
        "http://localhost:7777/api/signup",
        { email, password, firstName, lastName },
        {
          withCredentials: true, // this is for cookies. It will allow to set Cookies in browser.
        }
      );
      dispatch(addUser(res.data.data));
      navigate("/profile");
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };
  return (
    <div className=" flex justify-center my-4">
      <ToastContainer position="top-center" theme="light" />
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">SignUp</h2>

          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">First Name</span>
              </div>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Last Name</span>
              </div>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
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
            <button className="btn btn-primary" onClick={handleSingUp}>
              SignUp
            </button>
          </div>
          <label className="w-full max-w-xs">
            <div className="label">
              <span className="label-text">
                Already a user?{" "}
                <Link className="underline" to="/login">
                  Login
                </Link>
              </span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
