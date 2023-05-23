//importing react when cdn links are removed
import React, { lazy, Suspense, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Contact from "./components/Contact";
import BodyLayout from "./components/Body";
import FooterLayout from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import ProfileClass from "./components/ProfileClass";
import CardShimmer from "./components/CardShimmer";
import Cart from "./components/Cart";
import AccordionExample from "./components/AccordionExample";
import UserContext from "./utils/userContext";
import ContextExample from "./components/ContextExample";
// connection of store to react application
import { Provider } from "react-redux";
import store from "./utils/store";

// to create separate bundle, we have to create dynamic import
const Instamart = lazy(() => import("./components/Instamart"));

//main layout
const AppLayout = () => {
  // set the dynamic data
  const [user, setUser] = useState({
    user: {
      name: "Nisha Prasad",
      email: "nisha@gmail.com",
      address: "Mumbai",
      job: "Software Developer",
      company: "Andheri",
      website: "Food Website",
    },
  });

  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <div className="app">
          <HeaderComponent />
          <Outlet />
          <FooterLayout />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

// always create appRouter below app layout
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyLayout />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", // It will create sub path => http://localhost:1234/about/profile
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "accordion",
        element: <AccordionExample />,
      },
      {
        path: "context-example",
        element: <ContextExample />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:restaurantId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<CardShimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

//create root element to render above tag, here we have use RectDOM as we are creating the structure.
const root = ReactDOM.createRoot(document.getElementById("root"));
//display in html
root.render(<RouterProvider router={appRouter} />);
