// example for class based component
import React from "react";

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
        <h3>
          Class Component Example By : {this.state.userInfo?.name} created at{" "}
          {this.state.userInfo?.created_at}
        </h3>
        <p>Counter 1 : {count1}</p>
        <p>Counter 2 : {count2}</p>
        <button
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
      </div>
    );
  }
}

export default ProfileClass;
