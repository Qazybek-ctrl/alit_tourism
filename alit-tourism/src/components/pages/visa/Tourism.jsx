const planePng = "/icons/blueplane.png";
const pointPng = "/icons/point-in.png";
const timePng = "/icons/time.png";
const verifyPng = "/icons/verify.png";
const visaPng = "/icons/visa.png";
const docPng = "/icons/doc.png";
const calendarPng = "/icons/calendar.png";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const kokZhailauImage = "/images/places/Kok Zhailau Almaty.webp";

import { Dot } from "lucide-react";
import { useLanguage } from "../../../utility/LanguageContext";

export default function Tourism() {
    const { t } = useLanguage();
    const navigate = useNavigate();
    const isAuthenticated = !!localStorage.getItem("token");

    const handleVisa = () => {
        if (isAuthenticated) {
            navigate(`/form/questionnaire?visaInvitationType=tourism`);
        } else {
            toast.error(t("pages.tourism.authError"), {
                duration: 5000
            });
            localStorage.setItem("redirectAfterAuth", window.location.pathname);
            navigate("/auth");
        }
    };
    return (
        <div className="min-h-screen flex flex-col items-center bg-white py-5 md:py-16  ">
            <div className="w-full md:w-[1135px] bg-[#F6F6F6] rounded-[20px] md:rounded-[30px] px-5 md:px-20 py-8 md:py-12 flex flex-col">
                {/* Заголовок */}
                <h1 className="mb-6 md:mb-8 text-[#22324A] text-[24px] md:text-[35px] font-[500] text-left">
                    {t("pages.tourism.title")}
                </h1>

                {/* Фото */}
                <img
                    src={kokZhailauImage}
                    alt="Tourist Visa"
                    className="w-full h-[200px] md:w-[1000px] md:h-[420px] rounded-[15px] md:rounded-[20px] object-cover object-[center_35%] mb-10 md:mb-16"
                />

                <h1 className="text-[#22324A] text-[24px] md:text-[35px] font-[500] text-left">
                    {t("pages.tourism.whatIs")}
                </h1>

                <p className="mt-2 text-[#22324A] font-light text-[16px] md:text-[20px] leading-[20px] md:leading-[25px] tracking-[0.02em] max-w-full md:max-w-[1000px]">
                    {t("pages.tourism.whatIsText")}
                </p>

                <h1 className="mt-8 md:mt-10 text-[#22324A] text-[24px] md:text-[35px] font-[500] text-left">
                    {t("pages.tourism.keyFacts")}
                </h1>

                <div className="mt-6 md:mt-10 flex flex-col md:flex-row justify-between gap-6">
                    {[
                        {
                            img: pointPng,
                            title: t("pages.tourism.purpose"),
                            text: t("pages.tourism.purposeText")
                        },
                        {
                            img: verifyPng,
                            title: t("pages.tourism.validity"),
                            text: t("pages.tourism.validityText")
                        },
                        {
                            img: timePng,
                            title: t("pages.tourism.stayDuration"),
                            text: t("pages.tourism.stayDurationText")
                        }
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white w-full md:w-[400px] h-auto md:h-[300px] rounded-[20px] p-5 flex flex-col items-start"
                        >
                            <img
                                src={item.img}
                                alt=""
                                className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] mb-3 md:mb-4"
                            />
                            <h3 className="text-[#22324A] text-[22px] md:text-[30px] font-[500]">
                                {item.title}
                            </h3>
                            <p className="text-[#22324A] text-[16px] md:text-[20px] font-normal leading-tight">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-6 md:mt-10 flex flex-col md:flex-row justify-between gap-6">
                    <div className="bg-white w-full md:w-[400px] h-auto md:h-[300px] rounded-[20px] p-5 flex flex-col items-start">
                        <img
                            src={planePng}
                            alt=""
                            className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] mb-3"
                        />
                        <h3 className="text-[#22324A] text-[22px] md:text-[30px] font-[500]">
                            {t("pages.tourism.entries")}
                        </h3>
                        <p className="text-[#22324A] text-[16px] md:text-[20px] font-normal leading-tight">
                            {t("pages.tourism.entriesText")}
                        </p>
                    </div>

                    <div className="bg-[#F4EBE2] w-full md:w-[700px] h-auto md:h-[300px] rounded-[20px] p-5 flex flex-col items-start">
                        <img
                            src={visaPng}
                            alt=""
                            className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] mb-3"
                        />
                        <h3 className="text-[#22324A] text-[22px] md:text-[30px] font-[500]">
                            {t("pages.tourism.visaFree")}
                        </h3>
                        <p className="text-[#22324A] text-[16px] md:text-[20px] font-normal leading-tight">
                            {t("pages.tourism.visaFreeText")} <a href="https://vmp.gov.kz/en/services/visa-service" target="_blank" rel="noopener noreferrer" className="text-[#22324A] font-[500]">https://vmp.gov.kz/en/services/visa-service</a>
                        </p>
                    </div>
                </div>

                <h1 className="mt-10 text-[#22324A] text-[24px] md:text-[35px] font-[500] text-left tracking-[-0.03em]">
                    {t("pages.tourism.whoNeeds")}
                </h1>

                <p className="mt-5 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">{t("pages.tourism.whoNeedsIntro")}</p>
                <div className="flex flex-col gap-4 mt-5 text-[#22324A]">
                    <div className="flex items-center gap-3">
                        <img src={docPng} alt="icon" className="w-12 h-12 mt-1" />
                        <p className="text-[15px] md:text-[20px] font-[400]   tracking-[-0.03em]">
                            Your country is <span className="font-[500]">not</span> on Kazakhstan’s visa-free list.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <img src={calendarPng} alt="icon" className="w-12 h-12 mt-1" />
                        <p className="text-[15px] md:text-[20px] font-[400]   tracking-[-0.03em]">
                            {t("pages.tourism.whoNeedsItem2")}
                        </p>
                    </div>
                </div>


                <h1 className="mt-10 text-[#22324A] text-[24px] md:text-[35px] font-[500] text-left tracking-[-0.03em]">
                    {t("pages.tourism.types")}
                </h1>
                <p className="mt-4 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    {t("pages.tourism.typesIntro")}
                </p>

                <h1 className="mt-2 text-[#22324A] text-[20px] md:text-[30px] font-[500] text-left tracking-[-0.03em]">
                    {t("pages.tourism.stickerVisa")}
                </h1>
                <p className="mt-2 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    {t("pages.tourism.stickerVisaApply")}
                </p>
                <p className="mt-2 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    {t("pages.tourism.requiredDocs")}
                </p>
                <div className="mt-2 flex items-start gap-1">
                    <Dot className="w-8 h-8 flex-shrink-0" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                        {t("pages.tourism.stickerDoc1")}
                    </p>
                </div>
                <div className="mt-2 flex items-start gap-1">
                    <Dot className="w-8 h-8 flex-shrink-0" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                        {t("pages.tourism.stickerDoc2")}
                    </p>
                </div>
                <div className="mt-2 flex items-start gap-1">
                    <Dot className="w-8 h-8 flex-shrink-0" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                        {t("pages.tourism.stickerDoc3")}
                    </p>
                </div>
                <div className="mt-2 flex items-start gap-1">
                    <Dot className="w-8 h-8 flex-shrink-0" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                        {t("pages.tourism.stickerDoc4")}
                    </p>
                </div>
                <div className="mt-2 flex items-start gap-1">
                    <Dot className="w-8 h-8 flex-shrink-0" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                        {t("pages.tourism.stickerDoc5")}
                    </p>
                </div>
                <div className="mt-2 flex items-start gap-1">
                    <Dot className="w-8 h-8 flex-shrink-0" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                        {t("pages.tourism.stickerDoc6")}
                    </p>
                </div>
                <div className="mt-2 flex items-start gap-1">
                    <Dot className="w-8 h-8 flex-shrink-0" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] tracking-[-0.03em]">
                        {t("pages.tourism.stickerNote")}
                    </p>
                </div>

                <p className="mt-4 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    {t("pages.tourism.invitationRequired")}
                </p>

                <h1 className="mt-4 text-[#22324A] text-[20px] md:text-[30px] font-[500] text-left tracking-[-0.03em]">
                    {t("pages.tourism.eVisa")}
                </h1>
                <p className="mt-2 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    {t("pages.tourism.eVisaApply")}
                </p>
                <p className="mt-2 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    {t("pages.tourism.eVisaEntry")}
                </p>
                <p className="mt-4 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    {t("pages.tourism.requiredDocs")}
                </p>
                <div className="mt-2 flex items-start gap-1">
                    <Dot className="w-8 h-8 flex-shrink-0" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                        {t("pages.tourism.eVisaDoc1")}
                    </p>
                </div>
                <div className="mt-2 flex items-start gap-1">
                    <Dot className="w-8 h-8 flex-shrink-0" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                        {t("pages.tourism.eVisaDoc2")}
                    </p>
                </div>

                <p className="mt-4 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    {t("pages.tourism.eVisaProcessing")}
                </p>
                <p className="mt-4 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    {t("pages.tourism.eVisaPrint")}
                </p>

                <h1 className="mt-12 text-[#22324A] text-[24px] md:text-[35px] font-[500] text-left tracking-[-0.03em]">
                    {t("pages.tourism.howToApply")}
                </h1>
                <p className="mt-4 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    {t("pages.tourism.processingTime")}
                </p>
                <p className="mt-4 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    {t("pages.tourism.toApply")}
                </p>
                <p className="mt-2 ml-4 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    {t("pages.tourism.applyStep1")}
                </p>
                <p className="mt-2 ml-4 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    {t("pages.tourism.applyStep2")}
                </p>
                <p className="mt-2 ml-4 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    {t("pages.tourism.applyStep3")}
                </p>

                <div className="mt-12 w-full max-w-[975px] bg-white rounded-[20px] mx-auto flex flex-col px-6 md:px-10 py-8">
                    {/* Контент (текст + картинка) */}
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
                        {/* Левая колонка — текст */}
                        <div className="flex flex-col gap-3 max-w-full text-left order-1 md:order-1 text-[#22324A]">
                            <h1 className="text-[#22324A] text-[24px] md:text-[35px] font-[500] tracking-[-0.03em] mb-4">
                                {t("pages.tourism.importantTips")}
                            </h1>
                            <p className="text-[15px] md:text-[20px] font-[400]   tracking-[-0.03em] leading-tight">
                                {t("pages.tourism.tip1")}
                            </p>
                            <p className="text-[15px] md:text-[20px] font-[400]   tracking-[-0.03em] leading-tight">
                                {t("pages.tourism.tip2")}
                            </p>
                            <p className="text-[15px] md:text-[20px] font-[400]   tracking-[-0.03em]">
                                {t("pages.tourism.tip3")}
                            </p>
                            <p className="text-[15px] md:text-[20px] font-[400]   tracking-[-0.03em]">
                                {t("pages.tourism.tip4")}
                            </p>
                            <p className="text-[15px] md:text-[20px] font-[400]   tracking-[-0.03em] leading-tight">
                                {t("pages.tourism.tip5")}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 md:mt-16 flex justify-center">
                    <button onClick={handleVisa}
                        className="w-[900px] h-[90px] bg-[#22324A] rounded-[15px] flex items-center justify-center hover:opacity-90 transition">
                        <span className="text-white text-[24px] md:text-[35px]   font-[500] tracking-[-0.03em]">
                            {t("pages.tourism.applyButton")}
                        </span>
                    </button>
                </div>
            </div>
        </div>

    );
}
