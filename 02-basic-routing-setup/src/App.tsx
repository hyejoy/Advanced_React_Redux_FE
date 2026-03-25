import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./container/Auth/Auth";
import Signin from "./container/Auth/Signin";
import Signup from "./container/Auth/Signup";

function App() {
  return (
    <Routes>
      <Route Component={Auth}>
        <Route path="signin" Component={Signin}></Route>
        <Route path="signup" Component={Signup}></Route>
      </Route>
      <Route path="*" element={<Navigate to="/signin" />}></Route>
    </Routes>
  );
}

export default App;
