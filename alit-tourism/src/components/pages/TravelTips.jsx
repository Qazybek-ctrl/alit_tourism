// Images from public folder
const NoBoots = "/helper/NoBoots.png";
const YesBoots = "/helper/YesBoots.png";
const sockets = "/helper/sockets.webp";
const road = "/helper/road.webp";
const toilet = "/helper/streetToilet.jpg";
const insideYurt = "/helper/insideYurt.webp";
const dorm = "/helper/dorm.jpg";
const dorm2 = "/helper/dorm2.webp";
const yurt = "/helper/yurt.webp";

import { useLanguage } from "../../utility/LanguageContext";

export default function TravelTip() {
    const { t } = useLanguage();
    return (
        <div className="min-h-screen flex flex-col items-center bg-white py-8 md:py-16 text-gotham">
            {/* Главный контейнер */}
            <div
                className="max-w-[1135px] w-full md:min-h-[2000px] bg-[#FFFFFF] md:bg-[#F6F6F6] rounded-[30px] px-6 md:px-12 py-2 md:py-16">
                {/* Заголовок */}
                <h1 className="text-[#22324A] text-3xl md:text-6xl font-[500] md:font-[500] text-left md:text-center mb-4 md:mb-16">
                    {t("pages.travelTips.title")}
                </h1>

                {/* Блок “What to bring…” */}
                <div className="bg-white rounded-2xl shadow-sm p-4 md:p-10 mb-10">
                    <h2 className="text-[#22324A] text-xl md:text-2xl font-medium mb-4">
                        {t("pages.travelTips.whatToBring")}
                    </h2>

                    <p className="text-[#22324A] text-base md:text-lg mb-8 leading-relaxed">
                        {t("pages.travelTips.intro")}
                    </p>

                    <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#22324A] text-sm md:text-base leading-relaxed">
                        <ul className="list-disc list-inside space-y-2">
                            <li>{t("pages.travelTips.packingList.item1")}</li>
                            <li>{t("pages.travelTips.packingList.item2")}</li>
                            <li>{t("pages.travelTips.packingList.item3")}</li>
                            <li>{t("pages.travelTips.packingList.item4")}</li>
                            <li>{t("pages.travelTips.packingList.item5")}</li>
                            <li>{t("pages.travelTips.packingList.item6")}</li>
                            <li>{t("pages.travelTips.packingList.item7")}</li>
                            <li>{t("pages.travelTips.packingList.item8")}</li>
                            <li>{t("pages.travelTips.packingList.item9")}</li>
                        </ul>

                        <ul className="list-disc list-inside space-y-2">
                            <li>{t("pages.travelTips.packingList.item10")}</li>
                            <li>{t("pages.travelTips.packingList.item11")}</li>
                            <li>{t("pages.travelTips.packingList.item12")}</li>
                            <li>{t("pages.travelTips.packingList.item13")}</li>
                            <li>{t("pages.travelTips.packingList.item14")}</li>
                            <ul className="list-disc list-inside ml-5 space-y-1">
                                <li>{t("pages.travelTips.packingList.item15")}</li>
                                <li>{t("pages.travelTips.packingList.item16")}</li>
                                <li>{t("pages.travelTips.packingList.item17")}</li>
                                <li>{t("pages.travelTips.packingList.item18")}</li>
                                <li>{t("pages.travelTips.packingList.item19")}</li>
                            </ul>
                            <li>{t("pages.travelTips.packingList.item20")}</li>
                            <li>{t("pages.travelTips.packingList.item21")}</li>
                        </ul>
                    </div>
                </div>

                {/* Блок “Money Exchange” */}
                <div className="bg-white rounded-2xl shadow-sm p-4 md:p-10 mb-10">
                    <h2 className="text-[#22324A] text-xl md:text-2xl font-medium mb-4">{t("pages.travelTips.moneyExchange")}</h2>

                    <p className="text-[#22324A] text-base md:text-lg leading-relaxed">
                        {t("pages.travelTips.moneyExchangeText")}
                    </p>
                </div>

                {/* Блок “Important Notes Before Your Mountain Trip to Kazakhstan” */}
                <div className="bg-white rounded-2xl shadow-sm p-4 md:p-10 mb-10">
                    <h2 className="text-[#22324A] text-xl md:text-2xl font-medium mb-4">
                        {t("pages.travelTips.importantNotes")}
                    </h2>

                    <p className="text-[#22324A] text-base md:text-lg leading-relaxed mb-8">
                        {t("pages.travelTips.importantNotesText")}
                        <br />• {t("common.properHikingBoots")}
                        <br />• {t("common.highTopSneakers")}
                        <br />• {t("common.avoidThinSoles")}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Первая картинка с ❌ */}
                        <div className="relative rounded-2xl overflow-hidden">
                            <img
                                src={NoBoots}
                                alt="Incorrect shoes example"
                                className="w-full h-auto rounded-2xl object-cover"
                            />
                            <div
                                className="absolute w-[70px] h-[70px] text-[30px] flex items-center justify-center top-0 right-0 bg-[#F6F6F6] rounded-[15px] text-red-500 font-bold">
                                ❌
                            </div>
                        </div>

                        {/* Вторая картинка с ✅ */}
                        <div className="relative rounded-2xl overflow-hidden">
                            <img
                                src={YesBoots}
                                alt="Correct shoes example"
                                className="w-full h-auto rounded-2xl object-cover"
                            />
                            <div
                                className="absolute w-[70px] h-[70px] text-[30px] flex items-center justify-center top-0 right-0 bg-[#F6F6F6] rounded-[15px] text-green-500 font-bold">
                                ✅
                            </div>
                        </div>
                    </div>
                </div>

                {/* Новый блок “Electrical sockets” */}
                <div className="bg-white rounded-2xl shadow-sm p-4 md:p-10 mb-10">
                    <h2 className="text-[#22324A] text-xl md:text-2xl font-medium mb-4">{t("pages.travelTips.electricalSockets")}</h2>

                    <p className="text-[#22324A] text-base md:text-lg leading-relaxed mb-8">
                        {t("pages.travelTips.electricalSocketsText")}
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <img
                            src={sockets}
                            alt="Kazakhstan electrical socket example"
                            className="w-full md:w-[50%] h-auto rounded-2xl object-cover"
                        />
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-4 md:p-10">
                    <h2 className="text-[#22324A] text-xl md:text-2xl font-medium mb-4">{t("pages.travelTips.driveToNature")}</h2>

                    <p className="text-[#22324A] text-base md:text-lg leading-tight font-[500]">
                        {t("pages.travelTips.safety")}
                    </p>
                    <p className="text-[#22324A] text-base md:text-lg mb-8 font-[400]">
                        {t("pages.travelTips.safetyText")}
                    </p>

                    <p className="text-[#22324A] text-base md:text-lg leading-tight font-[500]">
                        {t("pages.travelTips.food")}
                    </p>
                    <p className="text-[#22324A] text-base md:text-lg mb-8 font-[400]">
                        {t("pages.travelTips.foodText")}
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start mb-5">
                        <div className="flex-1">
                            <p className="text-[#22324A] text-base md:text-lg leading-tight font-[500]">
                                {t("pages.travelTips.roads")}
                            </p>
                            <p className="text-[#22324A] text-base md:text-lg font-[400]">
                                {t("pages.travelTips.roadsText")}
                            </p>
                        </div>

                        <div className="w-full md:w-[45%] flex-shrink-0 flex justify-center">
                            <img
                                src={road}
                                alt="Roads"
                                className="w-[70%] h-auto rounded-2xl object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                        <div className="flex-1">
                            <p className="text-[#22324A] text-base md:text-lg leading-tight font-[500]">
                                {t("pages.travelTips.toilets")}
                            </p>
                            <p className="text-[#22324A] text-base md:text-lg font-[400]">
                                {t("pages.travelTips.toiletsText")}
                            </p>
                        </div>

                        {/* Image on the right */}
                        <div className="w-full md:w-[45%] flex-shrink-0 flex justify-center">
                            <img
                                src={toilet}
                                alt="Street Toilet"
                                className="w-[70%] h-auto rounded-2xl object-cover"
                            />
                        </div>
                    </div>

                    {/* New 3-column section */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start mt-8">
                        {/* Column 1: Text (40%) */}
                        <div className="w-full md:w-[40%]">
                            <p className="text-[#22324A] text-base md:text-lg leading-tight font-[500] mb-2">
                                {t("pages.travelTips.accommodation")}
                            </p>
                            <p className="text-[#22324A] text-base md:text-lg font-[400]">
                                {t("pages.travelTips.accommodationText")}
                            </p>
                        </div>

                        {/* Column 2: Two stacked images */}
                        <div className="w-full md:w-[30%] flex flex-col gap-4">
                            <img
                                src={dorm}
                                alt="Mountain view 1"
                                className="w-full h-auto rounded-2xl object-cover"
                            />
                            <img
                                src={yurt}
                                alt="Mountain view 2"
                                className="w-full h-auto rounded-2xl object-cover"
                            />
                        </div>

                        {/* Column 3: One large image */}
                        <div className="w-full md:w-[30%] flex flex-col gap-4">
                            <img
                                src={insideYurt}
                                alt="Mountain view 1"
                                className="w-full h-auto rounded-2xl object-cover"
                            />
                            <img
                                src={dorm2}
                                alt="Mountain view 2"
                                className="w-full h-[160px] rounded-2xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
