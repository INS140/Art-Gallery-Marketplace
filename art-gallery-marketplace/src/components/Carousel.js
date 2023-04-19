import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import '../app.css'

const data = [
  {
   image: 'https://placekitten.com/400/200' /* require('./images/image1.jpg') */, 
   caption:"image 1",
   description:"Description Here"
  },
  {
    image: 'https://placekitten.com/400/200' /* require('./images/image2.jpg') */, 
    caption:"image 2",
    description:"Description Here"
   },
   {
    image: 'https://placekitten.com/400/200' /* require('./images/image3.jpg') */, 
    caption:"image 3",
    description:"Description Here"
   },
]

function ArtCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="mx-auto w-75" activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item class="carouselItem" interval={5000}>
            <img
                className="d-block w-100"
                src={slide.image}
                alt="slider image"
            />
            <Carousel.Caption>
              {/* make these links to artist page */}
                <h3>{slide.caption}</h3>
                <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
      
    </Carousel>
  );
}
export default ArtCarousel;