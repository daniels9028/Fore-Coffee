import React from "react";
import android from "../assets/android.png";
import google from "../assets/google.png";
import appstore from "../assets/appstore.png";

const Android = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-20">
      <div className="flex items-center gap-8 mx-4 lg:flex-row flex-col-reverse justify-center">
        <div className="lg:w-1/2 w-full text-wrap lg:text-left text-center">
          <h2 className="font-semibold tracking-widest text-2xl align-top mb-8">
            FORE COFFEE APP
          </h2>
          <h3 className="font-bold lg:text-6xl text-2xl font-[#1e4a3c]">
            Kopi hanya dalam satu ketukan! Cepat dan mudah dengan berbagai
            keuntungan ekstra
          </h3>
          <p className="mt-8 text-lg">
            Nikmati pengalaman minum kopi terbaik, promo, dan banyak lainnya!
          </p>
          <p className="mt-8 text-lg">Unduh sekarang!</p>
          <div className="flex gap-2 mt-4 lg:justify-start justify-center">
            <img src={google} alt="google" width={120} />
            <img src={appstore} alt="appstore" width={120} />
          </div>
        </div>
        <img
          src={android}
          alt="android"
          className="lg:w-1/2 w-full h-full object-cover"
        />
      </div>

      {/* <div className="flex mx-4 gap-2">
        <img src={google} alt="google" width={120} />
        <img src={appstore} alt="appstore" width={120} />
      </div> */}
    </div>
  );
};

export default Android;
