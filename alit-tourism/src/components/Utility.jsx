import { useState } from "react";
import { useNavigate } from "react-router-dom";
import flagandstreet from "../assets/flagandstreet.png";
import baiterek from "../assets/baiterek.png";
import mapandred from "../assets/mapandred.png";
import oiuIcon from "../assets/oiu.png";
import arrowIcon from "../assets/arrow.png";
import starIcon from "../assets/star.png";
import airportImage from "../assets/airport.png";
import mcbookImage from "../assets/mcbook.png";
import twopeopleImage from "../assets/twopeople.png";
import btrkImage from "../assets/btrk.png";
import graphIcon from "../assets/blocks/graph.png";
import paperIcon from "../assets/blocks/paper.png";
import ppIcon from "../assets/blocks/pp.png";
import ssIcon from "../assets/blocks/ss.png";
import kainImage from "../assets/blocks/kain.png";
import kolsayImage from "../assets/blocks/kolsay.png";
import charynImage from "../assets/blocks/charyn.png";
import biglakeImage from "../assets/blocks/biglake.png";

export default function Explore() {
  const [selected, setSelected] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="w-full py-0 sm:py-24 bg-white text-center text-gotham">
      <p className="font-medium text-[30px] sm:text-[40px] leading-[100%] tracking-[-0.03em] text-[#22324A] flex items-center justify-center">
        Explore Monthly
        <img
          src={oiuIcon}
          alt="Oiu Icon"
          className="ml-2 w-12 h-12 object-contain"
        />
      </p>

      <h2 className="font-medium text-[40px] sm:text-[80px] leading-[70px] sm:leading-[130px] text-gotham text-[#22324A]">
        We Recommend
      </h2>

      <p className="font-normal text-[30px] sm:text-[60px] leading-[100%] tracking-[-0.03em] text-[#22324A]">
        Destinations Every Month
      </p>

      <p className="mt-5 md:mt-10 font-medium text-[15px] sm:text-[50px] leading-[100%] tracking-[-0.03em] text-[#C5C8CB]">
        explore tours in Kazakh landscape
      </p>

      <div className="mt-5 flex flex-col md:flex-row justify-center items-center md:items-end gap-6 px-6 sm:px-12 md:px-32 md:mt-16">
        {/* Карточка 1 */}
        <div className="relative w-[95%] md:w-[210px] h-[100px] md:h-[460px]  flex-shrink-0">
          <img
            src={mapandred}
            alt="photo 1"
            className="w-full h-full rounded-[17px] md:rounded-[30px] object-cover object-[center_10%]"
          />

          <div
            className="absolute top-3 right-4 w-[50px] h-[50px] rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <img
              src={arrowIcon}
              alt="arrow"
              className="w-5 h-5 object-contain"
            />
          </div>

          <div className="absolute bottom-6 md:bottom-16 left-4 text-[#FFFFFF] leading-[100%] tracking-[-0.03em] text-left text-gotham">
            <p className="font-normal text-[26px] sm:text-[28px] md:hidden">
              Travel Tips Blog
            </p>

            <div className="hidden md:block">
              <p className="mb-4 font-normal text-[30px]">Travel Tips</p>
              <p className="font-normal text-[30px]">Blog</p>
            </div>
          </div>
        </div>

        {/* Карточка 2 */}
        <div className="relative w-[95%] md:w-[210px] h-[100px] md:h-[460px]  flex-shrink-0">
          <img
            src={baiterek}
            alt="photo 2"
            className="w-full h-full rounded-[17px] md:rounded-[30px] object-cover"
          />

          <div className="absolute top-3 right-4 w-[50px] h-[50px] rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm">
            <img
              src={arrowIcon}
              alt="arrow"
              className="w-5 h-5 object-contain"
            />
          </div>

          <div className="absolute bottom-4 md:bottom-8 left-4 text-[#FFFFFF] tracking-[-0.03em] flex items-end leading-none">
            <span className="font-normal text-gotham md:font-bold text-[24px] md:text-[48px]">
              32°
            </span>
            <span className="font-normal text-[24px] ml-2">Sunny</span>
          </div>
        </div>

        {/* Карточка 3 */}
        <div className="relative w-[95%] md:w-[210px] h-[100px] md:h-[460px] rounded-[17px] md:rounded-[30px] bg-[#F4EBE2] flex-shrink-0">
          <div className="absolute bottom-5 md:bottom-10 left-6 text-[#22324A] tracking-[-0.03em] leading-none text-left">
            <div className="flex items-center mb-2">
              <img
                src={starIcon}
                alt="star"
                className="w-6 h-6 md:w-10 md:h-10 mr-2"
              />
              <span className="font-[500] md:font-bold text-[30px] md:text-[60px] leading-none">
                4,8k
              </span>
            </div>

            <p className="font-[400] md:font-medium text-[11px] md:text-[23px]">
              The Most Enchanting Dive Destinations
            </p>
          </div>
        </div>

        {/* Большое изображение */}
        <img
          src={flagandstreet}
          alt="photo 4"
          className="w-[95%] md:w-[210px] sm:w-[633px] h-auto sm:h-[448px] rounded-[17px] md:rounded-[30px] object-cover"
        />
      </div>

      <div className="mt-10 md:mt-32 flex items-center justify-center text-[#22324A]">
        <p className="font-[500] md:font-semibold text-[30px] md:text-[70px] tracking-[0.01em] leading-none flex items-center">
          Visa Support
          <img
            src={oiuIcon}
            alt="Oiu Icon"
            className="ml-6 w-[60px] md:w-[120px] h-[60px] md:h-[120px] object-contain"
          />
        </p>
      </div>

      <div className="mt-10 md:mt-20 grid grid-cols-2 md:flex justify-center items-start gap-5">
        <div className="flex flex-col items-center gap-3">
          <div
            className="relative w-[170px] md:w-[250px] h-[170px] md:h-[250px] rounded-[20px] cursor-pointer"
            onClick={() => setSelected(1)}
          >
            {selected !== 1 && (
              <div className="absolute inset-0 bg-[#C5C8CBB2] rounded-[20px] z-10" />
            )}

            {selected === 1 && (
              <div className="absolute inset-0 rounded-[20px] border-8 border-[#F4EBE2] pointer-events-none" />
            )}

            <img
              src={btrkImage}
              alt="square-1"
              className="w-full h-full rounded-[20px] object-cover"
            />

            <div className="absolute -top-4 -right-4 w-[70px] h-[70px] rounded-[20px] bg-[#F4EBE2] shadow-md flex items-center justify-center pointer-events-none text-center z-20">
              <img
                src={ppIcon}
                alt="Plane Icon"
                className="w-9 h-9 object-contain"
              />
            </div>
          </div>

          <div className="flex justify-between w-full px-2 items-center">
            <span className="text-[#22324A] text-lg font-medium">Tourism</span>
            <span className="bg-[#F4EBE2] text-[#22324A] text-sm font-semibold px-2 py-1 rounded-md">
              B12
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div
            className="relative w-[170px] md:w-[250px] h-[170px] md:h-[250px] rounded-[20px] cursor-pointer"
            onClick={() => setSelected(2)}
          >
            {selected !== 2 && (
              <div className="absolute inset-0 bg-[#C5C8CBB2] rounded-[20px] z-10" />
            )}
            {selected === 2 && (
              <div className="absolute inset-0 rounded-[20px] border-8 border-[#F4EBE2] pointer-events-none" />
            )}

            <img
              src={mcbookImage}
              alt="square-2"
              className="w-full h-full rounded-[20px] object-cover"
            />

            <div className="absolute -top-4 -right-4 w-[70px] h-[70px] rounded-[20px] bg-[#F4EBE2] shadow-md flex items-center justify-center pointer-events-none text-center z-20">
              <img
                src={ssIcon}
                alt="Plane Icon"
                className="w-9 h-9 object-contain"
              />
            </div>
          </div>

          <div className="flex justify-between w-full px-2 items-center">
            <span className="text-[#22324A] text-lg font-medium">Work</span>
            <span className="bg-[#F4EBE2] text-[#22324A] text-sm font-semibold px-2 py-1 rounded-md">
              C3
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div
            className="relative w-[170px] md:w-[250px] h-[170px] md:h-[250px] rounded-[20px] cursor-pointer"
            onClick={() => setSelected(3)}
          >
            {selected !== 3 && (
              <div className="absolute inset-0 bg-[#C5C8CBB2] rounded-[20px] z-10" />
            )}
            {selected === 3 && (
              <div className="absolute inset-0 rounded-[20px] border-8 border-[#F4EBE2] pointer-events-none" />
            )}

            <img
              src={twopeopleImage}
              alt="square-3"
              className="w-full h-full rounded-[20px] object-cover"
            />

            <div className="absolute -top-4 -right-4 w-[70px] h-[70px] rounded-[20px] bg-[#F4EBE2] shadow-md flex items-center justify-center pointer-events-none text-center z-20">
              <img
                src={graphIcon}
                alt="Plane Icon"
                className="w-9 h-9 object-contain"
              />
            </div>
          </div>

          <div className="flex justify-between w-full px-2 items-center">
            <span className="text-[#22324A] text-lg font-medium">Business</span>
            <div className="flex gap-1">
              {["B1", "B2", "B3"].map((code) => (
                <span
                  key={code}
                  className="bg-[#F4EBE2] text-[#22324A] text-sm font-semibold px-2 py-1 rounded-md"
                >
                  {code}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div
            className={`relative w-[170px] md:w-[250px] h-[170px] md:h-[250px] rounded-[20px] cursor-pointer transition-transform duration-300 
                            `}
            onClick={() => setSelected(4)}
          >
            {selected !== 4 && (
              <div className="absolute inset-0 bg-[#C5C8CBB2] rounded-[20px] z-10" />
            )}
            {selected === 4 && (
              <div className="absolute inset-0 rounded-[20px] border-8 border-[#F4EBE2] pointer-events-none" />
            )}

            <img
              src={airportImage}
              alt="square-4"
              className="w-full h-full rounded-[20px] object-cover"
            />

            <div className="absolute -top-4 -right-4 w-[70px] h-[70px] rounded-[20px] bg-[#F4EBE2] shadow-md flex items-center justify-center pointer-events-none text-center z-20">
              <img
                src={paperIcon}
                alt="Plane Icon"
                className="w-9 h-9 object-contain"
              />
            </div>
          </div>

          <div className="flex justify-between w-full px-2 items-center">
            <span className="text-[#22324A] text-lg font-medium">
              Business Immigrant
            </span>
            <span className="bg-[#F4EBE2] text-[#22324A] text-sm font-semibold px-2 py-1 rounded-md">
              C5
            </span>
          </div>
        </div>
      </div>
      <div className="mt-5 md:mt-16 flex justify-center items-center">
        <button
          onClick={() => navigate("/visa")}
          className="w-[85%] md:w-[550px] h-[60px] md:h-[100px] 
               bg-[#22324A] text-[#F4EBE2] font-gotham rounded-[13px] md:rounded-[20px]
               hover:opacity-80 flex items-center justify-center"
        >
          <span className="text-[20px] md:text-[40px]">Apply to Visa</span>
        </button>
      </div>

      <div className="bg-[#F4F4F4] rounded-[15px] py-10 px-2 mx-5 md:px-10 mt-10 md:mt-20 mb-10">
        {/* Заголовок */}
        <div className="flex items-center justify-center gap-0 md:gap-2 mb-5 md:mb-10">
          <span className="text-[#22324A] text-[25px] md:text-[65px] font-[500] md:font-semibold text-left md:text-center">
            Top-Recommended Tours
          </span>
          <img
            src={oiuIcon}
            alt="icon"
            className="hidden md:block w-[120px] h-[120px] object-contain"
          />
        </div>

        {/* Горизонтальный scroll */}
        <div className="flex justify-center">
          <div className="flex overflow-x-auto md:overflow-x-visible gap-2 md:gap-6 px-2 md:px-0 scrollbar-hide md:justify-center">
            {[
              { img: kolsayImage, title: "Kolsay Lake", days: "5 days" },
              { img: charynImage, title: "Charyn Canyon", days: "3 days" },
              { img: biglakeImage, title: "Big Almaty Lake", days: "1 week" },
              { img: kainImage, title: "Kaindy Lake", days: "5 days" },
            ].map((tour, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex flex-col items-start w-[200px] md:w-[300px]"
              >
                <div className="relative w-[200px] md:w-full h-[200px] md:h-[300px] rounded-[15px] md:rounded-[30px] border border-[#C5C8CB] overflow-hidden">
                  <img
                    src={tour.img}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="hidden md:flex absolute w-[100px] h-[35px] md:w-[110px] md:h-[40px] bottom-5 right-4 bg-[#F4EBE2] text-[#22324A] text-[16px] md:text-[20px] font-normal rounded-md flex items-center justify-center">
                    {tour.days}
                  </div>
                </div>
                <p className="mt-3 text-[#22324A] text-[20px] md:text-[24px] font-medium">
                  {tour.title}
                </p>
                <p className="text-[#C5C8CB] text-[16px] md:text-[20px]">
                  Almaty
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Кнопка */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => navigate("/kazakhstan")}
            className="w-[90%] md:w-[520px] h-[60px] md:h-[70px] 
            md:h-[100px] bg-[#ffffff] md:bg-[#F4EBE2] text-[#22324A] text-[22px] md:text-[30px] 
            font-[400] md:font-bold rounded-[10px] md:rounded-[18px] flex items-center justify-center hover:opacity-90 transition"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
