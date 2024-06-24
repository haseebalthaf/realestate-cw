/* eslint-disable react/prop-types */
import { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "../styles/modalTabs.css";

function ModalTabs({ selectedProperty }) {
  const [activeTab, setActiveTab] = useState("desc");

  const handleTabSelect = (key) => {
    setActiveTab(key);
  };

  return (
    <Tabs
      activeKey={activeTab}
      onSelect={handleTabSelect}
      className="modalTabsContainer"
    >
      <Tab eventKey="desc" title="Description">
        {activeTab === "desc" && selectedProperty && (
          <div>
            <p>{selectedProperty.description}</p>
          </div>
        )}
      </Tab>
      <Tab eventKey="fPlan" title="Floorplan">
        {activeTab === "fPlan" && selectedProperty && (
          <div>
            <img
              className="floorPlan"
              src={selectedProperty.floorplan}
              alt="Floorplan"
            />
          </div>
        )}
      </Tab>
      <Tab eventKey="gMap" title="Google Maps">
        {activeTab === "gMap" && (
          <div>
            <iframe
              title="Google Map"
              width="100%"
              height="400"
              style={{ border: 0 }}
              src={selectedProperty.url}
              allowFullScreen
            ></iframe>
          </div>
        )}
      </Tab>
      <Tab eventKey="intPic" title="Interior">
        {activeTab === "intPic" &&
          selectedProperty &&
          selectedProperty.interior &&
          selectedProperty.interior.length > 0 && (
            <div>
              <Carousel className="carousel" interval={null} controls={false}>
                <Carousel.Item className="carouselItem">
                  <div className="intPicCarousel">
                    {selectedProperty.interior.map((imagePath, index) => (
                      <img
                        key={index}
                        className="intPic"
                        src={imagePath}
                        alt={`Interior ${index + 1}`}
                      />
                    ))}
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          )}
      </Tab>
    </Tabs>
  );
}

export default ModalTabs;