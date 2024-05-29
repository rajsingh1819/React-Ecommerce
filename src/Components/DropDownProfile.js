import React, { useRef, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import userImage from "../../src/assets/images/userPng.png";
import "./styles/dropDownProfile.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function DropDownProfile() {
  const [openProfile, setOpenProfile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const iconRef = useRef();
  const menuRef = useRef();

  const logout = () => {
    localStorage.removeItem("login");
    setIsLoggedIn(false);
    navigate("/home");
    toast.success("User Logout Successfully!", {
      duration: 3000,
      className: "hot-toast",
    });
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        iconRef.current &&
        !iconRef.current.contains(e.target)
      ) {
        setOpenProfile(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const userNotRegister = () => {
    localStorage.clear("login");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const register = localStorage.getItem("register");
    const loginData = localStorage.getItem("login");
    register
      ? loginData && setIsLoggedIn(JSON.parse(loginData))
      : userNotRegister();
  }, [
    localStorage.getItem("login"),
    !localStorage.getItem("login"),
    !localStorage.getItem("register"),
    localStorage.getItem("register"),
  ]);

  // window.addEventListener("click", (e) => {
  //   if (e.target !== menuRef.current && e.target !== iconRef.current) {
  //     setOpenProfile(false);
  //   }
  // });

  useEffect(() => {
    const handleScroll = () => {
      setOpenProfile(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNameClick = () => {
    setOpenProfile((prev) => !prev);
  };

  const handleProfileLinkClick = () => {
    navigate("/profile");
    setOpenProfile(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div className="dropdown-profile-container">
          <div className="userProfileIcon">
            <img
              ref={iconRef}
              src={userImage}
              alt={(isLoggedIn?.name).toUpperCase() || "USER NAME"}
              width={45}
              height={45}
              onClick={handleNameClick}
              className={openProfile ? "userIcon" : ""}
            />
          </div>

          {openProfile && (
            <div className="dropdownProfile" ref={menuRef}>
              <div className="flex flex-col gap-4">
                <h6 onClick={handleNameClick}>
                  {(isLoggedIn?.name).toUpperCase()}
                </h6>
                <h6 onClick={handleProfileLinkClick}>Profile</h6>
                <h6 onClick={logout}>Logout</h6>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="header_btn">
          <Button
            className="btn"
            variant="dark"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </div>
      )}
    </div>
  );
}

export default DropDownProfile;
