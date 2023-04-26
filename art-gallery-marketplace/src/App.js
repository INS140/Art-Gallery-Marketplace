import { Routes, Route } from "react-router-dom"
import ArtCarousel from "./components/Carousel";
import MainNav from "./components/Navbar";
import ArtGallery from "./components/ArtGallery";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs"
import ImageView from "./components/ImageView";
import JoinUs from "./components/JoinUs";
import ArtistGallery from "./components/ArtistGallery";
import ArtistContainer from "./components/ArtistContainer";
import ArtworkForm from "./components/forms/ArtworkForm";
import useFetch from "./components/custom-hooks/useFetch";
import { useEffect, useState } from "react";

function App() {

  const {get} = useFetch()

  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {const data = await get(`/artworks/`)
    setData(data)
})()
}, [])


  return (
    <div className="App bg-dark">
      <MainNav/>
      <Routes>
        <Route path="/" element={<>
            <ArtCarousel artworks={data}/>
            <AboutUs />
        </>} />
        <Route path="/images" element={<ArtGallery />} />
        <Route path="/images/:id" element={<ImageView/>} />
        <Route path="/artists" element={<ArtistGallery />} />
        <Route path="/artists/:id" element={<ArtistContainer/>} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/artwork-form" element={<ArtworkForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

