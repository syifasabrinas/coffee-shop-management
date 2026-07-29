import axios from "axios";

export default axios.create({
  baseURL: "https://6a471b3ca268c8be2ce87ac2.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});