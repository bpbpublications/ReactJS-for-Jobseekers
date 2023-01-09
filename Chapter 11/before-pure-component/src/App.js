import React, { PureComponent } from "react";

class App extends PureComponent {
  state = {
    name: "ReactJS"
  };

  updateGreeting = () => {
    this.setState({ name: "ReactJS" });
  };

  componentDidUpdate() {
    console.log("Rendering App Component");
  }

  render() {
    return (
      <div>
        <h1>Hello {`${this.state.name}`}</h1>
        <button onClick={this.updateGreeting}>Update Greetings!</button>
      </div>
    );
  }
}

export default App;
