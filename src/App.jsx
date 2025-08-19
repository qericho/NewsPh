import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route, useParams } from "react-router-dom";

const NewsWrapper = () => {
  const { category } = useParams();
  return <News category={category || "general"} />;
};

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<News category="general" />} />
      <Route path="/:category" element={<NewsWrapper />} />
    </Routes>
    <Footer />
  </>
);

export default App;
