import "react-widgets/styles.css";
import "../styles/search.css";
import "../styles/property.css";
import { BsSearch, BsListUl } from "react-icons/bs";
import { useState } from "react";
import Properties from "../../public/properties.json";

const SearchBar = () => {
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [location, setLocation] = useState("");

  const handleLocationChange = (event) => {
    setLocation(event.target.value.toLowerCase());
    const filtered = Properties.properties.filter((property) =>
      property.location.toLowerCase().includes(location)
    );
    setFilteredLocations(
      filtered.map((p) => ({
        location: p.location,
        picture: p.picture,
        price: p.price,
        description: p.description,
      }))
    );
  };

  return (
    <form>
      <div className="searchBox">
        <h1>
          <BsSearch style={{ paddingRight: "1rem" }} />
          Search Filter
        </h1>
        {/* Postal Code */}
        <input
          className="searchInput"
          style={{ marginTop: "10px", marginBottom: "20px" }}
          placeholder="Search your location here..."
          value={location}
          onChange={handleLocationChange}
        />
        <hr />
        <div style={{ display: "flex", marginBottom: "30px" }}>
          {/* Type of Property */}
          <select
            style={{ marginTop: "30px", marginRight: "20px" }}
            className="dropdown"
            name="type"
            id="type"
          >
            <option>Select the property type</option>
            <option value="any">Any</option>
            <option value="flat">Flat</option>
            <option value="house">House</option>
          </select>
          {/* Number of Bedrooms */}
          <select
            style={{ marginTop: "30px", marginRight: "20px" }}
            className="dropdown"
            name="type"
            id="type"
          >
            <option>Number of bedrooms</option>
            <option value="one">1</option>
            <option value="two">2</option>
            <option value="three">3</option>
            <option value="four">4</option>
          </select>
          <div style={{ marginTop: "30px", marginLeft: "20px" }}>
            <input className="checkbox" type="checkbox" />
            <label style={{ paddingLeft: "10px" }}>Favorites</label>
          </div>
        </div>
        <hr />
      </div>

      <div className="resultsBox">
        <h1>
          <BsListUl style={{ paddingRight: "1rem" }} />
          Filtered Properties
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {filteredLocations.length > 0 ? (
            filteredLocations.map((property) => (
              <div className="cardsContainer" key={property.location}>
                <img
                  className="propertyPicture"
                  src={property.picture}
                  alt={property.location}
                />
                <h2 style={{ marginLeft: "1rem", fontSize: "1rem" }}>
                  {property.location}
                </h2>
                <div style={{ margin: "1rem", textAlign: "center" }}>
                  <p><b>Price:</b> £{property.price}</p>
                  <p style={{width: "500px"}}>{property.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="alertText">
              Empty results, please search your desired property on the search
              box!
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
