import React, { useState } from 'react'
import 'leaflet/dist/leaflet.css'
import Navbar from '../components/layout/Navbar'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import bannerImg from '../assets/images/banner.jpg';
import About1 from '../assets/images/aboutus1.jpg'
import About2 from '../assets/images/aboutus2.jpg'
import About3 from '../assets/images/aboutus3.jpg'
import About4 from '../assets/images/aboutus4.png'
import About5 from '../assets/images/aboutus5.jpg'
import About6 from '../assets/images/aboutus6.jpg'


function About() {

const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const el = document.querySelector(location.hash);
    if (el) {
      setTimeout(() => {
        const yOffset = -200;
        const y =
          el.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }, 0);
    }
  }
}, [location]);


  return (
    <>
      <div>
        <img src={bannerImg} className="mb-16 w-full h-auto" alt="Banner" />
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start px-4 md:px-16 gap-8" id="story">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img src={About1} alt="About YFJ" className="w-full h-auto rounded" />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <p className="font-montserrat text-[28px] md:text-[36px] font-bold text-left mb-4">Our Story</p>
          <p className="font-inter text-[16px] md:text-[20px] text-justify">
            In the 1985s Mrs. Yuliana pioneered what she believed to be a fresh and healthy juice product — built on innovation and strict quality control — to become a pre-eminent supplier of superior produce.
            <br /><br />
            Today, we’ve gained a significant market share and are widely accepted by executive clubs, cafes, restaurants, and five-star hotels — preferred by people who share the idea of healthy living.
          </p>
        </div>
      </div>


      <div className="flex flex-col md:flex-row items-center px-4 md:px-16 gap-8 my-8 md:items-center">
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <img src={About2} alt="YFJ Fruit Processing" className="w-full h-auto rounded" />
        </div>

        <div className="w-full md:w-1/2 order-2 md:order-1">
          <p className="font-inter text-[16px] md:text-[20px] text-justify">
            Yuliana Fresh Juice processes premium fruit from mostly locally grown tropical fruit and partly imported fruit, dedicated to wholesale activity. Healthy and hygienic fruit processing delivers efficiencies that offer our partners a distinct competitive advantage and fresh premium-quality products to consumers.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-center px-4 md:px-16 gap-8 my-8">
        <div className="w-full md:w-1/2 order-1">
          <img src={About3} alt="YFJ Legacy" className="w-full h-auto rounded" />
        </div>

        <div className="w-full md:w-1/2 order-2 flex flex-col justify-center items-center">
          <div className="w-full max-w-3xl">
            <p className="font-inter text-[16px] md:text-[20px] text-justify">
              Yuliana Fresh Juice is a legacy of the vision of one mother and professionals who have continued to pursue her ideals.
            </p>
          </div>
        </div>
      </div>
              
      <div className="flex flex-col md:flex-row items-center md:items-start px-4 md:px-16 gap-8 my-8">
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <img src={About4} alt="Fruit Quality" className="w-full h-auto rounded" />
        </div>

        <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col justify-center items-center">
          <div className="w-full max-w-3xl">
            <p className="font-montserrat text-[28px] md:text-[36px] font-bold text-left mb-4">Fruit Quality</p>
            <p className="font-inter text-[16px] md:text-[20px] text-justify">
              We annually process up to 100,000 kgs of premium tropical and imported fruit for key domestic markets.
              <br /><br />
              The Yuliana Fresh Juice brand is committed to innovation, new technology, and in-house research to deliver constant improvements in service to all of our customers.
            </p>
          </div>
        </div>
      </div>


      <div className="flex flex-col md:flex-row items-center md:items-start px-4 md:px-16 gap-8 my-8">
        <div className="w-full md:w-1/2 order-1">
          <img src={About6} alt="Our Customers" className="w-full h-auto rounded" />
        </div>

        <div className="w-full md:w-1/2 order-2 flex flex-col justify-center items-center">
          <div className="w-full max-w-3xl">
            <p className="font-montserrat text-[28px] md:text-[36px] font-bold text-left mb-4">Our Customers</p>
            <p className="font-inter text-[16px] md:text-[20px] text-justify">
              Our customers include five-star hotels, executive clubs, cafes, restaurants, and catering businesses.
            </p>
          </div>
        </div>
      </div>


      <div className="flex flex-col md:flex-row items-center md:items-start px-4 md:px-16 gap-8 my-8" id="our-juice">
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <img src={About5} alt="Our Juice" className="w-full h-auto rounded" />
        </div>

        <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col justify-center items-center">
          <div className="w-full max-w-3xl">
            <p className="font-montserrat text-[28px] md:text-[36px] font-bold text-left mb-4">Our Juice</p>
            <p className="font-inter text-[16px] md:text-[20px] text-justify">
              When it comes to juice, the quality and freshness of the ingredients and method of extraction are integral in creating the best possible product. What has always been a driving force and distinguishing factor at Juice Shop is only offering raw and living, organic juices.
              <br /><br />
              We have adhered to these foundational standards since our humble beginnings when we were juicing for each other in our family kitchen. We are still committed to serving the freshest and purest juice to amplify the incredible health potential that exists in the plants we use.
            </p>
          </div>
        </div>
      </div>


    </>
  )
}

export default About
