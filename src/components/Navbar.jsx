import React, { useState } from "react";
import logo from "../assets/logo.png";
import { LuAlignRight } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";

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

        <div className="lg:hidden flex" onClick={() => setOpen((o) => !o)}>
          {open ? <IoMdClose size={30} /> : <LuAlignRight size={30} />}
        </div>

        {open && (
          <div className="absolute lg:hidden flex flex-col lg:top-14 top-[70px] right-10 w-[300px] rounded-xl items-center text-center bg-[#ebe9e7] z-20">
            <ul className="my-2 space-y-2 text-[#006041] font-semibold text-[16px] leading-[24px] capitalize not-italic cursor-pointer">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
