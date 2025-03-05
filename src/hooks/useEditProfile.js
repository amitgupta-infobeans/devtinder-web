import { BASE_URL } from "../utils/constant";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useEditProfile = (user) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState(user?.email);
  const [firstName, setfirstName] = useState(user?.firstName);
  const [lastName, setlastName] = useState(user?.lastName);
  const [about, setAbout] = useState(user?.about);
  const [age, setAge] = useState(user?.age);
  const [gender, setGender] = useState(user?.gender);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);

  const updateProfile = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { age, gender, photoUrl, firstName, lastName, about },
        {
          withCredentials: true, // this is for cookies. It will allow to set Cookies in browser.
        }
      );
      dispatch(addUser(res.data.data));
      toast.success(res.data.message);
    } catch (err) {
      toast.error(err?.response?.data?.message);
      if (err?.response?.data?.status === 401) {
        return navigate("/login");
      }
    }
  };

  return {
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
  };
};
