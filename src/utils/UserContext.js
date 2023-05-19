import { createContext } from "react";

const UserContext = createContext({
  // pass default data objects
  user: {
    name: "Dummy Name",
    email: "nisha@gmail.com",
    address: "Mumbai",
    job: "Software Developer",
    company: "Andheri",
    website: "Food Website",
  },
});

export default UserContext;
