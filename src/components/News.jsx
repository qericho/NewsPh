import NewsCard from "./NewsCard";
const News = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-5 my-10">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="text-3xl font-bold text-slate-800">Latest News</h2>
          <p className="text-slate-800 mt-2">
            Stay updated with the most recent headlines across the Philippines.
          </p>
        </div>

        {/* News Grid */}
        <div
          className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 
          place-items-center"
        >
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </section>
  );
};

export default News;
