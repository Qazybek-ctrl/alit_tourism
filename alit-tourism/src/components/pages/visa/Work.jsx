import React from "react";
import { workStepTitles, workStepDescriptions } from "../../helper/helper";

const globallightPng = "/icons/global_light.png";
const pointPng = "/icons/point-in.png";
const timePng = "/icons/time.png";
const verifyPng = "/icons/verify.png";
const docPng = "/icons/doc.png";
const calendarPng = "/icons/calendar.png";
const listPng = "/icons/list.png";
const globalPng = "/icons/global.png";
const handglobalPng = "/icons/handglobal.png";
const extensionPng = "/icons/extension.png";
const avaPng = "/icons/ava.png";
const billPng = "/icons/bill.png";
const infoPng = "/icons/info.png";
const letterPng = "/icons/letter.png";
const bagPng = "/icons/bag.png";
const downplanePng = "/icons/downplane.png";
const workImage = "/work.webp";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../utility/LanguageContext";

export default function Work() {
    const { t } = useLanguage();
    const navigate = useNavigate();
    const isAuthenticated = !!localStorage.getItem("token");

    const handleVisa = () => {
        if (isAuthenticated) {
            navigate(`/form/questionnaire?visaInvitationType=work`);
        } else {
            toast.error(t("pages.work.authError"), {
                duration: 5000
            });
            localStorage.setItem("redirectAfterAuth", window.location.pathname);
            navigate("/auth");
        }
    };

    return (

        <div className="min-h-screen flex flex-col items-center bg-white py-5 md:py-16">
            <div className="w-full md:w-[1135px] bg-[#F6F6F6] rounded-[20px] md:rounded-[30px] px-5 md:px-20 py-8 md:py-12 flex flex-col">
                {/* Заголовок */}
                <h1 className="mb-6 md:mb-8 text-[#22324A] text-[24px] md:text-[35px] font-semibold text-left">
                    {t("pages.work.title")}
                </h1>

                {/* Фото */}
                <img
                    src={workImage}
                    alt="Tourist Visa"
                    loading="lazy"
                    className="w-full h-[200px] md:w-[1000px] md:h-[420px] rounded-[15px] md:rounded-[20px] object-cover object-[center_85%] mb-10 md:mb-16"
                />

                <h1 className="text-[#22324A] text-[24px] md:text-[35px] font-semibold text-left">
                    {t("pages.work.whatIs")}
                </h1>

                {/* Описание */}
                <p className="mt-1 text-[#22324a] font-light text-[15px] md:text-[20px] leading-[20px] md:leading-[25px] tracking-[0.02em] max-w-[1000px]">
                    {t("pages.work.whatIsText")}
                </p>

                <h1 className="mt-10 text-[#22324A] text-[24px] md:text-[35px] font-semibold text-left">
                    {t("pages.work.keyFacts")}
                </h1>

                {/* Key Facts */}
                <div className="mt-10 flex flex-col md:flex-row md:justify-between gap-6">
                    {/* Purpose */}
                    <div className="bg-white w-full md:w-[310px] h-auto md:h-[300px] rounded-[20px] p-6 flex flex-col items-start">
                        <img
                            src={pointPng}
                            alt="Purpose Icon"
                            loading="lazy"
                            className="w-[50px] h-[50px] mb-4"
                        />
                        <h3 className="text-[#22324A] text-[20px] md:text-[30px] font-semibold">{t("pages.work.purpose")}</h3>
                        <p className="text-[#22324A] text-[15px] md:text-[20px] font-normal leading-tight">
                            {t("pages.work.purposeText")}
                        </p>
                    </div>

                    {/* Validity */}
                    <div className="bg-white w-full md:w-[310px] h-auto md:h-[300px] rounded-[20px] p-6 flex flex-col items-start">
                        <img
                            src={verifyPng}
                            alt="Validity Icon"
                            loading="lazy"
                            className="w-[50px] h-[50px] mb-4"
                        />
                        <h3 className="text-[#22324A] text-[20px] md:text-[30px] font-semibold">{t("pages.work.validity")}</h3>
                        <p className="text-[#22324A] text-[15px] md:text-[20px] font-normal leading-tight">
                            {t("pages.work.validityText")}
                        </p>
                    </div>

                    {/* Stay duration */}
                    <div className="bg-white w-full md:w-[310px] h-auto md:h-[300px] rounded-[20px] p-6 flex flex-col items-start">
                        <img
                            src={timePng}
                            alt="Stay Duration Icon"
                            loading="lazy"
                            className="w-[50px] h-[50px] mb-4"
                        />
                        <h3 className="text-[#22324A] text-[20px] md:text-[30px] font-semibold">{t("pages.work.stayDuration")}</h3>
                        <p className="text-[#22324A] text-[15px] md:text-[20px] font-normal leading-tight">
                            {t("pages.work.stayDurationText")}
                        </p>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-10 flex flex-col md:flex-row gap-6">
                    {/* Extension */}
                    <div className="bg-white w-full md:w-[310px] h-auto md:h-[300px] rounded-[20px] p-6 flex flex-col items-start">
                        <img
                            src={extensionPng}
                            alt="Extra Icon"
                            loading="lazy"
                            className="w-[50px] h-[50px] mb-4 scale-125"
                        />
                        <h3 className="text-[#22324A] text-[20px] md:text-[30px] font-semibold">
                            {t("pages.work.extension")}
                        </h3>
                        <p className="text-[#22324A] text-[15px] md:text-[20px] font-normal leading-tight">
                            {t("pages.work.extensionText")}
                        </p>
                    </div>

                    {/* Employer’s responsibility */}
                    <div className="bg-white w-full md:w-[310px] h-auto md:h-[300px] rounded-[20px] p-6 flex flex-col items-start">
                        <img
                            src={handglobalPng}
                            alt="Extra Icon"
                            loading="lazy"
                            className="w-[50px] h-[50px] mb-4 scale-125"
                        />
                        <h3 className="text-[#22324A] text-[20px] md:text-[30px] font-semibold leading-none">
                            {t("pages.work.employerResponsibility")}
                        </h3>
                        <p className="text-[#22324A] text-[15px] md:text-[20px] font-normal leading-tight mt-2">
                            {t("pages.work.employerResponsibilityText")}
                        </p>
                    </div>
                </div>


                <h1 className="mt-10 text-[#22324A] text-[24px] md:text-[35px] font-semibold text-left tracking-[-0.03em]">
                    {t("pages.work.whoNeeds")}
                </h1>

                <p className="mt-5 text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">{t("pages.work.whoNeedsIntro")}</p>
                <div className="flex flex-col gap-4 mt-5 text-[#22324A]">
                    <div className="flex items-center gap-3">
                        <img src={docPng} alt="icon" loading="lazy" className="w-12 h-12 mt-1" />
                        <p className="text-[15px] md:text-[20px] font-[400] font-gotham tracking-[-0.03em]">
                            {t("pages.work.whoNeedsItem1")}
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <img src={calendarPng} alt="icon" loading="lazy" className="w-12 h-12 mt-1" />
                        <p className="text-[15px] md:text-[20px] font-[400] font-gotham tracking-[-0.03em]">
                            {t("pages.work.whoNeedsItem2")}
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <img src={globallightPng} alt="icon" loading="lazy" className="w-12 h-12 mt-1" />
                        <p className="text-[15px] md:text-[20px] font-[400] font-gotham tracking-[-0.03em]">
                            {t("pages.work.whoNeedsItem3")}
                        </p>
                    </div>
                </div>


                <h1 className="mt-10 text-[#22324A] text-[24px] md:text-[35px] font-semibold text-left tracking-[-0.03em]">
                    {t("pages.work.requirements")}
                </h1>
                <p className="mt-4 text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                    {t("pages.work.requirementsIntro")}
                </p>

                <div className="mt-4 flex items-center gap-3">
                    <img src={listPng} alt="icon" className="w-8 h-10 mt-1" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                        {t("pages.work.req1")}
                    </p>
                </div>
                <div className="mt-4 flex items-center gap-3">
                    <img src={globalPng} alt="icon" className="w-8 h-10 mt-1" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                        {t("pages.work.req2")}
                    </p>
                </div>
                <div className="mt-4 flex items-center gap-3">
                    <img src={avaPng} alt="icon" className="w-8 h-10 mt-1" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                        {t("pages.work.req3")}
                    </p>
                </div>
                <div className="mt-4 flex items-center gap-3">
                    <img src={bagPng} alt="icon" className="w-[32px] h-[50px] scale-80 object-contain" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                        {t("pages.work.req4")}
                    </p>
                </div>
                <div className="mt-4 flex items-center gap-3">
                    <img src={listPng} alt="icon" className="w-8 h-10 mt-1" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                        {t("pages.work.req5")}
                    </p>
                </div>
                <div className="mt-4 flex items-center gap-1">
                    <img src={letterPng} alt="icon" className="w-10 h-10 mt-1 scale-125 object-contain" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                        {t("pages.work.req6")}
                    </p>
                </div>
                <div className="mt-4 flex items-start gap-2">
                    <img
                        src={billPng}
                        alt="icon"
                        loading="lazy"
                        className="w-10 h-10 mt-1 object-contain"
                    />

                    <div className="flex flex-col">
                        <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                            {t("pages.work.req7")}
                        </p>
                        <p className="text-[11px] text-[#22324A]/80 font-[300] font-gotham tracking-[-0.02em]">
                            {t("pages.work.req7Note")}
                        </p>
                    </div>
                </div>

                <h1 className="mt-10 text-[#22324A] text-[24px] md:text-[35px] text-gotham font-[500] text-left">
                    {t("pages.work.applicationProcess")}
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
                                    <div className="w-10 h-10 flex items-center justify-center text-[13px] bg-[#D9D9D9] text-gotham font-[400] text-[#22324A] rounded-full">
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
                                    <p className="text-[#22324A] text-[16px] text-gotham leading-tight font-[500]">
                                        {num === 1 ? t("pages.work.step1Title") : t(`pages.work.workSteps.${num}.title`)}
                                    </p>
                                    <p className="text-[#22324A] text-gotham font-[300] leading-tight text-[11px] mt-1">
                                        {num === 1 ? t("pages.work.step1Desc") : t(`pages.work.workSteps.${num}.desc`)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Десктопная сетка карточек */}
                    <div className="hidden md:flex items-start justify-center mt-5 gap-[20px]">
                        <div className="bg-white p-3 rounded-lg w-[120px] h-[200px] text-left">
                            <p className="mt-3 text-[#22324A] text-[16px] text-gotham leading-tight font-[500]">
                                {t("pages.work.step1Title")}
                            </p>
                            <p className="text-[#22324A] text-gotham font-[300] leading-tight text-[11px] mt-1">
                                {t("pages.work.step1Desc")}
                            </p>
                        </div>

                        {[2, 3, 4, 5, 6, 7].map((num) => (
                            <div
                                key={num}
                                className="bg-white p-3 rounded-lg w-[120px] h-[200px] text-left"
                            >
                                <p className="mt-3 text-[#22324A] text-[16px] text-gotham leading-tight font-[500]">
                                    {t(`pages.work.workSteps.${num}.title`)}
                                </p>
                                <p className="text-[#22324A] text-gotham font-[300] leading-tight text-[11px] mt-1">
                                    {t(`pages.work.workSteps.${num}.desc`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="flex flex-col gap-3 max-w-full md:max-w-[600px]">
                        <h1 className="text-[#22324A] text-[24px] md:text-[35px] font-[500] font-gotham text-left tracking-[-0.03em]">
                            {t("pages.work.responsibilitiesTitle")}
                        </h1>

                        <div className="max-w-full md:max-w-[460px]">
                            <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                {t("pages.work.resp1")}
                            </p>
                            <p className="mt-2 text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                {t("pages.work.resp2")}
                            </p>
                            <p className="mt-2 text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                {t("pages.work.resp3")}
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-[400px] h-auto md:h-[300px] bg-white rounded-[20px] flex items-center justify-center p-4">
                        <img
                            src={downplanePng}
                            alt="eVisa info"
                            loading="lazy"
                            className="w-[180px] md:w-[180px] h-auto object-contain"
                        />
                    </div>
                </div>


                <div className="mt-12 w-full md:w-[975px] bg-white rounded-[20px] mx-auto flex flex-col px-6 md:px-10 py-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
                        <div className="flex flex-col gap-3 w-full md:max-w-[500px]">
                            <h1 className="text-[#22324A] text-[24px] md:text-[35px] font-semibold text-left tracking-[-0.03em] mb-4">
                                {t("pages.work.importantNotes")}
                            </h1>
                            <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                {t("pages.work.note1")}
                            </p>
                            <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                {t("pages.work.note2")}
                            </p>
                            <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                {t("pages.work.note3")}
                            </p>
                            <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                                {t("pages.work.note4")}
                            </p>
                        </div>

                        {/* Правая колонка — фото в блоке */}
                        <div className="w-full md:w-[300px] h-auto md:h-[300px] bg-[#F6F6F6] rounded-[20px] p-4 flex items-center justify-center">
                            <img
                                src={infoPng}
                                alt="More info"
                                loading="lazy"
                                className="w-[150px] h-auto rounded-[15px] object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-8 md:mt-16 flex justify-center">
                    <button onClick={handleVisa}
                        className="w-[900px] h-[90px] bg-[#22324A] rounded-[15px] flex items-center justify-center hover:opacity-90 transition">
                        <span className="text-white text-[24px] md:text-[35px] font-gotham font-[500] tracking-[-0.03em]">
                            {t("pages.work.applyButton")}
                        </span>
                    </button>
                </div>
            </div>
        </div>

    );
}
