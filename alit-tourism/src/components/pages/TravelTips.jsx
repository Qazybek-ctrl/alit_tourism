// Images from public folder
const NoBoots = "/helper/NoBoots.png";
const YesBoots = "/helper/YesBoots.png";
const sockets = "/helper/sockets.png";
const road = "/helper/road.webp";
const toilet = "/helper/streetToilet.jpg";
const insideYurt = "/helper/insideYurt.webp";
const dorm = "/helper/dorm.jpg";
const dorm2 = "/helper/dorm2.webp";
const yurt = "/helper/yurt.webp";

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
                        <br />• Proper hiking boots with ankle support
                        <br />• High-top sneakers (as a lightweight backup)
                        <br />• Avoid thin-soled or worn-out shoes — opt for shoes with thick, sturdy soles.
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

                <div className="bg-white rounded-2xl shadow-sm p-4 md:p-10">
                    <h2 className="text-[#22324A] text-xl md:text-2xl font-medium mb-4">Drive to Wild Nature – What to Expect?</h2>

                    <p className="text-[#22324A] text-base md:text-lg leading-tight font-[500]">
                        Safety
                    </p>
                    <p className="text-[#22324A] text-base md:text-lg mb-8 font-[400]">
                        Kazakhstan is a very safe country, and our people are warm, welcoming, and curious. If locals approach you, it’s usually because they are interested in you or would like to practice their English.
                        However, we recommend taking normal travel precautions: keep your valuables secure, and during trekking always store them safely inside your tent.
                    </p>

                    <p className="text-[#22324A] text-base md:text-lg leading-tight font-[500]">
                        Food
                    </p>
                    <p className="text-[#22324A] text-base md:text-lg mb-8 font-[400]">
                        Kazakh cuisine is rich in meat dishes, especially beef, horse meat, and noodles, and we traditionally enjoy black tea with milk several times a day.
                        Coffee is also available. For those with special preferences, vegetarian meals can be arranged upon request.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start mb-5">
                        <div className="flex-1">
                            <p className="text-[#22324A] text-base md:text-lg leading-tight font-[500]">
                                Roads
                            </p>
                            <p className="text-[#22324A] text-base md:text-lg font-[400]">
                                In some mountainous areas, there are no paved roads, so please be prepared for a more adventurous journey.
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
                                Toilets
                            </p>
                            <p className="text-[#22324A] text-base md:text-lg font-[400]">
                                While exploring the wild nature, you may not always find modern European-style toilets.
                                Instead, in some areas, only simple, rustic facilities are available — which is part of the authentic outdoor experience.
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
                                Accommodation
                            </p>
                            <p className="text-[#22324A] text-base md:text-lg font-[400]">
                                Depending on the destination, you may stay in guesthouses or traditional yurts. 
                                These are authentic and cozy but not luxury-level accommodations.
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
