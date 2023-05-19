import footerLogo from "../assets/images/logo-white.png";
import { FiChevronRight, FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/userContext";

//footer component
const FooterLayout = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="footer-layout">
      <div className="footer-divider">
        <div className="custom-shape-divider-bottom-1682958298">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="custom-shape-divider-bottom-1682957892">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="footer-col">
            <div className="footer-logo">
              <img src={footerLogo} alt="footer-logo" />
            </div>
            <br />
          </div>
          <div className="footer-col">
            <h2 className="footer-title">Explore</h2>
            <ul className="footer-list">
              <li>
                <FiChevronRight stroke="#8ec038" />
                <Link to="/">Home</Link>
              </li>
              <li>
                <FiChevronRight stroke="#8ec038" />
                <Link to="/about">About</Link>
              </li>
              <li>
                <FiChevronRight stroke="#8ec038" />
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h2 className="footer-title">Contact Us</h2>
            <div className="footer-widget">
              <h3 className="footer-subtitle">
                <IoLocationOutline stroke="#8ec038" /> Our Location
              </h3>
              <p>
                Hiranandani Estate, Thane, <br />
                Maharashtra 400607
              </p>
            </div>
            <div className="footer-widget">
              <h3 className="footer-subtitle">
                <FiPhoneCall stroke="#8ec038" /> React Out Us
              </h3>
              <p>
                <a href="tel:+91 9876543211">+91 9876543211</a>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Design & Developed By {user.name} !!</p>
        </div>
      </footer>
    </div>
  );
};

export default FooterLayout;
