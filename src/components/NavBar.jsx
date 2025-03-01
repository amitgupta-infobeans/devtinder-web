import axios from "axios";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constant";
const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, {
        withCredentials: true,
      });
      dispatch(removeUser());
      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">DevTinder</a>
      </div>
      <div className="flex-none gap-2">
        {user && <p>Welcome {user?.firstName}</p>}

        <div className="dropdown dropdown-end mx-5">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={
                  user && user.photoUrl
                    ? user.photoUrl
                    : "https://www.ihna.edu.au/blog/wp-content/uploads/2022/10/user-dummy.png"
                }
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              {user && (
                <>
                  <Link to="/profile">Profile</Link>
                  <button onClick={handleLogout}>Logout</button>
                  <Link to="/settings">Setings</Link>
                </>
              )}
              {!user && <Link to="/login">Login</Link>}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
