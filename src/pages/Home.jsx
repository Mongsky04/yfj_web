import React from "react";
import Navbar from "../components/layout/Navbar";
import { Link } from "react-router-dom";
import Van from '../assets/images/van.jpg'
import Orange from '../assets/images/orangepict.png'
import VideoJuice from '../assets/images/videojuice.gif'
import pict1 from '../assets/images/otherproduct.png'
import Event from '../assets/images/event.png'
import Wholesale from '../assets/images/wholesale.png'
import Daily from '../assets/images/daily.png'
import B2B from '../assets/images/b2b.png'
import Custom from '../assets/images/custom.png'
import Other from '../assets/images/other.png'
import JuiceVideo from '../assets/images/jusbagus.mp4'

const Home = () => {
  return (
    <>


      {/* Hero section */}
      <section className="relative w-full h-screen overflow-hidden">
        <img
          src={Van}
          alt="Yuliana Fresh Juice Van"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      <section className="relative w-full h-screen bg-white flex items-center justify-center text-center px-6 mb-50">
        {/* Text in the center */}
        <div className="z-10">
          <h1 className="text-4xl md:text-5xl font-moul text-[#1F2937] font-bold">
            Yuliana Fresh Juice
          </h1>
          <p className="-mt-1 text-lg md:text-xl font-[Inter] text-[#1F2937]">
            Legacy of Mother Nature
          </p>
        </div>

        {/* Image in bottom-right */}
        <img
          src={Orange}
          alt="Orange splash"
          className="absolute bottom-0 right-0 w-[300px] md:w-[400px] h-auto object-contain opacity-90 pointer-events-none animate-slide-up"
        />
      </section>

      <section className="w-full bg-white py-16 px-6 flex flex-col items-center text-center mb-70">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl text-[#1F2937] font-moul te font-bold">
            What's new?
          </h2>
          <p className="-mt-2 text-lg md:text-xl font-[Inter] text-[#1F2937] text-bold ">
            Try out our best seller products
          </p>

          {/* Grid of cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
            {/* Card 1 */}
            <Link
              to="/product/juices"
              className="group block transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <img
                src={VideoJuice}
                alt="Juices"
                className="w-full h-auto rounded-md shadow"
              />
              <h3 className="mt-4 text-xl font-extrabold text-[#1F2937] font-moul">
                Juices
              </h3>
              <p className="-mt-1 text-lg text-[#1F2937] font-[Inter]">
                Try out our finest juice!
              </p>
            </Link>

            <Link
              to="/product/purees"
              className="group block transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <img
                src={pict1}
                alt="Other Fruits Products"
                className="w-full h-[275px] rounded-md shadow"
              />
              <h3 className="mt-4 text-xl font-extrabold text-[#1F2937] font-moul">
                Other Fruits Products
              </h3>
              <p className="-mt-1 text-lg text-[#1F2937] font-[Inter]">
                We don't only serve juices
              </p>
            </Link>
          </div>
      </section>

      <section className="w-full bg-white py-16 px-6 flex flex-col items-center text-center mb-70">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl text-[#1F2937] font-moul te font-bold">
            Service
          </h2>
          <p className="-mt-2 text-lg md:text-xl font-[Inter] text-[#1F2937] text-bold ">
            What kind of services do we offer?
          </p>

          {/* Grid of cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
            {/* Card 1 */}
            <div className="group transition-transform duration-300 hover:scale-105">
              <img
                src={Event}
                alt="Juices"
                className="w-full h-auto rounded-md shadow"
              />
              <h3 className="mt-4 text-xl font-extrabold  text-[#1F2937] font-moul">Event</h3>
              <p className="-mt-1 text-lg  text-[#1F2937] font-[Inter]">
                Events
              </p>
            </div>

            {/* Card 2 */}
            <div className="group transition-transform duration-300 hover:scale-105">
              <img
                src={Wholesale}
                alt="Other Fruits Products"
                className="w-full h-auto rounded-md shadow"
              />
              <h3 className="mt-4 text-xl font-extrabold  text-[#1F2937] font-moul">Wholesale</h3>
              <p className="-mt-1 text-lg text-[#1F2937] font-[Inter]">
                Bulk purchase for cheaper price
              </p>
            </div>
          </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
            {/* Card 1 */}
           <div className="group transition-transform duration-300 hover:scale-105">
              <img
                src={Daily}
                alt="Juices"
                className="w-full h-auto rounded-md shadow"
              />
              <h3 className="mt-4 text-xl font-extrabold  text-[#1F2937] font-moul">Daily</h3>
              <p className="-mt-1 text-lg  text-[#1F2937] font-[Inter]">
                Daily consumption
              </p>
            </div>

            {/* Card 2 */}
            <div className="group transition-transform duration-300 hover:scale-105">
              <img
                src={B2B}
                alt="Other Fruits Products"
                className="w-full h-auto rounded-md shadow"
              />
              <h3 className="mt-4 text-xl font-extrabold  text-[#1F2937] font-moul">Business to Business</h3>
              <p className="-mt-1 text-lg text-[#1F2937] font-[Inter]">
                Services to other businesses
              </p>
            </div>
          </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
            {/* Card 1 */}
            <div className="group transition-transform duration-300 hover:scale-105">
              <img
                src={Custom}
                alt="Juices"
                className="w-full h-auto rounded-md shadow"
              />
              <h3 className="mt-4 text-xl font-extrabold  text-[#1F2937] font-moul">Custom</h3>
              <p className="-mt-1 text-lg  text-[#1F2937] font-[Inter]">
                Custom sizes
              </p>
            </div>

            {/* Card 2 */}
            <div className="group transition-transform duration-300 hover:scale-105">
              <img
                src={Other}
                alt="Other Fruits Products"
                className="w-full h-auto rounded-md shadow"
              />
              <h3 className="mt-4 text-xl font-extrabold  text-[#1F2937] font-moul">Other</h3>
              <p className="-mt-1 text-lg text-[#1F2937] font-[Inter]">
                Other services that we may offer
              </p>
            </div>
          </div>
      </section>

        <section className="w-full bg-white py-16 px-6 flex flex-col items-center text-center mb-70">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl text-[#1F2937] font-moul te font-bold">
            Don't miss it
          </h2>
          <p className="-mt-2 text-lg md:text-xl font-[Inter] text-[#1F2937] text-bold mb-15">
            Catch the highlights before anyone else.
          </p>
          <video
          src={JuiceVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-svh object-contain"
        />
        </section>
    </>
  );
};

export default Home;
