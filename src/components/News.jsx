import React from "react";
import fore1 from "../assets/fore1.jpg";
import fore2 from "../assets/fore2.jpg";
import fore3 from "../assets/fore3.jpg";
import fore4 from "../assets/fore4.jpg";
import Flickity from "react-flickity-component";

const news = [
  {
    tittle:
      "SPESIAL HARI KARTINI! FORE COFFEE AJAK KONSUMEN PEREMPUAN MENGENAL INDUSTRI KOPI",
    img: fore1,
    description:
      "Fore Coffee memperingati Hari Kartini pada Sabtu, 20 April 2024 di HO Fore Coffee, Jakarta. Perayaan yang diperingati setiap tanggal 21 April setiap tahunnya ini adalah bentuk untuk menghargai perjuangan R.A Kartini, seorang tokoh inspiratif bagi kaum perempuan di Indonesia. Momen ini juga jadi cara mengapresiasi perjuangan Kartini dalam meraih kesetaraan di berbagai bidang. Berkembangnya zaman dan teknologi membuat perempuan harus dapat beradaptasi dengan baik mulai dari pendidikan, karir, hingga menjalani kehidupan sehari-hari. Merayakan Hari Kartini tidak hanya sekadar menggunakan kebaya saja, tetapi juga bisa dalam berbagai cara, termasuk memahami industri kopi. Salah satunya melalui acara Women in Coffee dalam menyambut Hari Kartini tahun ini. Women in Coffee diisi oleh dua perempuan hebat yaitu Sabrina Mayang dan Marchieta Almathea, Top 6 Finalist Fore Grind Master 2023. Mereka menjadi salah dua dari perwakilan para perempuan hebat yang jadi bagian dari Fore Coffee. Keduanya tak hanya aktif sebagai Barista Fore Coffee, tetapi juga menjalani berbagai kegiatan lainnya seperti melakukan hobi di luar pekerjaannya bahkan melanjutkan studi pendidikan yang tinggi. Tak hanya itu, keduanya juga selalu mengeksplorasi diri supaya terus berkembang dan diakui di industri kopi. Para peserta yang hadir begitu antusias mengikuti rangkaian acara. Mulai dari mendengarkan pemaparan materi dari kedua pembicara, mengetahui apa itu coffee essentials, belajar membuat Latte Art dan mengikuti challenge-nya hingga sharing session tentang seluk-beluk industri kopi Indonesia yang saat ini tidak hanya sekadar segelas minuman saja, tetapi sudah menjadi bagian dari kita dalam menikmati dan merayakan hal-hal yang penting di setiap harinya. Keseruan acara ini juga berkat kolaborasi antara Fore Coffee dengan Girls Beyond,  komunitas Gen-Z Millenial yang berfokus dalam memberikan wadah bagi perkembangan karir dan self development bagi seluruh perempuan di Indonesia. Melalui komunitas Fore Circle, siapa saja bisa jadi bagian buat belajar banyak hal di dunia kopi dan membuka koneksi baru yang lebih luas. Bahkan, kamu bisa ikut andil dalam memberikan dampak yang esensial dan berkelanjutan. Nah, kalau ingin ikut keseruan seperti Women in Coffee dalam merayakan Hari Kartini edisi tahun ini, kamu bisa follow semua sosial media Fore Coffee, ya. Jangan sampai ketinggalan keseruan acara Fore Circle lainnya. See ya, Fore Friends!",
    date: "2024-06-12",
  },
  {
    tittle:
      "FORE COFFEE BAWA GEBRAKAN NEW COFFEE CULTURE MELALUI INOVASI, OTENTISITAS, DAN KAMPANYE #FOREVOLUTION",
    img: fore2,
    description:
      "Jakarta, 22 Mei 2024 – Sejak didirikan pada tahun 2018, Fore Coffee telah menetapkan langkah untuk terus memberikan pelayanan dan penyajian terbaik kepada pelanggan setianya melalui berbagai inovasi. Seiring dengan perkembangan industri kopi tanah air yang terus berkembang pesat hingga saat ini, Fore Coffee turut berkontribusi dan memberikan keunikan pada aneka ragam menu serta memperkuat posisi sebagai pemain kopi ritel terdepan di Indonesia yang menggebrak dengan new coffee culture. Hal ini didorong oleh perubahan serta perkembangan era kopi yang semakin dinamis. Salah satu gebrakan besar Fore Coffee adalah peluncuran produk Butterscotch Sea-Salt Latte yang terjual lebih dari 5 juta cups hingga April 2024 – menjadikannya produk paling digemari hingga saat ini. Kesuksesan ini diikuti dengan keberhasilan produk Buttercream Series, yang semakin mengukuhkan posisi Fore Coffee sebagai trendsetter dalam produk kopi kekinian yang inovatif dan unik. Fore Coffee terus berkomitmen untuk berinovasi melalui 200 cabang di 45 kota yang tersebar di seluruh Indonesia hingga ke Singapura. Perkembangan industri kopi yang dinamis juga mempengaruhi konsumen dalam mencari tahu bagaimana proses kopi yang sebenarnya, menikmati dengan berbagai cara dan aneka jenis variasi produk yang tercipta. Fore Coffee berkomitmen untuk terus menjaga keaslian citarasa dari biji kopi Indonesia melalui berbagai inovasi dan menjadi sarana bagi konsumen untuk menikmati rasa otentik yang tercermin dalam segelas kopi.",
    date: "2024-06-11",
  },
  {
    tittle: "SEBARKAN KEBAIKAN RAMADAN KEPADA SESAMA BARENG FORE COFFEE",
    img: fore3,
    description:
      "Bulan Ramadan telah tiba. Bulan yang penuh keberkahan untuk mencapai kemenangan. Bulan yang penuh makna dan arti untuk berbagi terhadap sesama. Banyak kebaikan yang bisa dilakukan oleh kita untuk memaknai Ramadan dalam kehidupan sehari-hari dan menjadi nilai yang suci. Untuk menyambut kemeriahan Ramadan, Fore Coffee juga ingin memaknai Ramadan dengan penuh suka cita. Dapat mewujudkan harapan mereka yang punya peran di balik segelas kopi yang tersaji. Di bulan yang suci ini, Fore Coffee ingin mengajak para Fore Friends dan masyarakat untuk sebarkan kebaikan kepada sesama. Terutama, mereka yang ingin mewujudkan harapannya masing-masing.",
    date: "2024-05-23",
  },
  {
    tittle:
      "PRESS RELEASE | FORE COFFEE RESMI KANTONGI SERTIFIKAT HALAL UNTUK MENJAMIN KUALITAS BAGI PELANGGAN",
    img: fore4,
    description:
      "Fore Coffee, sebagai salah satu brand retail kopi terkemuka di Indonesia, telah membangun reputasi yang kuat dalam menyajikan kopi berkualitas tinggi sejak tahun 2018. Dengan visi dan misinya untuk memberikan pengalaman kopi terbaik kepada pelanggan, Fore Coffee tidak hanya fokus pada rasa kopi yang lezat, tetapi juga memperhatikan aspek keamanan dan kehalalan produknya dalam setiap bahan baku produk yang digunakan sejak awal.",
    date: "2024-01-19",
  },
];

