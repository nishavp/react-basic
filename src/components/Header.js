import logo from "../assets/images/logo.png";
import cart from "../assets/images/cart.png";
import { Link } from "react-router-dom";

//header component
const HeaderComponent = () => {
  return (
    <div className="headerlayout">
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
