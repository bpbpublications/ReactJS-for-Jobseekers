import axios from "axios";

const axiosClient = axios.create();

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  axiosClient.defaults.baseURL = "https://dev.blues.com/api/";
} else {
  axiosClient.defaults.baseURL = "https://live.blues.com/api/";
}

axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authentication: localStorage.getItem("KEY_TOKEN") //This is just for demo
};

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000;

//request interceptor
axios.interceptors.request.use(
  function (request) {
    request.headers["Content-Type"] = "multipart/form-data";
    return request;
  },
  null,
  { synchronous: true }
);

//response interceptor
axios.interceptors.response.use(
  function (response) {
    //Dispatch any action on success
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      //Add Logic to
      //1. Redirect to login page or
      //2. Request refresh token
    } else if (error.response.status === 404) {
      //Add Logic to Redirect to 404 Not found page
    } else if (error.response.status === 500) {
      //Add Logic to Redirect to 500 Something went wrong page
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
