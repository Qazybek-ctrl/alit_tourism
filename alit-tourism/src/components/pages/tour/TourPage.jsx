import { useParams } from "react-router-dom";
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

  return (
    <div className="min-h-screen flex flex-col items-center bg-white py-16">
      <div className="w-[1135px] bg-[#F6F6F6] rounded-[30px] px-20 py-12 flex flex-col">
        <h1 className="text-[#22324A] text-[38px] font-[500] text-gotham mb-6">
          Kolsai & Kaindy Lakes With Canyons Day Tour
        </h1>

        <div className="flex gap-4">
          <div className="w-[75%] bg-[#F6F6F6] rounded-[16px] h-[500px] flex items-center justify-center">
            <img src={Kolsay1} alt="Kolsay1" className="h-full w-full object-cover rounded-[16px]" />
          </div>

          <div className="flex flex-col gap-4 w-[25%]">
            <div className="bg-[#F6F6F6] rounded-[16px] flex-1 flex items-center justify-center">
              <img src={Kaindy} alt="Kaindy" className="h-full w-full object-cover rounded-[16px]" />
            </div>

            <div className="bg-[#F6F6F6] rounded-[16px] flex-1 flex items-center justify-center">
              <img src={Tamgaly} alt="Tamgaly" className="h-full w-full object-cover rounded-[16px]" />
            </div>

            <div className="bg-[#F6F6F6] rounded-[16px] flex-1 flex items-center justify-center">
              <img src={Mountain} alt="Mountain" className="h-full w-full object-cover rounded-[16px]" />
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 translate-y-[535px] w-[1350px] h-[144px] bg-[#F4EBE2] rounded-[40px] flex items-center justify-between px-16 mt-8">
          <p className="text-[#22324A] text-[32px] font-semibold w-[580px] leading-tight">
            Kolsai & Kaindy Lakes With Canyons Day Tour
          </p>

          <div className="flex flex-col items-start text-left">
            <span className="text-[#22324A]/50 text-[20px] text-gotham">Price</span>
            <span className="text-[#22324A] text-[32px] text-gotham font-[500]">From $440</span>
          </div>

          <button className="w-[270px] h-[80px] bg-[#22324A] rounded-[20px] text-white text-[32px] font-[500] text-gotham">
            Book
          </button>
        </div>

        <h1 className="mt-40 text-[#22324A] text-[38px] font-[500] text-gotham mb-4">
          Best of Almaty in 1 Day – Lakes & Canyons Tour
        </h1>
        <p className="text-gotham font-[400] text-[#22324A]/50 leading-tight">
          If you have only one day to explore, this tour is the perfect way to see the region’s top natural wonders. In just a day, you’ll visit Charyn Canyon, Black Canyon and Kolsai Lake. Travel in a small group for a friendly atmosphere, enjoy the comfort, and be guided by an English-speaking expert who knows the best photo spots. Along the way, taste traditional Kazakh cuisine in a remote mountain village.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4 w-[488px] bg-white rounded-[15px] px-[40px] py-8">
            <h1 className="text-[#22324A] text-[38px] font-[500] text-gotham mb-4">
              Tour Info
            </h1>
            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <div className="flex items-center gap-4">
                  <img src={pinPng} alt="Car" className="w-12 h-12" />
                  <div className="flex flex-col">
                    <span className="text-[#22324A]/50 text-gotham font-[400] text-[11px]">Starting / Ending Point</span>
                    <span className="text-[#22324A] text-gotham font-[500] text-[13px]">Almaty City</span>
                  </div>
                </div>

                <div className="mt-2 flex items-center gap-4">
                  <img src={flagPng} alt="Car" className="w-12 h-12" />
                  <div className="flex flex-col">
                    <span className="text-[#22324A]/50 text-gotham font-[400] text-[11px]">Total Distance</span>
                    <span className="text-[#22324A] text-gotham font-[500] text-[13px]">~660 km round trip</span>
                  </div>
                </div>

                <div className="mt-2 flex items-center gap-4">
                  <img src={clockPng} alt="Car" className="w-12 h-12" />
                  <div className="flex flex-col">
                    <span className="text-[#22324A]/50 text-gotham font-[400] text-[11px]">Duration</span>
                    <span className="text-[#22324A] font-gotham font-[500] text-[13px]">~17 hours</span>
                  </div>
                </div>

                <div className="mt-2 flex items-center gap-4">
                  <img src={timerPng} alt="Car" className="w-12 h-12" />
                  <div className="flex flex-col">
                    <span className="text-[#22324A]/50 text-gotham font-[400] text-[11px]">Start Time</span>
                    <span className="text-[#22324A] text-gotham font-[500] text-[13px]">06:00 AM (Almaty)</span>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="flex items-center gap-4">
                  <img src={cloudPng} alt="Car" className="w-12 h-12" />
                  <div className="flex flex-col">
                    <span className="text-[#22324A]/50 text-gotham font-[400] text-[11px]">Season</span>
                    <span className="text-[#22324A] text-gotham font-[500] text-[13px]">Year-round</span>
                  </div>
                </div>

                <div className="mt-2 flex items-center gap-4">
                  <img src={circlePng} alt="Car" className="w-12 h-12" />
                  <div className="flex flex-col">
                    <span className="text-[#22324A]/50 text-gotham font-[400] text-[11px]">Language</span>
                    <span className="text-[#22324A] text-gotham font-[500] text-[13px]">English</span>
                  </div>
                </div>

                <div className="mt-2 flex items-start gap-4">
                  <img src={smilePng} alt="Car" className="w-12 h-12" />
                  <div className="flex flex-col">
                    <span className="text-[#22324A]/50 text-gotham font-[400] text-[11px]">Activities</span>
                    <span className="mt-2 text-[#22324A] text-gotham font-[500] text-[13px]">Sightseeing</span>
                    <span className="mt-2 text-[#22324A] text-gotham font-[500] text-[13px]">Walking</span>
                    <span className="mt-2 text-[#22324A] text-gotham font-[500] text-[13px]">National Cuisine Tasting</span>
                    <span className="mt-2 text-[#22324A] text-gotham font-[500] text-[13px]">Boating</span>
                    <span className="mt-2 text-[#22324A] text-gotham font-[500] text-[13px]">Hiking</span>
                    <span className="mt-2 text-[#22324A] text-gotham font-[500] text-[13px]">Horse Riding (optional)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка */}
          <div className="flex flex-col gap-4 w-[488px] bg-white rounded-[15px] px-[40px] py-8">
            <h1 className="text-[#22324A] text-[38px] font-[500] text-gotham mb-4">
              Tourist Info
            </h1>
            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <div className="flex items-start gap-4">
                  <img src={yesPng} alt="Car" className="w-12 h-12" />
                  <div className="flex flex-col">
                    <span className="text-[#22324A]/50 text-gotham font-[400] text-[11px]">Included</span>
                    <span className="mt-2 text-[#22324A] text-gotham font-[500] text-[13px]">English-speaking guide</span>
                    <span className="mt-2 text-[#22324A] text-gotham font-[500] text-[13px]">Comfortable transportation</span>
                    <span className="mt-2 text-[#22324A] text-gotham font-[500] text-[13px]">All entry fees</span>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="flex items-start gap-4">
                  <img src={noPng} alt="Car" className="w-12 h-12" />
                  <div className="flex flex-col">
                    <span className="text-[#22324A]/50 text-gotham font-[400] text-[11px]">Not Included</span>
                    <span className="mt-2 text-[#22324A] text-gotham font-[500] text-[13px]">Boating</span>
                    <span className="mt-2 text-[#22324A] text-gotham font-[500] text-[13px]">Horse riding</span>
                    <span className="mt-2 text-[#22324A] text-gotham font-[500] text-[13px]">Lunch</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div className="flex items-start gap-4">
                <img src={bagPng} alt="Car" className="w-12 h-12" />
                <div className="flex flex-col">
                  <span className="text-[#22324A]/50 text-gotham font-[400] text-[11px]">What to Bring</span>
                  <span className="mt-2 text-[#22324A] text-gotham font-[500] text-[13px]">Comfortable walking shoes</span>
                  <span className="mt-2 text-[#22324A] text-gotham font-[500] text-[13px]">Weather/Season-appropriate</span>
                  <span className="mt-2 text-[#22324A] text-gotham font-[500] text-[13px]">Hat & Sunglasses</span>
                  <span className="mt-2 text-[#22324A] text-gotham font-[500] text-[13px]">Drinking water & snacks</span>
                  <span className="mt-2 text-[#22324A] text-gotham font-[500] text-[13px]">Camera or phone charger/power bank</span>
                  <span className="mt-2 text-[#22324A] text-gotham font-[500] text-[13px]">Medicine if necessary: allergies, personal demand, etc.</span>
                  <span className="mt-2 text-[#22324A] text-gotham font-[500] text-[13px]">Positive energy & good mood!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-[#22324A] text-[38px] font-[500] text-gotham mt-10">
          Highlights
        </h1>

        <div className="grid grid-cols-4 gap-4 mt-5">
          <div className="bg-white rounded-[25px] px-6 py-8">
            <img src={oiuPng} alt="Car" className="w-13 h-10" />
            <p className="mt-4 text-gotham font-[500] text-[#22324A] text-[20px] w-[125px]">
              3 top natural attractions in 1 day
            </p>
          </div>
          <div className="bg-white rounded-[25px] p-6">
            <img src={oiuPng} alt="Car" className="w-13 h-10" />
            <p className="mt-4 text-gotham font-[500] text-[#22324A] text-[20px]">
              Small, friendly international group
            </p>
          </div>
          <div className="bg-white rounded-[25px] p-6">
            <img src={oiuPng} alt="Car" className="w-13 h-10" />
            <p className="mt-4 text-gotham font-[500] text-[#22324A] text-[20px]">
              Comfortable travel & plenty of photo stops
            </p>
          </div>
          <div className="bg-white rounded-[25px] p-6">
            <img src={oiuPng} alt="Car" className="w-13 h-10" />
            <p className="mt-4 font-gotham font-[500] text-[#22324A] text-[20px]">
              Local food & hospitality experience
            </p>
          </div>
        </div>

        <h1 className="text-[#22324A] text-[38px] font-[500] text-gotham mt-10">
          You will visit:
        </h1>
        <p className="mt-4 font-gotham font-[500] text-[#22324A]/50 text-[20px]">
          Kolsai & Kaindy Lakes with Charyn Canyon – Day Tour
        </p>
        <p className="font-gotham font-[400] text-[#22324A]/50 text-[20px]">
          Discover the breathtaking beauty of Kazakhstan in one unforgettable day!
        </p>
      </div>
    </div >
  );
}