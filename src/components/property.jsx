import Properties from "../../public/properties.json";
import { BsList, BsArrowUpRightSquare } from "react-icons/bs";
import "react-tabs/style/react-tabs.css";
import ModalTabs from "./modalTabs";
import { useModal } from "./modalFunction";
import "../styles/property.css";

export const Property = () => {
  const { isModalOpen, openModal, closeModal, selectedProperty } = useModal();
  return (
    <>
      <div className="propertiesContainer">
        <h1>
          <BsList style={{ paddingRight: "1rem" }} />
          List of Properties
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
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
      </div>
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
