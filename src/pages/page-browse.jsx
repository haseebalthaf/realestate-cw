import { windowTitle } from "../components/documentTitle";
import PropertyFilter from "../components/propertyFilter";
import "../styles/index.css";

const Browse = () => {
  windowTitle("Properties | Browse");
  return (
    <>
      <PropertyFilter />
      <br />
    </>
  );
};

export default Browse;
