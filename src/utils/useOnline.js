// This is custom feature hook to check whether user is online or offline. To use this check header component.
import { useState, useEffect } from "react";
const useOnline = () => {
  // create state for the same
  const [isOnline, setIsOnline] = useState(true);

  // to run code once we will use "useEffect" and pass empty dependency array
  useEffect(() => {
    // create function separately
    const handleOnline = () => {
      setIsOnline(true);
    };
    const handleOffline = () => {
      setIsOnline(false);
    };

    // Now here we will write to same logic to check
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // we need always clear the eventlistener from the component also (Unmounting)
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // return whether status is true or false
  return isOnline;
};

export default useOnline;
