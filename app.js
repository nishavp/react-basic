//creating nested elements in react
const parent = React.createElement(
    "div",{id:"parent"},
    React.createElement("div",{id:"child"},
    React.createElement("h1",{},"This h1 new tag"))
)


//create basic tag insert in HTML using react
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


