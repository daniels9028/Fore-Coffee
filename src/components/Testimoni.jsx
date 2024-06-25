import React from "react";
import matcha from "../assets/matcha.png";
import jasmine from "../assets/jasmine.png";
import testi1 from "../assets/testi1.jpeg";
import testi2 from "../assets/testi2.png";
import testi3 from "../assets/testi3.png";

const testimonials = [
  {
    name: "Samanda Tondang",
    img: testi2,
    description:
      "Kami sangat mengapresiasi inisiatif dari Fore Coffee untuk berkolaborasi bersama dalam kampanye ini. Semoga kolaborasi kami dengan Fore Coffee bisa menginspirasi banyak pihak terutama dalam melakukan kampanye kebaikan.",
  },
  {
    name: "Devi Alfilovita",
    img: testi3,
    description:
      "Fore Coffee is one of the best merchants that I ever handled as a key account manager. we had a great journey to create some collaborations such as Exclusive Seasonal Menu, Percaya Projex, etc. The team was really helpful, organized, and had a fast response to coordinate everything.",
  },
  {
    name: "Albert Kurniawan",
    img: testi1,
    description:
      "Integrasi Ekosistem Digital Fore x blu memudahkan Genz & Millenials membeli kopi lewat pembayaran digital untuk menemani kegiatan sehari-hari sambil menikmati berbagai promo yang tersedia! Terbukti, transaksi selalu tinggi karena Fore selalu di hati!",
    icon: "&#10084;",
  },
];

const Testimoni = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-20">
      <div className="flex justify-between h-64 items-center relative mx-4">
        <div>
          <img
            src={matcha}
            alt="matcha"
            className="absolute bottom-0 left-0 h-52"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-6xl text-[#006041] font-semibold mb-10">
            Testimoni
          </h1>
          <p className="text-2xl text-[#97a259] border-dashed border-[#d0d784] border p-4 rounded-full">
            Kolaborasi Sukses Kami
          </p>
        </div>
        <div>
          <img
            src={jasmine}
            alt="jasmine"
            className="h-52 absolute top-0 right-0"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 place-items-center gap-8 mt-10 mx-4">
        {testimonials.map((testi, index) => (
          <div key={index}>
            <div className="max-w-sm h-60 rounded-3xl overflow-hidden bg-[#fbfbfb] py-4 px-6 shadow-xl">
              <div className="flex gap-1">
                <span className="text-green-500">&#x275D;</span>
                <p className="text-[#18191f] text-base">
                  {testi.description}{" "}
                  {testi.icon && <span className="text-red-500">&#10084;</span>}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center -ml-2 mt-5 overflow-hidden">
              <img
                src={testi.img}
                alt={testi.name}
                width={50}
                className="rounded-full"
              />
              <span className="mt-4 text-[#444] font-semibold text-lg">
                {testi.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimoni;
