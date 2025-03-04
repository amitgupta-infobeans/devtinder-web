import React from "react";

const EditProfile = ({ user }) => {
  const { firstName, lastName, email, age, gender, about, photoUrl } = user;
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <div className="card-body">
        <figure>
          <img
            className="rounded-full"
            src={
              photoUrl
                ? photoUrl
                : "https://www.ihna.edu.au/blog/wp-content/uploads/2022/10/user-dummy.png"
            }
            alt="User Profile Picture"
          />
        </figure>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">First Name: {firstName}</div>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">Last Name: {lastName}</div>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">Age: {age}</div>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">Gender: {gender}</div>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">Email: {email}</div>
          </label>
          <label className="form-control w-full max-w-xs text-justify">
            <div className="label">About: {about}</div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
