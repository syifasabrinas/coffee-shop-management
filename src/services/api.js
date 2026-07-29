import axios from "axios";

export default axios.create({
  baseURL: "https://6a4cebd6e1cf82a4a17dcb2e.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});