import React from "react";
import globallightPng from "../../../assets/icons/global_light.png";
import pointPng from "../../../assets/icons/point-in.png";
import timePng from "../../../assets/icons/time.png";
import verifyPng from "../../../assets/icons/verify.png";
import docPng from "../../../assets/icons/doc.png";
import calendarPng from "../../../assets/icons/calendar.png";
import listPng from "../../../assets/icons/list.png";
import globalPng from "../../../assets/icons/global.png";
import avaPng from "../../../assets/icons/ava.png";
import billPng from "../../../assets/icons/bill.png";
import coinsPng from "../../../assets/icons/coins.png";
import cardPng from "../../../assets/icons/card.png";
import letterPng from "../../../assets/icons/letter.png";
import littlebagPng from "../../../assets/icons/littlebag.png";
import ticketPng from "../../../assets/icons/ticket.png";
import bedPng from "../../../assets/icons/bed.png";
import { stepTitles, stepDescriptions } from "../../helper/helper";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import businessImmigrantImage from "../../../assets/businessImmigrant.jpg";

export default function Immigrant() {
    const navigate = useNavigate();
    const isAuthenticated = !!localStorage.getItem("token");

    const handleVisa = () => {
        if (isAuthenticated) {
            navigate(`/form/questionnaire?visaInvitationType=immigrant`);
        } else {
            toast.error("Please authorize before booking", {
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
                    Business Immigrant Visa (C5) to Kazakhstan
                </h1>

                {/* Фото */}
                <img
                    src={businessImmigrantImage}
                    alt="Tourist Visa"
                    className="w-full h-[200px] md:w-[1000px] md:h-[420px] rounded-[15px] md:rounded-[20px] object-cover mb-10 md:mb-16"
                />

                <h1 className="text-[#22324A] text-[24px] md:text-[35px] font-[500] text-left  ">
                    What is a Business Immigrant Visa (C5)?
                </h1>

                {/* Описание */}
                <p className="mt-1 text-[#22324A]   text-[15px] md:text-[20px] leading-[18px] md:leading-[25px] max-w-[1000px]">
                    The C5 visa is issued to foreign citizens who plan to come to Kazakhstan as <span className="font-[500]">business immigrants</span>— to open or participate in a private business, invest, or establish a company in Kazakhstan.
                    It is the first step for those who want to become <span className="font-[500]">entrepreneurs, investors, or company founders</span> in the country.
                </p>

                <h1 className="mt-10 text-[#22324A] text-[24px] md:text-[35px]   font-[500] text-left">
                    Key Facts About the C3 Visa
                </h1>

                <div className="mt-10 flex flex-col md:flex-row justify-between gap-2 md:gap-6">
                    {/* Purpose */}
                    <div className="bg-white w-full md:w-[310px] h-auto md:h-[300px] rounded-[20px] p-6 flex flex-col items-start">
                        <img
                            src={pointPng}
                            alt="Purpose Icon"
                            className="w-[50px] h-[50px] mb-4"
                        />
                        <h3 className="text-[#22324A] text-[20px] md:text-[30px]   font-[500]">Purpose</h3>
                        <p className="text-[#22324A] text-[15px] font-normal leading-tight">
                            Business immigration (starting or joining a business in Kazakhstan).
                        </p>
                    </div>

                    {/* Validity */}
                    <div className="bg-white w-full md:w-[310px] h-auto md:h-[300px] rounded-[20px] p-6 flex flex-col items-start mt-6 md:mt-0">
                        <img
                            src={verifyPng}
                            alt="Validity Icon"
                            className="w-[50px] h-[50px] mb-4"
                        />
                        <h3 className="text-[#22324A] text-[20px] md:text-[30px]   font-[500]">Validity</h3>
                        <p className="text-[#22324A] text-[15px] font-normal leading-tight">
                            Usually issued for up to 1 year with multiple entries.
                        </p>
                    </div>

                    {/* Stay duration */}
                    <div className="bg-white w-full md:w-[310px] h-auto md:h-[300px] rounded-[20px] p-6 flex flex-col items-start mt-6 md:mt-0">
                        <img
                            src={timePng}
                            alt="Stay Duration Icon"
                            className="w-[50px] h-[50px] mb-4"
                        />
                        <h3 className="text-[#22324A] text-[20px] md:text-[30px] font-[500]">Extension</h3>
                        <p className="text-[#22324A] text-[15px] font-normal leading-tight">
                            Renewable annually if business activity continues.
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
                            Residence Permit
                        </h3>
                        <p className="text-[#22324A] text-[15px] leading-tight">
                            Holders may later apply for a <span className="font-[500]">residence permit</span> based on their business.
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
                            Investment requirement
                        </h3>
                        <p className="text-[#22324A] text-[15px] leading-tight mt-2">
                            Applicants must meet Kazakhstan’s <span className="font-[500]">financial and business activity requirements</span>.
                        </p>
                    </div>
                </div>


                <h1 className="mt-10 text-[#22324A] text-[24px] md:text-[35px]   font-[500] text-left">
                    Who Needs a B12 Visa?
                </h1>

                <p className="mt-5 text-[#22324A] text-[15px] md:text-[20px] font-[400] font-gotham tracking-[-0.03em]">
                    You need a C5 visa if you plan to:
                </p>
                <div className="flex flex-col gap-4 mt-5 text-[#22324A]">
                    <div className="flex items-center gap-3">
                        <img src={docPng} alt="icon" className="w-12 h-12 mt-1" />
                        <p className="text-[15px] md:text-[20px] font-[400]  ">
                            Open a private business in Kazakhstan.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <img src={calendarPng} alt="icon" className="w-12 h-12 mt-1" />
                        <p className="text-[15px] md:text-[20px] font-[400] font-gotham tracking-[-0.03em]">
                            Register as an individual entrepreneur.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <img src={globallightPng} alt="icon" className="w-12 h-12 mt-1" />
                        <p className="text-[15px] md:text-[20px] font-[400] font-gotham tracking-[-0.03em]">
                            Invest in a Kazakhstani company.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <img src={littlebagPng} alt="icon" className="w-12 h-12 mt-1" />
                        <p className="text-[15px] md:text-[20px] font-[400] font-gotham tracking-[-0.03em]">
                            Create jobs or participate in projects that contribute to Kazakhstan’s economy.
                        </p>
                    </div>
                </div>


                <h1 className="mt-10 text-[#22324A] text-[24px] md:text-[35px]   text-left font-[500]">
                    Requirements for Application
                </h1>
                <p className="mt-4 text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                    To apply for a Kazakhstan Business Immigrant Visa (C5), you generally need:
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
                        Proof of financial capacity (bank statement, proof of capital).
                    </p>
                </div>
                <div className="mt-4 flex items-center gap-2">
                    <img src={ticketPng} alt="icon" className="w-9 h-9 mt-1 scale-125 object-contain" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                        Business plan or statement of intended activity in Kazakhstan.
                    </p>
                </div>
                <div className="mt-4 flex items-center gap-1">
                    <img src={letterPng} alt="icon" className="w-10 h-10 mt-1 scale-125 object-contain" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                        Invitation letter from Kazakh authorities (issued after business registration request).
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
                            Visa fee payment receipt.
                        </p>
                        <p className="text-[11px] text-[#22324A]/80 font-[300] font-gotham tracking-[-0.02em]">
                            (Exact requirements may differ depending on the embassy/consulate.)
                        </p>
                    </div>
                </div>

                <h1 className="mt-10 text-[#22324A] text-[24px] md:text-[35px]   font-[500] text-left">
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
                                        {stepTitles[num]}
                                    </p>
                                    <p className="text-[#22324A]   font-[300] leading-tight text-[11px] mt-1">
                                        {stepDescriptions[num]}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Десктопная сетка карточек */}
                    <div className="hidden md:flex items-start justify-center mt-5 gap-[20px]">
                        <div className="bg-white p-3 rounded-lg w-[120px] h-[200px] text-left">
                            <p className="mt-3 text-[#22324A] text-[16px]   leading-tight font-[500]">
                                Check visa-free eligibility
                            </p>
                            <p className="text-[#22324A]   font-[300] leading-tight text-[11px] mt-1">
                                You may not need a visa at all.
                            </p>
                        </div>

                        {[2, 3, 4, 5, 6, 7].map((num) => (
                            <div
                                key={num}
                                className="bg-white p-3 rounded-lg w-[120px] h-[200px] text-left"
                            >
                                <p className="mt-3 text-[#22324A] text-[16px]   leading-tight font-[500]">
                                    {stepTitles[num]}
                                </p>
                                <p className="text-[#22324A]   font-[300] leading-tight text-[11px] mt-1">
                                    {stepDescriptions[num]}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 w-full max-w-[975px] bg-white rounded-[20px] mx-auto flex flex-col px-6 md:px-10 py-8 text-[#22324A]">
                    <h1 className="text-[24px] md:text-[35px] text-left font-[500] mb-4">
                        Important Notes for Business Immigrants
                    </h1>

                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10">
                        {/* Текст */}
                        <div className="flex flex-col gap-3 w-full text-[15px] md:text-[20px]">
                            <p className="font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                First, a <span className="font-[500]">C5 visa</span> will be issued for 90 days. Within the first 60 days after arrival, you must either register a company or purchase shares in an existing company. Once the company is registered or the shares are acquired, you become eligible to apply for a <span className="font-[500]">1-year visa</span>.
                            </p>
                            <p className="font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                A C5 visa allows you to <span className="font-[500]">do business and invest</span>, but you must follow Kazakhstan’s company registration rules.
                            </p>
                            <p className="font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                You should show <span className="font-[500]">sufficient capital</span> to fund your business.
                            </p>
                            <p className="font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                Family members (spouse, children) can apply for <span className="font-[500]">dependent visas</span> to join you.
                            </p>
                            <p className="font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                Business immigrants are expected to <span className="font-[500]">contribute to the local economy</span> (job creation, investment).
                            </p>
                        </div>
                    </div>
                </div>

                <h1 className="mt-12 text-[#22324A] text-[24px] md:text-[35px] font-[500] text-left tracking-[-0.03em]">
                    How to Apply for an invitation from a licensed tour operator in Kazakhstan.
                </h1>
                <p className="mt-4 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    For a <span className="font-[500]">C5 single-entry visa</span>, the processing period is <span className="font-[500]">7–14 working days</span> (excluding Saturdays and Sundays). In some cases, at the request of the National Security Committee of Kazakhstan, the process may be extended up to <span className="font-[500]">30 days</span>.
                </p>
                <p className="mt-4 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    If you are applying to<span className="font-[500]">extend your C5 visa to a 1-year multiple-entry visa</span>, the processing time may take up to <span className="font-[500]">2 months</span>.
                </p>
                <p className="mt-4 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    To apply, please:
                </p>
                <p className="mt-2 ml-4 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    • Fill out the provided questionnaire.
                </p>
                <p className="mt-2 ml-4 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    • Submit a <span className="font-[500]">high-quality</span> scan or photo of your passport (all pages with stamps and visas).
                </p>
                <p className="mt-2 ml-4 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    • If you are applying from a country other than your country of origin, provide a document confirming your <span className="font-[500]">residence permit</span> or <span className="font-[500]">long-term</span> visa in that country.
                </p>

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
