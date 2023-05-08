//importing react when cdn links are removed
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyLayout from "./components/Body";
import FooterLayout from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";

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

// always create appRouter below app layout
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "about-us",
    element: <About />,
  },
]);

//create root element to render above tag, here we have use RectDOM as we are creating the structure.
const root = ReactDOM.createRoot(document.getElementById("root"));
//display in html
root.render(<RouterProvider router={appRouter} />);
