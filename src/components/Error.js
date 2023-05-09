import { useRouteError } from "react-router-dom";
import HeaderComponent from "./Header";
import FooterLayout from "./Footer";

//error component
const Error = () => {
  // give access to useRouterError Hook to show proper error
  const err = useRouteError();
  // console.log(err);
  return (
    <>
      <HeaderComponent />
      <div className="error-wrap">
        <h2 className="green-text">Oops! Page Not Found</h2>
        <p>
          The page you are looking for was moved, removed, renamed or might
          never existed.
        </p>
        {/* <p>{err.status + " : " + err.statusText}</p> */}
      </div>
      <FooterLayout />
    </>
  );
};

export default Error;
