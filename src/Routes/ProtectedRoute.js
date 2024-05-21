import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ Component }) {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("login");

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login", { replace: true });
        }
    }, [isLoggedIn, navigate]);

    return isLoggedIn ? <Component /> : null;
}

export default ProtectedRoute;
