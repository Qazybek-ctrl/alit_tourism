import { Link } from "react-router-dom";
import airportImage from "../../assets/airport.png";
import mcbookImage from "../../assets/mcbook.png";
import twopeopleImage from "../../assets/twopeople.png";
import btrkImage from "../../assets/btrk.png";
import graphIcon from "../../assets/blocks/graph.png";
import paperIcon from "../../assets/blocks/paper.png";
import ppIcon from "../../assets/blocks/pp.png";
import ssIcon from "../../assets/blocks/ss.png";

const visaBlocks = [
  {
    img: btrkImage,
    title: "Tourism",
    type: "B12",
    link: "/visa/tourism",
    imgColor: "#F4EBE2F2",
  },
  {
    img: mcbookImage,
    title: "Work",
    type: "C3",
    link: "/visa/work",
    imgColor: "#795743F2",
  },
  {
    img: twopeopleImage,
    title: "Business",
    type: "B1, B2, B3",
    link: "/visa/business",
    imgColor: "#5C88CBF2",
  },
  {
    img: airportImage,
    title: "Business Immigrant",
    type: "C5",
    link: "/visa/immigrant",
    imgColor: "#22324AF2",
  },
];

export default function VisaServices() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white py-8 md:py-16 text-gotham">
      {/* Главный контейнер */}
      <div className="max-w-[1135px] w-full md:min-h-[2000px] bg-[#FFFFFF] md:bg-[#F6F6F6] rounded-[30px] px-6 md:px-12 py-2 md:py-16">
        {/* Заголовок */}
        <h1 className="text-[#22324A] text-3xl md:text-6xl font-[500] md:font-normal text-left md:text-center mb-4 md:mb-16">
          Visa Services
        </h1>

        <div className="flex flex-col gap-10">
          {visaBlocks.map((block, index) => (
            <div
              key={index}
              className="relative rounded-[15px] md:rounded-[30px] w-full h-[250px] md:h-[393px] mx-auto p-0 md:p-6 flex flex-col"
            >
              {/* Иконка */}
              <div className="absolute top-2 right-4 w-[70px] h-[70px] rounded-[20px] bg-[#F4EBE2] shadow-md flex items-center justify-center pointer-events-none text-center z-20">
                <img
                  src={
                    index === 0
                      ? ppIcon
                      : index === 1
                      ? ssIcon
                      : index === 2
                      ? graphIcon
                      : paperIcon
                  }
                  alt="Plane Icon"
                  className="w-9 h-9 object-contain"
                />
              </div>

              {/* Изображение */}
              <div className="relative w-full h-[150px] md:h-[220px] rounded-[15px] md:rounded-[30px] overflow-hidden">
                <img
                  src={block.img}
                  alt={block.title}
                  className={`w-full h-full object-cover 
            ${
              index === 0
                ? "object-[center_9%]"
                : index === 1
                ? "object-[center_70%]"
                : "object-center"
            }`}
                />

                {/* Цветной оверлей только для мобилки */}
                <div
                  className="absolute inset-0 md:hidden"
                  style={{ backgroundColor: block.imgColor, opacity: 0.95 }}
                ></div>

                {/* Заголовок и тип поверх фото (только мобилка) */}
                <div className="absolute bottom-3 left-3 right-3 md:hidden text-white z-20">
                  <h2 className="text-[20px] font-bold leading-tight drop-shadow-md">
                    {block.title}
                  </h2>
                  <span className="inline-block mt-1 bg-[#F4EBE2] text-[#22324A] text-[18px] font-semibold px-3 py-1 rounded-md">
                    {block.type}
                  </span>
                </div>
              </div>

              {/* Контент под фото (только десктоп) */}
              <div className="hidden md:flex items-center justify-between flex-1 mt-5">
                <div className="flex items-center gap-3">
                  <h2 className="text-[#22324A] text-2xl font-bold">
                    {block.title}
                  </h2>
                  <span className="bg-[#F4EBE2] text-[#22324A] text-[25px] font-bold px-3 py-1 rounded-md">
                    {block.type}
                  </span>
                </div>

                <Link
                  to={block.link}
                  className="bg-[#22324A] w-[250px] h-[50px] text-[#F4EBE2] text-[25px] font-semibold rounded-[10px] flex items-center justify-center hover:opacity-90 transition"
                >
                  <span className="-translate-y-0.5">Apply</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
