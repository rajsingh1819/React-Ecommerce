import React, { useState } from "react";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

function Register({ showForm, setShowForm }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
    id: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [nameLengthWarning, setNameLengthWarning] = useState(false);
  const [passwordLengthWarning, setPasswordLengthWarning] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const notifySuccess = () => {
    toast.success("User Registered Successfully!", {
      duration: 2000,
      className: "hot-toast",
    });
  };

  const notifyError = () => {
    toast("User Already registered!", {
      icon: <span className="hot-toast-icon">ⓘ</span>,
      duration: 2000,
      className: "hot-toast",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setNameLengthWarning(value.length < 5 || value.length > 10);
    }
    if (name === "password") {
      setPasswordLengthWarning(value.length < 5 || value.length > 10);
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "password" ? value.trim() : value,
    }));
  };

  const actionSubmitRegister = (event) => {
    event.preventDefault();

    if (
      formData.username?.length > 10 ||
      formData.password?.length > 10 ||
      formData.username?.length < 5 ||
      formData.password?.length < 5
    ) {
      return false;
    }

    let registerData = JSON.parse(localStorage.getItem("register")) || [];
    const alreadyUser = registerData.find(
      (user) => formData.email === user.email
    );

    if (alreadyUser) {
      notifyError();
    } else {
      const newUser = { ...formData, id: uuidv4() };
      registerData.push(newUser);
      localStorage.setItem("register", JSON.stringify(registerData));
      clearFormFields();
      setShowForm(!showForm);
      notifySuccess();

      setFormData((prevState) => ({
        ...prevState,
        id: "",
      }));
    }
  };

  const clearFormFields = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
      role: "user",
      id: "",
    });
    setNameLengthWarning(false);
    setPasswordLengthWarning(false);
  };

  return (
    <form onSubmit={actionSubmitRegister}>
      <div className="divider d-flex align-items-center my-4">
        <p className="text-center fw-bold mx-3 mb-0">Or</p>
      </div>

      <div className="form-outline mb-3">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          autoComplete="username"
          required
        />
        {nameLengthWarning && (
          <span style={{ color: "red" }}>
            *Name length must be between 5 and 10 char!
          </span>
        )}
      </div>

      <div className="form-outline mb-3">
        <input
          type="email"
          className="form-control form-control-lg"
          placeholder="Enter a valid email address"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          autoComplete="email"
          required
        />
      </div>

      <div className="form-outline mb-2 icon-hide-show">
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
      {passwordLengthWarning && (
        <span style={{ color: "red" }}>
          *Password length must be between 5 and 10 char!
        </span>
      )}

      <div className="text-center text-lg-start mt-4 pt-2">
        <button type="submit" className="btn btn-primary btn-lg">
          Register
        </button>
        <p className="small fw-bold mt-2 pt-1 mb-0">
          Already have an account?
          <span className="link-danger" onClick={() => setShowForm(!showForm)}>
            {" "}
            Login
          </span>
        </p>
      </div>
    </form>
  );
}

export default Register;
