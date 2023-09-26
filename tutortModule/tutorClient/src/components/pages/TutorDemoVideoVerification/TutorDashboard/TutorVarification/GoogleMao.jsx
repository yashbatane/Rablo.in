import React from "react";
import "./TutorRegistration.css";
import { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import { Map, Marker } from "google-maps-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

export class MapContainer extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      // for google map places autocomplete
      address: "",

      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

      mapCenter: {
        lat: 26.8467,
        lng: 80.9462,
      },
    };
  }

  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);

        this.setState({ address });
        // update center state
        this.setState({ mapCenter: latLng });
      })
      .catch((error) => console.error("Error", error));
  };

  render() {
    const containerStyle ={
        position: 'relative',
        widht: '400px',
        height : '400px',
        border: '2px'
    }
    return (
      <div id="googleMaps">
        
        <div className="TutRegGoogleMap">
          <Map
           containerStyle={containerStyle}
            google={this.props.google}
            initialCenter={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng,
            }}
            center={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng,
            }}>
            <Marker
              position={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng,
              }}
            />
          </Map>
        </div>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: "Search Places ...",
                  className: "location-search-input",
                })}
              />
              <div className="autocomplete-dropdown-container">
                <div className="TutorRegGoogleMapInput">

                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
                </div>
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD3R_EoXtUFYMVv7T16waY_jelYiwOmrnk",
})(MapContainer);
