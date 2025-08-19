import { useEffect } from "react";
import NewsCard from "./NewsCard";
import useNewsStore from "../store/newsStore";
import Loader from "./Loader";

const News = ({ category = "general" }) => {
  const { articles, loading, error, fetchArticles } = useNewsStore();

  useEffect(() => {
    fetchArticles(category);
  }, [category, fetchArticles]);

  if (loading) return <Loader />;
  if (error)
    return <p className="text-red-500 text-center py-10">Error: {error}</p>;
  if (!articles || articles.length === 0)
    return (
      <p className="text-center py-10">No news available for {category}</p>
    );

  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto px-5 my-10">
          {/* Section Header */}
          <div className="text-center mb-5">
            <h2 className="text-3xl font-bold text-slate-800">Latest News</h2>
            <p className="text-slate-800 mt-2">
              Stay updated with the most recent headlines across the
              Philippines.
            </p>
          </div>

          {/* News Grid */}
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
            {articles.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
