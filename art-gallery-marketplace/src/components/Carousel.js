import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import '../app.css'
import { Link } from "react-router-dom";

export default function ArtCarousel({artworks}) {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="mx-auto w-75 p-5 shadow p-3 bg-secondary mt-5 rounded-4" activeIndex={index} onSelect={handleSelect}>
      {artworks.map((slide, i) => {
        return (
          <Link to={`/image/${slide.id}`}><Carousel.Item className="carouselItem" interval={5000} key={i}>
            <img
              className="d-block w-100"
              src={slide.pic}
              alt="slider image"
            />
            <Carousel.Caption>
              {/* make these links to artist page */}
              <h3>{slide.caption}</h3>
              <p style={{ textAlign: "center" }}>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item></Link>
        )
      })}

    </Carousel>
  );
}