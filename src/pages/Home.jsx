import React from "react";
import { Link } from "react-router-dom";
import Van from "../assets/images/van.jpg";
import Orange from "../assets/images/orangepict.png";
import VideoJuice from "../assets/images/videojuice.gif";
import pict1 from "../assets/images/otherproduct.png";
import Event from "../assets/images/event.png";
import Wholesale from "../assets/images/wholesale.png";
import Daily from "../assets/images/daily.png";
import B2B from "../assets/images/b2b.png";
import Custom from "../assets/images/custom.png";
import Other from "../assets/images/other.png";
import JuiceVideo from "../assets/images/jusbagus.mp4";

const Home = () => {
  return (
    <>
      <section className="w-full h-[50vw] overflow-hidden flex items-center justify-center">
        <img
          src={Van}
          alt="Yuliana Fresh Juice Van"
          className="w-100% max-w-lg h-auto object-contain"
        />
      </section>

      {/* Introduction Section */}
      <section className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center text-center px-4 py-12">
        <div className="z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-moul text-[#1F2937] font-bold">
            Yuliana Fresh Juice
          </h1>
          <p className="mt-2 text-base sm:text-lg md:text-xl font-[Inter] text-[#1F2937]">
            Legacy of Mother Nature
          </p>
        </div>
        <img
          src={Orange}
          alt="Orange splash"
          className="absolute bottom-0 right-0 w-40 sm:w-60 md:w-80 h-auto object-contain opacity-90 pointer-events-none animate-slide-up"
        />
      </section>

      {/* What's New Section */}
      <section className="w-full bg-white py-16 px-4 flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#1F2937] font-moul font-bold">
          What's new?
        </h2>
        <p className="mt-1 text-base sm:text-lg md:text-xl font-[Inter] text-[#1F2937] font-semibold">
          Try out our best seller products
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-5xl">
          <Link
            to="/product/juices"
            className="group block transition-transform duration-300 hover:scale-105 active:scale-95"
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
            className="group block transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <img
              src={pict1}
              alt="Other Fruits Products"
              className="w-full h-[275px] object-cover rounded-md shadow"
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

      {/* Services Section */}
      <section className="w-full bg-white py-16 px-4 flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#1F2937] font-moul font-bold">
          Service
        </h2>
        <p className="mt-1 text-base sm:text-lg md:text-xl font-[Inter] text-[#1F2937] font-semibold">
          What kind of services do we offer?
        </p>

        {/* Grid for 6 service cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-5xl">
          {[
            { img: Event, title: "Event", desc: "Events" },
            {
              img: Wholesale,
              title: "Wholesale",
              desc: "Bulk purchase for cheaper price",
            },
            { img: Daily, title: "Daily", desc: "Daily consumption" },
            {
              img: B2B,
              title: "Business to Business",
              desc: "Services to other businesses",
            },
            { img: Custom, title: "Custom", desc: "Custom sizes" },
            {
              img: Other,
              title: "Other",
              desc: "Other services that we may offer",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group transition-transform duration-300 hover:scale-105"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-auto rounded-md shadow"
              />
              <h3 className="mt-4 text-xl font-extrabold text-[#1F2937] font-moul">
                {item.title}
              </h3>
              <p className="-mt-1 text-lg text-[#1F2937] font-[Inter]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full bg-white py-16 px-4 flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#1F2937] font-moul font-bold">
          Don't miss it
        </h2>
        <p className="mt-1 mb-6 text-base sm:text-lg md:text-xl font-[Inter] text-[#1F2937] font-semibold">
          Catch the highlights before anyone else.
        </p>
        <div className="w-full max-w-4xl aspect-video">
          <video
            src={JuiceVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
