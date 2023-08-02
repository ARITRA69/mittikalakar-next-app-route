"use client";
// import pic2 from "../public/pic2.jpg";
import React, { useEffect } from "react";
import Motion from "./motions/page";
import About from "./about/page";
import Carousel from "@/components/swiper/page";
import BestSelling from "@/components/bestSelling/page";
import Category from "@/components/categories/page";
import LandingPage from "@/components/landing/page";
import ImageGalary from "@/components/imageGalary/ImageGalary";

// import Preloader from "@/components/preloader/Preloader";

const Main = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <div className="flex-col justify-center lg:mt-8 relative">
        {/* <Carousel /> */}
        <LandingPage />
        <ImageGalary />
        <div className="mx-5 lg:mx-52">
          <BestSelling />
          <About />
          <Category />
          <Motion />
        </div>
      </div>
    </>
  );
};

export default Main;
