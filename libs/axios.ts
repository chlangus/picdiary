import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://diary.es6.kr",
});

export default axiosInstance;
