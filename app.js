//importing react when cdn links are removed
import React from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./data";
import logo from "./images/logo.png";
import cart from "./images/cart.png";
import { SlEmotsmile } from 'react-icons/sl';
import { BsFillStarFill } from 'react-icons/bs';
import { BsCurrencyRupee } from 'react-icons/bs';
import { BsCheck2All } from 'react-icons/bs';
import { IoFastFoodOutline } from 'react-icons/io5';
import aboutImg from "./images/health-bottle-cut.jpeg";
import footerLogo from './images/logo-white.png'
import { FiChevronRight } from 'react-icons/fi';
import { FiPhoneCall } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';

//header component
const HeaderComponent = () => {
  return (
    <div className="headerlayout">
      <div className="container">
        <div className="headerWrap">
          <div className="logowrap">
              <img src={logo} alt="logo"/>
          </div>
          <div className="menuLinks">
            <ul>
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Contact Us</a></li>
              <li><a><img className="cart-icon" src={cart} alt="cart"/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

//single restaurant card component as we will resuse it
const RestaurantCard = (props) => {
  const { resData } = props;

  //destructure your code properly
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo
  } = resData?.data;

  return (
    <div className="single-card">
      <div className="img-wrap">
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="food"/>
      </div>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="cusine-name">{cuisines.join(', ')}</p>
        <div className="card-inner-details">
          <p className="rating"><span><BsFillStarFill fill="#fff" size={15}/></span><span>{avgRating}</span></p>
          <p className="time">{deliveryTime} mins</p>
          <p className="price"><span><BsCurrencyRupee size={15}/></span><span>{costForTwo / 100} for two</span> </p>
        </div>
      </div>
    </div>
  );
}

//about component
const AboutComponent = () => {
  return (
    <div className="about-section">
      <div className="container">
          <div className="cols col-1">
            <div className="about-details">
            <div className="section-heading">
              <h2><span>Healthy and <br/> tasty foods </span> <IoFastFoodOutline stroke="#da2424" fill="#da2424" size={80}/></h2>
            </div>
            <p>
                Eating a healthy diet that includes lots of fruit, vegetables, whole grains and a moderate amount of unsaturated fats, meat and dairy can help you maintain a steady weight. Having a 
                good variety of these foods every day leaves less room for foods that are high in fat and sugar - a leading cause of weight gain.</p>
            <p>
              Together with exercise, eating a healthy diet in the right proportions can also help you lose weight, lower your cholesterol levels and blood pressure and decrease your risk of type 2 diabetes.
            </p>
            </div>
          </div>
          <div className="cols col-2">
            <div className="cols">
              <img src={aboutImg}/>
            </div>
            <div className="cols">
              <ul className="check">
                <li><BsCheck2All fill="#8ec038" size={20}/> Reduces weight</li>
                <li><BsCheck2All fill="#8ec038" size={20}/> Exact calorie content</li>
                <li><BsCheck2All fill="#8ec038" size={20}/> Improves health</li>
                <li><BsCheck2All fill="#8ec038" size={20}/> No sugar and gluten</li>
                <li><BsCheck2All fill="#8ec038" size={20}/> Adds strength and energy</li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  );
}

//body layout will have search and restaurant cards
const BodyLayout = () => {
  return (
    <div className="body-layout">
        <AboutComponent/>
        <div className="container">
          <div className="search-wrap">search here</div>
          <div className="card-listing">
            <div className="section-heading">
              <h2 className="heading-center"><span>Choose your favourite Food</span> <SlEmotsmile fill="#8ec038" size={35}/></h2>    
            </div>
            <div className="card-grid">
              {resList.map((restaurant) => 
                (<RestaurantCard key={restaurant.data.id} resData={restaurant}/>)
              )}
            </div>
          </div>
        </div>
    </div>
  );
}

//footer component
const FooterLayout = () => {
  return (
    <div className="footer-layout">
      <div className="footer-divider">
          <div className="custom-shape-divider-bottom-1682958298">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
              </svg>
          </div>
          <div className="custom-shape-divider-bottom-1682957892">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
          </div>
      </div>
      <footer className="footer">
          <div className="container">
            <div className="footer-col">
                <div className="footer-logo">
                    <img src={footerLogo} alt="footer-logo"/>
                </div>
                <br/>
            </div>
            <div className="footer-col">
                <h2 className="footer-title">Explore</h2>
                <ul className="footer-list">
                  <li><FiChevronRight stroke="#8ec038"/><a>Home</a></li>
                  <li><FiChevronRight stroke="#8ec038"/><a>About</a></li>
                  <li><FiChevronRight stroke="#8ec038"/><a>Restaurant</a></li>
                </ul>
            </div>
            <div className="footer-col">
              <h2 className="footer-title">Contact Us</h2>
              <div className="footer-widget">
                  <h3 className="footer-subtitle"><IoLocationOutline stroke="#8ec038"/> Our Location</h3>
                  <p>Hiranandani Estate, Thane, <br />Maharashtra 400607</p>
              </div>
              <div className="footer-widget">
                  <h3 className="footer-subtitle"><FiPhoneCall stroke="#8ec038"/> React Out Us</h3>
                  <p><a href="tel:+91 9876543211">+91 9876543211</a></p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
              <p>Design & Developed By Nisha Prasad !!</p>
          </div>
      </footer>
    </div>
  );
}

//main layout
const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent/>
      <BodyLayout/>
      <FooterLayout/>
    </div>
  );
}

//create root element to render above tag, here we have use RectDOM as we are creating the structure.
const root = ReactDOM.createRoot(document.getElementById("root"));
//display in html
root.render(<AppLayout/>);
