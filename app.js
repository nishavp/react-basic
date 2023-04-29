//importing react when cdn links are removed
import React from "react";
import ReactDOM from "react-dom/client";

//new code introduction to JSX
const parent = <h1>Hi nisha here</h1>;


//create root element to render above tag, here we have use RectDOM as we are creating the structure.
const root = ReactDOM.createRoot(document.getElementById('root'));
//display in html
root.render(parent);


