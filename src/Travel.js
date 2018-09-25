// src/Travel.js
import React from "react";

const Travel = ({destination, country, photo, distance}) => (
    <figure>
    <img src= {photo} alt={destination} />
    <figcaption>
      <blockquote>{distance}</blockquote>
      <cite> {destination} {country}</cite>
    </figcaption>
  </figure>
);
export default Travel;