import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const flagandstreet = "/flagandstreet.webp";
const review = "/review.jpg";
const almaty = "/images/places/Almaty.webp";
const mapandred = "/mapandred.png";
const oiuIcon = "/oiu.png";
const arrowIcon = "/arrow.png";
const starIcon = "/star.png";
const KokZhailau = "/images/places/Kok Zhailau Almaty.webp";
const businessImage = "/business.webp";
const workImage = "/work.webp";
const businessImmigrantImage = "/businessImmigrant.jpg";
const graphIcon = "/blocks/graph.png";
const paperIcon = "/blocks/paper.png";
const ppIcon = "/blocks/pp.png";
const ssIcon = "/blocks/ss.png";
const kainImage = "/images/places/Kaiyndy lake.jpeg";
const kolsayImage = "/images/places/kolsay.webp";
const charynImage = "/images/places/charyn.webp";
const biglakeImage = "/images/places/biglake.webp";
import WeatherModal from "./modals/WeatherModal.jsx";
import ReviewModal from "./modals/ReviewModal.jsx";
import PhotoViewModal from "./modals/PhotoViewModal.jsx";

const tours = [
    { id: 1, img: kolsayImage, title: "Kolsay Lake", days: "5 days" },
    { id: 8, img: charynImage, title: "Charyn Canyon", days: "3 days" },
    { id: 6, img: biglakeImage, title: "Big Almaty Lake", days: "1 week" },
    { id: 1, img: kainImage, title: "Kaindy Lake", days: "5 days" }]

