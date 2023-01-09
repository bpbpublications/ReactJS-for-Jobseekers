import classes from "./App.module.css";
import { useGETAPIRequest } from "./useGETAPIRequest";

export default function App() {
  const { data, isLoading, error } = useGETAPIRequest(
    "https://reqres.in/api/users?page=2"
  );

  return (
    <div className={classes.MainContainer}>
      {isLoading ? <h1>Loading ... </h1> : null}
      {error ? error.toString() : null}
      {data &&
        data.data &&
        data.data.map((item) => (
          <div key={item.id} className={classes.UserCard}>
            <p
              classes={classes.UserName}
            >{`${item.first_name} ${item.last_name}`}</p>
          </div>
        ))}
    </div>
  );
}
