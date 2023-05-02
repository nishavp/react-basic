//importing react when cdn links are removed
import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyLayout from "./components/Body";
import FooterLayout from "./components/Footer";

//main layout
const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyLayout />
      <FooterLayout />
    </div>
  );
};

//create root element to render above tag, here we have use RectDOM as we are creating the structure.
const root = ReactDOM.createRoot(document.getElementById("root"));
//display in html
root.render(<AppLayout />);
