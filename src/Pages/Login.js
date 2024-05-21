import React, { useState } from "react";

import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ForgotPassword from "./ForgotPassword";

function Login({ showForm, setShowForm }) {
  const navigation = useNavigate();
  const [forgotAction, setForgotAction] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const notifySuccess = () => {
    toast.success("User Login Successfully!", {
      position: "top-center",
      autoClose: 2000,
      theme: "dark",
    });
  };

  const notifyError = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 2000,
      theme: "dark",
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const actionSubmitLogin = (event) => {
    event.preventDefault();
    let registerData = JSON.parse(localStorage.getItem("register"));

    if (!registerData) {
      notifyError("User not registered!");
    } else {
      const user = registerData.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );

      if (!user) {
        notifyError("Email & Password does't match!");
      } else {
        notifySuccess();
        const loginData = { ...user, rememberMe: true }; // Combine formData with the name from registerData
        localStorage.setItem("login", JSON.stringify(loginData)); // Store the combined data in localStorage
        clearFormFields();
        navigation("/home");
      }
    }

    // console.log("Login Form Data => ", formData);
  };

  const clearFormFields = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      rememberMe: false,
    });
  };

  return (
    <>
      {!forgotAction ? (
        <form onSubmit={actionSubmitLogin}>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          <div className="form-outline mb-4">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter a valid email address"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              autoComplete="email"
              onFocus={() => setShowPassword(false)}
              required
            />
          </div>
          <div className="form-outline mb-3  icon-hide-show">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control form-control-lg"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              autoComplete="current-password"
              required
            />
            <span onClick={togglePasswordVisibility}>
              {showPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
            </span>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="form-check mb-0">
              <input
                className="form-check-input me-2"
                type="checkbox"
                id="form2Example3"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                onFocus={() => setShowPassword(false)}
                required
              />
              <label className="form-check-label" htmlFor="form2Example3">
                Remember me
              </label>
            </div>
            <Link
              to="#"
              className="text-body"
              onClick={() => setForgotAction(true)}
            >
              Forgot password?
            </Link>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2 style-Buttonstyle-p ">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              onFocus={() => setShowPassword(false)}
            >
              Login
            </button>
            <p
              className="small fw-bold mt-2 pt-1 mb-0"
              onClick={() => setShowForm(!showForm)}
            >
              Don't have an account?
              <span className="link-danger">Register</span>
            </p>
          </div>
        </form>
      ) : (
        <ForgotPassword setForgotAction={setForgotAction} />
      )}
    </>
  );
}

export default Login;
