import Properties from "./properties.json";
import {
  BsList,
  BsHouseAdd,
  BsArrowUpRightSquare,
  BsHouseCheck,
  BsHouseDash,
  BsHouseDashFill,
} from "react-icons/bs";
import "react-tabs/style/react-tabs.css";
import ModalTabs from "./modalTabs";
import { useModal } from "./modalFunction";
import { useFavorites } from "./favoritesFunction";
import "../styles/browse.css";

export const Property = () => {
  const { favorites, addToFavorites, removeFromFavorites, clearFavorites } =
    useFavorites();
  const { isModalOpen, openModal, closeModal, selectedProperty } = useModal();

  return (
    <>
      <div className="propertiesContainer">
        <h1>
          <BsList style={{ paddingRight: "1rem" }} />
          List of Properties
        </h1>
        {Properties.properties.map((property) => (
          <div className="cardsContainer" key={property.id}>
            <img
              className="propertyPicture"
              src={property.picture}
              alt={`Property ${property.id}`}
            />
            <h2 style={{ marginLeft: "1rem", fontSize: "1rem" }}>
              {property.location}
            </h2>
            <div style={{ margin: "1rem", textAlign: "center" }}>
              <p>Type: {property.type}</p>
              <p>Price: £{property.price}</p>
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
        ))}
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
            {favorites.length > 0 && (
              <button className="clearListBtn" onClick={clearFavorites}>
                <BsHouseDashFill /> Clear List
              </button>
            )}
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
                <p>Type: {favorite.type}</p>
                <p>Price: £{favorite.price}</p>
              </div>
              <button
                className="cardBtns"
                onClick={() => removeFromFavorites(favorite.id)}
                type="button"
              >
                <BsHouseDash />
              </button>
              <br />
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

export default Property;
