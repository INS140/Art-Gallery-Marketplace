import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import '../app.css'

export default function ArtCarousel(image) {
  const data = [
    {
     image: {image.pic}, 
     caption: {image.title},
     description: {image.artist}
    },
    {
      image: {image.pic},
      caption:{image.title},
      description:{image.artist}
     },
     {
      image: {image.pic},
      caption:{image.title},
      description:{image.artist}
     },
  ]
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="mx-auto w-75 p-5 shadow p-3 bg-secondary mt-5" activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item className="carouselItem" interval={5000} key={i}>
            <img
                className="d-block w-100"
                src={slide.image}
                alt="slider image"
            />
            <Carousel.Caption>
              {/* make these links to artist page */}
                <h3>{slide.caption}</h3>
                <p style={{textAlign:"center"}}>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
      
    </Carousel>
  );
}