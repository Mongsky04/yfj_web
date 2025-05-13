import React, { useState } from 'react';
import OSMMap from './map'
import 'leaflet/dist/leaflet.css';

function Location() {
  const [mapCenter] = useState({
    lat: -6.1499926714737105,
    lng: 106.88673170291361
  })

  return (
    <>
      <hr className="mt-25 mx-5 border-gray-300" />

      <h2 className="text-center text-[28px] font-bold my-5 font-montserrat">
        Our Location
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-30 h-[300px]">
        {/* ── Column 1: Map + Button ── */}
        <div className="flex flex-col items-center space-y-5">
            <a
                href="https://www.google.com/maps/place/Jl.+Mitra+Sunter+Bulevar,+RW.11,+Sunter+Jaya,+Kec.+Tj.+Priok,+Jkt+Utara,+Daerah+Khusus+Ibukota+Jakarta+14360/@-6.1499513,106.8864671,19.68z/data=!4m6!3m5!1s0x2e69f56a37883545:0xaf210853e9deb4c!8m2!3d-6.1500122!4d106.8866548!16s%2Fg%2F1hm2gxdvj?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-64 h-64 cursor-pointer"
                >
                <OSMMap center={mapCenter} zoom={15} />
            </a>

        </div>

        {/* ── Column 2: Address & Phone ── */}
        <div className="space-y-5">
          <div>
            <p className="font-bold font-montserrat text-[20px]">Address</p>
            <p className="text-[16px] font-inter">
              Jln Mitra Sunter Blvd No.10, RT.9/RW.11, Sunter Jaya, Tanjung Priok, North Jakarta City, Jakarta 14350
            </p>
          </div>
          <div>
            <p className="font-bold font-montserrat text-[20px]">Phone Number</p>
            <p className="text-[16px] font-inter">Tel: +6221 650 4565 (Hunting)</p>
            <p className="text-[16px] font-inter">Fax: +6221 650 4571</p>
          </div>
        </div>

        {/* ── Column 3: Business Hours & Email ── */}
        <div className="space-y-5">
          <div>
            <p className="font-bold font-montserrat text-[20px]">Business Hours</p>
            <p className="text-[16px] font-inter">Mon – Fri: 8.30 am to 5.00 pm</p>
            <p className="text-[16px] font-inter">Saturday: 8.30 am to 3.00 pm</p>
          </div>
          <div>
            <p className="font-bold font-montserrat text-[20px]">Email</p>
            <p className="text-[16px] font-inter">Sales@yulianajuice.com</p>
            <p className="text-[16px] font-inter">yfj.adm@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Location
