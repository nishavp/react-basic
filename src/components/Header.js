import logo from "../assets/images/logo.png";
import cart from "../assets/images/cart.png";

//header component
const HeaderComponent = () => {
  return (
    <div className="headerlayout">
      <div className="container">
        <div className="headerWrap">
          <div className="logowrap">
            <img src={logo} alt="logo" />
          </div>
          <div className="menuLinks">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact Us</a>
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
