import {useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {ChevronLeft, ChevronRight} from "lucide-react";
import toast from "react-hot-toast";
import bagPng from "../../../assets/icons/bag1.png";
import oiuPng from "../../../assets/oiu.png";
import {Tours} from "../../helper/ImageHelper.jsx"

export default function TourPage() {
    const navigate = useNavigate();
    const isAuthenticated = !!localStorage.getItem("token"); // пример проверки
    const {id} = useParams();
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentTour = Tours.find((Tour) => Tour.id === Number(id));
    if (!currentTour) {
        return (
            <div className="h-[200px] flex flex-col items-center justify-center bg-white text-center space-y-3">
                <h1 className="text-[#22324A] text-2xl sm:text-4xl font-semibold">
                    Page Doesn’t Exist 😔
                </h1>
                <button
                    onClick={() => navigate("/")}
                    className="text-[#22324A] text-xl sm:text-2xl font-medium hover:underline hover:text-[#3B4B6A] transition"
                >
                    Go Back to Main Page
                </button>
            </div>
        );
    }

    const handleBook = () => {
        if (isAuthenticated) {
            navigate(`/form/guest?id=${id}`);
        } else {
            toast.error("You need to log in before booking", {
                duration: 4000
            });
            navigate("/auth");
        }
    };

    const photos = currentTour?.photos || [];
    const slides = currentTour?.slides || [];

    const prev = () =>
        setCurrentIndex((p) => (p === 0 ? slides.length - 1 : p - 1));
    const next = () =>
        setCurrentIndex((p) => (p === slides.length - 1 ? 0 : p + 1));

    return (
        <div className="min-h-screen flex flex-col items-center bg-white py-8 px-4 sm:py-16 sm:px-0 text-gotham">
            <div
                className="w-full sm:w-[1135px] bg-[#F6F6F6] rounded-[20px] sm:rounded-[30px] px-6 sm:px-20 py-8 sm:py-12 flex flex-col">
                {/* Заголовок */}
                <h1 className="text-[#22324A] text-2xl sm:text-[38px] font-[500] text-gotham mb-6 text-left">
                    {currentTour.title}
                </h1>

                {/* Блок с фото */}
                <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
                    {/* Большой блок */}
                    <div
                        className={`rounded-[16px] h-[150px] sm:h-[500px] overflow-hidden 
      ${photos.length > 1 ? "w-full sm:w-[75%]" : "w-full sm:w-full"}`}
                    >
                        <img
                            src={photos[0]}
                            alt="main-photo"
                            className="h-full w-full object-cover rounded-[16px]"
                            loading="lazy"
                        />
                    </div>

                    {/* Малые блоки справа (десктоп) / снизу (мобилка) */}
                    {photos.length > 1 && (
                        <>
                            {/* Десктоп */}
                            <div className="hidden sm:flex flex-col gap-4 w-[25%]">
                                {Array(4)
                                    .fill(0)
                                    .map((_, i) => {
                                        if (!photos[i + 1]) return null;
                                        return (
                                            <div
                                                key={i}
                                                className="h-[155px] bg-[#F6F6F6] rounded-[16px] flex items-center justify-center overflow-hidden"
                                            >
                                                <img
                                                    src={photos[i + 1]}
                                                    alt={`photo-${i}`}
                                                    className="h-full w-full object-cover rounded-[16px]"
                                                    loading="lazy"
                                                />
                                            </div>
                                        );
                                    })}
                            </div>

                            {/* Мобилка */}
                            <div className="flex sm:hidden flex-row gap-2 mt-0 w-full">
                                {photos.slice(1).map((img, i) => (
                                    <div
                                        key={i}
                                        className="h-[50px] w-[100px] bg-[#F6F6F6] rounded-[10px] flex items-center justify-center overflow-hidden"
                                    >
                                        <img
                                            src={img}
                                            loading="lazy"
                                            alt={`photo-${i}`}
                                            className="h-full w-full object-cover rounded-[10px]"
                                        />
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>


                {/* Инфо-плашка */}
                <div
                    className="relative mt-8 sm:mt-12 bg-[#F4EBE2] rounded-[25px] sm:rounded-[40px] w-full flex flex-col sm:flex-row items-center justify-between p-6 sm:px-16 sm:h-[144px] gap-4 text-center sm:text-left">
                    <p className="text-[#22324A] text-xl sm:text-[32px] font-semibold sm:w-[580px] leading-tight">
                        {currentTour.title}
                    </p>

                    <div className="flex flex-col items-center sm:items-start">
            <span className="text-[#22324A]/50 text-[16px] sm:text-[20px] text-gotham">
              Price
            </span>
                        <span className="text-[#22324A] text-[24px] sm:text-[32px] text-gotham font-[500]">
              From {currentTour.price}
            </span>
                    </div>

                    <button
                        onClick={handleBook}
                        className="w-full sm:w-[270px] h-[60px] sm:h-[80px] bg-[#22324A] rounded-[15px] sm:rounded-[20px] text-white text-[20px] sm:text-[32px] font-[500] text-gotham"
                    >
                        Book
                    </button>
                </div>

                {/* Описание */}
                {currentTour.bestOfTitle &&
                    <h1 className="mt-10 sm:mt-20 text-[#22324A] text-2xl sm:text-[38px] font-[500] text-gotham mb-4 text-center sm:text-left">
                        {currentTour.bestOfTitle}
                    </h1>}
                {currentTour.bestOfDescription  &&
                    <p className="mt-10 text-gotham font-[400] text-[#22324A]/70 leading-tight text-[16px] sm:text-[18px] text-center sm:text-left">
                        {currentTour.bestOfDescription}
                    </p>}

                {/* Информация о туре и туристе */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Левая колонка — Tour Info */}
                    <div className="bg-white rounded-[15px] px-6 py-8">
                        <h1 className="text-[#22324A] text-2xl sm:text-[38px] font-[500] text-gotham mb-4">
                            Tour Info
                        </h1>

                        {currentTour?.tourInfo && currentTour.tourInfo.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {currentTour.tourInfo.map((section, i) => (
                                    <IncludeList
                                        key={i}
                                        icon={section.icon || bagPng}
                                        title={section.title}
                                        items={
                                            Array.isArray(section.texts)
                                                ? section.texts.filter((t) => t.trim() !== "")
                                                : []
                                        }
                                    />
                                ))}
                            </div>
                        ) : (
                            <p className="text-[#22324A]/50 text-center">No Tour Info available</p>
                        )}
                    </div>

                    {/* Правая колонка — Tourist Info */}
                    <div className="bg-white rounded-[15px] px-6 py-8">
                        <h1 className="text-[#22324A] text-2xl sm:text-[38px] font-[500] text-gotham mb-4">
                            Tourist Info
                        </h1>

                        {currentTour?.touristInfo && currentTour.touristInfo.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {currentTour.touristInfo.map((section, i) => (
                                    <IncludeList
                                        key={i}
                                        icon={section.icon || bagPng}
                                        title={section.title}
                                        items={
                                            Array.isArray(section.texts)
                                                ? section.texts.filter((t) => t.trim() !== "")
                                                : []
                                        }
                                    />
                                ))}
                            </div>
                        ) : (
                            <p className="text-[#22324A]/50 text-center">No Tourist Info available</p>
                        )}
                    </div>
                </div>

                {/* Highlights */}
                {currentTour.highlightsTitle  &&
                    <h1 className="text-[#22324A] text-2xl sm:text-[38px] font-[500] text-gotham mt-10 text-center sm:text-left">
                        {currentTour.highlightsTitle}
                    </h1>
                }

                {currentTour.highlights &&
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                        {currentTour.highlights.map((text, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-[20px] p-6 flex flex-col items-center sm:items-start text-center sm:text-left"
                            >
                                <img src={oiuPng} alt="icon" className="w-10 h-10" loading="lazy"/>
                                <p className="mt-4 font-gotham font-[500] text-[#22324A] text-[18px]">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>}
                {currentTour.youWillVisitTitle &&
                    <div>
                        <h1 className="text-[#22324A] text-2xl sm:text-[38px] font-[500] text-gotham mt-10 text-center sm:text-left">
                            You will visit:
                        </h1>
                        <p className="mt-2 text-[#22324A]/60 text-[18px] text-left leading-[25px]">
                            {currentTour.title}
                        </p>
                        <p className="text-[#22324A]/60 text-[16px] text-left mb-8">
                            Discover the breathtaking beauty of Kazakhstan in one unforgettable
                            day!
                        </p>

                        {/* 🖼️ Image carousel */}

                        <div
                            className="relative w-full max-w-[400px] sm:max-w-[700px] overflow-hidden rounded-[16px] shadow-md bg-white">
                            {/* кнопки */}
                            <button
                                onClick={prev}
                                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md p-2 rounded-full"
                            >
                                <ChevronLeft className="w-5 h-5 text-[#22324A]"/>
                            </button>

                            <button
                                onClick={next}
                                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md p-2 rounded-full"
                            >
                                <ChevronRight className="w-5 h-5 text-[#22324A]"/>
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
                                            loading="lazy"
                                        />
                                        <p className="p-4 text-sm sm:text-base text-[#22324A] leading-relaxed">
                                            {slide.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>}

                <h1 className="text-[#22324A] text-2xl sm:text-[38px] font-[500] text-gotham mt-10 text-center sm:text-left">
                    Itinerary
                </h1>

                {currentTour.itinerary && currentTour.itinerary.map(item => (
                    <div
                        className="w-full max-w-[400px] sm:max-w-[600px]  mt-10 bg-white rounded-[20px] p-6 sm:p-10">
                        <div className="relative">
                            <div className="absolute left-[17px] top-2 bottom-10 w-[2px] bg-gray-300"></div>
                            <div className="flex flex-col gap-8">
                                {item.steps.map((step, i) => (
                                    <div key={i} className="relative pl-10">
                                        <div
                                            className="absolute left-[10px] top-1 w-4 h-4 rounded-full bg-[#22324A] border-[2px] border-white shadow-md"></div>
                                        <div>
                                            <p className="text-base sm:text-lg text-[#22324A] font-medium leading-snug">
                                                {step.title}
                                            </p>
                                            <p className="text-sm text-gray-500 mt-1">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>))}
                            </div>
                        </div>
                        <p className="p-4 mt-2 text-[10px] sm:text-sm text-gray-500 text-gotham tracking-[-0.01em] leading-tight">
                            {item.underText}
                        </p>
                    </div>
                ))}
            </div>
        </div>

    );
}

function IncludeList({icon, title, items}) {
    return (
        <div className="flex items-start gap-4">
            <img src={icon} alt="icon" loading="lazy" className="w-10 h-10 sm:w-12 sm:h-12"/>
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
