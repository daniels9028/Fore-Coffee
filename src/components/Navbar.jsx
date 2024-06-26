import React, { useState } from "react";
import logo from "../assets/logo.png";
import { LuAlignRight } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const menuVariants = {
  open: {
    x: 0,
    transition: {
      stiffness: 20,
      damping: 15,
    },
  },
  closed: {
    x: "100%",
    transition: {
      stiffness: 20,
      damping: 15,
    },
  },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-white bg-opacity-70 backdrop-blur-md">
      <div className="max-w-[1300px] mx-auto justify-between flex items-center py-4 px-8 h-20">
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
          className="lg:hidden text-gray-800 flex z-50"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <IoMdClose size={30} /> : <LuAlignRight size={30} />}
        </div>

        <motion.div
          initial={false}
          animate={open ? "open" : "closed"}
          variants={menuVariants}
          className="fixed flex-col top-0 right-0 w-full min-h-screen gap-5 justify-center items-center text-center bg-[#ebe9e7] z-40"
        >
          <img src={logo} alt="" className="mt-20" />
          <ul className="mt-10 space-y-8 text-[#006041] font-bold text-[16px] leading-[24px] capitalize not-italic cursor-pointer">
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
      </div>
    </div>
  );
};

export default Navbar;
