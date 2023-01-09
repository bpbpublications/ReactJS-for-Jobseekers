import axios from "axios";
import { useState, useEffect } from "react";
import classes from "./App.module.css";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch();
  }, []);

  return (
    <div className={classes.MainContainer}>
      {users &&
        users.map((item) => (
          <div key={item.id} className={classes.UserCard}>
            <p
              classes={classes.UserName}
            >{`${item.first_name} ${item.last_name}`}</p>
          </div>
        ))}
    </div>
  );
}
