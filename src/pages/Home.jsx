import React from "react";
import Navbar from "../components/layout/Navbar";

const Home = () => {
  return (
    <>

    <Navbar />
      {/* Hero section */}
      <section className="relative w-full h-screen overflow-hidden">
        <img
          src="/van.png"
          alt="Yuliana Fresh Juice Van"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      <section className="relative w-full h-screen bg-white flex items-center justify-center text-center px-6 mb-50">
        {/* Text in the center */}
        <div className="z-10">
          <h1 className="text-4xl md:text-5xl font-moul text-[#1F2937] font-bold">
            Yuliana Fresh Juice!
          </h1>
          <p className="-mt-1 text-lg md:text-xl font-[Inter] text-[#1F2937]">
            Fresh Juice you could ever get
          </p>
        </div>

        {/* Image in bottom-right */}
        <img
          src="/orangepict.png"
          alt="Orange splash"
          className="absolute bottom-0 right-0 w-[300px] md:w-[400px] h-auto object-contain opacity-90 pointer-events-none animate-slide-up"
        />
      </section>

      <section className="w-full bg-white py-16 px-6 flex flex-col items-center text-center mb-70">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold font-futura text-[#2D2D2D]">
            What's new?
          </h2>
          <p className="-mt-2 text-lg md:text-xl font-[Inter] text-gray-600">
            Try out our best seller products
          </p>

          {/* Grid of cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
            {/* Card 1 */}
            <div className="group transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer">
              <img
                src="/videojuice.gif"
                alt="Juices"
                className="w-full h-auto rounded-md shadow"
              />
              <h3 className="mt-4 text-xl font-extrabold  text-[#2D2D2D]">Juices</h3>
              <p className="-mt-1 text-lg  text-gray-600 font-[Inter]">
                Try out our finest juice!
              </p>
            </div>

            {/* Card 2 */}
            <div className="group transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer">
              <img
                src="/pict.jpg"
                alt="Other Fruits Products"
                className="w-full h-auto rounded-md shadow"
              />
              <h3 className="mt-4 text-xl font-extrabold text-[#2D2D2D]">Other Fruits Products</h3>
              <p className="-mt-1 text-lg text-gray-600 font-[Inter]">
                We don't only serve juices
              </p>
            </div>
          </div>
      </section>


      <section className="w-full bg-white py-16 px-6 text-center mb-50">
        {/* Grid Atas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center mb-25">
          {[
            { label: 'Event', src: '/event.png' },
            { label: 'Wholesale', src: '/wholesale.png' },
            { label: 'Daily', src: '/daily.png' },
          ].map((item, idx) => (
            <div
              key={`top-${idx}`}
              className="transition-transform duration-500 transform hover:scale-105 animate-slide-up"
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-60 h-auto pointer-events-none"
              />
              <p className="mt-2 text-base md:text-lg font-semibold font-[Inter] text-[#2D2D2D]">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Judul */}
        <h1 className="text-4xl md:text-5xl font-moul text-[#1F2937] font-bold">
          Services!
        </h1>
        <p className="-mt-1 text-lg md:text-xl font-[Inter] text-gray-600">
          What kind of services do we serve?
        </p>

        {/* Grid Bawah */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center mt-25">
          {[
            { label: 'Business to Business', src: '/b2b.png' },
            { label: 'Custom', src: '/custom.png' },
            { label: 'Other', src: '/other.png' },
          ].map((item, idx) => (
            <div
              key={`top-${idx}`}
              className="transition-transform duration-500 transform hover:scale-105 animate-slide-up"
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-60 h-auto pointer-events-none"
              />
              <p className="mt-2 text-base md:text-lg font-semibold font-[Inter] text-[#2D2D2D]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

    </>
  );
};

export default Home;
