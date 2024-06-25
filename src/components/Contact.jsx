import React from "react";
import logo from "../assets/logo.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-20 mb-5">
      <div className="flex lg:flex-row flex-col gap-4 mx-4 lg:items-start items-center">
        <div className="lg:w-1/3">
          <img src={logo} alt="logo" width={200} className="bg-cover" />
        </div>
        <div className="lg:w-1/3 text-wrap">
          <h3 className="mb-2 text-[#1e4a3c] font-bold">Customer Center</h3>
          <div className="flex gap-2 mb-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-[#1e4a3c] text-sm">Gedung Graha Ganesha</span>
          </div>
          <div className="flex gap-2 mb-2 ml-8">
            <p className="text-[#1e4a3c] text-sm">
              Lantai 1 Suite 120 & 130 Jl. Hayam Wuruk No.28, Kelurahan Kebon
              Klapa Kecamatan Gambir, Jakarta Pusat, DKI Jakarta
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <IoLogoWhatsapp size={25} />
            <span className="text-[#1e4a3c] text-sm">0812-1111-8456</span>
          </div>
        </div>
        <div className="lg:w-1/3 text-wrap">
          <h3 className="mb-2 text-[#1e4a3c] font-bold">
            Consumer Complaints Service Contact Information
          </h3>
          <p className="text-[#1e4a3c] text-sm mb-2">
            Directorate General of Consumer Protection and Trade Compliance,
            Ministry of Trade of the Republic of Indonesia
          </p>
          <p className="text-[#1e4a3c] text-sm">
            WhatsApp Ditjen PKTN: 0853-1111-1010
          </p>
        </div>
      </div>

      <div className="mx-4 mt-6 flex lg:flex-row flex-col lg:space-y-0 space-y-10 items-center">
        <span className="text-[#1e4a3c] text-sm">
          © 2024 FORE COFFEE, All Rights Reserved
        </span>
        <div className="flex gap-4">
          <FaYoutube size={40} className="rounded-full bg-[#666666]/40 p-2" />
          <FaTwitter size={40} className="rounded-full bg-[#666666]/40 p-2" />
          <AiFillInstagram
            size={40}
            className="rounded-full bg-[#666666]/40 p-2"
          />
          <AiFillLinkedin
            size={40}
            className="rounded-full bg-[#666666]/40 p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
