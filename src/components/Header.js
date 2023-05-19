import { useContext } from "react";
import logo from "../assets/images/logo.png";
import cart from "../assets/images/cart.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";

//header component
const HeaderComponent = () => {
  // check for online and show status
  const isOnline = useOnline();
  // get user context info
  const { user } = useContext(UserContext);

  return (
    <div className="headerlayout">
      {isOnline ? (
        <div className="green-signal">
          <div className="container">
            <p>Hii, {user.name} You're Online !! Welcome back.</p>
          </div>
        </div>
      ) : (
        <div className="red-signal">
          <div className="container">
            <p>
              Hii, {user.name} You're Offline !! Please check your internet
              connection.
            </p>
          </div>
        </div>
      )}

      <div className="container">
        <div className="headerWrap">
          <div className="logowrap">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="menuLinks">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="contact">Contact Us</Link>
              </li>
              <li>
                <Link to="instamart">Instamart</Link>
              </li>
              <li>
                <a>
                  <img className="cart-icon" src={cart} alt="cart" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
