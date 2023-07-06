import React from "react";

import Photos from "../../components/Photos/Photos.jsx";
import Gallery from "../../components/Gallery/Gallery.jsx";

import pi1 from "../../assets/pi1.avif";
import pi2 from "../../assets/pi2.avif";
import pi3 from "../../assets/pi3.avif";
import pi4 from "../../assets/pi4.avif";
import pi5 from "../../assets/pi5.avif";
import pi6 from "../../assets/pi6.avif";
import pi7 from "../../assets/pi7.avif";
// import pi8 from "../../assets/pi8.avif";
// import pi9 from "../../assets/pi9.avif";

const GalleryPage = (props) => {

  const photos = [pi1, pi2, pi3, pi4, pi5, pi6, pi7];


  return (
    <>
      <Gallery />
      <Photos
       photos = {photos}
      />
      <h3>SOY GALLERYPAGE</h3>
    </>
  );
};

export default GalleryPage;
