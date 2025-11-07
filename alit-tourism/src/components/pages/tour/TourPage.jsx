import { useState } from "react";
import { useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Kolsay1 from "../../../assets/blocks/tours/1photo.png";
import Assy from "../../../assets/blocks/tours/2photo.png";
import Almaty from "../../../assets/blocks/tours/3photo.png";
import Issyk from "../../../assets/blocks/tours/4photo.png";
import Emel from "../../../assets/blocks/tours/7photo.png";
import Tamgaly from "../../../assets/blocks/tours/9photo.png";
import AlmaArasan from "../../../assets/blocks/tours/10photo.png";
import KokZhailau from "../../../assets/blocks/tours/11photo.png";
import EtnoAuyl from "../../../assets/blocks/tours/12photo.png";
import BigAlmatyLake from "../../../assets/blocks/biglake.png";
import Charyn from "../../../assets/blocks/charyn.png";
import Kolsay2 from "../../../assets/blocks/kolsay.png";
import Kaindy from "../../../assets/blocks/kain.png";
import Lake from "../../../assets/blocks/lake.png";
import Mountain from "../../../assets/blocks/mountain.png";
import cloudPng from "../../../assets/icons/cloud.png";
import timerPng from "../../../assets/icons/timer.png";
import clockPng from "../../../assets/icons/clock.png";
import flagPng from "../../../assets/icons/flag.png";
import pinPng from "../../../assets/icons/pin.png";
import circlePng from "../../../assets/icons/circle.png";
import smilePng from "../../../assets/icons/smile.png";
import noPng from "../../../assets/icons/no.png";
import yesPng from "../../../assets/icons/yes.png";
import bagPng from "../../../assets/icons/bag1.png";
import lightningPng from "../../../assets/icons/lightning.png";
import oiuPng from "../../../assets/oiu.png";

export default function TourPage() {
  const { id } = useParams();
  const slides = [
    {
      image: Kolsay1,
      description:
        "Kolsai Lakes – Known as the “Pearls of the Tien Shan,” these crystal-clear mountain lakes are surrounded by pine forests and snow-capped peaks.",
    },
    {
      image: Kaindy,
      description:
        "Charyn Canyon – Often called the ‘Grand Canyon of Central Asia,’ with dramatic red rock formations and breathtaking views.",
    },
    {
      image: Charyn,
      description:
        "Almaty City – Kazakhstan’s cultural hub with cozy coffee shops, mountain views, and lively streets full of art and music.",
    },
    {
      image: Charyn,
      description:
        "Almaty City – Kazakhstan’s cultural hub with cozy coffee shops, mountain views, and lively streets full of art and music.",
    },
  ];

  const steps = [
    {
      title: "Walk along the canyon rim",
      description: "to the upper viewing point for breathtaking panoramas.",
    },
    {
      title: "Breakfast by the river",
      description: "Enjoy local pastries and tea near the canyon edge.",
    },
    {
      title: "Drive to Kolsai Lake",
      description: "Continue your journey through mountain roads.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prev = () =>
    setCurrentIndex((p) => (p === 0 ? slides.length - 1 : p - 1));
  const next = () =>
    setCurrentIndex((p) => (p === slides.length - 1 ? 0 : p + 1));

  return (
    <div className="min-h-screen flex flex-col items-center bg-white py-8 px-4 sm:py-16 sm:px-0 text-gotham">
      <div className="w-full sm:w-[1135px] bg-[#F6F6F6] rounded-[20px] sm:rounded-[30px] px-6 sm:px-20 py-8 sm:py-12 flex flex-col">
        {/* Заголовок */}
        <h1 className="text-[#22324A] text-2xl sm:text-[38px] font-[500] text-gotham mb-6 text-center sm:text-left">
          Kolsai & Kaindy Lakes With Canyons Day Tour
        </h1>

        {/* Блок с фото */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-[75%] rounded-[16px] h-[250px] sm:h-[500px] overflow-hidden">
            <img
              src={Kolsay1}
              alt="Kolsay1"
              className="h-full w-full object-cover rounded-[16px]"
            />
          </div>

          <div className="hidden sm:flex flex-col gap-4 w-[25%]">
            {[Kaindy, Tamgaly, Mountain].map((img, i) => (
              <div
                key={i}
                className="bg-[#F6F6F6] rounded-[16px] flex-1 flex items-center justify-center overflow-hidden"
              >
                <img
                  src={img}
                  alt={`photo-${i}`}
                  className="h-full w-full object-cover rounded-[16px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Инфо-плашка */}
        <div className="relative mt-8 sm:mt-12 bg-[#F4EBE2] rounded-[25px] sm:rounded-[40px] w-full flex flex-col sm:flex-row items-center justify-between p-6 sm:px-16 sm:h-[144px] gap-4 text-center sm:text-left">
          <p className="text-[#22324A] text-xl sm:text-[32px] font-semibold sm:w-[580px] leading-tight">
            Kolsai & Kaindy Lakes With Canyons Day Tour
          </p>

          <div className="flex flex-col items-center sm:items-start">
            <span className="text-[#22324A]/50 text-[16px] sm:text-[20px] text-gotham">
              Price
            </span>
            <span className="text-[#22324A] text-[24px] sm:text-[32px] text-gotham font-[500]">
              From $440
            </span>
          </div>

          <button className="w-full sm:w-[270px] h-[60px] sm:h-[80px] bg-[#22324A] rounded-[15px] sm:rounded-[20px] text-white text-[20px] sm:text-[32px] font-[500] text-gotham">
            Book
          </button>
        </div>

        {/* Описание */}
        <h1 className="mt-10 sm:mt-40 text-[#22324A] text-2xl sm:text-[38px] font-[500] text-gotham mb-4 text-center sm:text-left">
          Best of Almaty in 1 Day – Lakes & Canyons Tour
        </h1>
        <p className="text-gotham font-[400] text-[#22324A]/70 leading-tight text-[16px] sm:text-[18px] text-center sm:text-left">
          If you have only one day to explore, this tour is the perfect way to
          see the region’s top natural wonders. In just a day, you’ll visit
          Charyn Canyon, Black Canyon and Kolsai Lake. Travel in a small group
          for a friendly atmosphere, enjoy the comfort, and be guided by an
          English-speaking expert who knows the best photo spots. Along the way,
          taste traditional Kazakh cuisine in a remote mountain village.
        </p>

        {/* Информация о туре и туристе */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Левая колонка */}
          <div className="bg-white rounded-[15px] px-6 py-8">
            <h1 className="text-[#22324A] text-2xl sm:text-[38px] font-[500] text-gotham mb-4">
              Tour Info
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Левая часть */}
              <div className="space-y-3">
                <InfoRow
                  icon={pinPng}
                  label="Starting / Ending Point"
                  value="Almaty City"
                />
                <InfoRow
                  icon={flagPng}
                  label="Total Distance"
                  value="~660 km round trip"
                />
                <InfoRow icon={clockPng} label="Duration" value="~17 hours" />
                <InfoRow
                  icon={timerPng}
                  label="Start Time"
                  value="06:00 AM (Almaty)"
                />
              </div>

              {/* Правая часть */}
              <div className="space-y-3">
                <InfoRow icon={cloudPng} label="Season" value="Year-round" />
                <InfoRow icon={circlePng} label="Language" value="English" />
                <div className="flex items-start gap-4">
                  <img
                    src={smilePng}
                    alt="icon"
                    className="w-10 h-10 sm:w-12 sm:h-12"
                  />
                  <div>
                    <p className="text-[#22324A]/50 text-[12px]">Activities</p>
                    {[
                      "Sightseeing",
                      "Walking",
                      "National Cuisine Tasting",
                      "Boating",
                      "Hiking",
                      "Horse Riding (optional)",
                    ].map((a, i) => (
                      <p key={i} className="text-[#22324A] text-[13px] mt-1">
                        {a}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка */}
          <div className="bg-white rounded-[15px] px-6 py-8">
            <h1 className="text-[#22324A] text-2xl sm:text-[38px] font-[500] text-gotham mb-4">
              Tourist Info
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <IncludeList
                icon={yesPng}
                title="Included"
                items={[
                  "English-speaking guide",
                  "Comfortable transportation",
                  "All entry fees",
                ]}
              />
              <IncludeList
                icon={noPng}
                title="Not Included"
                items={["Boating", "Horse riding", "Lunch"]}
              />
            </div>

            <div className="mt-10">
              <IncludeList
                icon={bagPng}
                title="What to Bring"
                items={[
                  "Comfortable walking shoes",
                  "Weather/Season-appropriate",
                  "Hat & Sunglasses",
                  "Drinking water & snacks",
                  "Camera or power bank",
                  "Medicine if necessary",
                  "Positive energy & good mood!",
                ]}
              />
            </div>
          </div>
        </div>

        {/* Highlights */}
        <h1 className="text-[#22324A] text-2xl sm:text-[38px] font-[500] text-gotham mt-10 text-center sm:text-left">
          Highlights
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          {[
            "3 top natural attractions in 1 day",
            "Small, friendly international group",
            "Comfortable travel & plenty of photo stops",
            "Local food & hospitality experience",
          ].map((text, i) => (
            <div
              key={i}
              className="bg-white rounded-[20px] p-6 flex flex-col items-center sm:items-start text-center sm:text-left"
            >
              <img src={oiuPng} alt="icon" className="w-10 h-10" />
              <p className="mt-4 font-gotham font-[500] text-[#22324A] text-[18px]">
                {text}
              </p>
            </div>
          ))}
        </div>

        <h1 className="text-[#22324A] text-2xl sm:text-[38px] font-[500] text-gotham mt-10 text-center sm:text-left">
          You will visit:
        </h1>
        <p className="mt-2 text-[#22324A]/60 text-[18px] text-center sm:text-left">
          Kolsai & Kaindy Lakes with Charyn Canyon – Day Tour
        </p>
        <p className="text-[#22324A]/60 text-[16px] text-center sm:text-left mb-8">
          Discover the breathtaking beauty of Kazakhstan in one unforgettable
          day!
        </p>

        {/* 🖼️ Image carousel */}
        <div className="relative w-full max-w-[400px] sm:max-w-[700px] mx-auto overflow-hidden rounded-[16px] shadow-md bg-white">
          {/* кнопки */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md p-2 rounded-full"
          >
            <ChevronLeft className="w-5 h-5 text-[#22324A]" />
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md p-2 rounded-full"
          >
            <ChevronRight className="w-5 h-5 text-[#22324A]" />
          </button>

          {/* лента слайдов */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 flex flex-col items-center text-center"
              >
                <img
                  src={slide.image}
                  alt={`slide-${i}`}
                  className="w-full h-[250px] sm:h-[350px] object-cover"
                />
                <p className="p-4 text-sm sm:text-base text-[#22324A] leading-relaxed">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-[400px] sm:max-w-[700px] mx-auto mt-10 bg-white rounded-[20px] p-6 sm:p-10">
          <h2 className="text-[#22324A] text-xl sm:text-2xl font-semibold mb-6">
            Itinerary
          </h2>

          <div className="relative">
            {/* вертикальная линия */}
            <div className="absolute left-[17px] top-2 bottom-10 w-[2px] bg-gray-300"></div>

            {/* шаги */}
            <div className="flex flex-col gap-8">
              {steps.map((step, i) => (
                <div key={i} className="relative pl-10">
                  {/* кружочек */}
                  <div className="absolute left-[10px] top-1 w-4 h-4 rounded-full bg-[#22324A] border-[2px] border-white shadow-md"></div>

                  {/* контент */}
                  <div>
                    <p className="text-base sm:text-lg text-[#22324A] font-medium leading-snug">
                      {step.title}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4">
      <img src={icon} alt="icon" className="w-10 h-10 sm:w-12 sm:h-12" />
      <div>
        <span className="text-[#22324A]/50 text-[11px] sm:text-[12px]">
          {label}
        </span>
        <p className="text-[#22324A] text-[13px] font-[500]">{value}</p>
      </div>
    </div>
  );
}

function IncludeList({ icon, title, items }) {
  return (
    <div className="flex items-start gap-4">
      <img src={icon} alt="icon" className="w-10 h-10 sm:w-12 sm:h-12" />
      <div>
        <span className="text-[#22324A]/50 text-[11px]">{title}</span>
        {items.map((item, i) => (
          <p key={i} className="text-[#22324A] text-[13px] mt-1">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
