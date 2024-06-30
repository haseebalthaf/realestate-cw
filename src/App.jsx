import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/navigation-bar/navigationBar";
import { Footer } from "./components/footer/footer";
import Home from "./pages/page-index";
import Browse from "./pages/page-browse";

function App() {
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
