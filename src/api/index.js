import axios from "axios";

const token = localStorage.getItem("PC-token");
const config = {
  baseURL: import.meta.env.VITE_API,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
  },
};

const axiosClient = axios.create(config);

axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;

axiosClient.interceptors.request.use(
  function (request) {
    request.headers["Content-Type"] = "multipart/form-data";
    return request;
  },
  null,
  { synchronous: true }
);

axiosClient.interceptors.response.use(
  function (response) {
    //Dispatch any action on success
    return response;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

export default axiosClient;