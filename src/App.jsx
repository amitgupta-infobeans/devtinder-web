import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home, Feed, Settings, AllConnections, ReviewRequest, Body, Login, Profile,} from "./components";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body />}>
              <Route element={<Home />}  index />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/signup" element={<Login />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/connections" element={<AllConnections />} />
              <Route path="/review-requests" element={<ReviewRequest />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
