import NoBoots from "../../assets/helper/NoBoots.png";
import YesBoots from "../../assets/helper/YesBoots.png";
import sockets from "../../assets/helper/sockets.png";

export default function TravelTip() {
    return (
        <div className="min-h-screen flex flex-col items-center bg-white py-8 md:py-16 text-gotham">
            {/* Главный контейнер */}
            <div
                className="max-w-[1135px] w-full md:min-h-[2000px] bg-[#FFFFFF] md:bg-[#F6F6F6] rounded-[30px] px-6 md:px-12 py-2 md:py-16">
                {/* Заголовок */}
                <h1 className="text-[#22324A] text-3xl md:text-6xl font-[500] md:font-[500] text-left md:text-center mb-4 md:mb-16">
                    Travel Tips Blogs
                </h1>

                {/* Блок “What to bring…” */}
                <div className="bg-white rounded-2xl shadow-sm p-4 md:p-10 mb-10">
                    <h2 className="text-[#22324A] text-xl md:text-2xl font-medium mb-4">
                        What to bring if you are planning to visit wild nature in summer?
                    </h2>

                    <p className="text-[#22324A] text-base md:text-lg mb-8 leading-relaxed">
                        Since it can get quite cold in the evenings due to the high altitude, please bring warm
                        clothing, including:
                    </p>

                    <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#22324A] text-sm md:text-base leading-relaxed">
                        <ul className="list-disc list-inside space-y-2">
                            <li>A warm jacket, hat, and pants</li>
                            <li>Waterproof hiking boots and trekking poles</li>
                            <li>Extra clothing and socks (in case of rain or sweat)</li>
                            <li>Power banks (for charging devices during the trek)</li>
                            <li>A flashlight (torch) for night-time use, especially in yurt camps</li>
                            <li>
                                A reusable plastic bottle (We promote responsible tourism and strive to follow
                                sustainable practices)
                            </li>
                            <li>Antiseptic spray, wipes, and hand sanitizer</li>
                            <li>
                                Health insurance and other essential documents (keep them in your handbag in case your
                                luggage is lost)
                            </li>
                            <li>
                                Prescription medication (carry in your hand luggage; ensure proper storage conditions
                                and check expiration
                                dates)
                            </li>
                        </ul>

                        <ul className="list-disc list-inside space-y-2">
                            <li>Clothing with long sleeves (to avoid sunburn)</li>
                            <li>A raincoat</li>
                            <li>Sunscreen (SPF 30 or higher)</li>
                            <li>Insect repellent (for both skin and clothing)</li>
                            <li>A personal first aid kit, including items for:</li>
                            <ul className="list-disc list-inside ml-5 space-y-1">
                                <li>Blisters</li>
                                <li>Sunburn</li>
                                <li>Allergies</li>
                                <li>Diarrhea</li>
                                <li>Sore muscles (especially after horse riding)</li>
                            </ul>
                            <li>Painkillers, antihistamines, general antibiotics</li>
                            <li>Any medication specific to your personal health needs</li>
                        </ul>
                    </div>
                </div>

                {/* Блок “Money Exchange” */}
                <div className="bg-white rounded-2xl shadow-sm p-4 md:p-10 mb-10">
                    <h2 className="text-[#22324A] text-xl md:text-2xl font-medium mb-4">Money Exchange</h2>

                    <p className="text-[#22324A] text-base md:text-lg leading-relaxed">
                        If you plan to exchange{" "}
                        <span className="font-semibold">USD or EUR to KZT (Kazakhstani Tenge)</span>, we recommend
                        bringing{" "}
                        <span className="font-semibold">$50 or $100</span> bills that are clean and undamaged — no
                        stamps, marks,
                        tears, or inscriptions. Banks may refuse damaged banknotes or deduct a percentage fee for each
                        one they accept.
                    </p>
                </div>

                {/* Блок “Important Notes Before Your Mountain Trip to Kazakhstan” */}
                <div className="bg-white rounded-2xl shadow-sm p-4 md:p-10 mb-10">
                    <h2 className="text-[#22324A] text-xl md:text-2xl font-medium mb-4">
                        Important Notes Before Your Mountain Trip to Kazakhstan
                    </h2>

                    <p className="text-[#22324A] text-base md:text-lg leading-relaxed mb-8">
                        Trekking shoes are highly recommended to prevent ankle injuries. You can bring:
                        <br/>• Proper hiking boots with ankle support
                        <br/>• High-top sneakers (as a lightweight backup)
                        <br/>• Avoid thin-soled or worn-out shoes — opt for shoes with thick, sturdy soles.
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
                <div className="bg-white rounded-2xl shadow-sm p-4 md:p-10">
                    <h2 className="text-[#22324A] text-xl md:text-2xl font-medium mb-4">Electrical sockets</h2>

                    <p className="text-[#22324A] text-base md:text-lg leading-relaxed mb-8">
                        Electrical sockets in Kazakhstan are like this. Please take a special plugs (adapters) if you
                        use
                        <span className="font-semibold"> American style one.</span>
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <img
                            src={sockets}
                            alt="Kazakhstan electrical socket example"
                            className="w-full md:w-[50%] h-auto rounded-2xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}
