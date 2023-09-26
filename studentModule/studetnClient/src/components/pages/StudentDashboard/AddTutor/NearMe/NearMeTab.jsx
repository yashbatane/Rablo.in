import React, { useState, useEffect } from "react";
import "./NearMeTab.css";
import iconSelect from "./icons/iconSelect.png";
import iconNotSelect from "./icons/iconNotSelect.png";
import studentImageInfowindow from "./icons/student.jpg";

import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { createNearMe } from "../../../../../store/slices/nearMeSlice";

const rangeOptions = [1000, 20, 50];

const NearMeTab = () => {
  const data = useSelector((state) => state.nearMe);
  const tutorDetail = data.nearMe;
  const [tutorDetails, setTutorDetails] = useState([]);

  const dispatch = useDispatch();
  const handleClickRange = (range) => {
    const filteredTutors = tutorDetail
      .flat()
      .filter((tutor) => tutor.Distance <= range);
    setTutorDetails(filteredTutors);
    dispatch(createNearMe({ range }));
  };

  const [currentSelected, setcurrentSelected] = useState(null);
  const [map, setMap] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [mapCenter, setMapCenter] = useState({
    lat: tutorDetails[0]?.Latitude || 0,
    lng: tutorDetails[0]?.Longitude || 0,
  });

  const handleMarkerClick = (tutor) => {
    setSelectedMarker(tutor);
    setcurrentSelected(tutor.tutorId);
  };

  const handleInfoWindowClose = () => {
    setSelectedMarker(null);
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyA2Z5j6n6Hwq6rAULhsTSyHjox88CMWMT8",
  });

  useEffect(() => {
    if (tutorDetails.length > 0 && !map) {
      setMapCenter({
        lat: tutorDetails[0]?.Latitude || 0,
        lng: tutorDetails[0]?.Longitude || 0,
      });
    }
  }, [tutorDetails, map]);

  if (!isLoaded) {
    return "Loading...";
  }

  return (
    <div className="NearMeTabContainer">
      <div className="NearMe-map-container">
        {/* Range options */}
        <div>
          {rangeOptions.map((range) => (
            <div key={range} onClick={() => handleClickRange(range)}>
              {range} km
            </div>
          ))}
        </div>

        {/* Google Map */}
        <GoogleMap
          center={mapCenter}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          onLoad={(map) => setMap(map)}
        >
          {/* Markers */}
          {tutorDetails.map((tutor, index) => (
            <Marker
              key={`${tutor.tutorId}-${index}`} // Use a unique key
              position={{ lat: tutor.Latitude, lng: tutor.Longitude }}
              options={{
                icon:
                  tutor.tutorId === currentSelected
                    ? iconSelect
                    : iconNotSelect,
              }}
              onClick={() => handleMarkerClick(tutor)}
            />
          ))}

          {/* InfoWindow */}
          {selectedMarker && (
            <InfoWindow
              position={{
                lat: selectedMarker.Latitude,
                lng: selectedMarker.Longitude,
              }}
              onCloseClick={handleInfoWindowClose}
            >
              {/* InfoWindow content */}
              <div className="InfoWindowContainer">
                <img
                  src={studentImageInfowindow}
                  alt="student image"
                  className="infowindow-image"
                />
                <div className="infowindowTextContainer">
                  <div className="infowindowName">
                    {selectedMarker.firstName} {selectedMarker.lastName}
                  </div>
                  <div className="infowindowDistance">
                    {selectedMarker.Distance} KM Away
                  </div>
                </div>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>{" "}
      {/* Buttons */}
      <div className="nearMeTab-button-container">
        {tutorDetails.map((tutor, index) => (
          <button
            key={`${tutor.tutorId}-${index}`} // Use a unique key
            className={
              tutor.tutorId === currentSelected
                ? "button-selected"
                : "button-unselected"
            }
            onClick={() => {
              setcurrentSelected(tutor.tutorId);
              setMapCenter({ lat: tutor.Latitude, lng: tutor.Longitude });
            }}
          >
            {`${tutor.Distance} KM`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NearMeTab;