export default function Explore() {
    const [weather, setWeather] = useState({ temperature: 0, condition: "Sunny" });
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenReview, setIsOpenReview] = useState(false);
    const [isOpenPhoto, setIsOpenPhoto] = useState(false);
    const navigate = useNavigate();
    console.log("weather:", weather)

    useEffect(() => {
        fetch("https://api.open-meteo.com/v1/forecast?latitude=43.15&longitude=76.95&hourly=apparent_temperature&models=best_match&current=temperature_2m,relative_humidity_2m,rain,wind_speed_10m,apparent_temperature,snowfall&timezone=auto&forecast_days=2")
            .then((res) => res.json())
            .then((data) => {
                const current = data.current;
                // Определяем состояние погоды по дождю и температуре
                let condition = "Sunny";
                if (current.rain > 0) condition = "Rain"; else if (current.temperature_2m < 0) condition = "Snow"; else if (current.temperature_2m < 10) condition = "Cloudy";

                setWeather({
                    temperature: Math.round(current.temperature_2m),
                    rain: current.rain,
                    humidity: current.relative_humidity_2m,
                    wind: current.wind_speed_10m,
                    condition,
                    hourly: data.hourly
                });
            })
            .catch((err) => console.error(err));
    }, []);

    return (<section className="w-full py-0 sm:py-0 bg-white text-center text-gotham">
        <h2 className="font-medium text-[40px] sm:text-[80px] leading-[70px] sm:leading-[130px] text-gotham text-[#22324A]">
            We Recommend
        </h2>

        <div
            className="mt-5 flex flex-col md:flex-row justify-center items-center md:items-end gap-6 px-6 sm:px-12 md:px-32 md:mt-16">
            {/* Карточка 1 */}
            <div className="relative w-[95%] md:w-[210px] h-[100px] md:h-[460px] flex-shrink-0">
                <img loading="lazy"
                    src={mapandred}
                    alt="photo 1"
                    className="w-full h-full rounded-[17px] md:rounded-[30px] object-cover object-[center_10%]"
                />

                {/* Кнопка перехода */}
                <div
                    className="absolute top-3 right-4 w-[50px] h-[50px] rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm cursor-pointer"
                    onClick={() => navigate("/travel/tips")}
                >
                    <img loading="lazy"
                        src={arrowIcon}
                        alt="arrow"
                        className="w-5 h-5 object-contain"
                    />
                </div>

                {/* Текстовый блок */}
                <div
                    className="absolute bottom-6 md:bottom-16 left-4 text-[#FFFFFF] leading-[100%] tracking-[-0.03em] text-left text-gotham">
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
            <div className="relative w-[95%] md:w-[210px] h-[100px] md:h-[460px] flex-shrink-0">
                <img loading="lazy"
                    src={flagandstreet}
                    alt="photo 2"
                    className="w-full h-full rounded-[17px] md:rounded-[30px] object-cover"
                />

                {/* Кнопка открытия модалки */}
                <div
                    className="absolute top-3 right-4 w-[50px] h-[50px] rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm cursor-pointer"
                    onClick={() => setIsOpen(true)}
                >
                    <img loading="lazy" src={arrowIcon} alt="arrow" className="w-5 h-5 object-contain" />
                </div>

                {/* Основная погода */}
                <div
                    className="absolute bottom-4 md:bottom-8 left-4 text-[#FFFFFF] tracking-[-0.03em] flex items-end leading-none">
                    <span className="font-normal text-gotham md:font-bold text-[24px] md:text-[48px]">
                        {weather.temperature}°
                    </span>
                    <span className="font-[500] text-[24px] ml-2">{weather.condition}</span>
                </div>

                {/* Модалка с деталями */}
                {isOpen && weather && (<WeatherModal
                    weather={weather}
                    hourly={weather.hourly}
                    city="Almaty"
                    onClose={() => setIsOpen(false)}
                />)}
            </div>

            {/* Карточка 3 */}
            <div
                className="relative w-[95%] md:w-[210px] h-[100px] md:h-[460px] rounded-[17px] md:rounded-[30px] bg-[#75bcff] flex-shrink-0">
                <img loading="lazy"
                    src={review}
                    alt="photo 2"
                    className="w-full h-full rounded-[17px] md:rounded-[30px] object-cover"
                />
                
                <div
                    className="absolute top-3 right-4 w-[50px] h-[50px] rounded-full flex items-center justify-center bg-white/40 backdrop-blur-sm cursor-pointer"
                    onClick={() => setIsOpenReview(true)}
                >
                    <img loading="lazy" src={arrowIcon} alt="arrow" className="w-5 h-5 object-contain" />
                </div>

                <div
                    className="absolute bottom-5 md:bottom-10 left-6 text-[#FFFFFF] tracking-[-0.03em] leading-none text-left">
                    <div className="flex items-center mb-2">
                        <img loading="lazy"
                            src={starIcon}
                            alt="star"
                            className="w-6 h-6 md:w-10 md:h-10 mr-2"
                        />
                        <span className="font-[500] md:font-bold text-[30px] md:text-[50px] leading-none">
                            4,9k
                        </span>
                    </div>

                    <p className="font-[400] md:font-medium text-[11px] md:text-[20px]">
                        The Most Enchanting Dive Destinations
                    </p>
                </div>

                {isOpenReview && (<ReviewModal onClose={() => setIsOpenReview(false)} />)}
            </div>

            {/* Карточка 4 */}
            <div className="relative w-[95%] md:w-[210px] h-[100px] md:h-[460px] flex-shrink-0">
                <div className="absolute top-3 right-4 w-[50px] h-[50px] rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm cursor-pointer"
                    onClick={() => setIsOpenPhoto(true)} >
                    <img loading="lazy"
                        src={arrowIcon}
                        alt="arrow"
                        className="w-5 h-5 object-contain"
                    />
                </div>

                <img loading="lazy"
                    src={almaty}
                    alt="photo 4"
                    className="w-full h-full rounded-[17px] md:rounded-[30px] object-cover"
                />

                <div
                    className="absolute bottom-6 md:bottom-14 left-4 text-[#f6fcf5] leading-[100%] tracking-[-0.03em] text-left text-gotham">
                    <p className="font-normal text-[26px] sm:text-[28px] md:hidden">
                        Explore New Places
                    </p>

                    <div className="hidden md:block">
                        <p className="mb-4 font-[500] text-[30px]">Explore</p>
                        <p className="font-[500] text-[30px]">New Places</p>
                    </div>
                </div>
                {isOpenPhoto && (<PhotoViewModal onClose={() => setIsOpenPhoto(false)} />)}
            </div>
        </div>

        <div className="mt-10 md:mt-32 flex items-center justify-center text-[#22324A]">
            <p className="font-[500] md:font-semibold text-[30px] md:text-[70px] tracking-[0.01em] leading-none flex items-center">
                Visa Support
                <img loading="lazy"
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
                    onClick={() => navigate("/visa/tourism")}
                >
                    <img loading="lazy"
                        src={KokZhailau}
                        alt="square-1"
                        className="w-full h-full rounded-[20px] object-cover"
                    />

                    <div
                        className="absolute -top-4 -right-4 w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-[20px] bg-[#F4EBE2] shadow-md flex items-center justify-center pointer-events-none text-center z-20">
                        <img loading="lazy"
                            src={ppIcon}
                            alt="Plane Icon"
                            className="w-7 h-7 md:w-9 md:h-9 object-contain"
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
                    onClick={() => navigate("/visa/work")}
                >
                    <img loading="lazy"
                        src={workImage}
                        alt="square-2"
                        className="w-full h-full rounded-[20px] object-cover"
                    />

                    <div
                        className="absolute -top-4 -right-4 w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-[20px] bg-[#F4EBE2] shadow-md flex items-center justify-center pointer-events-none text-center z-20">
                        <img loading="lazy"
                            src={ssIcon}
                            alt="Plane Icon"
                            className="w-7 h-7 md:w-9 md:h-9 object-contain"
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
                    onClick={() => navigate("/visa/business")}
                >


                    <img loading="lazy"
                        src={businessImage}
                        alt="square-3"
                        className="w-full h-full rounded-[20px] object-cover"
                    />

                    <div
                        className="absolute -top-4 -right-4 w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-[20px] bg-[#F4EBE2] shadow-md flex items-center justify-center pointer-events-none text-center z-20">
                        <img loading="lazy"
                            src={graphIcon}
                            alt="Plane Icon"
                            className="w-7 h-7 md:w-9 md:h-9 object-contain"
                        />
                    </div>
                </div>

                <div className="flex justify-between w-full px-2 items-center">
                    <span className="text-[#22324A] text-lg font-medium">Business</span>
                    <div className="flex gap-1">
                        {["B1", "B2", "B3"].map((code) => (<span
                            key={code}
                            className="bg-[#F4EBE2] text-[#22324A] text-sm font-semibold px-2 py-1 rounded-md"
                        >
                            {code}
                        </span>))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center gap-3">
                <div
                    className={`relative w-[170px] md:w-[250px] h-[170px] md:h-[250px] rounded-[20px] cursor-pointer transition-transform duration-300 
                            `}
                    onClick={() => navigate("/visa/immigrant")}
                >
                    <img loading="lazy"
                        src={businessImmigrantImage}
                        alt="square-4"
                        className="w-full h-full rounded-[20px] object-cover"
                    />

                    <div
                        className="absolute -top-4 -right-4 w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-[20px] bg-[#F4EBE2] shadow-md flex items-center justify-center pointer-events-none text-center z-20">
                        <img loading="lazy"
                            src={paperIcon}
                            alt="Plane Icon"
                            className="w-7 h-7 md:w-9 md:h-9 object-contain"
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
                <span className="text-[20px] md:text-[40px]">Apply</span>
            </button>
        </div>

        <div className="bg-[#F4F4F4] rounded-[15px] py-10 px-2 mx-5 md:px-10 mt-10 md:mt-20 mb-10">
            {/* Заголовок */}
            <div className="flex items-center justify-center gap-0 md:gap-2 mb-5 md:mb-10">
                <span
                    className="text-[#22324A] text-[25px] md:text-[65px] font-[500] md:font-semibold text-left md:text-center">
                    Top-Recommended Tours
                </span>
                <img loading="lazy"
                    src={oiuIcon}
                    alt="icon"
                    className="hidden md:block w-[120px] h-[120px] object-contain"
                />
            </div>

            {/* Горизонтальный scroll */}
            <div className="flex justify-center">
                <div
                    className="flex overflow-x-auto md:overflow-x-visible gap-2 md:gap-6 px-2 md:px-0 scrollbar-hide md:justify-center">
                    {tours.map((tour, i) => (<div
                        key={i}
                        className="flex-shrink-0 flex flex-col items-start w-[200px] md:w-[300px]"
                    >
                        <div onClick={() => navigate(`/tours/${tour.id}`)}
                            className="relative w-[200px] md:w-full h-[200px] md:h-[300px] rounded-[15px] md:rounded-[30px] border border-[#C5C8CB] overflow-hidden">
                            <img loading="lazy"
                                src={tour.img}
                                alt={tour.title}
                                className="w-full h-full object-cover"
                            />
                            <div
                                className="hidden md:flex absolute w-[100px] h-[35px] md:w-[110px] md:h-[40px] bottom-5 right-4 bg-[#F4EBE2] text-[#22324A] text-[16px] md:text-[20px] font-normal rounded-md flex items-center justify-center">
                                {tour.days}
                            </div>
                        </div>
                        <p className="mt-3 text-[#22324A] text-[20px] md:text-[24px] font-medium">
                            {tour.title}
                        </p>
                        <p className="text-[#C5C8CB] text-[16px] md:text-[20px]">
                            Almaty
                        </p>
                    </div>))}
                </div>
            </div>

            {/* Кнопка */}
            <div className="mt-10 flex justify-center">
                <button
                    onClick={() => navigate("/kazakhstan")}
                    className="w-[90%] md:w-[520px] h-[60px] md:h-[100px] bg-[#ffffff] md:bg-[#F4EBE2] text-[#22324A] text-[22px] md:text-[30px]
            font-[400] md:font-bold rounded-[10px] md:rounded-[18px] flex items-center justify-center hover:opacity-90 transition"
                >
                    Book Now
                </button>
            </div>
        </div>
    </section>);
}
