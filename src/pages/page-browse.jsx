import { windowTitle } from "../components/documentTitle";
import SearchBar from "../components/searchBar"
import Property from "../components/property";
import "../styles/index.css";

const Browse = () => {
  windowTitle("Properties | Browse");
  return (
    <>
      <SearchBar />
      <Property />
      <br />
    </>
  );
};

export default Browse;
