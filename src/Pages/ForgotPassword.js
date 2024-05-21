import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ForgotPassword({ setForgotAction }) {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordLengthWarning, setPasswordLengthWarning] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      setPasswordLengthWarning(value.length > 10);
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "password" ? value.trim() : value, // Trim whitespace only for the password field
    }));
  };

  const clearFormFields = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  const notifySuccess = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 2000,
      theme: "dark",
    });
  };

  const notifyInfo = (message) => {
    toast.info(message, {
      position: "top-center",
      autoClose: 2000,
      theme: "dark",
    });
  };

  const checkIfEmailExists = (email) => {
    const users = JSON.parse(localStorage.getItem("register")) || [];
    return users.some((user) => user.email === email);
  };

  const handleCheckEmailSubmit = (e) => {
    e.preventDefault();

    const { email } = formData;

    if (!checkIfEmailExists(email)) {
      notifyInfo("User not registered!");
      clearFormFields();
      setShowPasswordForm(false);
    } else {
      notifyInfo("User has been matched!");
      setShowPasswordForm(true);
    }
  };

  const handleChangePasswordSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (password?.length > 10) {
      return false;
    }

    const users = JSON.parse(localStorage.getItem("register")) || [];
    const updatedUsers = users.map((user) =>
      user.email === email ? { ...user, password } : user
    );
    localStorage.setItem("register", JSON.stringify(updatedUsers));
    notifySuccess("Password changed Successfully!");
    clearFormFields();
    setShowPasswordForm(false);
    setForgotAction(false);
  };

  const closeAll = () => {
    setShowPasswordForm(false);
    setForgotAction(false);
  };
  return (
    <>
      {!showPasswordForm ? (
        <div>
          <form onSubmit={handleCheckEmailSubmit}>
            <h6 style={{ color: "red" }}>Forgot Password!</h6>
            <h6> Enter Your Registered email id!</h6>
            <div className="form-outline mb-4">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your email here"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                autoComplete="email"
                required
              />
            </div>
            <div className="d-flex align-items-center justify-content-center gap-2">
              <Button type="button" onClick={() => setForgotAction(false)}>
                Back
              </Button>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <form onSubmit={handleChangePasswordSubmit}>
            <h6 style={{ color: "red" }}>Email : {formData?.email}</h6>
            <h6>Create Your New Password!</h6>

            <div className="form-outline mb-2 icon-hide-show">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control form-control-lg"
                placeholder="Enter new password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                autoComplete="new-password"
                required
              />
              <span onClick={togglePasswordVisibility}>
                {showPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
              </span>
            </div>
            <h6 style={{ color: "red" }}>
              {passwordLengthWarning &&
                "*Password length min 10 characters long!"}
            </h6>
            <div className="mt-4 d-flex align-items-center justify-content-center gap-2">
              <Button type="button" onClick={closeAll}>
                Close
              </Button>
              <Button type="submit">Change Password</Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default ForgotPassword;