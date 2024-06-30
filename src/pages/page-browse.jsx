import { windowTitle } from "../components/documentTitle";
import Search from "../components/search";
import "../styles/index.css";

const Browse = () => {
  windowTitle("Properties | Browse");
  return (
    <>
      <Search />
      <br />
    </>
  );
};

export default Browse;
