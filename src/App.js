import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

// import react router things
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {

  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register />} />
        {/* <Route  path="/" element={<Home />} /> */}
        <Route  path="/profile/:username" element={<Profile />} />
        <Route  path="/login" element={user ? <Navigate  to="/" /> : <Login />} />
        <Route  path="/register" element={user ? <Navigate to="/" /> : <Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
