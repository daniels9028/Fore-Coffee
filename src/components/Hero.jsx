import React from "react";
import coffee from "../assets/coffee.png";
import foreMaster from "../assets/fore-master.png";
import foreStore from "../assets/fore-store.png";
import { Carousel } from "@material-tailwind/react";

const Hero = () => {
  return (
    <div className="max-w-[1200px] my-40 mx-auto relative">
      <div className="flex gap-8 mx-4">
        <Carousel className="rounded-xl">
          <div className="flex items-center lg:flex-row flex-col">
            <div className="lg:text-left text-center">
              <h1 className="text-8xl text-[#006041] mb-4 font-bold">
                Grind The Essentials
              </h1>
              <p className="text-4xl text-[#97a259]">
                Dibuat dari biji kopi Indonesia pilihan untuk pengalaman minum
                kopi terbaik setiap hari
              </p>
            </div>
            <img
              src={coffee}
              alt="coffee"
              width={1000}
              className="object-cover h-[40rem] px-4"
            />
          </div>

          <div className="flex items-center lg:flex-row flex-col">
            <div className="lg:text-left text-center">
              <h1 className="text-8xl text-[#006041] mb-4 font-bold">
                Fore Grind Master 2023
              </h1>
              <p className="text-2xl text-[#97a259]">
                Kompetisi tahunan bergengsi untuk barista Fore Coffee di seluruh
                Indonesia
              </p>
            </div>
            <img
              src={foreMaster}
              alt="coffee"
              width={1000}
              className="object-cover h-[40rem] px-4"
            />
          </div>

          <div className="flex items-center lg:flex-row flex-col">
            <div className="lg:text-left text-center">
              <h1 className="text-8xl text-[#006041] mb-4 font-bold">
                The 1st Fore Coffee Store That Embrace Sustainability
              </h1>
              <p className="text-2xl text-[#97a259]">
                Dibuat dari 450kg plastik daur ulang, berlokasi di Kuningan
                City, Jakarta
              </p>
            </div>
            <img
              src={foreStore}
              alt="coffee"
              width={1000}
              className="object-cover h-[40rem] px-4"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
