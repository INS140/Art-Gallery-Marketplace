import ArtCarousel from "./components/Carousel";
import MainNav from "./components/Navbar";
import { Routes, Route } from "react-router-dom"
import ArtGallery from "./components/ArtGallery";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs"
import ImageView from "./components/ImageView";
import ArtistView from "./components/ArtistView";
import CommissionForm from "./components/CommissionForm";
import ArtistGallery from "./components/ArtistGallery";
import ArtistContainer from "./components/ArtistContainer";

function App() {
  return (
    <div className="App bg-dark">
      <MainNav/>
      <Routes>
        <Route path="/" element={
          <>
            <ArtCarousel/>
            <AboutUs />
          </>
          } />
        <Route path="/images" element={<ArtGallery />} />
        <Route path="/images/:id" element={<>
            <ImageView/>
            <CommissionForm/>
          </>} />
        <Route path="/artists" element={<ArtistGallery />} />
        <Route path="/artists:id" element={<ArtistContainer/>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;

