import React, { useState } from "react";
import logo from "../assets/logo.png";
import { LuAlignRight } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-white">
      <div className="max-w-[1300px] mx-auto justify-between flex items-center py-4 px-8 relative">
        <img src={logo} alt="logo" width={100} />

        <ul className="lg:flex hidden items-center gap-8 text-[#006041] font-bold text-[16px] leading-[24px] capitalize not-italic cursor-pointer">
          <li>Tentang</li>
          <li>Menu</li>
          <li>Kolaborasi</li>
          <li>Lokasi Store</li>
          <li>Karir</li>
          <li>Hubungi Kami</li>
        </ul>

        <button className="lg:flex hidden py-2 px-6 border-[1.5px] text-black border-black rounded-full hover:text-white hover:bg-[#006041] transition-colors">
          Download App
        </button>

        <div
          className="lg:hidden text-gray-800 flex z-[70]"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <IoMdClose size={30} /> : <LuAlignRight size={30} />}
        </div>

        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.4,
                },
              },
              hidden: { opacity: 0, x: "100%" },
            }}
            className="absolute lg:hidden flex flex-col top-0 right-0 w-full min-h-screen gap-5 justify-center items-center text-center bg-[#ebe9e7] z-50"
          >
            <img src={logo} alt="" />
            <ul className="my-2 space-y-6 text-[#006041] font-bold text-[16px] leading-[24px] capitalize not-italic cursor-pointer">
              <li>Tentang</li>
              <li>Menu</li>
              <li>Kolaborasi</li>
              <li>Lokasi Store</li>
              <li>Karir</li>
              <li>Hubungi Kami</li>
            </ul>

            <button className="py-2 px-6 border-[1.5px] text-black border-black rounded-full hover:text-white hover:bg-[#006041] transition-colors my-4 w-[200px]">
              Download App
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
