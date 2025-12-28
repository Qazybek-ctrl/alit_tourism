import React from "react";
import { businessStepTitles, businessStepDescriptions } from "../../helper/helper";
// Images from public folder
const globallightPng = "/icons/global_light.png";
const docPng = "/icons/doc.png";
const calendarPng = "/icons/calendar.png";
const listPng = "/icons/list.png";
const globalPng = "/icons/global.png";
const avaPng = "/icons/ava.png";
const billPng = "/icons/bill.png";
const bedPng = "/icons/bed.png";
const ticketPng = "/icons/ticket.png";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const businessImage = "/business.webp";

export default function Business() {
    const navigate = useNavigate();
    const isAuthenticated = !!localStorage.getItem("token");

    const handleVisa = () => {
        if (isAuthenticated) {
            navigate(`/form/questionnaire?visaInvitationType=business`);
        } else {
            toast.error("Please authorize before booking", {
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
                    Business Visas (B1, B2, B3) to Kazakhstan
                </h1>

                {/* Фото */}
                <img
                    src={businessImage}
                    alt="Tourist Visa"
                    className="w-full h-[200px] md:w-[1000px] md:h-[420px] rounded-[15px] md:rounded-[20px] object-cover object-[center_25%] mb-10 md:mb-16"
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
                                Up to <span className="font-semibold">60 days</span> per entry, can be single
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
                    Who Needs a B1, B2 or B3 Visa?
                </h1>

                <p className="mt-5 text-[15px] text-[#22324A] md:text-[20px] font-[400] font-gotham tracking-[-0.03em]">
                    You need a Kazakhstan Business Visa (B1, B2, or B3) if:
                </p>
                <div className="flex flex-col gap-4 text-[#22324A] mt-5">
                    <div className="flex items-center gap-3">
                        <img src={docPng} alt="icon" className="w-12 h-12 mt-1" />
                        <p className="text-[15px] md:text-[20px] font-[400] font-gotham tracking-[-0.03em]">
                            You are invited by a <span className="font-semibold">Kazakh company, organization, or event organizer.</span>
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <img src={calendarPng} alt="icon" className="w-12 h-12 mt-1" />
                        <p className="text-[15px] md:text-[20px] font-[400] font-gotham tracking-[-0.03em]">
                            You will <span className="font-semibold">attend business meetings, negotiations, or events in Kazakhstan</span>.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <img src={globallightPng} alt="icon" className="w-12 h-12 mt-1" />
                        <p className="text-[15px] md:text-[20px] font-[400] font-gotham tracking-[-0.03em]">
                            You need to stay in Kazakhstan for <span className="font-semibold">business-related purposes but not employment.</span>
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

                        {[2, 3, 4, 5, 6].map((num) => (
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
                        {[1, 2, 3, 4, 5, 6].map((num, index) => (
                            <div key={num} className="flex items-start mb-6 relative">
                                {/* Линия между элементами */}
                                {index !== 5 && (
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
                                        {businessStepTitles[num]}
                                    </p>
                                    <p className="text-[#22324A] text-gotham font-[300] leading-tight text-[11px] mt-1">
                                        {businessStepDescriptions[num]}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Десктопная сетка карточек */}
                    <div className="hidden md:flex items-start justify-center mt-5 gap-[20px]">
                        <div className="bg-white p-3 rounded-lg w-[120px] h-[200px] text-left">
                            <p className="mt-3 text-[#22324A] text-[16px] text-gotham leading-tight font-[500]">
                                Obtain invitation
                            </p>
                            <p className="text-[#22324A] text-gotham font-[300] leading-tight text-[11px] mt-1">
                                Your Kazakh business partner/organization registers an invitation with the Migration Service of Kazakhstan.
                            </p>
                        </div>

                        {[2, 3, 4, 5, 6].map((num) => (
                            <div
                                key={num}
                                className="bg-white p-3 rounded-lg w-[120px] h-[200px] text-left"
                            >
                                <p className="mt-3 text-[#22324A] text-[16px] text-gotham leading-tight font-[500]">
                                    {businessStepTitles[num]}
                                </p>
                                <p className="text-[#22324A] text-gotham font-[300] leading-tight text-[11px] mt-1">
                                    {businessStepDescriptions[num]}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 w-full max-w-[975px] bg-white rounded-[20px] mx-auto flex flex-col px-6 md:px-10 py-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-10">
                        {/* Левая колонка — текст */}
                        <div className="flex flex-col gap-3 w-full ">
                            <h1 className="text-[#22324A] text-[24px] md:text-[35px] font-semibold text-left tracking-[-0.03em] mb-4">
                                Important Notes for Business Travelers
                            </h1>
                            <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                A business visa <span className="font-semibold">does not allow you to work</span> in Kazakhstan — for employment, you need a <span className="font-semibold">Work Visa (C3)</span>.
                            </p>
                            <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                Carry your <span className="font-semibold">invitation copy and business documents</span> while traveling.
                            </p>
                            <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                <span className="font-semibold">Migration registration</span> is required within <span className="font-semibold">3 business days of arrival</span> (often automatic at major airports).
                            </p>
                            <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                Overstaying your visa can result in fines and entry bans.
                            </p>
                            <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                                Travel and health insurance is highly recommended.
                            </p>
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
