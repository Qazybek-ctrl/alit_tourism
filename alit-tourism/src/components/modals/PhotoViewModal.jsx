import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../../utility/LanguageContext";

// Images from public folder
const Aktau = "/images/places/Aktau - Caspian Sea.webp";
const Almaty = "/images/places/Almaty.webp";
const AlmatyAutmn = "/images/places/Almaty autumn.webp";
const AltynEmel1 = "/images/places/Altyn Emel National Park.webp";
const AltynEmel2 = "/images/places/Altyn Emel National Park 2.webp";
const Astana = "/images/places/Astana.webp";
const Bayanauyl = "/images/places/Bayanauyl Natuonal Park.webp";
const Big = "/images/places/Big Almaty Lake.webp";
const Bozzhyra = "/images/places/Bozzhyra valley.webp";
const Burabay = "/images/places/Burabay National Park.webp";
const Charyn = "/images/places/Charyn Canyon.webp";
const Kaiyndy = "/images/places/Kaiyndy lake.webp";
const Katon = "/images/places/Katon Karagay National Park.webp";
const Keruen = "/images/places/Keruen Saray Turkestan.jpg";
const KokTobe = "/images/places/Kok Tobe.jpg";
const KokZhailau = "/images/places/Kok Zhailau Almaty.webp";
const Kolsay = "/images/places/Kolsay lakes.webp";
const Medeu = "/images/places/Medeuu.jpg";
const Shymbulak = "/images/places/Shymbulak Ski resort.webp";
const Turkestan = "/images/places/Turkestan.webp";

const PhotoViewModal = ({ onClose }) => {
    const { t } = useLanguage();
    const photos = [
        KokTobe,
        Shymbulak,
        Almaty,
        Bayanauyl,
        Keruen,
        AltynEmel1,
        AltynEmel2,
        Astana,
        Big,
        Bozzhyra,
        Burabay,
        AlmatyAutmn,
        Charyn,
        Kaiyndy,
        Katon,
        Aktau,
        KokZhailau,
        Kolsay,
        Medeu,
        Turkestan,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevPhoto = () => {
        setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
    };

    const nextPhoto = () => {
        setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-white w-full max-w-5xl rounded-xl shadow-lg relative p-4 md:p-6 flex flex-col items-center">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold text-2xl"
                >
                    &times;
                </button>

                {/* Title */}
                <h2 className="text-center text-xl md:text-3xl font-bold mb-4 text-[#22324A]">
                    {t("modals.photoView.title")}
                </h2>

                {/* Main image with arrows */}
                <div className="relative w-full flex items-center justify-center">
                    <button
                        onClick={prevPhoto}
                        className="absolute left-0 md:left-4 p-2 rounded-full bg-white/70 hover:bg-white transition shadow"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>

                    <img
                        src={photos[currentIndex]}
                        alt={`photo-${currentIndex}`}
                        className="w-full max-h-[60vh] object-contain rounded-lg transition-all duration-300"
                        loading="lazy"
                    />

                    <button
                        onClick={nextPhoto}
                        className="absolute right-0 md:right-4 p-2 rounded-full bg-white/70 hover:bg-white transition shadow"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-700" />
                    </button>
                </div>

                {/* Thumbnail gallery */}
                <div className="flex mt-4 overflow-x-auto space-x-2 pb-2 w-full scrollbar-hide">
                    <div className="flex space-x-2 mx-auto">
                        {photos.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`thumb-${index}`}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-20 h-16 object-cover rounded-md cursor-pointer border-2 flex-shrink-0 ${index === currentIndex
                                    ? "border-blue-500"
                                    : "border-transparent hover:border-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PhotoViewModal;