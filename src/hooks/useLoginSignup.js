import { BASE_URL } from "../utils/constant";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { toast } from "react-toastify";

export const useHandleLoginSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [fromSignUp, setFromSignUp] = useState(false);

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
      fromSignUp ? navigate("/profile") : navigate("/feed");
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  const handleSingUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { email, password, firstName, lastName },
        {
          withCredentials: true, // this is for cookies. It will allow to set Cookies in browser.
        }
      );
      dispatch(addUser(res.data.data));
      setIsLogin((v) => !v);
      setFromSignUp((v) => !v);
      toast.success(res.data.message);
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
