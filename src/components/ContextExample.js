import { useContext } from "react";
import UserContext from "../utils/userContext";

const ContextExample = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="main-section">
      <div className="container">
        <div className="mt-[50px] mb-[50px]">
          <h2 className="font-bold text-[25px]">
            Example : How to change UserContext Data overall in the website
            globally
          </h2>
          <br />

          <h2 className="font-bold text-[20px] mb-4 underline underline-offset-4">
            User Information
          </h2>
          <div className="input-wraps mb-4 flex gap-5">
            <label className="min-w-[130px]">Enter Name : </label>
            <input
              className="border border-black rounded px-2 py-1 text-[15px]"
              value={user.name}
              onChange={(e) =>
                setUser({
                  ...user,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div className="input-wraps mb-4 flex gap-5">
            <label className="min-w-[130px]">Enter Email : </label>
            <input
              className="border border-black rounded px-2 py-1 text-[15px]"
              value={user.email}
              onChange={(e) =>
                setUser({
                  ...user,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className="input-wraps mb-4 flex gap-5">
            <label className="min-w-[130px]">Enter Address : </label>
            <input
              className="border border-black rounded px-2 py-1 text-[15px]"
              value={user.address}
              onChange={(e) =>
                setUser({
                  ...user,
                  address: e.target.value,
                })
              }
            />
          </div>
          <div className="input-wraps mb-4 flex gap-5">
            <label className="min-w-[130px]">Enter Job : </label>
            <input
              className="border border-black rounded px-2 py-1 text-[15px]"
              value={user.job}
              onChange={(e) =>
                setUser({
                  ...user,
                  job: e.target.value,
                })
              }
            />
          </div>
          <div className="input-wraps mb-4 flex gap-5">
            <label className="min-w-[130px]">Enter Company : </label>
            <input
              className="border border-black rounded px-2 py-1 text-[15px]"
              value={user.company}
              onChange={(e) =>
                setUser({
                  ...user,
                  company: e.target.value,
                })
              }
            />
          </div>
          <div className="input-wraps mb-4 flex gap-5">
            <label className="min-w-[130px]">Enter Website : </label>
            <input
              className="border border-black rounded px-2 py-1 text-[15px]"
              value={user.website}
              onChange={(e) =>
                setUser({
                  ...user,
                  website: e.target.value,
                })
              }
            />
          </div>

          <br />
          <h2 className="font-bold text-[20px] mb-4 underline underline-offset-4">
            User Details
          </h2>
          <div className="w-[50%]">
            <p className="grid grid-cols-3">
              <span className="font-bold">Name</span>
              <span className="font-bold">:</span>
              <span>{user.name}</span>
            </p>
            <p className="grid grid-cols-3">
              <span className="font-bold">Email</span>
              <span className="font-bold">:</span>
              <span>{user.email}</span>
            </p>
            <p className="grid grid-cols-3">
              <span className="font-bold">Address</span>
              <span className="font-bold">:</span>
              <span>{user.address}</span>
            </p>
            <p className="grid grid-cols-3">
              <span className="font-bold">Job</span>
              <span className="font-bold">:</span>
              <span>{user.job}</span>
            </p>
            <p className="grid grid-cols-3">
              <span className="font-bold">Company</span>
              <span className="font-bold">:</span>
              <span>{user.company}</span>
            </p>
            <p className="grid grid-cols-3">
              <span className="font-bold">Website</span>
              <span className="font-bold">:</span>
              <span>{user.website}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContextExample;
