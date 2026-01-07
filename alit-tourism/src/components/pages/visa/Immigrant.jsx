import React from "react";
// Images from public folder
const globallightPng = "/icons/global_light.png";
const pointPng = "/icons/point-in.png";
const timePng = "/icons/time.png";
const verifyPng = "/icons/verify.png";
const docPng = "/icons/doc.png";
const calendarPng = "/icons/calendar.png";
const listPng = "/icons/list.png";
const globalPng = "/icons/global.png";
const avaPng = "/icons/ava.png";
const billPng = "/icons/bill.png";
const coinsPng = "/icons/coins.png";
const cardPng = "/icons/card.png";
const letterPng = "/icons/letter.png";
const littlebagPng = "/icons/littlebag.png";
const ticketPng = "/icons/ticket.png";
const bedPng = "/icons/bed.png";
import { stepTitles, stepDescriptions } from "../../helper/helper";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useLanguage } from "../../../utility/LanguageContext";
const businessImmigrantImage = "/businessImmigrant.jpg";

export default function Immigrant() {
    const { t } = useLanguage();
    const navigate = useNavigate();
    const isAuthenticated = !!localStorage.getItem("token");

    const handleVisa = () => {
        if (isAuthenticated) {
            navigate(`/form/questionnaire?visaInvitationType=immigrant`);
        } else {
            toast.error(t("pages.immigrant.authError"), {
                duration: 5000
            });
            localStorage.setItem("redirectAfterAuth", window.location.pathname);
            navigate("/auth");
        }
    };
    return (
        <div className="min-h-screen flex flex-col items-center bg-white py-5 md:py-16 text-gotham">
            <div className="w-full md:w-[1135px] bg-[#F6F6F6] rounded-[20px] md:rounded-[30px] px-5 md:px-20 py-8 md:py-12 flex flex-col">
                {/* Заголовок */}
                <h1 className="mb-6 md:mb-8 text-[#22324A] text-[24px] md:text-[35px] font-semibold text-left">
                    {t("pages.immigrant.title")}
                </h1>

                {/* Фото */}
                <img
                    src={businessImmigrantImage}
                    alt="Tourist Visa"
                    className="w-full h-[200px] md:w-[1000px] md:h-[420px] rounded-[15px] md:rounded-[20px] object-cover mb-10 md:mb-16"
                />

                <h1 className="text-[#22324A] text-[24px] md:text-[35px] font-[500] text-left  ">
                    {t("pages.immigrant.whatIs")}
                </h1>

                {/* Описание */}
                <p className="mt-1 text-[#22324A]   text-[15px] md:text-[20px] leading-[18px] md:leading-[25px] max-w-[1000px]">
                    {t("pages.immigrant.whatIsText1")}
                    {t("pages.immigrant.whatIsText2")}
                </p>

                <h1 className="mt-10 text-[#22324A] text-[24px] md:text-[35px]   font-[500] text-left">
                    {t("pages.immigrant.keyFacts")}
                </h1>

                <div className="mt-10 flex flex-col md:flex-row justify-between gap-2 md:gap-6">
                    {/* Purpose */}
                    <div className="bg-white w-full md:w-[310px] h-auto md:h-[300px] rounded-[20px] p-6 flex flex-col items-start">
                        <img
                            src={pointPng}
                            alt="Purpose Icon"
                            className="w-[50px] h-[50px] mb-4"
                        />
                        <h3 className="text-[#22324A] text-[20px] md:text-[30px]   font-[500]">{t("pages.immigrant.purpose")}</h3>
                        <p className="text-[#22324A] text-[15px] font-normal leading-tight">
                            {t("pages.immigrant.purposeText")}
                        </p>
                    </div>

                    {/* Validity */}
                    <div className="bg-white w-full md:w-[310px] h-auto md:h-[300px] rounded-[20px] p-6 flex flex-col items-start mt-6 md:mt-0">
                        <img
                            src={verifyPng}
                            alt="Validity Icon"
                            className="w-[50px] h-[50px] mb-4"
                        />
                        <h3 className="text-[#22324A] text-[20px] md:text-[30px]   font-[500]">{t("pages.immigrant.validity")}</h3>
                        <p className="text-[#22324A] text-[15px] font-normal leading-tight">
                            {t("pages.immigrant.validityText")}
                        </p>
                    </div>

                    {/* Stay duration */}
                    <div className="bg-white w-full md:w-[310px] h-auto md:h-[300px] rounded-[20px] p-6 flex flex-col items-start mt-6 md:mt-0">
                        <img
                            src={timePng}
                            alt="Stay Duration Icon"
                            className="w-[50px] h-[50px] mb-4"
                        />
                        <h3 className="text-[#22324A] text-[20px] md:text-[30px] font-[500]">{t("pages.immigrant.extension")}</h3>
                        <p className="text-[#22324A] text-[15px] font-normal leading-tight">
                            {t("pages.immigrant.extensionText")}
                        </p>
                    </div>
                </div>


                <div className="mt-10 flex flex-col md:flex-row gap-0 md:gap-6">
                    {/* Белый блок слева */}
                    <div className="bg-white w-full md:w-[310px] h-auto md:h-[300px] rounded-[20px] p-6 flex flex-col items-start">
                        <img
                            src={cardPng}
                            alt="Extra Icon"
                            className="w-[50px] h-[50px] mb-4 scale-125"
                        />
                        <h3 className="text-[#22324A] text-[20px] md:text-[30px]   font-[500]">
                            {t("pages.immigrant.residencePermit")}
                        </h3>
                        <p className="text-[#22324A] text-[15px] leading-tight">
                            {t("pages.immigrant.residencePermitText")}
                        </p>
                    </div>

                    {/* Розовый блок справа */}
                    <div className="bg-white w-full md:w-[310px] h-auto md:h-[300px] rounded-[20px] p-6 flex flex-col items-start mt-6 md:mt-0">
                        <img
                            src={coinsPng}
                            alt="Extra Icon"
                            className="w-[50px] h-[50px] mb-4 scale-125"
                        />
                        <h3 className="text-[#22324A] text-[20px] md:text-[30px]   font-[500] leading-none">
                            {t("pages.immigrant.investment")}
                        </h3>
                        <p className="text-[#22324A] text-[15px] leading-tight mt-2">
                            {t("pages.immigrant.investmentText")}
                        </p>
                    </div>
                </div>


                <h1 className="mt-10 text-[#22324A] text-[24px] md:text-[35px]   font-[500] text-left">
                    {t("pages.immigrant.whoNeeds")}
                </h1>

                <p className="mt-5 text-[#22324A] text-[15px] md:text-[20px] font-[400] font-gotham tracking-[-0.03em]">
                    {t("pages.immigrant.whoNeedsIntro")}
                </p>
                <div className="flex flex-col gap-4 mt-5 text-[#22324A]">
                    <div className="flex items-center gap-3">
                        <img src={docPng} alt="icon" className="w-12 h-12 mt-1" />
                        <p className="text-[15px] md:text-[20px] font-[400]  ">
                            {t("pages.immigrant.whoNeedsItem1")}
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <img src={calendarPng} alt="icon" className="w-12 h-12 mt-1" />
                        <p className="text-[15px] md:text-[20px] font-[400] font-gotham tracking-[-0.03em]">
                            {t("pages.immigrant.whoNeedsItem2")}
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <img src={globallightPng} alt="icon" className="w-12 h-12 mt-1" />
                        <p className="text-[15px] md:text-[20px] font-[400] font-gotham tracking-[-0.03em]">
                            {t("pages.immigrant.whoNeedsItem3")}
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <img src={littlebagPng} alt="icon" className="w-12 h-12 mt-1" />
                        <p className="text-[15px] md:text-[20px] font-[400] font-gotham tracking-[-0.03em]">
                            {t("pages.immigrant.whoNeedsItem4")}
                        </p>
                    </div>
                </div>


                <h1 className="mt-10 text-[#22324A] text-[24px] md:text-[35px]   text-left font-[500]">
                    {t("pages.immigrant.requirements")}
                </h1>
                <p className="mt-4 text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                    {t("pages.immigrant.requirementsIntro")}
                </p>

                <div className="mt-4 flex items-center gap-3">
                    <img src={listPng} alt="icon" className="w-8 h-10 mt-1" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                        {t("pages.immigrant.req1")}
                    </p>
                </div>
                <div className="mt-4 flex items-center gap-3">
                    <img src={globalPng} alt="icon" className="w-8 h-10 mt-1" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                        {t("pages.immigrant.req2")}
                    </p>
                </div>
                <div className="mt-4 flex items-center gap-3">
                    <img src={avaPng} alt="icon" className="w-8 h-10 mt-1" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                        {t("pages.immigrant.req3")}
                    </p>
                </div>
                <div className="mt-4 flex items-center gap-1">
                    <img src={bedPng} alt="icon" className="w-10 h-10 mt-1 scale-125 object-contain" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                        {t("pages.immigrant.req4")}
                    </p>
                </div>
                <div className="mt-4 flex items-center gap-2">
                    <img src={ticketPng} alt="icon" className="w-9 h-9 mt-1 scale-125 object-contain" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                        {t("pages.immigrant.req5")}
                    </p>
                </div>
                <div className="mt-4 flex items-center gap-1">
                    <img src={letterPng} alt="icon" className="w-10 h-10 mt-1 scale-125 object-contain" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                        {t("pages.immigrant.req6")}
                    </p>
                </div>
                <div className="mt-4 flex items-start gap-1">
                    <img
                        src={billPng}
                        alt="icon"
                        className="w-10 h-10 mt-1 object-contain"
                    />

                    <div className="flex flex-col">
                        <p className="text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                            {t("pages.immigrant.req7")}
                        </p>
                        <p className="text-[11px] text-[#22324A]/80 font-[300] font-gotham tracking-[-0.02em]">
                            {t("pages.immigrant.req7Note")}
                        </p>
                    </div>
                </div>

                <h1 className="mt-10 text-[#22324A] text-[24px] md:text-[35px]   font-[500] text-left">
                    {t("pages.immigrant.applicationProcess")}
                </h1>

                <div className="flex flex-col items-center mt-5">
                    {/* Линия с кружочками */}
                    <div className="hidden md:flex items-center">
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 flex items-center justify-center bg-[#22324A] text-white rounded-full">
                                ✓
                            </div>
                        </div>

                        {[2, 3, 4, 5, 6, 7].map((num) => (
                            <React.Fragment key={num}>
                                <div className="h-[1px] bg-[#22324A]/50 w-[100px]"></div>
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 flex items-center justify-center text-[13px] bg-[#D9D9D9]   font-[400] text-[#22324A] rounded-full">
                                        {num}
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Мобильный таймлайн */}
                    <div className="flex flex-col items-start w-full md:hidden mt-5 relative">
                        {[1, 2, 3, 4, 5, 6, 7].map((num, index) => (
                            <div key={num} className="flex items-start mb-6 relative">
                                {/* Линия между элементами */}
                                {index !== 6 && (
                                    <div className="absolute left-[19px] top-[40px] w-[2px] h-full bg-[#22324A]/50 z-0"></div>
                                )}

                                {/* Кружочек */}
                                <div className="relative z-10 flex-shrink-0  mt-2">
                                    <div
                                        className={`w-10 h-10 flex items-center justify-center rounded-full ${index === 0
                                            ? 'bg-[#22324A] text-white'
                                            : 'bg-[#D9D9D9] text-[#22324A]'
                                            }`}
                                    >
                                        {index === 0 ? '✓' : num}
                                    </div>
                                </div>

                                {/* Текст справа */}
                                <div className="bg-white p-3 rounded-lg ml-4 flex-1">
                                    <p className="text-[#22324A] text-[16px]   leading-tight font-[500]">
                                        {num === 1 ? t("pages.immigrant.step1Title") : t(`pages.immigrant.immigrantSteps.${num}.title`)}
                                    </p>
                                    <p className="text-[#22324A]   font-[300] leading-tight text-[11px] mt-1">
                                        {num === 1 ? t("pages.immigrant.step1Desc") : t(`pages.immigrant.immigrantSteps.${num}.desc`)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Десктопная сетка карточек */}
                    <div className="hidden md:flex items-start justify-center mt-5 gap-[20px]">
                        <div className="bg-white p-3 rounded-lg w-[120px] h-[200px] text-left">
                            <p className="mt-3 text-[#22324A] text-[16px]   leading-tight font-[500]">
                                {t("pages.immigrant.step1Title")}
                            </p>
                            <p className="text-[#22324A]   font-[300] leading-tight text-[11px] mt-1">
                                {t("pages.immigrant.step1Desc")}
                            </p>
                        </div>

                        {[2, 3, 4, 5, 6, 7].map((num) => (
                            <div
                                key={num}
                                className="bg-white p-3 rounded-lg w-[120px] h-[200px] text-left"
                            >
                                <p className="mt-3 text-[#22324A] text-[16px]   leading-tight font-[500]">
                                    {t(`pages.immigrant.immigrantSteps.${num}.title`)}
                                </p>
                                <p className="text-[#22324A]   font-[300] leading-tight text-[11px] mt-1">
                                    {t(`pages.immigrant.immigrantSteps.${num}.desc`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 w-full max-w-[975px] bg-white rounded-[20px] mx-auto flex flex-col px-6 md:px-10 py-8 text-[#22324A]">
                    <h1 className="text-[24px] md:text-[35px] text-left font-[500] mb-4">
                        {t("pages.immigrant.importantNotes")}
                    </h1>

                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10">
                        {/* Текст */}
                        <div className="flex flex-col gap-3 w-full text-[15px] md:text-[20px]">
                            <p className="font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                {t("pages.immigrant.note1")}
                            </p>
                            <p className="font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                {t("pages.immigrant.note2")}
                            </p>
                            <p className="font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                {t("pages.immigrant.note3")}
                            </p>
                            <p className="font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                {t("pages.immigrant.note4")}
                            </p>
                            <p className="font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                {t("pages.immigrant.note5")}
                            </p>
                        </div>
                    </div>
                </div>

                <h1 className="mt-12 text-[#22324A] text-[24px] md:text-[35px] font-[500] text-left tracking-[-0.03em]">
                    {t("pages.immigrant.howToApply")}
                </h1>
                <p className="mt-4 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    {t("pages.immigrant.processingTime1")}
                </p>
                <p className="mt-4 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    {t("pages.immigrant.processingTime2")}
                </p>
                <p className="mt-4 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    {t("pages.immigrant.toApply")}
                </p>
                <p className="mt-2 ml-4 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    {t("pages.immigrant.applyStep1")}
                </p>
                <p className="mt-2 ml-4 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    {t("pages.immigrant.applyStep2")}
                </p>
                <p className="mt-2 ml-4 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    {t("pages.immigrant.applyStep3")}
                </p>

                <div className="mt-8 md:mt-16 flex justify-center">
                    <button onClick={handleVisa}
                        className="w-[900px] h-[90px] bg-[#22324A] rounded-[15px] flex items-center justify-center hover:opacity-90 transition">
                        <span className="text-white text-[24px] md:text-[35px] font-gotham font-[500] tracking-[-0.03em]">
                            {t("pages.immigrant.applyButton")}
                        </span>
                    </button>
                </div>
            </div>
        </div>

    );
}
