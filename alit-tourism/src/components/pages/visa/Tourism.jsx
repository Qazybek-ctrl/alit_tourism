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

export default function Tourism() {
    const navigate = useNavigate();
    const isAuthenticated = !!localStorage.getItem("token");

    const handleVisa = () => {
        if (isAuthenticated) {
            navigate(`/form/questionnaire?visaInvitationType=tourism`);
        } else {
            toast.error("Please authorize before booking", {
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
                    Tourist Visa (B12) to Kazakhstan
                </h1>

                {/* Фото */}
                <img
                    src={kokZhailauImage}
                    alt="Tourist Visa"
                    className="w-full h-[200px] md:w-[1000px] md:h-[420px] rounded-[15px] md:rounded-[20px] object-cover object-[center_35%] mb-10 md:mb-16"
                />

                <h1 className="text-[#22324A] text-[24px] md:text-[35px] font-[500] text-left">
                    What is a Tourist Visa (B12)?
                </h1>

                <p className="mt-2 text-[#22324A] font-light text-[16px] md:text-[20px] leading-[20px] md:leading-[25px] tracking-[0.02em] max-w-full md:max-w-[1000px]">
                    The <span className="font-[500]">B12 visa</span> is a short-term entry visa issued for foreigners who wish
                    to visit Kazakhstan <span className="font-[500]">for tourism purposes</span> — sightseeing, cultural
                    exploration, leisure, or visiting friends. It does not allow work or
                    business activities.
                </p>

                <h1 className="mt-8 md:mt-10 text-[#22324A] text-[24px] md:text-[35px] font-[500] text-left">
                    Key Facts About the B12 Visa
                </h1>

                <div className="mt-6 md:mt-10 flex flex-col md:flex-row justify-between gap-6">
                    {[
                        {
                            img: pointPng,
                            title: "Purpose",
                            text: "Tourism only (business, study, or work is not permitted)."
                        },
                        {
                            img: verifyPng,
                            title: "Validity",
                            text: "Issued for up to 90 days. Cannot be extended or converted to another visa type."
                        },
                        {
                            img: timePng,
                            title: "Stay duration",
                            text: "Maximum of 30 days per entry (extensions are generally not possible)."
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
                            Entries
                        </h3>
                        <p className="text-[#22324A] text-[16px] md:text-[20px] font-normal leading-tight">
                            Usually issued as single-entry.
                        </p>
                    </div>

                    <div className="bg-[#F4EBE2] w-full md:w-[700px] h-auto md:h-[300px] rounded-[20px] p-5 flex flex-col items-start">
                        <img
                            src={visaPng}
                            alt=""
                            className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] mb-3"
                        />
                        <h3 className="text-[#22324A] text-[22px] md:text-[30px] font-[500]">
                            Visa-free countries
                        </h3>
                        <p className="text-[#22324A] text-[16px] md:text-[20px] font-normal leading-tight">
                            Citizens of many countries (EU, UK, USA, etc.) may enter
                            Kazakhstan visa-free for up to 30 days. Please check the list
                            before applying: <a href="https://vmp.gov.kz/en/services/visa-service" target="_blank" rel="noopener noreferrer" className="text-[#22324A] font-[500]">https://vmp.gov.kz/en/services/visa-service</a>
                        </p>
                    </div>
                </div>

                <h1 className="mt-10 text-[#22324A] text-[24px] md:text-[35px] font-[500] text-left tracking-[-0.03em]">
                    Who Needs a B12 Visa?
                </h1>

                <p className="mt-5 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">You must apply for a B12 visa if:</p>
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
                            You plan to stay <span className="font-[500]">longer</span> than the visa-free period allows.
                        </p>
                    </div>
                </div>


                <h1 className="mt-10 text-[#22324A] text-[24px] md:text-[35px] font-[500] text-left tracking-[-0.03em]">
                    Types of B12 Visa
                </h1>
                <p className="mt-4 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    There are two options available: <strong>Sticker Visa</strong> and <strong>E-Visa</strong>
                </p>

                <h1 className="mt-2 text-[#22324A] text-[20px] md:text-[30px] font-[500] text-left tracking-[-0.03em]">
                    1. Sticker Visa
                </h1>
                <p className="mt-2 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    Apply through a Kazakhstan embassy or consulate
                </p>
                <p className="mt-2 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    Required documents:
                </p>
                <div className="mt-2 flex items-start gap-1">
                    <Dot className="w-8 h-8 flex-shrink-0" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                        Completed visa application form
                    </p>
                </div>
                <div className="mt-2 flex items-start gap-1">
                    <Dot className="w-8 h-8 flex-shrink-0" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                        Valid passport (minimum 6 months validity after departure, 2 blank pages)
                    </p>
                </div>
                <div className="mt-2 flex items-start gap-1">
                    <Dot className="w-8 h-8 flex-shrink-0" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                        Recent passport-sized photo.
                    </p>
                </div>
                <div className="mt-2 flex items-start gap-1">
                    <Dot className="w-8 h-8 flex-shrink-0" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                        Invitation letter from a licensed tour operator in Kazakhstan
                    </p>
                </div>
                <div className="mt-2 flex items-start gap-1">
                    <Dot className="w-8 h-8 flex-shrink-0" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                        Visa fee payment receipt (USD 60)
                    </p>
                </div>
                <div className="mt-2 flex items-start gap-1">
                    <Dot className="w-8 h-8 flex-shrink-0" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                        Processing time: Up to 5 working days after submission
                    </p>
                </div>
                <div className="mt-2 flex items-start gap-1">
                    <Dot className="w-8 h-8 flex-shrink-0" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400] tracking-[-0.03em]">
                        Note: Sticker visas are required if you plan to enter Kazakhstan via land borders (car, train, or bus)
                    </p>
                </div>

                <p className="mt-4 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    You must have an invitation letter from a licensed tour operator in Kazakhstan.
                </p>

                <h1 className="mt-4 text-[#22324A] text-[20px] md:text-[30px] font-[500] text-left tracking-[-0.03em]">
                    2. E-Visa
                </h1>
                <p className="mt-2 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    Apply online via the official portal: https://vmp.gov.kz/en/services/visa-service
                </p>
                <p className="mt-2 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    Entry is allowed only through international airports (Almaty, Astana, Shymkent, etc.)
                </p>
                <p className="mt-4 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    Required documents:
                </p>
                <div className="mt-2 flex items-start gap-1">
                    <Dot className="w-8 h-8 flex-shrink-0" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                        Invitation letter from a licensed tour operator in Kazakhstan
                    </p>
                </div>
                <div className="mt-2 flex items-start gap-1">
                    <Dot className="w-8 h-8 flex-shrink-0" />
                    <p className="text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                        E-visa fee payment receipt (USD 60).
                    </p>
                </div>

                <p className="mt-4 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    Processing time: Usually issued within 5 minutes
                </p>
                <p className="mt-4 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    You must print out your e-visa and present it at border control upon arrival
                </p>

                <h1 className="mt-12 text-[#22324A] text-[24px] md:text-[35px] font-[500] text-left tracking-[-0.03em]">
                    How to Apply for an invitation from a licensed tour operator in Kazakhstan.
                </h1>
                <p className="mt-4 text-[15px] md:text-[20px] text-[#22324A] font-[400]   tracking-[-0.03em]">
                    For a <span className="font-[500]">B12 single-entry visa</span>, the processing period is <span className="font-[500]">7–14 working days</span> (excluding Saturdays and Sundays). In some cases, at the request of the National Security Committee of Kazakhstan, the process may be extended up to <span className="font-[500]">30 days</span>.
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

                <div className="mt-12 w-full max-w-[975px] bg-white rounded-[20px] mx-auto flex flex-col px-6 md:px-10 py-8">
                    {/* Контент (текст + картинка) */}
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
                        {/* Левая колонка — текст */}
                        <div className="flex flex-col gap-3 max-w-full text-left order-1 md:order-1 text-[#22324A]">
                            <h1 className="text-[#22324A] text-[24px] md:text-[35px] font-[500] tracking-[-0.03em] mb-4">
                                Important Tips for Tourists
                            </h1>
                            <p className="text-[15px] md:text-[20px] font-[400]   tracking-[-0.03em] leading-tight">
                                <span className="font-[500]">Carry your passport at all times.</span> You may be asked to show identification by authorities.
                            </p>
                            <p className="text-[15px] md:text-[20px] font-[400]   tracking-[-0.03em] leading-tight">
                                <span className="font-[500]">Mandatory registration:</span> Within 3 business days of arrival, you must register with local authorities. To make this process easy, please send us your hotel booking and flight details before arrival. We will complete the registration free of charge. Failure to comply may result in fines or even deportation.
                            </p>
                            <p className="text-[15px] md:text-[20px] font-[400]   tracking-[-0.03em]">
                                <span className="font-[500]">Do not overstay.</span> The maximum stay allowed is 30 days per entry, but never longer than the validity of your visa. Overstays may lead to fines and entry bans.
                            </p>
                            <p className="text-[15px] md:text-[20px] font-[400]   tracking-[-0.03em]">
                                <span className="font-[500]">Get travel insurance.</span> Strongly recommended to cover medical and travel-related expenses.
                            </p>
                            <p className="text-[15px] md:text-[20px] font-[400]   tracking-[-0.03em] leading-tight">
                                <span className="font-[500]">Currency:</span> The official currency is the Kazakhstani Tenge (KZT). Credit cards are widely accepted in major cities.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 md:mt-16 flex justify-center">
                    <button onClick={handleVisa}
                        className="w-[900px] h-[90px] bg-[#22324A] rounded-[15px] flex items-center justify-center hover:opacity-90 transition">
                        <span className="text-white text-[24px] md:text-[35px]   font-[500] tracking-[-0.03em]">
                            Apply to Visa
                        </span>
                    </button>
                </div>
            </div>
        </div>

    );
}
