import { Routes, Route } from "react-router-dom"
import ArtCarousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import ArtGallery from "./components/ArtGallery";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs"
import ImageView from "./components/ImageView";
import ArtistView from "./components/ArtistView";

function App() {
  return (
    <div className="App bg-dark">
      <Navbar/>
      <Routes>
        <Route path="/" element={<>
            <ArtCarousel/>
            <AboutUs />
        </>} />
        <Route path="/images" element={<ArtGallery />} />
        <Route path="/images/:id" element={<ImageView/>} />
        <Route path="/artists" element={<ArtistView />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

