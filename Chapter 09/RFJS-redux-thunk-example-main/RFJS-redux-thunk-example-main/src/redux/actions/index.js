import axios from "axios"

export const fetchUserList = () => {
    return (dispatch) => {
        axios.get("https://reqres.in/api/users?page=2")
        .then(res => dispatch({type: "FETCH_USER_LIST_DATA", payload: res.data.data }))
        .catch(err => dispatch({type: "FETCH_USER_LIST_DATA_FAILED", payload: err}))
    }
}