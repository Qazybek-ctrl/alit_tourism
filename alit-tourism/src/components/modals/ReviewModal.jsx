import React from "react";
import { User } from "lucide-react"
import { useLanguage } from "../../utility/LanguageContext";

const ReviewsModal = ({ onClose }) => {
    const { t } = useLanguage();

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-white w-full max-w-3xl rounded-xl shadow-lg relative p-6">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold text-3xl"
                >
                    &times;
                </button>

                {/* Header */}
                <h2 className="text-center text-xl md:text-4xl font-bold mb-6 text-gotham text-[#22324A]">{t("modals.reviews.title")}</h2>

                {/* Company info */}
                <a
                    href="https://www.google.com/maps/place/AILT+Tourism/@51.099686,71.4016871,17z/data=!4m8!3m7!1s0x424585c7d25a93ad:0x9e1493aee8397db3!8m2!3d51.099686!4d71.4016871!9m1!1b1!16s%2Fg%2F11vsd0hfqt?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:bg-gray-50 rounded-lg p-2 transition"
                >
                    <div className="flex flex-col mb-4 md:mb-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-left">AILT Tourism</h3>
                            <p className="text-sm text-gray-600 mt-1 text-left">
                                Uly Dala Avenue 33, Астана 020000, Казахстан
                            </p>
                        </div>

                        {/* Rating под названием */}
                        <div className="flex items-center mt-2 space-x-2">
                            <span className="text-xl font-bold">4,8</span>
                            <div className="flex">
                                {[...Array(5)].map((_, i) => {
                                    if (i < 4) {
                                        return (
                                            <svg
                                                key={i}
                                                className="w-5 h-5 text-yellow-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.285-3.955a1 1 0 00-.364-1.118L2.037 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
                                            </svg>
                                        );
                                    } else if (i === 4) {
                                        return (
                                            <svg
                                                key={i}
                                                className="w-5 h-5 text-yellow-400"
                                                viewBox="0 0 20 20"
                                            >
                                                <defs>
                                                    <linearGradient id="halfGrad">
                                                        <stop offset="80%" stopColor="currentColor" />
                                                        <stop offset="80%" stopColor="transparent" />
                                                    </linearGradient>
                                                </defs>
                                                <path
                                                    fill="url(#halfGrad)"
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.285-3.955a1 1 0 00-.364-1.118L2.037 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z"
                                                />
                                            </svg>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </a>


                {/* Reviews would go here (you can reuse previous Google-style review layout) */}
                {/* Example: */}
                <div className="space-y-4">
                    <div className="flex space-x-4 text-left">
                        <div
                            className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0 flex items-center justify-center">
                            <User className="w-6 h-6 text-gray-500" />
                        </div>
                        <div>
                            <p className="font-semibold">Yasitha Bogamuwa</p>
                            <p className="text-xs text-gray-500 mt-0.5">3 отзыва • неделю назад</p>
                            <p className="mt-1 text-gray-700 text-sm leading-relaxed">
                                As a Sri Lankan, I needed an invitation letter from a Kazakh national to apply for a
                                Kazakhstan visa.
                            </p>
                        </div>
                    </div>

                    <div className="flex space-x-4 text-left">
                        <div
                            className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0 flex items-center justify-center">
                            <User className="w-6 h-6 text-gray-500" />
                        </div>
                        <div>
                            <p className="font-semibold">Abdul Basith Azeez</p>
                            <p className="text-xs text-gray-500 mt-0.5">7 отзывов • 3 месяца назад</p>
                            <p className="mt-1 text-gray-700 text-sm leading-relaxed">
                                Ilyas was extremely professional and patient in answering all our concerns with regards
                                to obtaining the LOI and Evisa.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsModal;