const News = () => {
  const flickityOptions = {
    cellAlign: "left",
    contain: true,
    groupCells: 1,
    wrapAround: false,
    pageDots: false,
    prevNextButton: false,
    draggable: ">1",
  };
  return (
    <div className="max-w-[1200px] mx-auto my-40">
      <div className="flex flex-col justify-between md:flex-row md:items-center relative mx-4 md:text-left text-center">
        <h1 className="text-6xl text-[#006041] mb-4 font-bold">ForeNews</h1>
        <p className="text-2xl text-[#97a259] text-wrap tracking-tight">
          Dapatkan berita terbaru dan informasi <br /> menarik dari kami!
        </p>

        {/* <div className="absolute bottom-0 left-40 ">1</div> */}
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-items-center my-20 gap-4 mx-4">
        {news.map((data, index) => (
          <div
            className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl h-full"
            key={index}
          >
            <img
              className="object-cover h-52 w-full"
              src={data.img}
              alt={data.tittle}
            />
            <div className="px-6 py-4">
              <div className="text-xl font-semibold mb-2 capitalize text-gray-700">
                {data.tittle.toLocaleLowerCase().substring(0, 50)}.....
              </div>
              <p className="text-gray-500 mt-8 font-[14px]">
                {data.description.substring(0, 70)}
              </p>
            </div>
            <hr />
            <div className="px-6 pt-2 pb-4">
              <p className="text-gray-500 italic tracking-wide font-[14px]">
                {new Date(data.date).toLocaleDateString("id-ID", {
                  month: "long",
                })}{" "}
                {new Date(data.date).getDate()},{" "}
                {new Date(data.date).getFullYear()}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="mt-4 bg-[#006041] px-8 py-4 rounded-full w-[200px] text-white hover:border-[#006041] hover:bg-white hover:text-[#006041] transition-colors duration-300 text-md shadow-2xl shadow-[#006041] border-2 border-[#006041]">
          Selengkapnya
        </button>
      </div>
    </div>
  );
};

export default News;
