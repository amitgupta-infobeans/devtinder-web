import React from "react";
import { ToastContainer } from "react-toastify";
import { useChangePassword } from "../hooks/useChangePassword";
import { useSelector } from "react-redux";

const Settings = () => {
  const user = useSelector((store) => store.user);
  const {
    newpassword,
    setNewPassword,
    setMatchPassword,
    matchPassword,
    currentpassword,
    setCurrentPassword,
    updatePassword,
  } = useChangePassword(user);
  return (
    <div className="flex justify-center my-10">
      <div className="flex justify-center mx-5">
        <ToastContainer position="top-center" theme="light" />
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Change Password</h2>
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Current Password</span>
                </div>
                <input
                  type="password"
                  value={currentpassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">New Password</span>
                </div>
                <input
                  type="password"
                  value={newpassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Confirm New Password</span>
                </div>
                <input
                  type="password"
                  value={matchPassword}
                  onChange={(e) => setMatchPassword(e.target.value)}
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <div className="card-actions justify-end mt-5">
              <button className="btn btn-primary" onClick={updatePassword}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
