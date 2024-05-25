import React, { useState } from "react";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

function Register({ showForm, setShowForm }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
    id: "",
  });
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [nameLengthWarning, setNameLengthWarning] = useState(false); // State to track name length warning
  const [passwordLengthWarning, setPasswordLengthWarning] = useState(false); // State to track name length warning

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const notifySuccess = () => {
    toast.success("User Register Successfully!", {
      position: "top-center",
      autoClose: 2000,
      theme: "dark",
    });
  };

  const notifyError = () => {
    toast.error("User Already registered!", {
      position: "top-center",
      autoClose: 2000,
      theme: "dark",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setNameLengthWarning(value.length < 5 || value.length > 10);
    }
    if (name === "password") {
      setPasswordLengthWarning(value.length < 5 || value.length > 10);
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "password" ? value.trim() : value, // Trim whitespace only for the password field
    }));
  };

  const actionSubmitRegister = (event) => {
    event.preventDefault();

    if (
      formData.name.length > 10 ||
      formData.password.length > 10 ||
      formData.name.length < 5 ||
      formData.password.length < 5
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
      const newUser = { ...formData, id: uuidv4() }; // Generate unique id using uuidv4()
      registerData.push(newUser);
      localStorage.setItem("register", JSON.stringify(registerData));
      clearFormFields();
      setShowForm(!showForm);
      notifySuccess();

      setFormData({
        ...formData,
        id: "",
      });
    }
  };

  const clearFormFields = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      id: "",
    });
    setNameLengthWarning(false);
  };

  return (
    <form onSubmit={actionSubmitRegister}>
      <div className="divider d-flex align-items-center my-4">
        <p className="text-center fw-bold mx-3 mb-0">Or</p>
      </div>

      <div
        className="form-outline"
        style={{ marginBottom: !nameLengthWarning && "1.5rem" }}
      >
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter user name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          autoComplete="user"
          onFocus={() => setShowPassword(false)}
          required
        />
      </div>
      <span style={{ color: "red" }}>
        {nameLengthWarning && "*Name length min 5 and max 10 char long!"}
      </span>

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
      <div className="form-outline  icon-hide-show">
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
      <span style={{ color: "red" }}>
        {passwordLengthWarning &&
          "*Password length min 5 and max 10 char long!"}
      </span>

      <div className="text-center text-lg-start mt-4 pt-2 style-Buttonstyle-p ">
        <button
          type="submit"
          className="btn btn-primary btn-lg"
          onFocus={() => setShowPassword(false)}
        >
          Register
        </button>
        <p
          className="small fw-bold mt-2 pt-1 mb-0"
          onClick={() => setShowForm(!showForm)}
        >
          Already have an account?
          <span className="link-danger"> Login</span>
        </p>
      </div>
    </form>
  );
}

export default Register;
