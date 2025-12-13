import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.1.113:5000/api",
  timeout: 8000,
});
