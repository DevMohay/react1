import { useState } from "react";
import banarLogo from "./assets/brand_logo.png";
import amazon from "./assets/amazon.png";
import flipKart from "./assets/flipkart.png";
import shoe from "./assets/shoe_image.png";
import shoe2 from "./assets/shoe_image-2.png";
import shoe3 from "./assets/shoe_image-3.png";
import shoe4 from "./assets/shoe_image-4.png";
// import ProductPage from './assets/Product Page.png'
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./App.css";
import "./index.css";
import { Swiper, SwiperSlide } from 'swiper/react';

function App() {
  return (
    <>
      <div className="navbar h-[4rem] flex justify-between items-center px-20 py-5">
        <div className="logo ">
          <img src={banarLogo} className="h-8" alt="" />
        </div>
        <div className="nav-link ">
          <a href="/" className="px-4 active:bg-red-600">
            Home
          </a>
          <a href="/" className="px-4">
            Products
          </a>
          <a href="/" className="px-4">
            About
          </a>
          <a href="/" className="px-4">
            Contacts
          </a>
        </div>
        <div className="login">
          <button className=" bg-red-600 px-2 py-1 rounded">Login</button>
        </div>
      </div>
      {/* navbar end  */}

      <div className="bannar flex justify-between items-center h-svh">
        <div className="banner-left max-w-[40%] ml-40">
          <h1 className="font-sans text-6xl font-extrabold ">
            YOUR FEET DESERVE <br /> THE BEST
          </h1>
          <p className="text-xs text-gray-700 my-8">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="banner-btn ">
            <button
              className="bg-red-600 border-2 border-red-600 rounded-md mr-10 text-white
            px-2 py-1 "
            >
              Shop Now
            </button>
            <button className="border-stone-950 border py-1 px-2 rounded-md">
              Category
            </button>
          </div>
          <div className="patner flex mt-5 ">
            <img src={flipKart} alt="" className="mr-4" />
            <img src={amazon} alt="" />
          </div>
        </div>

        <div className="bannar-right h-screen w-screen">
          <Swiper
            rewind={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide><img src={shoe} alt="" className="h-[rem] w-[20rem]" /></SwiperSlide>
            <SwiperSlide><img src={shoe2} alt="" className="h-[35rem] w-[35rem]" /></SwiperSlide>
            <SwiperSlide><img src={shoe3} alt="" className="h-[35rem] w-[35rem]" /></SwiperSlide>
            <SwiperSlide><img src={shoe4} alt="" className="h-[35rem] w-[35rem]" /></SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default App;
{
  /* <img src={shoe} alt="" className="h-" /> */
}
