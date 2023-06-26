import axios from "axios";
const axiosApi = axios.create({
  baseURL: "https://tame-tan-cockroach-boot.cyclic.app",
  headers: {
    "Content-Type": "application/jsons",
  },
});

export default axiosApi;
