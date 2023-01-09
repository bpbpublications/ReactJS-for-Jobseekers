import axios from "axios";
import React from "react";
import classes from "./App.module.css";

export default class App extends React.Component {
  onFormSubmit(e) {
    e.preventDefault();

    //I have hardcoded the data for simplicity but in real-app we will have to fetch that data from the form fields.

    const data = {
      title: "How to write clean React code? [Updated]",
      description: "It's pretty simple - follow DRY [Updated]"
    };

    axios
      .put("https://jsonplaceholder.typicode.com/posts", data)
      .then((response) => {
        alert("Post updated successfully!");
      })
      .catch((error) => {
        alert("Post updation failed!");
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className={classes.BlogForm}>
          <input type="text" name="title" placeholder="Enter Blog Title" />
          <textarea
            name="description"
            placeholder="Enter Blog Description"
          ></textarea>

          <input type="submit" label="Create Blog" />
        </form>
      </div>
    );
  }
}
