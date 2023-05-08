import { useRouteError } from "react-router-dom";

//error component
const Error = () => {
  // give access to useRouterError Hook to show proper error
  const err = useRouteError();
  // console.log(err);
  return (
    <>
      <p>Error page</p>
      <p>{err.status + " : " + err.statusText}</p>
    </>
  );
};

export default Error;
