import ArtCarousel from "./Carousel";
import AboutUs from "./AboutUs"
import useFetch from "./custom-hooks/useFetch";
import { useEffect, useState } from "react";
import React from "react";

export default function HomeView() {
  const { get } = useFetch()

  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {const data = await get(`/artworks/`)
      setData(data)
    })()
  }, [])

  return <>
    <ArtCarousel artworks={data} />
    <AboutUs />
  </>
}