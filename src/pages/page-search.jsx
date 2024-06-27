import { windowTitle } from "../components/documentTitle";
import SearchBar from "../components/searchBar";
import "../styles/index.css";

const Search = () => {
  windowTitle("Properties | Search");
  return (
    <>
      <SearchBar />
      <br />
    </>
  );
};

export default Search;
