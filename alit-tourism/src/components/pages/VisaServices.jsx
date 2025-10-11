import { Link } from "react-router-dom";
import airportImage from "../../assets/airport.png";
import mcbookImage from "../../assets/mcbook.png";
import twopeopleImage from "../../assets/twopeople.png";
import btrkImage from "../../assets/btrk.png";
import graphIcon from "../../assets/blocks/graph.png";
import paperIcon from "../../assets/blocks/paper.png";
import ppIcon from "../../assets/blocks/pp.png";
import ssIcon from "../../assets/blocks/ss.png";

const visaBlocks = [
    {
        img: btrkImage,
        title: "Tourism",
        type: "B12",
        link: "/visa/tourism"
    },
    {
        img: mcbookImage,
        title: "Work",
        type: "C3",
        link: "/visa/work"
    },
    {
        img: twopeopleImage,
        title: "Business",
        type: "B1, B2, B3",
        link: "/visa/business"
    },
    {
        img: airportImage,
        title: "Business Immigrant",
        type: "C5",
        link: "/visa/immigrant"
    },
];

export default function VisaServices() {
    return (
        <div className="min-h-screen flex flex-col items-center bg-white py-16">
            {/* Главный контейнер */}
            <div className="max-w-[1135px] w-full min-h-[2000px] bg-[#F6F6F6] rounded-[30px] px-12 py-16">
                {/* Заголовок */}
                <h1 className="text-[#22324A] text-6xl font-normal text-center mb-16">
                    Visa Services
                </h1>

                <div className="flex flex-col gap-10">
                    {visaBlocks.map((block, index) => (
                        <div
                            key={index}
                            className="relative rounded-[30px] w-[1000px] h-[393px] mx-auto p-6 flex flex-col"
                        >
                            <div className="absolute top-2 right-4 w-[70px] h-[70px] rounded-[20px] bg-[#F4EBE2] shadow-md flex items-center justify-center pointer-events-none text-center z-20">
                                <img src={index === 0 ? ppIcon : index === 1 ? ssIcon : index === 2 ? graphIcon : paperIcon} alt="Plane Icon" className="w-9 h-9 object-contain" />
                            </div>

                            <img
                                src={block.img}
                                alt={block.title}
                                className={`w-full h-[220px] rounded-[25px] object-cover 
                                ${index === 0
                                        ? "object-[center_9%]"
                                        : index === 1
                                            ? "object-[center_70%]"
                                            : "object-center"
                                    }`}
                            />

                            <div className="flex items-center justify-between flex-1 mt-5">
                                <div className="flex items-center gap-3">
                                    <h2 className="text-[#22324A] text-2xl font-bold">{block.title}</h2>
                                    <span className="bg-[#F4EBE2] text-[#22324A] text-[25px] font-bold px-3 py-1 rounded-md">
                                        {block.type}
                                    </span>
                                </div>

                                <Link
                                    to={block.link}
                                    className="bg-[#22324A] w-[250px] h-[50px] text-[#F4EBE2] text-[25px] font-semibold rounded-[10px] flex items-center justify-center hover:opacity-90 transition"
                                >
                                    <span className="-translate-y-0.5">Apply</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
