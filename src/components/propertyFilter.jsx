import "react-widgets/styles.css";
import "../styles/search.css";
import "../styles/property.css";
import {
  BsSearch,
  BsListUl,
  BsArrowUpRightSquare,
  BsHouseAdd,
  BsHouseDashFill,
  BsHouseCheck,
  BsHouseDash,
} from "react-icons/bs";
import { useState, useEffect } from "react";
import Properties from "../../public/properties.json";
import "react-tabs/style/react-tabs.css";
import ModalTabs from "./modalTabs";
import { useModal } from "./modalFunction";
import { useFavorites } from "./favoritesFunction";

const PropertyFilter = () => {
  const { favorites, addToFavorites, removeFromFavorites, clearFavorites } =
    useFavorites();
  const { isModalOpen, openModal, closeModal, selectedProperty } = useModal();
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
      const matchesLocation = property.location
        .toLowerCase()
        .includes(location);
      const matchesType =
        selectedType === "any" || property.type.toLowerCase() === selectedType;
      const matchesMinBedrooms =
        minBedrooms === "" || property.bedrooms >= parseInt(minBedrooms);
      const matchesMaxBedrooms =
        maxBedrooms === "" || property.bedrooms <= parseInt(maxBedrooms);
      const matchesMinPrice =
        minPrice === "" || property.price >= parseInt(minPrice);
      const matchesMaxPrice =
        maxPrice === "" || property.price <= parseInt(maxPrice);

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
        id: p.id,
        location: p.location,
        picture: p.picture,
        price: p.price,
        description: p.description,
        type: p.type,
        added: p.added,
        floorplan: p.floorplan,
        url: p.url,
        interior: p.interior,
        bedrooms: p.bedrooms,
      }))
    );
  };

  return (
    <>
      <form>
        <div className="searchBox">
          <h1>
            <BsSearch style={{ paddingRight: "1rem" }} />
            Search Filter
          </h1>
          <label className="inputLabel">
            Property Location
            <br />
          </label>
          <input
            className="searchInput"
            style={{ marginTop: "10px", marginBottom: "20px" }}
            placeholder="Search your location here..."
            value={location}
            onChange={handleLocationChange}
          />
          <div style={{ display: "flex", gap: "30px" }}>
            <div>
              <label className="inputLabel">
                Minimum Bedrooms
                <br />
              </label>
              <input
                className="searchInput"
                style={{ marginTop: "10px", marginBottom: "20px" }}
                placeholder="Minimum number of bedrooms..."
                value={minBedrooms}
                onChange={handleMinBedroomsChange}
              />
            </div>
            <div>
              <label className="inputLabel">
                Maximum Bedrooms
                <br />
              </label>
              <input
                className="searchInput"
                style={{ marginTop: "10px", marginBottom: "20px" }}
                placeholder="Maximum number of bedrooms..."
                value={maxBedrooms}
                onChange={handleMaxBedroomsChange}
              />
            </div>
          </div>
          <div style={{ display: "flex", gap: "30px" }}>
            <div>
              <label className="inputLabel">
                Minimum Price
                <br />
              </label>
              <input
                className="searchInput"
                style={{ marginTop: "10px", marginBottom: "20px" }}
                placeholder="Minimum price..."
                value={minPrice}
                onChange={handleMinPriceChange}
              />
            </div>
            <div>
              <label className="inputLabel">
                Maximum Price
                <br />
              </label>
              <input
                className="searchInput"
                style={{ marginTop: "10px", marginBottom: "20px" }}
                placeholder="Maximum price..."
                value={maxPrice}
                onChange={handleMaxPriceChange}
              />
            </div>
          </div>
          <div style={{ display: "flex", marginBottom: "30px" }}>
            <div>
              <label className="inputLabel">
                Property Type
                <br />
              </label>
              <select
                style={{ marginTop: "10px" }}
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
          </div>
        </div>
      </form>
      <div className="propertiesContainer">
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
              <div className="cardsContainer" key={property.id}>
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
                    <b>Type:</b> {property.type}
                  </p>
                  <p>
                    <b>Price:</b> £{property.price}
                  </p>
                  <p>
                    <b>Bedrooms:</b> {property.bedrooms}
                  </p>
                </div>
                <div>
                  <button
                    className="cardBtns"
                    onClick={() => addToFavorites(property)}
                    type="button"
                  >
                    <BsHouseAdd />
                  </button>
                  <button
                    className="cardBtns"
                    type="button"
                    onClick={() => openModal(property)}
                  >
                    <BsArrowUpRightSquare />
                  </button>
                </div>
                <br />
              </div>
            ))
          ) : (
            <p className="alertText">Uh oh! No result found!</p>
          )}
        </div>
      </div>
      {favorites.length > 0 && (
        <div className="favoritesContainer">
          <h1>
            <BsHouseCheck style={{ paddingRight: "1rem" }} />
            List of Favorites
          </h1>
          <div style={{ paddingLeft: "0.25rem" }}>
            <ul>
              {favorites.map((favorite) => (
                <li key={favorite.id}></li>
              ))}
            </ul>
            <button className="clearListBtn" onClick={clearFavorites}>
              <BsHouseDashFill /> Clear List
            </button>
          </div>
          {favorites.map((favorite) => (
            <div className="cardsContainer" key={favorite.id}>
              <img
                className="propertyPicture"
                src={favorite.picture}
                alt={`Property ${favorite.id}`}
              />
              <h2 style={{ marginLeft: "1rem", fontSize: "1rem" }}>
                {favorite.location}
              </h2>
              <div style={{ margin: "1rem", textAlign: "center" }}>
                <p><b>Type:</b> {favorite.type}</p>
                <p><b>Price:</b> £{favorite.price}</p>
                <p><b>Bedrooms:</b> {favorite.bedrooms}</p>
              </div>
              <div style={{ paddingBottom: "20px" }}>
                <button
                  className="cardBtns"
                  onClick={() => removeFromFavorites(favorite.id)}
                  type="button"
                >
                  <BsHouseDash />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {isModalOpen && (
        <div className="modalContainer">
          <div className="modalContent">
            <p>Type: {selectedProperty.type}</p>
            <p>Bedrooms: {selectedProperty.bedrooms}</p>
            <p>Location: {selectedProperty.location}</p>
            <p>Tenure: {selectedProperty.tenure}</p>
            <p>Price: £{selectedProperty.price}</p>
            <p>
              Date:{" "}
              {`${selectedProperty.added.day} ${selectedProperty.added.month} ${selectedProperty.added.year}`}
            </p>
            <ModalTabs selectedProperty={selectedProperty} />
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyFilter;
