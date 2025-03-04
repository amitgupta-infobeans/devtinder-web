import React from "react";

import { useSelector } from "react-redux";
import ProfileCard from "./ProfileCard";

const Profile = () => {
  const user = useSelector((store) => store.user);
  return user && <ProfileCard user={user} />;
};

export default Profile;
