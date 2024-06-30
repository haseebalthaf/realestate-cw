import "react-widgets/styles.css";
import "../styles/search.css";
import "../styles/property.css";
import { BsSearch, BsListUl } from "react-icons/bs";
import { useState, useEffect } from "react";
import Properties from "../../public/properties.json";

const Search = () => {
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [location, setLocation] = useState("");
  const [selectedType, setSelectedType] = useState("any");
  const [minBedrooms, setMinBedrooms] = useState("");
  const [maxBedrooms, setMaxBedrooms] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    filterProperties();
  }, [location, selectedType, minBedrooms, maxBedrooms, minPrice, maxPrice]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value.toLowerCase());
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value.toLowerCase());
  };

  const handleMinBedroomsChange = (event) => {
    setMinBedrooms(event.target.value);
  };

  const handleMaxBedroomsChange = (event) => {
    setMaxBedrooms(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const filterProperties = () => {
    const filtered = Properties.properties.filter((property) => {
      const matchesLocation = property.location.toLowerCase().includes(location);
      const matchesType = selectedType === "any" || property.type.toLowerCase() === selectedType;
      const matchesMinBedrooms = minBedrooms === "" || property.bedrooms >= parseInt(minBedrooms);
      const matchesMaxBedrooms = maxBedrooms === "" || property.bedrooms <= parseInt(maxBedrooms);
      const matchesMinPrice = minPrice === "" || property.price >= parseInt(minPrice);
      const matchesMaxPrice = maxPrice === "" || property.price <= parseInt(maxPrice);

      return (
        matchesLocation &&
        matchesType &&
        matchesMinBedrooms &&
        matchesMaxBedrooms &&
        matchesMinPrice &&
        matchesMaxPrice
      );
    });
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
        <input
          className="searchInput"
          style={{ marginTop: "10px", marginBottom: "20px" }}
          placeholder="Search your location here..."
          value={location}
          onChange={handleLocationChange}
        />
        <div style={{ display: "flex", gap: "30px" }}>
          <input
            className="searchInput"
            style={{ marginTop: "10px", marginBottom: "20px" }}
            placeholder="Minimum number of bedrooms..."
            value={minBedrooms}
            onChange={handleMinBedroomsChange}
          />
          <input
            className="searchInput"
            style={{ marginTop: "10px", marginBottom: "20px" }}
            placeholder="Maximum number of bedrooms..."
            value={maxBedrooms}
            onChange={handleMaxBedroomsChange}
          />
        </div>
        <div style={{ display: "flex", gap: "30px" }}>
          <input
            className="searchInput"
            style={{ marginTop: "10px", marginBottom: "20px" }}
            placeholder="Minimum price..."
            value={minPrice}
            onChange={handleMinPriceChange}
          />
          <input
            className="searchInput"
            style={{ marginTop: "10px", marginBottom: "20px" }}
            placeholder="Maximum price..."
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>
        <hr />
        <div style={{ display: "flex", marginBottom: "30px" }}>
          <select
            style={{ marginTop: "30px", marginRight: "20px" }}
            className="dropdown"
            name="type"
            id="type"
            value={selectedType}
            onChange={handleTypeChange}
          >
            <option value="any">All</option>
            <option value="flat">Flat</option>
            <option value="house">House</option>
          </select>
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
                  <p>
                    <b>Price:</b> £{property.price}
                  </p>
                  <p style={{ width: "500px" }}>{property.description}</p>
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

export default Search;
