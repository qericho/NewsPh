import { create } from "zustand";
import api from "../api/api";

const useNewsStore = create((set) => ({
  articles: [],
  loading: false,
  error: null,
  category: "general",

  fetchArticles: async (category = "general") => {
    set({ loading: true, error: null, category });
    console.log("Fetching category:", category);

    try {
      const response = await api.get("/top-headlines", {
        params: { category: category.toLowerCase() },
      });
      console.log("Articles fetched:", response.data.articles.length);
      set({ articles: response.data.articles, loading: false });
    } catch (err) {
      console.error("Error fetching news:", err.response?.data || err.message);
      set({ error: "Failed to fetch news", loading: false });
    }
  },
}));

export default useNewsStore;
