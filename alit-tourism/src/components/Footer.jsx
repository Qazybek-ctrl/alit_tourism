import ailtLogo from "../assets/ailt.png";
import tiktokLogo from "../assets/tiktok.png";
import {Instagram, Facebook, Linkedin} from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-[#F6F6F6]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-8 py-10 text-[#0A142F] text-left">
                <div>
                    <img
                        src={ailtLogo}
                        alt="AILT Logo"
                        className="w-[100px] h-auto object-contain"
                    />
                </div>

                <div>
                    <h3 className="mb-4 font-semibold">Learn More</h3>
                    <ul className="flex flex-col gap-2 text-[13px]">
                        <li><a href="#" className="hover:underline opacity-70">About Lift</a></li>
                        <li><a href="#" className="hover:underline opacity-70">Press</a></li>
                        <li><a href="#" className="hover:underline opacity-70">Releases</a></li>
                        <li><a href="#" className="hover:underline opacity-70">Environment</a></li>
                        <li><a href="#" className="hover:underline opacity-70">Jobs</a></li>
                        <li><a href="#" className="hover:underline opacity-70">Privacy Policy</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-4 font-semibold">Tickets & Booking</h3>
                    <ul className="flex flex-col gap-2 text-[13px]">
                        <li><a href="/kazakhstan" className="hover:underline opacity-70">Tours</a></li>
                        <li><a href="/visa" className="hover:underline opacity-70">Visa</a></li>
                        <li><a href="#" className="hover:underline opacity-70">Vacation Packages</a></li>
                    </ul>
                </div>

                <div className="min-w-[230px]">
                    <h3 className="mb-4 font-semibold">Contact Us</h3>
                    <ul className="flex flex-col gap-2 text-[13px]">
                        <li className="flex gap-3">
                            <span className="opacity-70">Phone:</span>
                            <span className="font-[500]">+7 (707) 111-84-24</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="opacity-70">Email:</span>
                            <span className="font-[500]">ailt.tourism@gmail.com</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="opacity-70">Address:</span>
                            <span className="font-[500]">33 Uly Dala Avenue, Almaty, Kazakhstan</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-4 font-semibold">Social</h3>
                    <div className="flex gap-3 items-center">
                        <Instagram alt="Instagram" onClick={() => window.open("https://www.instagram.com/ailttourism?igsh=eDhibTM3eTA2cWVp/", "_blank")} className="w-5 h-5 cursor-pointer hover:opacity-70" />
                        <Facebook alt="Facebook" onClick={() => window.open("https://www.facebook.com/share/1BtHrAbUZ6/?mibextid=wwXIfr/", "_blank")} className="w-5 h-5 cursor-pointer hover:opacity-70" />
                        <Linkedin alt="LinkedIn" onClick={() => window.open("https://www.linkedin.com/company/ailt-tourism/", "_blank")} className="w-5 h-5 cursor-pointer hover:opacity-70" />
                        <img src={tiktokLogo} alt="Tiktok" onClick={() => window.open("https://www.tiktok.com/@ailt_tourism?_r=1&_t=ZM-91gu0a6uhYm/", "_blank")} className="w-6 h-6 cursor-pointer hover:opacity-70" />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-8">
                <div className="border-t border-[#979797]/20"></div>
                <p className="text-[#0A142F] text-center py-4 text-[13px] opacity-65">
                    © 2025 AINT | All Rights Reserved
                </p>
            </div>
        </footer>
    );
}
