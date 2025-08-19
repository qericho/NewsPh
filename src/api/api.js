import axios from "axios";

const API_KEY = "47d07c6ca1164c6ea18711c63c85eb11";

const api = axios.create({
  baseURL: "https://newsapi.org/v2",
  params: { apiKey: API_KEY, country: "us" },
});

export default api;
