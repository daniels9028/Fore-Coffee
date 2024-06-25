import React from "react";
import instagram from "../assets/instagram.png";
import follow1 from "../assets/follow1.jpg";
import follow2 from "../assets/follow2.jpg";
import follow3 from "../assets/follow3.jpg";
import follow4 from "../assets/follow4.jpg";
import follow5 from "../assets/follow5.jpg";
import follow6 from "../assets/follow6.jpg";

const follows = [follow1, follow2, follow3, follow4, follow5, follow6];

const Follow = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-2xl font-semibold text-[#97a259] mb-6">
          Follow kami!
        </h1>
        <span className="text-4xl font-bold text-[#006041] mb-6">
          @fore.coffee
        </span>
        <div className="flex text-[#006041] hover:bg-[#006041] hover:text-white transition-colors duration-300 border-2 border-[#006041] py-1 px-2 rounded-full w-44 font-bold text-lg items-center justify-center group">
          <img src={instagram} alt="instagram" width={40} />
          <span>Follow</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-items-center gap-4 mt-20 mx-4">
        {follows.map((follow, index) => (
          <img
            key={index}
            src={follow}
            alt={follow}
            className="w-[300px] h-[300px] bg-blue-200 object-cover rounded-2xl hover:scale-110 hover:shadow-md hover:shadow-[#006041] transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default Follow;
