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
        <img src={bannerImg} className='mb-15 w-full h-auto'></img>
      </div>
      <div className='flex' id='story'>
        <div className='flex-1'>
          <img src={About1}></img>
        </div>
        <div className='flex flex-col justify-center items-center flex-1 m-4'>
          <div className='w-full max-w-3xl'>
            <p className='font-montserrat text-[36px] font-bold text-left'>Our Story</p>
            <br />
            <p className='font-inter text-[20px] text-justify'>
            In the 1985s Mrs. Yuliana pioneer what has she been believing a fresh and healthy juice product with both innovation and strict quality control to become a pre-eminent supplier of superior produce.
            Today we have gained a significant result of market share and has been accepted widely in the most executive clubs, cafes, restaurants and five stars hotels. And preferred by large group of people who have shared the idea of healthy living.
            </p>
          </div>
        </div>
      </div>

      <div className='flex'>
        <div className='flex flex-col justify-center items-center flex-1 m-4'>
          <div className='w-full max-w-3xl'>
            <p className='font-inter text-[20px] text-justify'>
            Yuliana Fresh Juice processes premium fruit from mostly locally growth tropical fruit and part imported fruit dedicated to the wholesale activity. Healthy and hygiene fruit processing delivers efficiencies that offer our partners a distinct competitive advantage and fresh premium quality product to consumers.
            </p>
          </div>
        </div>
        <div className='flex-1'>
          <img src={About2}></img>
        </div>
      </div>

      <div className='flex'>
        <div className='flex-1'>
          <img src={About3}></img>
        </div>
        <div className='flex flex-col justify-center items-center flex-1 m-4'>
          <div className='w-full max-w-3xl'>
            <p className='font-inter text-[20px] text-justify'>
            Yuliana Fresh Juice is a legacy to the vision of one mother and professionals who have continued to pursue her ideals.
            </p>
          </div>
        </div>
      </div>
        

      <div className='flex'>
        <div className='flex flex-col justify-center items-center flex-1 m-4'>
          <div className='w-full max-w-3xl'>
            <p className='font-montserrat text-[36px] font-bold text-left'>Fruit Quality</p>
            <br />
            <p className='font-inter text-[20px] text-justify'>
            We are annually processes up to 100.000 kgs of premium tropical and imported fruit for key domestic markets.

Yuliana Fresh Fruit Juice brand is committed to innovation, new technology and inhouse research to deliver constant improvements in service to all of our customer.
            </p>
          </div>
        </div>
        <div className='flex-1'>
          <img src={About4}></img>
        </div>
      </div>

      <div className='flex'>
        <div className='flex-1'>
          <img src={About6}></img>
        </div>
        <div className='flex flex-col justify-center items-center flex-1 m-4'>
          <div className='w-full max-w-3xl'>
            <p className='font-montserrat text-[36px] font-bold text-left'>Our Customers</p>
            <br />
            <p className='font-inter text-[20px] text-justify'>
            Our customer majorly are five stars hotels, executive clubs, cafes, restaurants and, catering businesses.
            </p>
          </div>
        </div>
      </div>

      <div className='flex' id='our-juice'>
        <div className='flex flex-col justify-center items-center flex-1 m-4'>
          <div className='w-full max-w-3xl'>
            <p className='font-montserrat text-[36px] font-bold text-left'>Our Juice</p>
            <br />
            <p className='font-inter text-[20px] text-justify'>
            When it comes to juice, the quality and freshness of the ingredients and method of extraction are integral in creating the best possible product. What has always been a driving force and distinguishing factor at Juice Shop is only offering raw and living, organic juices. We have adhered to these foundational standards since our humble beginnings when we were juicing for each other in our family kitchen. We are still committed to serving the freshest and purest juice to amplify the incredible health potential that exist in the plants we use.
            </p>
          </div>
        </div>
        <div className='flex-1'>
          <img src={About5}></img>
        </div>
      </div>

    </>
  )
}

export default About
