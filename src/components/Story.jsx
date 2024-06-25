import React from "react";
import story from "../assets/story.png";

const Story = () => {
  return (
    <div className="max-w-[1200px] my-10 mx-auto">
      <div className="mx-4">
        <h1 className="text-6xl text-[#006041] mb-4 font-bold md:text-left text-center">
          Our Story
        </h1>
        <div className="grid lg:grid-cols-2 gap-8 place-items-center">
          <div className="h-full">
            <img src={story} alt="story" className="object-cover" />
          </div>
          <div>
            <p className="text-2xl text-black text-justify mb-4 align-top mt-8">
              Didirikan pada tahun 2018, Fore Coffee adalah startup kopi yang
              bercita-cita membuat kopi spesial terbaik untuk pelanggan. Seperti
              nama kami yang diambil dari kata “Forest” atau hutan, kami ingin
              tumbuh cepat, kuat, tinggi, dan menciptakan kehidupan di sekitar.
              Kami ingin kehadiran kami bisa meningkatkan kualitas kopi dalam
              komunitas kita. <br /> <br /> Dengan jaringan dan pengalaman, kami
              menggunakan teknologi terkini unuk alat dan biji kopi kami.
              Diambil langsung dari petani pilihan, biji kopi berkualitas tinggi
              diproses dan dipanggang sempurna oleh kami, dan diajarkan kepada
              barista kompeten kami, dengan semangat untuk menyajikan satu
              cangkir kebahagiaan hanya untuk kamu.
            </p>
            <button className="mt-4 bg-[#006041] px-8 py-4 rounded-full w-[200px] text-white hover:border-[#006041] hover:bg-white hover:text-[#006041] transition-all duration-300 text-md shadow-2xl shadow-[#006041] border-2 border-[#006041]">
              Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
