// example for class based component
import React from "react";
import UserContext from "../utils/userContext";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    // create the state
    this.state = {
      count1: 0,
      count2: 0,
      userInfo: {
        name: "Hello",
        created_at: "2018",
      },
    };
    console.log("constructor");
  }

  // API call in class component
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/nishavp");
    const json = await data.json();
    // directly set the value using setState
    this.setState({ userInfo: json });
    //console.log("Child component did mount");
  }

  componentDidUpdate() {
    //console.log("componenetDidUpdated Called");
  }

  componentWillUnmount() {
    //console.log("componentWillUnmount Called");
  }

  render() {
    console.log("render");
    // can be written in this way also called destructing
    const { count1, count2 } = this.state;
    return (
      <div className="container">
        <br />
        <h2 className="font-bold text-[20px]">
          Example : How to show data in Class Component
        </h2>
        <h3>
          By : {this.state.userInfo?.name} created at{" "}
          {this.state.userInfo?.created_at}
        </h3>
        <p>Counter 1 : {count1}</p>
        <p>Counter 2 : {count2}</p>
        <button
          className="px-4 py-2 rounded bg-[#8ec038] text-[#fff] mt-2 mr-4 mb-4"
          onClick={() => {
            // NEVER DO THIS => this.state always use setState to update the variables
            this.setState({ count1: count1 + 1 });
            this.setState({ count2: count2 + 1 });
          }}
        >
          Increase Count
        </button>{" "}
        &nbsp;
        <button
          className="px-4 py-2 rounded bg-[#8ec038] text-[#fff] mt-2 mr-4 mb-4"
          onClick={() => {
            count1 == 0
              ? this.setState({ count1: 0 })
              : this.setState({ count1: count1 - 1 });
            count2 == 0
              ? this.setState({ count2: 0 })
              : this.setState({ count2: count2 - 1 });
          }}
        >
          Decrease Count
        </button>
        <br />
        <br />
        <div className="mb-4">
          <h2 className="font-bold text-[20px]">
            Example : How to show UserContext Data in Class Component
          </h2>
          <p>
            So to show we basically write as a component and pass user object in
            the function
          </p>
          <br />
          <h2 className="font-bold text-[16px] underline underline-offset-4 mb-2">
            User Information
          </h2>
          <UserContext.Consumer>
            {({ user }) => (
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
            )}
          </UserContext.Consumer>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default ProfileClass;
