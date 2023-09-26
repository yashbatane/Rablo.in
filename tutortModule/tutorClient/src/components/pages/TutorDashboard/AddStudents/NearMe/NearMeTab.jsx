import React, { useState } from "react";
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

let studentsNearMe = [
  {
    name: "John Doe",
    id: "nearme110",
    loc: {
      lat: 26.846695,
      lng: 80.946167,
    },
    ind: 0,
    Distance: 2,
  },
  {
    name: "steve",
    id: "nearme111",
    loc: {
      lat: 26.867235,
      lng: 80.923526,
    },
    ind: 1,
    Distance: 4,
  },
  {
    name: "josh",
    id: "nearme112",
    loc: {
      lat: 26.893833,
      lng: 80.942574,
    },
    ind: 2,
    Distance: 1,
  },
];

const NearMeTab = () => {
  const [currentSelected, setcurrentSelected] = useState();
  const [NearMestudentData, setNearMestudentData] = useState(studentsNearMe);
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [mapCenter,setmapCenter]=useState(NearMestudentData[0].loc)

  //**** google map api changes starts here ....****

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyA2Z5j6n6Hwq6rAULhsTSyHjox88CMWMT8",
  });

  if (!isLoaded) {
    return "Loading...";
  }

  return (
    <div className="NearMeTabContainer">
      <div className="NearMe-map-container">
        {/* map component starts here.. */}

        <GoogleMap
          center={mapCenter}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          onLoad={(map) => setMap(map)}
        >
          {NearMestudentData &&
            NearMestudentData.map((mark, index) => {
              return (
                <div key={mark.id}>
                  <Marker
                    position={NearMestudentData[index].loc}
                    options={{
                      icon:
                        mark.id == currentSelected ? iconSelect : iconNotSelect,
                    }}
                    onClick={() => {
                      setSelectedMarker(mark);
                      setcurrentSelected(mark.id);
                    }}
                  />
                  ;
                </div>
              );x
            })}
          {selectedMarker && (
            <InfoWindow
              position={selectedMarker.loc}
              onCloseClick={() => {
                setSelectedMarker(null);
              }}
            >
              <>
                <div className="InfoWindowContainer">
                  <img src={studentImageInfowindow} alt="student image" />
                  <div className="infowindowTextContainer">
                    <div className="infowindowName">{selectedMarker.name}</div>
                    <div className="infowindowDistance">
                      {selectedMarker.Distance} KM Away
                    </div>
                  </div>
                </div>
              </>
            </InfoWindow>
          )}
        </GoogleMap>
        {/*           ******* Map component ends here ....      ******* */}
        <div className="nearMeTab-button-container">
          {studentsNearMe.map((button, index) => (
            <button
              key={button.id}
              className={
                button.id == currentSelected
                  ? "button-selected"
                  : "button-unselected"
              }
              onClick={() => {
                setcurrentSelected(button.id);
                map.panTo(button.loc);
              }}
            >
              {button.Distance} KM
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NearMeTab;
