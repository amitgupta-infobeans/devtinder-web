import { BASE_URL } from "../utils/constant";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const useChangePassword = ({ user }) => {
  const [currentpassword, setCurrentPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updatePassword = async () => {
    try {
      if (newpassword !== matchPassword) {
        toast.error("new and confirm password are not matched.");
        return;
      }
      const res = await axios.post(
        BASE_URL + "/user/changepassword",
        { currentpassword, newpassword },
        {
          withCredentials: true, // this is for cookies. It will allow to set Cookies in browser.
        }
      );
      dispatch(addUser(res?.data?.data));
      toast.success(res?.data?.message);
    } catch (err) {
        
        if(err?.response?.data?.status === 401){
            navigate('/login')
        };
      toast.error(err?.response?.data?.message);
    }
  };

  return {
    newpassword,
    setNewPassword,
    setMatchPassword,
    matchPassword,
    currentpassword,
    setCurrentPassword,
    updatePassword,
  };
};
