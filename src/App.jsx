import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/navigation-bar/navigationBar";
import { Footer } from "./components/footer/footer";
import Home from "./pages/page-index";
import Listings from "./pages/page-properties";
import Search from "./pages/page-search";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<Listings />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
