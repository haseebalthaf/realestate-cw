import DropdownList from "react-widgets/DropdownList";
import Combobox from "react-widgets/Combobox";
import NumberPicker from "react-widgets/NumberPicker";
import DatePicker from "react-widgets/DatePicker";
import { BsSearch } from "react-icons/bs";
import "react-widgets/styles.css";
import "../styles/browse.css";

const SearchBar = () => {
  return (
    <form>
      {/* Search bar */}
      <h1>
        <BsSearch style={{ paddingRight: "1rem" }} />
        Search Filter
      </h1>

      {/* Postal Code */}
      <div style={{ padding: "1rem" }}>
        <label>Postal code of the area</label>
        <Combobox
          style={{ paddingTop: "0.25rem" }}
          hideCaret
          hideEmptyPopup
          // data={[]}
          placeholder="Click to type here..."
        />

        <hr style={{ margin: "1rem" }} />

        <div style={{ display: "flex", marginTop: "1rem" }}>
          {/* Type of Apartment */}
          <div style={{ marginRight: "1rem" }}>
            <label>Type of Property</label>
            <DropdownList
              style={{ paddingTop: "0.25rem" }}
              defaultValue="Any"
              data={["Any", "Flat", "House"]}
            />
          </div>

          {/* Price range */}
          <div style={{ marginRight: "1rem" }}>
            <label>Price (£)</label>
            <NumberPicker style={{ paddingTop: "0.25rem" }} defaultValue={0} />
            <NumberPicker
              style={{ paddingTop: "0.25rem" }}
              defaultValue={10000}
            />
          </div>

          {/* Bedrooms */}
          <div style={{ marginRight: "1rem" }}>
            <label>Number of Bedrooms</label>
            <NumberPicker style={{ paddingTop: "0.25rem" }} defaultValue={1} />
          </div>

          {/* Date range */}
          <div style={{ marginRight: "1rem" }}>
            <label>Date Added</label>
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: "0.5rem" }}>
                <DatePicker
                  style={{ paddingTop: "0.25rem" }}
                  defaultValue={new Date()}
                  valueFormat={{ dateStyle: "medium" }}
                />
                <label style={{ color: "#909090" }}>From</label>
              </div>
              <div>
                <DatePicker
                  style={{ paddingTop: "0.25rem" }}
                  defaultValue={new Date()}
                  valueFormat={{ dateStyle: "medium" }}
                />
                <label style={{ color: "#909090" }}>To</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Search button */}
      <button className="searchBtn" type="button">
        <BsSearch style={{ paddingRight: "1rem" }} />
        Search
      </button>
    </form>
  );
};
export default SearchBar;
