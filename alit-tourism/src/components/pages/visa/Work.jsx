import React from "react";
import { stepTitles, stepDescriptions } from "../../helper/helper";
import mcbookPng from "../../../assets/mcbook.png";
import globallightPng from "../../../assets/icons/global_light.png";
import pointPng from "../../../assets/icons/point-in.png";
import timePng from "../../../assets/icons/time.png";
import verifyPng from "../../../assets/icons/verify.png";
import docPng from "../../../assets/icons/doc.png";
import calendarPng from "../../../assets/icons/calendar.png";
import listPng from "../../../assets/icons/list.png";
import globalPng from "../../../assets/icons/global.png";
import handglobalPng from "../../../assets/icons/handglobal.png";
import extensionPng from "../../../assets/icons/extension.png";
import avaPng from "../../../assets/icons/ava.png";
import billPng from "../../../assets/icons/bill.png";
import countryPng from "../../../assets/icons/country.png";
import infoPng from "../../../assets/icons/info.png";
import letterPng from "../../../assets/icons/letter.png";
import bagPng from "../../../assets/icons/bag.png";
import downplanePng from "../../../assets/icons/downplane.png";

export default function Work() {
    return (
        <div className="min-h-screen flex flex-col items-center bg-white py-16">
            <div className="w-[1135px] bg-[#F6F6F6] rounded-[30px] px-20 py-12 flex flex-col">
                <h1 className="mb-8 text-[#22324A] text-[35px] font-semibold text-left">
                    Work Visa (C3) to Kazakhstan
                </h1>

                <img
                    src={mcbookPng}
                    alt="Tourist Visa"
                    className="w-[1000px] h-[420px] rounded-[20px] object-cover mb-16"
                />

                <h1 className="text-[#22324A] text-[35px] font-semibold text-left">
                    What is a Work Visa (C3)?
                </h1>

                {/* Описание */}
                <p className="mt-1 text-[#000000] font-light text-[20px] leading-[25px] tracking-[0.02em] max-w-[1000px]">
                    The C3 visa is a long-term entry visa issued to foreign citizens who come to Kazakhstan for employment. It allows you to live and legally work in the country under a contract with a Kazakhstani employer.
                </p>

                <h1 className="mt-10 text-[#22324A] text-[35px] font-semibold text-left">
                    Key Facts About the C3 Visa
                </h1>

                <div className="mt-10 flex justify-between gap-6">
                    {/* Purpose */}
                    <div className="bg-white w-[310px] h-[300px] rounded-[20px] p-6 flex flex-col items-start">
                        <img
                            src={pointPng}
                            alt="Purpose Icon"
                            className="w-[50px] h-[50px] mb-4"
                        />
                        <h3 className="text-[#22324A] text-[30px] font-semibold">Purpose</h3>
                        <p className="text-[#22324A] text-[20px] font-normal leading-tight">
                            Tourism only (no business, study, or work).
                        </p>
                    </div>

                    {/* Validity */}
                    <div className="bg-white w-[310px] h-[300px] rounded-[20px] p-6 flex flex-col items-start">
                        <img
                            src={verifyPng}
                            alt="Validity Icon"
                            className="w-[50px] h-[50px] mb-4"
                        />
                        <h3 className="text-[#22324A] text-[30px] font-semibold">Validity</h3>
                        <p className="text-[#22324A] text-[20px] font-normal leading-tight">
                            Usually issued for up to 90 days.
                        </p>
                    </div>

                    {/* Stay duration */}
                    <div className="bg-white w-[310px] h-[300px] rounded-[20px] p-6 flex flex-col items-start">
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

                <div className="mt-10 flex gap-6">
                    {/* Белый блок слева */}
                    <div className="bg-white w-[310px] h-[300px] rounded-[20px] p-6 flex flex-col items-start">
                        <img
                            src={extensionPng}
                            alt="Extra Icon"
                            className="w-[50px] h-[50px] mb-4 scale-125"
                        />
                        <h3 className="text-[#22324A] text-[30px] font-semibold">
                            Extension
                        </h3>
                        <p className="text-[#22324A] text-[20px] font-normal leading-tight">
                            Can be extended annually if the work contract continues.
                        </p>
                    </div>

                    {/* Розовый блок справа */}
                    <div className="bg-white w-[310px] h-[300px] rounded-[20px] p-6 flex flex-col items-start">
                        <img
                            src={handglobalPng}
                            alt="Extra Icon"
                            className="w-[50px] h-[50px] mb-4 scale-125"
                        />
                        <h3 className="text-[#22324A] text-[30px] font-semibold leading-none">
                            Employer’s responsibility
                        </h3>
                        <p className="text-[#22324A] text-[20px] font-normal leading-tight mt-2">
                            The Kazakh employer must obtain a work permit from the authorities before the visa is issued.
                        </p>
                    </div>
                </div>

                <h1 className="mt-10 text-[#22324A] text-[35px] font-semibold text-left tracking-[-0.03em]">
                    Who Needs a B12 Visa?
                </h1>

                <p className="mt-5 text-[20px] font-[400] font-gotham tracking-[-0.03em]">You need a C3 visa if:</p>
                <div className="flex flex-col gap-4 mt-5">
                    <div className="flex items-center gap-3">
                        <img src={docPng} alt="icon" className="w-12 h-12 mt-1" />
                        <p className="text-[20px] font-[400] font-gotham tracking-[-0.03em]">
                            You have a job offer from a Kazakhstani employer.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <img src={calendarPng} alt="icon" className="w-12 h-12 mt-1" />
                        <p className="text-[20px] font-[400] font-gotham tracking-[-0.03em]">
                            Your employer has obtained a work permit for you.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <img src={globallightPng} alt="icon" className="w-12 h-12 mt-1" />
                        <p className="text-[20px] font-[400] font-gotham tracking-[-0.03em]">
                            You plan to work and live in Kazakhstan for more than 90 days.
                        </p>
                    </div>
                </div>


                <h1 className="mt-10 text-[#22324A] text-[35px] font-semibold text-left tracking-[-0.03em]">
                    Requirements for Application
                </h1>
                <p className="mt-4 text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                    To apply for a Kazakhstan Work Visa (C3), you generally need:
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
                <div className="mt-4 flex items-center gap-3">
                    <img src={bagPng} alt="icon" className="w-[32px] h-[50px] scale-80 object-contain" />
                    <p className="text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                        Work permit copy issued to the employer by Kazakhstan authorities.
                    </p>
                </div>
                <div className="mt-4 flex items-center gap-3">
                    <img src={listPng} alt="icon" className="w-8 h-10 mt-1" />
                    <p className="text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                        Employment contract with a Kazakh company.
                    </p>
                </div>
                <div className="mt-4 flex items-center gap-1">
                    <img src={letterPng} alt="icon" className="w-10 h-10 mt-1 scale-125 object-contain" />
                    <p className="text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em]">
                        Invitation letter from the employer (registered with the Migration Service of Kazakhstan).
                    </p>
                </div>
                <div className="mt-4 flex items-start gap-2">
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
                            (Additional documents may be requested depending on your profession and embassy.)
                        </p>
                    </div>
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

                <div className="mt-10 flex items-center">
                    <div className="flex flex-col gap-3 max-w-[600px]">
                        <h1 className="text-[#22324A] text-[38px] font-[500] font-gotham text-left tracking-[-0.03em]">
                            Responsibilities After Arrival
                        </h1>

                        <div className="max-w-[460px]">
                            <p className="text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                <span className="font-[500] font-gotham">Migration registration: </span>
                                Must be done within 3 business days after arrival (usually handled automatically at airports or by the employer).
                            </p>
                            <p className="mt-2 text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                <span className="font-[500] font-gotham">Residence permit: </span>
                                If you plan to stay more than 1 year, you may need a residence permit (issued with employer assistance).
                            </p>
                            <p className="mt-2 text-[20px] text-[#22324A] font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                <span className="font-[500] font-gotham">Work only for your sponsoring employer: </span>
                                Changing employers requires a new work permit and visa.
                            </p>
                        </div>
                    </div>

                    <div className="ml-[40px] flex-shrink-0 w-[400px] h-[300px] bg-white rounded-[20px] flex items-center justify-center p-4">
                        <img
                            src={downplanePng}
                            alt="eVisa info"
                            className="w-[180px] h-auto object-contain"
                        />
                    </div>
                </div>

                <div className="mt-12 w-[975px] bg-white rounded-[20px] mx-auto flex flex-col px-10 py-8">
                    <div className="flex items-center justify-between gap-10">
                        <div className="flex flex-col gap-3 max-w-[500px]">
                            <h1 className="text-[#22324A] text-[35px] font-semibold text-left tracking-[-0.03em] mb-4">
                                Important Notes for Workers
                            </h1>
                            <p className="text-[20px] text-[#000000] font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                Work without a valid C3 visa and permit is illegal and may result in fines or deportation.
                            </p>
                            <p className="text-[20px] text-[#000000] font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                Some categories of foreign specialists (e.g., teachers, IT experts, oil & gas professionals) may be given priority in obtaining work permits.
                            </p>
                            <p className="text-[20px] text-[#000000] font-[400] font-gotham tracking-[-0.03em] leading-tight">
                                Family members (spouse, children) can apply for dependent visas (C4) to join the worker.
                            </p>
                            <p className="text-[20px] text-[#000000] font-[400] font-gotham tracking-[-0.03em]">
                                Health insurance is mandatory during your stay.
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

                <div className="mt-16 flex justify-center">
                    <button className="w-[900px] h-[90px] bg-[#22324A] rounded-[15px] flex items-center justify-center hover:opacity-90 transition">
                        <span className="text-white text-[35px] font-gotham font-[500] tracking-[-0.03em]">
                            Apply to Visa
                        </span>
                    </button>
                </div>
            </div>
        </div>

    );
}
