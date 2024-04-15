import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import HomeScreen from "./Admin";
import ForgotPassword from "./ForgotPassword";
import Student from "./Student";

function PasswordLoginWithFirebase() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/admin" element={<HomeScreen />} />
          <Route path="/reset" element={<ForgotPassword />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default PasswordLoginWithFirebase;
