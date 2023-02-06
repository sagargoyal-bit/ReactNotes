import Profile from "./Profile";
import React from "react";

class About extends React.Component {
  constructor(Props) {
    super(Props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
  }
  componentDidUpdate() {
  }
  render() {
    return (
      <>
        <h1>This Is About Us Page</h1>
        <button
          onClick={() => {
            this.setState({ count: 1 });
          }}
        >
          parent count
        </button>
        <Profile />
      </>
    );
  }
}


export default About