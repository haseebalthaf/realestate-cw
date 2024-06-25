import { windowTitle } from "../components/documentTitle";
import Property from "../components/property";
import "../styles/index.css";

const Listings = () => {
  windowTitle("Properties | Listings");
  return (
    <>
      <Property />
      <br />
    </>
  );
};

export default Listings;
