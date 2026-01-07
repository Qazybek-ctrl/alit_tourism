import { Link } from "react-router-dom";
import { useLanguage } from "../../utility/LanguageContext";

const workImage = "/work.webp";
const kokZhailauImage = "/images/places/Kok Zhailau Almaty.webp";
const graphIcon = "/blocks/graph.png";
const paperIcon = "/blocks/paper.png";
const ppIcon = "/blocks/pp.png";
const ssIcon = "/blocks/ss.png";
const businessImage = "/business.webp";
const businessImmigrantImage = "/businessImmigrant.jpg";

const getVisaBlocks = (t) => [
    {
        img: kokZhailauImage,
        title: t("pages.visaServices.tourism"),
        type: "B12",
        link: "/visa/tourism",
        imgColor: "#F4EBE2F2",
        icon: ppIcon
    },
    {
        img: workImage,
        title: t("pages.visaServices.work"),
        type: "C3",
        link: "/visa/work",
        imgColor: "#795743F2",
        icon: ssIcon
    },
    {
        img: businessImage,
        title: t("pages.visaServices.business"),
        type: "B1, B2, B3",
        link: "/visa/business",
        imgColor: "#5C88CBF2",
        icon: graphIcon
    },
    {
        img: businessImmigrantImage,
        title: t("pages.visaServices.businessImmigrant"),
        type: "C5",
        link: "/visa/immigrant",
        imgColor: "#22324AF2",
        icon: paperIcon
    },
];

export default function VisaServices() {
    const { t } = useLanguage();
    const visaBlocks = getVisaBlocks(t);

    return (
        <div className="min-h-screen flex flex-col items-center bg-white py-8 md:py-16 text-gotham">
            <div className="max-w-[1135px] w-full md:min-h-[2000px] bg-[#FFFFFF] md:bg-[#F6F6F6] rounded-[30px] px-6 md:px-12 py-2 md:py-16">
                <h1 className="text-[#22324A] text-3xl md:text-6xl font-[500] md:font-normal text-left md:text-center mb-4 md:mb-16">
                    {t("pages.visaServices.title")}
                </h1>

                <div className="flex flex-col gap-0 md:gap-10">
                    {visaBlocks.map((block, index) => (
                        <div
                            key={index}
                            className="relative rounded-[15px] md:rounded-[30px] w-full h-[180px] md:h-[393px] mx-auto p-0 md:p-6 flex flex-col"
                        >
                            {/* Иконка */}
                            <div
                                className={`absolute top-5 md:top-2 right-4 w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-[10px] md:rounded-[20px] ${index === 0 ? "bg-white" : "bg-white/20"
                                    } md:bg-[#F4EBE2] shadow-md flex items-center justify-center pointer-events-none text-center z-20`}
                            >
                                <img
                                    src={block.icon}
                                    alt="Icon"
                                    loading="lazy"
                                    className="w-6 h-6 md:w-9 md:h-9 object-contain"
                                />
                            </div>

                            {/* === МОБИЛКА (кликабельная часть) === */}
                            <Link
                                to={block.link}
                                className="md:hidden relative w-full h-[150px] rounded-[15px] overflow-hidden block"
                            >
                                <img
                                    src={block.img}
                                    alt={block.title}
                                    loading="lazy"
                                    className={`w-full h-full object-cover ${index === 0
                                        ? "object-[center_10%]"
                                        : index === 1
                                            ? "object-[center_70%]"
                                            : "object-center"
                                        }`}
                                />
                                <div
                                    className="absolute inset-0"
                                    style={{ backgroundColor: block.imgColor, opacity: 1 }}
                                ></div>
                                <div className="absolute top-12 left-7 right-3 z-20">
                                    <h2
                                        className={`text-[24px] font-[400] ${index === 0 ? "text-[#22324A]" : "text-white"
                                            } leading-tight drop-shadow-md`}
                                    >
                                        {block.title}
                                    </h2>
                                    <span
                                        className={`inline-block mt-3 ${index === 0
                                            ? "bg-white text-[#22324A]"
                                            : "bg-white/20 text-[#FFFFFF]"
                                            } text-[13px] font-[400] px-8 py-2 rounded-[10px]`}
                                    >
                                        {block.type}
                                    </span>
                                </div>
                            </Link>

                            {/* === ДЕСКТОП === */}
                            <div className="hidden md:block relative w-full h-[220px] rounded-[30px] overflow-hidden">
                                <img
                                    src={block.img}
                                    alt={block.title}
                                    loading="lazy"
                                    className={`w-full h-full object-cover ${index === 0
                                        ? "object-[center_18%]"
                                        : index === 1
                                            ? "object-[center_70%]"
                                            : index === 2
                                                ? "object-[center_92%]"
                                                : index === 3
                                                    ? "object-[center_35%]"
                                                    : "object-center"
                                        }`}
                                />
                            </div>

                            {/* Контент под фото (десктоп) */}
                            <div className="hidden md:flex items-center justify-between flex-1 mt-5">
                                <div className="flex items-center gap-3">
                                    <h2 className="text-[#22324A] text-2xl font-[500]">
                                        {block.title}
                                    </h2>
                                    <span className="bg-[#F4EBE2] text-[#22324A] text-[25px] font-bold px-3 py-1 rounded-md">
                                        {block.type}
                                    </span>
                                </div>

                                <Link
                                    to={block.link}
                                    className="bg-[#22324A] w-[250px] h-[50px] text-[#F4EBE2] text-[25px] font-semibold rounded-[10px] flex items-center justify-center hover:opacity-90 transition"
                                >
                                    <span className="-translate-y-0.5">{t("pages.visaServices.apply")}</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
