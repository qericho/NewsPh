const truncate = (text, maxLength) => {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const NewsCard = ({ article }) => {
  return (
    <div className="hover:scale-105 duration-300 flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-80 h-[500px]">
      {/* Image */}
      <div className="h-50 overflow-hidden rounded-t-lg">
        <img
          src={
            article.urlToImage ||
            "https://via.placeholder.com/400x250?text=No+Image"
          }
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h6 className="mb-2 text-slate-800 text-lg font-semibold">
          {truncate(article.title, 50)}
        </h6>
        <p className="text-slate-600 text-sm flex-1">
          {truncate(article.description, 150) || "No description available."}
        </p>
      </div>

      {/* Read More Button */}
      <div className="px-4 pb-4 pt-0 mt-2">
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center rounded-md bg-slate-800 py-2 px-4 text-sm text-white shadow-md transition hover:shadow-lg focus:bg-slate-700"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
