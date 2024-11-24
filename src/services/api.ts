import axios from "axios";

const api = axios.create({
  baseURL: "http://fake-api.tractian.com", // Replace with your base URL
  timeout: 10000, // Optional: Set a timeout for requests
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
