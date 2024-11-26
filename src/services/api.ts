import axios from "axios";

const api = axios.create({
  baseURL: "http://fake-api.tractian.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
