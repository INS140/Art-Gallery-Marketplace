import ArtCarousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom"
import ArtGallery from "./components/ArtGallery";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs"
import ImageView from "./components/ImageView";
import ArtistView from "./components/ArtistView";
import CommissionForm from "./components/CommissionForm";

function App() {
  return (
    <div className="App bg-dark">
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <>
            <ArtCarousel/>
            <AboutUs/>
          </>
          } />
        <Route path="/images" element={<ArtGallery />} />
        <Route path="/images/:id" element={<>
            <ImageView/>
            <CommissionForm/>
          </>} />
        <Route path="/artists/:id" element={<ArtistView />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
