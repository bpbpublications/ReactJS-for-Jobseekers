import React from "react";
import classes from "./App.module.css";
import axiosClient from "./axiosClient";

class App extends React.Component {
  state = {
    todoList: null
  };
  componentDidMount() {
    axiosClient
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => {
        this.setState({ todoList: response.data });
      })
      .catch((error) => {
        console.log(error.toString());
      });
  }

  onDeleteTODOCick = (todoID) => {
    axiosClient
      .delete(`https://jsonplaceholder.typicode.com/todos/${todoID}`)
      .then((response) => {
        alert("TODO Deleted Successfully");
      })
      .catch((error) => {
        alert("TODO Deletion Failed");
      });
  };

  render() {
    const todoCards =
      this.state.todoList &&
      this.state.todoList.map((item) => {
        return (
          <div className={classes.TODOCard}>
            <h3 className={classes.TODOHeading}>{item.title}</h3>
            <img
              onClick={() => this.onDeleteTODOCick(item.id)}
              className={classes.DeleteIcon}
              src="https://icons.veryicon.com/png/o/construction-tools/coca-design/delete-189.png"
              alt="Delete Icon"
            />
          </div>
        );
      });
    return <div className={classes.MainContainer}>{todoCards}</div>;
  }
}

export default App;
