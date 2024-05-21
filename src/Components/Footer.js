import React from "react";
import "./styles/footer.css";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaGoogle,
    FaGithub,
} from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";

function Footer() {
    return (
        <footer>
            <div className="footer-style">
                <div className="text-white mb-3 mb-md-0">
                    Copyright &copy; 2024. All rights reserved.
                </div>
                <div className="text-white">
                    <FaGithub className="me-4" />
                    <FaFacebookF className="me-4" />
                    <FaTwitter className="me-4" />
                    <FaGoogle className="me-4" />
                    <FaLinkedinIn className="me-4" />

                    <RiCustomerService2Line />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
