const heroImage = "/hero.webp";
const planeIcon = "/plane.png";
const verifiedIcon = "/verified.png";
import { MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[74vh] sm:h-[90vh] lg:h-screen flex items-center justify-center px-4 lg:px-0">
      <div
        className="relative w-full h-[70vh] lg:h-screen flex items-center
               rounded-2xl lg:rounded-none overflow-hidden"
      >
        {/* Hero image with priority loading */}
        <img
          src={heroImage}
          alt="Kazakhstan Tourism"
          fetchpriority="high"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl lg:rounded-none"
        />

        {/* Затемнение */}
        <div className="absolute inset-0 bg-black/50 lg:bg-black/40 rounded-2xl lg:rounded-none"></div>

        {/* Контент: на мобильке центрируем по ширине (mx-6), на десктопе смещаем влево lg:ml-[350px] */}
        <div className="relative text-left text-white max-w-3xl mx-6 lg:ml-[350px] lg:mx-0 -translate-y-6 lg:-translate-y-7 z-10">
          <div className="flex items-end gap-2 sm:gap-3 mb-1 lg:gap-4 lg:mb-4">
            <h1 className="text-[12vw] sm:text-5xl md:text-7xl lg:text-7xl leading-tight text-gotham font-[500]">
              From Visa
            </h1>
            <img
              src={planeIcon}
              alt="Plane Icon"
              loading="lazy"
              className="w-[45px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[90px] lg:h-[90px] object-contain -translate-y-2 sm:-translate-y-3"
            />
          </div>

          <h1 className="text-[12vw] sm:text-5xl md:text-7xl lg:text-7xl mb-4 lg:mb-8 leading-tight text-gotham font-[500]">
            to Adventure
          </h1>

          <div className="flex flex-wrap items-center gap-3 lg:gap-4 mb-6">
            <p className="text-[6vw] sm:text-2xl md:text-4xl lg:text-4xl font-[400] text-gotham">
              Your Trusted Partner in Kazakhstan
            </p>
            <img
              src={verifiedIcon}
              alt="Decor Icon"
              loading="lazy"
              className="hidden sm:block w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain"
            />
          </div>

          <div className="flex justify-center lg:hidden">
            <button
              className="
                w-[90%] sm:w-[60%] md:w-[45%]
                h-[60px] sm:h-[65px]
                bg-[#F4EBE2] text-[#22324A] 
                text-[20px]
                font-medium text-gotham
                rounded-[10px] shadow-md
                hover:scale-105 transition-transform
              "
              onClick={() => {
                window.location.href = "/kazakhstan";
              }}
            >
              Discover Tours
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
