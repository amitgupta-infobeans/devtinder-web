import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useNavigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constant";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";
import axios from "axios";

const Body = () => {
  const dispatch = useDispatch();
  const userD = useSelector((store) => store.user);
  const navigate = useNavigate();

  const fetchUser = async () => {
    if (userD) return;
    try {
      const res = await axios.get(BASE_URL + "/profile", {
        withCredentials: true,
      });
      dispatch(addUser(res?.data?.data));
      navigate("/");
    } catch (e) {
      if (e?.status === 401) {
        navigate("/login");
      } else {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;
