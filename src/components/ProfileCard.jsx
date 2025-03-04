import React from "react";
import { ToastContainer } from "react-toastify";
import { useEditProfile } from "../hooks/useEditProfile";
import EditProfile from "./EditProfile";
const ProfileCard = ({ user }) => {
  const {
    email,
    setEmail,
    age,
    setAge,
    about,
    setAbout,
    photoUrl,
    gender,
    setGender,
    setPhotoUrl,
    setfirstName,
    firstName,
    lastName,
    setlastName,
    updateProfile,
  } = useEditProfile(user);
  return (
    user && (
      <div className="flex justify-center my-10">
        <div className="flex justify-center mx-5">
          <ToastContainer position="top-center" theme="light" />
          <div className="card bg-base-300 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Edit Profile</h2>
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
                    <span className="label-text">Age</span>
                  </div>
                  <input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Gender</span>
                  </div>
                  <input
                    type="text"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Photo URL</span>
                  </div>
                  <input
                    type="text"
                    value={photoUrl}
                    onChange={(e) => setPhotoUrl(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">About</span>
                  </div>
                  <input
                    type="text"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
              </div>
              <div className="card-actions justify-end mt-5">
                <button className="btn btn-primary" onClick={updateProfile}>
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
        <EditProfile
          user={{ firstName, lastName, email, age, gender, about, photoUrl }}
        />
      </div>
    )
  );
};
export default ProfileCard;
