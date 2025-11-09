import React from "react";
import { stepTitles, stepDescriptions } from "../../helper/helper";
import twopeoplePng from "../../../assets/twopeople.png";
import globallightPng from "../../../assets/icons/global_light.png";
import docPng from "../../../assets/icons/doc.png";
import calendarPng from "../../../assets/icons/calendar.png";
import listPng from "../../../assets/icons/list.png";
import globalPng from "../../../assets/icons/global.png";
import avaPng from "../../../assets/icons/ava.png";
import billPng from "../../../assets/icons/bill.png";
import bedPng from "../../../assets/icons/bed.png";
import ticketPng from "../../../assets/icons/ticket.png";
import infoPng from "../../../assets/icons/info.png";
import airportPng from "../../../assets/airport.png";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

export default function Business() {
    const navigate = useNavigate();
    const isAuthenticated = !!localStorage.getItem("token");

    const handleVisa = () => {
        if (isAuthenticated) {
            navigate(`/form/questionnaire?visaInvitationType=business`);
        } else {
            toast.error("You need to log in before booking", {
                duration: 5000
            });
            navigate("/auth");
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-white py-5 md:py-16">
            <div className="w-full md:w-[1135px] bg-[#F6F6F6] rounded-[20px] md:rounded-[30px] px-5 md:px-20 py-8 md:py-12 flex flex-col">
                    {/* Заголовок */}
                <h1 className="mb-6 md:mb-8 text-[#22324A] text-[24px] md:text-[35px] font-semibold text-left">
                    Business Visas (B1, B2, B3) to Kazakhstan
                </h1>

                {/* Фото */}
                <img
                    src={twopeoplePng}
                    alt="Tourist Visa"
                    className="w-full h-[200px] md:w-[1000px] md:h-[420px] rounded-[15px] md:rounded-[20px] object-cover mb-10 md:mb-16"
                />


                <h1 className="text-[#22324A] text-[24px] md:text-[35px] font-semibold text-left">
                    What are Business Visas B1, B2, B3?
                </h1>

                {/* Описание */}
                <p className="mt-1 text-[#22324A] font-gotham font-[300] text-[15px] md:text-[20px] leading-[20px] md:leading-[25px] tracking-[-0.03em] max-w-[1000px]">
                    Kazakhstan issues business visas for foreign citizens who need to enter the country for business-related activities. Unlike a tourist visa, these visas allow participation in meetings, negotiations, conferences, and professional events, but do not permit employment.
                </p>

                <h1 className="mt-10 text-[#22324A] text-[24px] md:text-[35px] font-semibold text-left">
                    Types of Business Visas
                </h1>

                <div className="mt-10 flex flex-col md:flex-row justify-between gap-6">
                    {/* B1 Visa */}
                    <div className="bg-white w-full md:w-[310px] rounded-[15px] flex flex-col items-start overflow-hidden">
                        <div className="bg-[#F4EBE2] w-full h-[80px] px-6 py-4 flex items-center rounded-t-[15px]">
                            <h3 className="text-[#22324A] text-[25px] font-gotham font-[500]">B1 Visa</h3>
                        </div>

                        <div className="p-6 flex flex-col gap-1">
                            <h3 className="text-[#22324A] text-[25px] font-gotham font-[500]">Purpose</h3>
                            <p className="text-[#22324A] text-[15px] md:text-[20px] font-gotham font-[400] leading-tight">
                                Attending conferences, forums, exhibitions, cultural, political, scientific, or other official events.
                            </p>
                        </div>

                        <div className="px-6 flex flex-col gap-1 mb-10">
                            <h3 className="text-[#22324A] text-[25px] font-semibold">Validity</h3>
                            <p className="text-[#22324A] text-[15px] md:text-[20px] font-gotham font-[400] leading-tight">
                                Up to 60 days per entry, can be single
                            </p>
                        </div>
                    </div>

                    {/* B2 Visa */}
                    <div className="bg-white w-full md:w-[310px] rounded-[15px] flex flex-col items-start overflow-hidden">
                        <div className="bg-[#F4EBE2] w-full h-[80px] px-6 py-4 flex items-center rounded-t-[15px]">
                            <h3 className="text-[#22324A] text-[25px] font-gotham font-[500]">B2 Visa</h3>
                        </div>

                        <div className="p-6 flex flex-col gap-1">
                            <h3 className="text-[#22324A] text-[25px] font-gotham font-[500]">Purpose</h3>
                            <p className="text-[#22324A] text-[15px] md:text-[20px] font-gotham font-[400] leading-tight">
                                Meetings, negotiations, contract signing, short-term training, or participation in business consultations.
                            </p>
                        </div>

                        <div className="px-6 flex flex-col gap-1 mb-10">
                            <h3 className="text-[#22324A] text-[25px] font-semibold">Validity</h3>
                            <p className="text-[#22324A] text-[15px] md:text-[20px] font-gotham font-[400] leading-tight">
                                Up to 90 days, usually single or multiple-entry (up to 180 days, 90 days per stay)
                            </p>
                        </div>
                    </div>

                    {/* B3 Visa */}
                    <div className="bg-white w-full md:w-[310px] rounded-[15px] flex flex-col items-start overflow-hidden">
                        <div className="bg-[#F4EBE2] w-full h-[80px] px-6 py-4 flex items-center rounded-t-[15px]">
                            <h3 className="text-[#22324A] text-[25px] font-gotham font-[500]">B3 Visa</h3>
                        </div>

                        <div className="p-6 flex flex-col gap-1">
                            <h3 className="text-[#22324A] text-[25px] font-gotham font-[500]">Purpose</h3>
                            <p className="text-[#22324A] text-[15px] md:text-[20px] font-gotham font-[400] leading-tight">
                                Short-term business trips such as installation, repair, or technical service under a contract.
                            </p>
                        </div>

                        <div className="px-6 flex flex-col gap-1 mb-10">
                            <h3 className="text-[#22324A] text-[25px] font-semibold">Validity</h3>
                            <p className="text-[#22324A] text-[15px] md:text-[20px] font-gotham font-[400] leading-tight">
                                Up to 1 year, usually multiple-entry with up to 30 days per stay.
                            </p>
                        </div>
                    </div>
                </div>


                <h1 className="mt-10 text-[#22324A] text-[24px] md:text-[35px] font-semibold text-left tracking-[-0.03em]">
                    Who Needs a B12 Visa?
                </h1>

                <p className="mt-5 text-[15px] text-[#22324A] md:text-[20px] font-[400] font-gotham tracking-[-0.03em]">You need a Kazakhstan Business Visa (B1, B2, or B3) if:</p>
                <div className="flex flex-col gap-4 text-[#22324A] mt-5">
                    <div className="flex items-center gap-3">
                        <img src={docPng} alt="icon" className="w-12 h-12 mt-1" />
                        <p className="text-[15px] md:text-[20px] font-[400] font-gotham tracking-[-0.03em]">
                            You are invited by a Kazakh company, organization, or event organizer.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <img src={calendarPng} alt="icon" className="w-12 h-12 mt-1" />
                        <p className="text-[15px] md:text-[20px] font-[400] font-gotham tracking-[-0.03em]">
                            You will attend business meetings, negotiations, or events.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <img src={globallightPng} alt="icon" className="w-12 h-12 mt-1" />
                        <p className="text-[15px] md:text-[20px] font-[400] font-gotham tracking-[-0.03em]">
                            You need to stay in Kazakhstan for business-related purposes but not employment.
                        </p>
                    </div>
                </div>


                <h1 className="mt-10 text-[#22324A] text-[24px] md:text-[35px] font-semibold text-left tracking-[-0.03em]">
                    Requirements for Application
                </h1>
                <p className="mt-4 text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                    To apply for a Kazakhstan Business Visa (B1, B2, B3), you generally need:
                </p>

                <div className="mt-4 flex items-center gap-3">
                    <img src={listPng} alt="icon" className="w-8 h-10 mt-1" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                        Completed visa application form (online or at the embassy).
                    </p>
                </div>
                <div className="mt-4 flex items-center gap-3">
                    <img src={globalPng} alt="icon" className="w-8 h-10 mt-1" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                        Valid passport (at least 6 months after departure date, 2 blank pages).
                    </p>
                </div>
                <div className="mt-4 flex items-center gap-3">
                    <img src={avaPng} alt="icon" className="w-8 h-10 mt-1" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                        Recent passport-sized photo.
                    </p>
                </div>
                <div className="mt-4 flex items-center gap-1">
                    <img src={bedPng} alt="icon" className="w-10 h-10 mt-1 scale-125 object-contain" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                        Invitation letter from a Kazakhstani organization (must be registered with the Migration Service).
                    </p>
                </div>
                <div className="mt-4 flex items-center gap-2">
                    <img src={ticketPng} alt="icon" className="w-9 h-9 mt-1 scale-125 object-contain" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                        Proof of business purpose (event registration, contract, or meeting confirmation).
                    </p>
                </div>
                <div className="mt-4 flex items-start gap-2">
                    <img
                        src={billPng}
                        alt="icon"
                        className="w-10 h-10 mt-1 object-contain"
                    />

                    <div className="flex flex-col">
                        <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                            Visa fee payment receipt.
                        </p>
                        <p className="text-[11px] text-[#22324A]/80 font-[300] font-gotham tracking-[-0.02em]">
                            (Requirements may differ depending on the embassy/consulate.)
                        </p>
                    </div>
                </div>

                <h1 className="mt-10 text-[#22324A] text-[24px] md:text-[35px] text-gotham font-[500] text-left">
                    Application Process
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
                                        className={`w-10 h-10 flex items-center justify-center rounded-full ${
                                            index === 0
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
                                        {stepTitles[num]}
                                    </p>
                                    <p className="text-[#22324A] text-gotham font-[300] leading-tight text-[11px] mt-1">
                                        {stepDescriptions[num]}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Десктопная сетка карточек */}
                    <div className="hidden md:flex items-start justify-center mt-5 gap-[20px]">
                        <div className="bg-white p-3 rounded-lg w-[120px] h-[200px] text-left">
                            <p className="mt-3 text-[#22324A] text-[16px] text-gotham leading-tight font-[500]">
                                Check visa-free eligibility
                            </p>
                            <p className="text-[#22324A] text-gotham font-[300] leading-tight text-[11px] mt-1">
                                You may not need a visa at all.
                            </p>
                        </div>

                        {[2, 3, 4, 5, 6, 7].map((num) => (
                            <div
                                key={num}
                                className="bg-white p-3 rounded-lg w-[120px] h-[200px] text-left"
                            >
                                <p className="mt-3 text-[#22324A] text-[16px] text-gotham leading-tight font-[500]">
                                    {stepTitles[num]}
                                </p>
                                <p className="text-[#22324A] text-gotham font-[300] leading-tight text-[11px] mt-1">
                                    {stepDescriptions[num]}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 w-full max-w-[975px] bg-white rounded-[20px] mx-auto flex flex-col px-6 md:px-10 py-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-10">
                        {/* Левая колонка — текст */}
                        <div className="flex flex-col gap-3 w-full md:max-w-[500px]">
                            <h1 className="text-[#22324A] text-[24px] md:text-[35px] font-semibold text-left tracking-[-0.03em] mb-4">
                                Important Notes for Workers
                            </h1>
                            <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                A business visa does not allow you to work in Kazakhstan — for employment, you need a Work Visa (C3).
                            </p>
                            <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                Carry your invitation copy and business documents while traveling.
                            </p>
                            <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                Migration registration is required within 3 business days of arrival (often automatic at major airports).
                            </p>
                            <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                Overstaying your visa can result in fines and entry bans.
                            </p>
                            <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                                Travel and health insurance is highly recommended.
                            </p>
                        </div>

                        {/* Правая колонка — фото */}
                        <div className="w-full md:w-[300px] h-[300px] bg-[#F6F6F6] rounded-[20px] p-4 flex items-center justify-center">
                            <img
                                src={infoPng}
                                alt="More info"
                                className="w-[150px] h-auto rounded-[15px] object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-8 md:mt-16 flex justify-center">
                    <button onClick={handleVisa}
                        className="w-[900px] h-[90px] bg-[#22324A] rounded-[15px] flex items-center justify-center hover:opacity-90 transition">
                        <span className="text-white text-[24px] md:text-[35px] font-gotham font-[500] tracking-[-0.03em]">
                            Apply to Visa
                        </span>
                    </button>
                </div>
            </div>
        </div>

    );
}
