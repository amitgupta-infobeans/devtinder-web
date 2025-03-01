import { ToastContainer } from "react-toastify";
import { useHandleLoginSignUp } from "../hooks/useLoginSignup";

const Login = () => {
  const {
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
  } = useHandleLoginSignUp();

  return (
    <div className="flex justify-center my-10">
      <ToastContainer position="top-center" theme="light" />
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{isLogin ? "Login" : "SignUp"}</h2>
          <div>
            {!isLogin && (
              <>
                {" "}
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
              </>
            )}
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div className="card-actions justify-end mt-5">
            <button
              className="btn btn-primary"
              onClick={isLogin ? handleLogin : handleSingUp}
            >
              {isLogin ? "Login" : "SignUp"}
            </button>
          </div>
          <label className="w-full max-w-xs">
            <div className="label">
              <span
                className=" cursor-pointer label-text"
                onClick={() => setIsLogin((v) => !v)}
              >
                {isLogin ? "New user? SignUp" : "Already a user? Login"}
              </span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
