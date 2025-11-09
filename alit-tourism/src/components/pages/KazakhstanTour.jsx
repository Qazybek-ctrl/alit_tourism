import {useNavigate} from "react-router-dom";
import {Tours} from "../helper/ImageHelper.jsx"

export default function KazakhstanTour() {
    const navigate = useNavigate();
    const photos = Tours;

    return (
        <div className="min-h-screen flex flex-col items-center bg-white py-8 md:py-16">
            <div
                className="max-w-[1135px] w-full bg-[#FFFFFF] md:bg-[#F6F6F6] rounded-[30px] px-0 md:px-28 py-0 md:py-16">
                <h1 className="text-[#22324A] text-4xl md:text-6xl font-[500] md:font-normal mb-10 md:mb-16 text-center">
                    Almaty Tours
                </h1>

                {/* Адаптивная сетка */}
                <div
                    className="grid grid-cols-2 lg:grid-cols-3 gap-x-0 lg:gap-x-5 gap-y-2 lg:gap-y-14 justify-items-center">
                    {photos.map((photo, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="relative w-[45vw] h-[45vw] md:w-[280px] md:h-[280px]">
                                <img
                                    src={photo.src}
                                    alt={photo.title}
                                    className="w-full h-full rounded-[10px] md:rounded-[20px] object-cover"
                                />

                                <div className="absolute inset-0 bg-[#00000033] rounded-[10px] md:rounded-[20px]"/>

                                <span
                                    className="absolute bottom-6 left-4 text-white text-[14px] md:text-[20px] font-bold leading-tight drop-shadow-md">
                                  {photo.title}
                                </span>

                                <div
                                    className="absolute top-2 right-2 md:top-4 md:right-4 rounded-[10px] bg-[#F4EBE280] flex items-center justify-center px-2 md:px-4 h-[30px] md:h-[40px]">
                  <span className="text-white text-[14px] md:text-[20px] font-normal">
                    {photo.duration}
                  </span>
                                </div>
                            </div>

                            <button
                                onClick={() => navigate(`/tours/${index + 1}`)}
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
