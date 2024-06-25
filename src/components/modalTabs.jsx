/* eslint-disable react/prop-types */
import { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/property.css";

function ModalTabs({ selectedProperty }) {
  const [activeTab, setActiveTab] = useState("desc");

  const handleTabSelect = (key) => {
    setActiveTab(key);
  };

  const slickSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
              className="floorplan"
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
      <Tab eventKey="interior" title="Interior">
        {activeTab === "interior" && selectedProperty && (
          <div className="slideshow">
            <Slider {...slickSettings} className="slick-slider-custom">
              {selectedProperty.interior.map((pic, index) => (
                <div key={index}>
                  <img
                    className="interior"
                    src={pic}
                    alt={`Slide ${index}`}
                  />
                </div>
              ))}
            </Slider>
          </div>
        )}
      </Tab>
    </Tabs>
  );
}

export default ModalTabs;
