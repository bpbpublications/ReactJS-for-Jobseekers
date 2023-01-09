import React from "react";
import axios from "axios";
import classes from "./App.module.css";

export default class App extends React.Component {
  state = {
    users: null
  };

  getUserList = () => {
    axios.get("https://reqres.in/api/users?page=2")
    .then(res => {
      this.setState({users: res.data.data})
    })
    .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getUserList();
  }

  renderUserCard = ({id, first_name, last_name, avatar, email}) => {
    return (
      <div key={id} className={classes.UserCard}>
        <img className={classes.Avatar} alt={first_name} src={avatar} />
        <div className={classes.UserMetaData}>
          <h3 className={classes.UserFullName}>{`${first_name} ${last_name}`}</h3>
          <p className={classes.UserEmail}>{email}</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={classes.MainContainer}>
        {this.state.users && this.state.users.map(this.renderUserCard)}
      </div>
    );
  }
}
