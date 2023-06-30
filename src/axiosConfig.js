import axios from "axios";
const axiosApi = axios.create({
  baseURL: "https://tame-tan-cockroach-boot.cyclic.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosApi;
