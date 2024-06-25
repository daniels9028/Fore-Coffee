import React from "react";
import promo1 from "../assets/promo1.jpg";
import promo2 from "../assets/promo2.jpg";
import promo3 from "../assets/promo3.jpg";

const Promo = () => {
  return (
    <div className="max-w-[1300px] mx-auto my-20 bg-center bg-cover bg-promo overflow-hidden rounded-3xl">
      <div className="flex items-center flex-col py-16 mx-4 lg:text-left text-center">
        <h1 className="text-6xl text-[#006041] font-semibold">
          Promo di Fore Coffee
        </h1>
        <br />
        <h2 className="text-[#97a259] text-3xl">
          Temukan berbagai promo menarik di sini!
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 place-items-center px-10 pb-20 mx-4">
        <div className="rounded-3xl max-w-md overflow-hidden">
          <img src={promo1} alt="promo1" />
        </div>
        <div className="rounded-3xl max-w-md overflow-hidden">
          <img src={promo2} alt="promo2" />
        </div>
        <div className="rounded-3xl max-w-md overflow-hidden">
          <img src={promo3} alt="promo3" />
        </div>
      </div>
    </div>
  );
};

export default Promo;
