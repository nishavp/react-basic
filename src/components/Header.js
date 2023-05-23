import { useContext } from "react";
import logo from "../assets/images/logo.png";
import cart from "../assets/images/cart.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

//header component
const HeaderComponent = () => {
  // check for online and show status
  const isOnline = useOnline();
  // get user context info
  const { user } = useContext(UserContext);

  // reading cart items
  const cartItems = useSelector((store) => store.cart.items);

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
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/instamart">Instamart</Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="flex justify-between items-center gap-2"
                >
                  <img className="cart-icon" src={cart} alt="cart" />
                  <span>{cartItems.length}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
