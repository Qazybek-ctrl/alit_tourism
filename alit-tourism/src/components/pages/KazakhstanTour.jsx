import tour1 from "../../assets/blocks/tours/1photo.png";
import tour2 from "../../assets/blocks/tours/2photo.png";
import tour3 from "../../assets/blocks/tours/3photo.png";
import tour4 from "../../assets/blocks/tours/4photo.png";
import tour5 from "../../assets/blocks/tours/5photo.png";
import tour6 from "../../assets/blocks/tours/6photo.png";
import tour7 from "../../assets/blocks/tours/7photo.png";
import tour8 from "../../assets/blocks/tours/8photo.png";
import tour9 from "../../assets/blocks/tours/9photo.png";
import tour10 from "../../assets/blocks/tours/10photo.png";
import tour11 from "../../assets/blocks/tours/11photo.png";
import tour12 from "../../assets/blocks/tours/12photo.png";

export default function KazakhstanTour() {
  const photos = [
    {
      src: tour1,
      title: "Kolsai & Kaindy Lakes With Canyons Day Tour",
      duration: "Day Tour",
    },
    { src: tour2, title: "Assy Pleateau", duration: "Day Tour" },
    { src: tour3, title: "Almaty City Tour", duration: "2 Days" },
    {
      src: tour4,
      title: "Issyk Lake and Turgen Waterfall Tour",
      duration: "Day Tour",
    },
    { src: tour5, title: "Big Almaty Lake", duration: "Half-Day Tour" },
    { src: tour6, title: "Almaty City Tour", duration: "Day Tour" },
    {
      src: tour7,
      title: "Altyn Emel National Park 2 Days JEEP Tour",
      duration: "2 Days",
    },
    {
      src: tour8,
      title:
        "4-day Jeep Adventure: Altyn Emel, Charyn Canyon, Kolsai & Kaindy Lakes",
      duration: "4 Days",
    },
    {
      src: tour9,
      title: "Tamgaly Tas Petroglyphs & Nomad City",
      duration: "Day Tour",
    },
    {
      src: tour10,
      title: "Alma-Arasan & Ayusai Mountain Gorges Day Tour",
      duration: "Day Tour",
    },
    {
      src: tour11,
      title: "Kok Zhailau Half-day Tour",
      duration: "Half-Day Tour",
    },
    { src: tour12, title: "Bizdin Auyl Etno Camp", duration: "Day Tour" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-white py-8 md:py-16">
      <div className="max-w-[1135px] w-full bg-[#FFFFFF] md:bg-[#F6F6F6] rounded-[30px] px-0 md:px-28 py-0 md:py-16">
        <h1 className="text-[#22324A] text-4xl md:text-6xl font-[500] md:font-normal mb-10 md:mb-16 text-center">
          Almaty Tours
        </h1>

        {/* Адаптивная сетка */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-0 lg:gap-x-5 gap-y-2 lg:gap-y-14 justify-items-center">
          {photos.map((photo, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-[45vw] h-[45vw] md:w-[280px] md:h-[280px]">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full rounded-[10px] md:rounded-[20px] object-cover"
                />

                <div className="absolute inset-0 bg-[#00000033] rounded-[10px] md:rounded-[20px]" />

                <span className="absolute bottom-6 left-4 text-white text-[14px] md:text-[20px] font-bold leading-tight drop-shadow-md">
                  {photo.title}
                </span>

                <div className="absolute top-2 right-2 md:top-4 md:right-4 rounded-[10px] bg-[#F4EBE280] flex items-center justify-center px-2 md:px-4 h-[30px] md:h-[40px]">
                  <span className="text-white text-[14px] md:text-[20px] font-normal">
                    {photo.duration}
                  </span>
                </div>
              </div>

              <button
                onClick={() => alert(`Booking tour #${index + 1}`)}
                className="mt-2 md:mt-3 w-[45vw] md:w-[280px] bg-[#22324A] text-[#FFFFFF] text-sm md:text-xl font-normal rounded-[8px] md:rounded-[12px] py-2 md:py-3 hover:opacity-90 transition"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
