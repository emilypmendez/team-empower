import React from "react";
import '../assets/scss/lbd/_maps.scss'

// react-bootstrap components
import { Badge, Button, Navbar, Nav, Container } from "react-bootstrap";

function Maps() {
  // GOOGLE MAPS
  // const mapRef = React.useRef(null);
  // React.useEffect(() => {
  //   let google = window.google;
  //   let map = mapRef.current;
  //   let lat = "40.748817";
  //   let lng = "-73.985428";
  //   const myLatlng = new google.maps.LatLng(lat, lng);
  //   const mapOptions = {
  //     zoom: 13,
  //     center: myLatlng,
  //     scrollwheel: false,
  //     zoomControl: true,
  //   };
  //
  //   map = new google.maps.Map(map, mapOptions);
  //
  //   const marker = new google.maps.Marker({
  //     position: myLatlng,
  //     map: map,
  //     animation: google.maps.Animation.DROP,
  //     title: "Light Bootstrap Dashboard PRO React!",
  //   });
  //
  //   const contentString =
  //     '<div class="info-window-content"><h2>Light Bootstrap Dashboard PRO React</h2>' +
  //     "<p>A premium Admin for React-Bootstrap, Bootstrap, React, and React Hooks.</p></div>";
  //
  //   const infowindow = new google.maps.InfoWindow({
  //     content: contentString,
  //   });
  //
  //   google.maps.event.addListener(marker, "click", function () {
  //     infowindow.open(map, marker);
  //   });
  // }, []);

  return (
    <>
      {/* <div className="map-container">
        <div id="map" ref={mapRef}></div>
      </div> */}
      <h4>Mapping Tool</h4>
      <div className="embed-container">
        <iframe
          width="500"
          height="400"
          title="A mapping tool built from ArcGIS"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          title="Community Board Engagement"
          src="https://jraj.maps.arcgis.com/apps/dashboards/5266600350094aa6ac098036a594e9d2">
        </iframe>
      </div>
    </>
  );
}

export default Maps;
