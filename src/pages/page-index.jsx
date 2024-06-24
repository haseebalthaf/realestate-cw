import { windowTitle } from "../components/documentTitle";
import "../styles/index.css";
import "../styles/home.css";

const Home = () => {
  windowTitle("Properties | Home");
  return (
    <>
      <section className="homeSection">
        <h1 className="homeTitle">Welcome to the Real Estate Heaven!</h1>
        <p className="homeSub">Use the buttons above to navigate!</p>
      </section>
    </>
  );
};

export default Home;
