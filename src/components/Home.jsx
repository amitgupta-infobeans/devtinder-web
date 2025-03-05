import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((store) => store.user);

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(./home-background.webp)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello Developer 👨‍💻</h1>
          <p className="mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <Link className="btn btn-primary" to={user ? "/feed" : "/login"}>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
