import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Aktau from "../../assets/images/places/Aktau - Caspian Sea.jpg";
import Almaty from "../../assets/images/places/Almaty.webp";
import AlmatyAutmn from "../../assets/images/places/Almaty autumn.jpg";
import AltynEmel1 from "../../assets/images/places/Altyn Emel National Park.jpg";
import AltynEmel2 from "../../assets/images/places/Altyn Emel National Park 2.webp";
import Astana from "../../assets/images/places/Astana.png";
import Bayanauyl from "../../assets/images/places/Bayanauyl Natuonal Park.jpg";
import Big from "../../assets/images/places/Big Almaty Lake.jpg";
import Bozzhyra from "../../assets/images/places/Bozzhyra valley.jpg";
import Burabay from "../../assets/images/places/Burabay National Park.jpg";
import Charyn from "../../assets/images/places/Charyn Canyon.jpg";
import Kaiyndy from "../../assets/images/places/Kaiyndy lake.jpeg";
import Katon from "../../assets/images/places/Katon Karagay National Park.jpg";
import Keruen from "../../assets/images/places/Keruen Saray Turkestan.jpg";
import KokTobe from "../../assets/images/places/Kok Tobe.jpg";
import KokZhailau from "../../assets/images/places/Kok Zhailau Almaty.png";
import Kolsay from "../../assets/images/places/Kolsay lakes.webp";
import Medeu from "../../assets/images/places/Medeu.jpg";
import Shymbulak from "../../assets/images/places/Shymbulak Ski resort.jpg";
import Turkestan from "../../assets/images/places/Turkestan.jpg";

const PhotoViewModal = ({ onClose }) => {
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
                    The Most Breathtaking Places
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
                                className={`w-20 h-16 object-cover rounded-md cursor-pointer border-2 flex-shrink-0 ${
                                    index === currentIndex
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