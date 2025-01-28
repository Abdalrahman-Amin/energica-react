import React from "react";
import { Carousel } from "../../components/ui/carousel/Carousel";
import img1 from "../../assets/pexels-pixabay-302820.jpg";
import img2 from "../../assets/pexels-tanmay-ghosh-326722612-13812389.jpg";

function LandingRoute() {
   const imgArr: string[] = [
      img1,
      img2,
   ];
   return (
      <div className="mt-8">
         <Carousel images={imgArr} />
      </div>
   );
}

export default LandingRoute;
