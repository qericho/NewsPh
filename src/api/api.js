import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const api = axios.create({
  baseURL: "https://newsapi.org/v2",
  params: { apiKey: API_KEY, country: "us" },
});

export default api;
