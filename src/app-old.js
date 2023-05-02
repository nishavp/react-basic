//importing react when cdn links are removed
import React from "react";
import ReactDOM from "react-dom/client";


//creating nested complex elements using react
const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"This h1 new tag in child 1"),
        React.createElement("h2",{},"This h2 new tag in child 1"),
        React.createElement("p",{},"This p new tag in child 1")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"This h1 new tag in child 2"),
        React.createElement("h2",{},"This h2 new tag in child 2"),
        React.createElement("p",{},"This p new tag in child 2")
    ]),
    React.createElement("div",{id:"child3"},[
        React.createElement("h1",{},"This h1 new tag in child 3"),
        React.createElement("h2",{},"This h2 new tag in child 3"),
        React.createElement("p",{},"This p new tag in child 3")
    ])]
);


//create basic single tag insert in HTML using react
// const heading = React.createElement(
//     "h1",
//     {
//         id:"heading-id",className:"heading-wrap",
//     },
//     "Hii, this is text inserted from react");
// console.log(heading);

//create root element to render above tag, here we have use RectDOM as we are creating the structure.
const root = ReactDOM.createRoot(document.getElementById('root'));
//display in html
root.render(parent);


