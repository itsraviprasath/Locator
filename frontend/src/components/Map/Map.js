import React from "react";
import "./Map.css";
import { useState, useRef, useEffect } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  MarkerF,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

const Map = () => {
  // Get Current Location

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    // Check if geolocation is available in the browser
    if ("geolocation" in navigator) {
      // Get the user's current position
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  }, []);

  //   Get Route, Distance and Duration

  const myLatLng = { lat: latitude, lng: longitude };

  const [map, setMap] = useState(null);
  const [distanceResponse, setDistanceResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setduration] = useState("");

  const orginRef = useRef();

  const destinationRef = useRef();

  //   Getting API Key
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  //   If Loading
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  //   Calculating the Route
  function calculateRoute() {
    if (orginRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: orginRef.current.value,
        destination: destinationRef.current.value,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDistanceResponse(result);
          setDistance(result.routes[0].legs[0].distance.text);
          setduration(result.routes[0].legs[0].duration.text);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }

  //   Clearing the Route
  function clearRoute() {
    setDistanceResponse(null);
    setDistance("");
    setduration("");
    orginRef.current.value = "";
    destinationRef.current.value = "";
  }

  return (
    <>
      {/* Get Info */}
      <div className="get-map-info">
        <label className="orgin-label">Origin</label>
        <Autocomplete>
          <input
            className="orgin-input"
            type="text"
            placeholder="From"
            ref={orginRef}
          />
        </Autocomplete>
        <label className="destination-label">Destination</label>
        <Autocomplete>
          <input
            className="destination-input"
            type="text"
            placeholder="To"
            ref={destinationRef}
          />
        </Autocomplete>
        <button className="calculate-btn" onClick={calculateRoute}>
          Calculate
        </button>
        <button className="clear-btn" onClick={clearRoute}>
          Clear
        </button>
        <button className="current-btn" onClick={() => map.panTo(myLatLng)}>
          Current Location
        </button>
        {/* {distanceResponse && ( */}
        <div className="location-detail">
          <span className="distance">Distance: {distance}</span>
          <span className="duration">Duration: {duration}</span>
        </div>
        {/* )} */}
      </div>

      {/* Google Map Box */}
      <GoogleMap
        center={myLatLng}
        zoom={18}
        mapContainerStyle={{
          width: "100%",
          height: "100vh",
          margin: "60px auto 0",
        }}
        options={{
          zoomControl: false,
          fullscreenControl: false,
          mapTypeControl: false,
          streetViewControl: false,
        }}
        onLoad={(map) => setMap(map)}
      >
        <MarkerF position={myLatLng} />
        {distanceResponse && (
          <DirectionsRenderer directions={distanceResponse} />
        )}
      </GoogleMap>
    </>
  );
};

export default Map;
