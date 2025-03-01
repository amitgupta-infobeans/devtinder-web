import { BASE_URL } from "../utils/constant";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { toast } from "react-toastify";

export const useHandleLoginSignUp = () => {
  const [email, setEmail] = useState("ram@gg.com");
  const [password, setPassword] = useState("ram123");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

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

  const handleSingUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL+"/signup",
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

  return {
    email,
    setEmail,
    isLogin,
    setIsLogin,
    setPassword,
    password,
    setfirstName,
    firstName,
    lastName,
    setlastName,
    handleSingUp,
    handleLogin,
  };
};
