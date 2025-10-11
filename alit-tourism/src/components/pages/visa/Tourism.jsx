import React from "react";
import { stepTitles, stepDescriptions } from "../../helper/helper";
import passportPng from "../../../assets/passport.png";
import planePng from "../../../assets/icons/blueplane.png";
import pointPng from "../../../assets/icons/point-in.png";
import timePng from "../../../assets/icons/time.png";
import verifyPng from "../../../assets/icons/verify.png";
import visaPng from "../../../assets/icons/visa.png";
import docPng from "../../../assets/icons/doc.png";
import calendarPng from "../../../assets/icons/calendar.png";
import listPng from "../../../assets/icons/list.png";
import globalPng from "../../../assets/icons/global.png";
import avaPng from "../../../assets/icons/ava.png";
import bedPng from "../../../assets/icons/bed.png";
import ticketPng from "../../../assets/icons/ticket.png";
import walletPng from "../../../assets/icons/wallet.png";
import billPng from "../../../assets/icons/bill.png";
import countryPng from "../../../assets/icons/country.png";
import infoPng from "../../../assets/icons/info.png";

export default function Tourism() {
    return (
        <div className="min-h-screen flex flex-col items-center bg-white py-16">
            {/* Контейнер */}
            <div className="w-[1135px] bg-[#F6F6F6] rounded-[30px] px-20 py-12 flex flex-col">

                {/* Заголовок слева */}
                <h1 className="mb-8 text-[#22324A] text-[35px] font-semibold text-left">
                    Tourist Visa (B12) to Kazakhstan
                </h1>

                {/* Фото */}
                <img
                    src={passportPng}
                    alt="Tourist Visa"
                    className="w-[1000px] h-[420px] rounded-[20px] object-cover mb-16"
                />

                <h1 className="text-[#22324A] text-[35px] font-semibold text-left">
                    What is a Tourist Visa (B12)?
                </h1>

                {/* Описание */}
                <p className="mt-1 text-[#000000] font-light text-[20px] leading-[25px] tracking-[0.02em] max-w-[1000px]">
                    The B12 visa is a short-term entry visa issued for foreigners who wish to visit
                    Kazakhstan for tourism purposes — sightseeing, cultural exploration, leisure,
                    or visiting friends. It does not allow work or business activities.
                </p>

                <h1 className="mt-10 text-[#22324A] text-[35px] font-semibold text-left">
                    Key Facts About the B12 Visa
                </h1>

                <div className="mt-10 flex justify-between gap-6">
                    {/* Purpose */}
                    <div className="bg-white w-[400px] h-[300px] rounded-[20px] p-6 flex flex-col items-start">
                        <img
                            src={pointPng}
                            alt="Purpose Icon"
                            className="w-[50px] h-[50px] mb-4"
                        />
                        <h3 className="text-[#22324A] text-[30px] font-semibold">Purpose</h3>
                        <p className="text-[#22324A] text-[20px] font-normal leading-tight">
                            Tourism only (business, study, or work is not permitted).
                        </p>
                    </div>

                    {/* Validity */}
                    <div className="bg-white w-[400px] h-[300px] rounded-[20px] p-6 flex flex-col items-start">
                        <img
                            src={verifyPng}
                            alt="Validity Icon"
                            className="w-[50px] h-[50px] mb-4"
                        />
                        <h3 className="text-[#22324A] text-[30px] font-semibold">Validity</h3>
                        <p className="text-[#22324A] text-[20px] font-normal leading-tight">
                            Issued for up to 90 days. Cannot be extended or converted to another visa type.
                        </p>
                    </div>

                    {/* Stay duration */}
                    <div className="bg-white w-[400px] h-[300px] rounded-[20px] p-6 flex flex-col items-start">
                        <img
                            src={timePng}
                            alt="Stay Duration Icon"
                            className="w-[50px] h-[50px] mb-4"
                        />
                        <h3 className="text-[#22324A] text-[30px] font-semibold">Stay duration</h3>
                        <p className="text-[#22324A] text-[20px] font-normal leading-tight">
                            Maximum of 30 days per entry (extensions are generally not possible).
                        </p>
                    </div>
                </div>

                <div className="mt-10 flex justify-between gap-6">
                    {/* Белый блок слева */}
                    <div className="bg-white w-[400px] h-[300px] rounded-[20px] p-6 flex flex-col items-start">
                        <img
                            src={planePng}
                            alt="Extra Icon"
                            className="w-[50px] h-[50px] mb-4"
                        />
                        <h3 className="text-[#22324A] text-[30px] font-semibold">
                            Entries
                        </h3>
                        <p className="text-[#22324A] text-[20px] font-normal leading-tight">
                            Usually issued as single-entry.
                        </p>
                    </div>

                    {/* Розовый блок справа */}
                    <div className="bg-[#F4EBE2] w-[700px] h-[300px] rounded-[20px] p-6 flex flex-col items-start">
                        <img
                            src={visaPng}
                            alt="Extra Icon"
                            className="w-[50px] h-[50px] mb-4"
                        />
                        <h3 className="text-[#22324A] text-[30px] font-semibold">
                            Visa-free countries
                        </h3>
                        <p className="text-[#22324A] text-[20px] font-normal leading-tight">
                            Citizens of many countries (EU, UK, USA, etc.) may enter Kazakhstan visa-free for up to 30 days. Please check the list before applying: https://vmp.gov.kz/en/services/visa-servi
                        </p>
                    </div>
                </div>

                <h1 className="mt-10 text-[#22324A] text-[35px] font-semibold text-left tracking-[-0.03em]">
                    Who Needs a B12 Visa?
                </h1>

                <p className="mt-5 text-[20px] font-[400] font-gotham tracking-[-0.03em]">You must apply for a B12 visa if:</p>
                <div className="flex flex-col gap-4 mt-5">
                    <div className="flex items-center gap-3">
                        <img src={docPng} alt="icon" className="w-12 h-12 mt-1" />
                        <p className="text-[20px] font-[400] font-gotham tracking-[-0.03em]">
                            Your country is not on Kazakhstan’s visa-free list.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <img src={calendarPng} alt="icon" className="w-12 h-12 mt-1" />
                        <p className="text-[20px] font-[400] font-gotham tracking-[-0.03em]">
                            You plan to stay longer than the visa-free period allows.
                        </p>
                    </div>
                </div>


                <h1 className="mt-10 text-[#22324A] text-[35px] font-semibold text-left tracking-[-0.03em]">
                    Requirements for Application
                </h1>
                <p className="mt-4 text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                    To apply for a Kazakhstan Tourist Visa (B12), you generally need:
                </p>

                <div className="mt-4 flex items-center gap-3">
                    <img src={listPng} alt="icon" className="w-8 h-10 mt-1" />
                    <p className="text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                        Completed visa application form (online or at the embassy).
                    </p>
                </div>
                <div className="mt-4 flex items-center gap-3">
                    <img src={globalPng} alt="icon" className="w-8 h-10 mt-1" />
                    <p className="text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                        Valid passport (at least 6 months after departure date, 2 blank pages).
                    </p>
                </div>
                <div className="mt-4 flex items-center gap-3">
                    <img src={avaPng} alt="icon" className="w-8 h-10 mt-1" />
                    <p className="text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                        Recent passport-sized photo.
                    </p>
                </div>
                <div className="mt-4 flex items-center gap-1">
                    <img src={bedPng} alt="icon" className="w-10 h-10 mt-1 scale-125 object-contain" />
                    <p className="text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                        Hotel booking or invitation (proof of accommodation).
                    </p>
                </div>
                <div className="mt-4 flex items-center gap-2">
                    <img src={ticketPng} alt="icon" className="w-9 h-9 mt-1 scale-125 object-contain" />
                    <p className="text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                        Travel itinerary or flight booking.
                    </p>
                </div>
                <div className="mt-4 flex items-center gap-2">
                    <img src={walletPng} alt="icon" className="w-10 h-10 mt-1 scale-125 object-contain" />
                    <p className="text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                        Proof of sufficient funds (bank statement or sponsorship letter).
                    </p>
                </div>
                <div className="mt-4 flex items-center gap-2">
                    <img src={billPng} alt="icon" className="w-10 h-10 mt-1 scale-85 object-contain" />
                    <p className="text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                        Visa fee payment receipt.
                    </p>
                </div>

                <h1 className="mt-10 text-[#22324A] text-[38px] text-gotham font-[500] text-left">
                    Application Process
                </h1>

                <div className="flex flex-col items-center mt-5">
                    <div className="flex items-center">
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 flex items-center justify-center bg-[#22324A] text-white rounded-full">
                                ✓
                            </div>
                        </div>

                        {[2, 3, 4, 5, 6, 7].map((num) => (
                            <React.Fragment key={num}>
                                <div className="h-[1px] bg-[#22324A]/50 w-[100px]"></div>

                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 flex items-center justify-center text-[13px] bg-[#D9D9D9] text-gotham font-[400] text-[#000000] rounded-full">
                                        {num}
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="flex items-start justify-center mt-5 gap-[20px]">
                        <div className="bg-white p-3 rounded-lg w-[120px] h-[200px] text-left">
                            <p className="mt-3 text-[#000000] text-[16px] text-gotham leading-tight font-[500]">Prepare business plan</p>
                            <p className="text-[#000000] text-gotham font-[300] leading-tight text-[11px] mt-1">Define your investment or entrepreneurial activity in Kazakhstan.</p>
                        </div>

                        {[2, 3, 4, 5, 6, 7].map((num) => (
                            <div
                                key={num}
                                className="bg-white p-3 rounded-lg w-[120px] h-[200px] text-left"
                            >
                                <p className="mt-3 text-[#000000] text-[16px] text-gotham leading-tight font-[500]">
                                    {stepTitles[num]}
                                </p>
                                <p className="text-[#000000] text-gotham font-[300] leading-tight text-[11px] mt-1">{stepDescriptions[num]}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <h1 className="mt-10 text-[#22324A] text-[35px] font-semibold text-left tracking-[-0.03em]">
                    Kazakhstan eVisa (for Tourists)
                </h1>
                <div className="mt-10 flex items-center justify-between gap-10">
                    {/* Левая колонка — текст */}
                    <div className="flex flex-col gap-3 max-w-[600px]">
                        <p className="text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                            Kazakhstan also offers an electronic visa (eVisa) for tourists from eligible countries.
                        </p>
                        <p className="text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em] leading-tight">
                            Apply online through the official portal.
                        </p>
                        <p className="text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                            You must have an invitation from a licensed tour operator in Kazakhstan.
                        </p>
                        <p className="text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                            eVisa is single-entry only.
                        </p>
                        <p className="text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                            Entry is allowed through certain airports only (Almaty, Astana, Aktau, Shymkent, etc.).
                        </p>
                    </div>

                    <div className="flex-shrink-0">
                        <img
                            src={countryPng}
                            alt="eVisa info"
                            className="w-[500px] h-auto rounded-[20px] object-cover"
                        />
                    </div>
                </div>

                <div className="mt-12 w-[975px] bg-white rounded-[20px] mx-auto flex flex-col px-10 py-8">
                    {/* Заголовок */}


                    {/* Контент (текст + картинка) */}
                    <div className="flex items-center justify-between gap-10">
                        {/* Левая колонка — текст */}
                        <div className="flex flex-col gap-3 max-w-[500px]">
                            <h1 className="text-[#22324A] text-[35px] font-semibold text-left tracking-[-0.03em] mb-4">
                                Important Tips for Tourists
                            </h1>
                            <p className="text-[20px] text-[#000000] font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                Always carry your passport and migration card (you get it upon arrival).
                            </p>
                            <p className="text-[20px] text-[#000000] font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                You must register within 3 business days of arrival (usually done automatically at the airport if you enter via major checkpoints).
                            </p>
                            <p className="text-[20px] text-[#000000] font-[400] font-gotham tracking-[-0.03em]">
                                Do not overstay — fines and bans apply.
                            </p>
                            <p className="text-[20px] text-[#000000] font-[400] font-gotham tracking-[-0.03em]">
                                Travel insurance is strongly recommended.
                            </p>
                            <p className="text-[20px] text-[#000000] font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                Local currency: Kazakhstani Tenge (KZT). Credit cards are accepted.
                            </p>
                        </div>

                        {/* Правая колонка — фото в блоке */}
                        <div className="bg-[#F6F6F6] w-[300px] h-[300px] rounded-[20px] p-4 flex items-center justify-center">
                            <img
                                src={infoPng}
                                alt="More info"
                                className="w-[150px] h-auto rounded-[15px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
