import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/navigation-bar/navigationBar";
import { Footer } from "./components/footer/footer";
import Home from "./pages/page-index";
import Browse from "./pages/page-browse";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [location.pathname]);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
