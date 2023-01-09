import React from "react";

class App extends React.Component {
  state = {
    name: "ReactJS"
  };

  updateGreeting = () => {
    this.setState({ name: "ReactJS" });
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.name !== this.state.name;
  }

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
