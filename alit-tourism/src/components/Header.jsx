import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useContext, useRef, useEffect } from "react";

const ailtLogo = "/ailt.png";
const phoneIcon = "/phone.png";
const emailIcon = "/email.png";

import { AuthContext } from "../utility/AuthContext";
import { useLanguage } from "../utility/LanguageContext";
import { User, Menu, X, ChevronDown, Globe } from "lucide-react";

const languages = [
  { code: "en", label: "EN", name: "English" },
  { code: "ru", label: "RU", name: "Русский" },
  { code: "zh", label: "中文", name: "中文" }
];

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileLangDropdownOpen, setMobileLangDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  const currentLang = languages.find(lang => lang.code === language) || languages[0];

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLangDropdownOpen(false);
      }
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target)) {
        setMobileLangDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile dropdown when menu closes
  useEffect(() => {
    if (!menuOpen) {
      setMobileLangDropdownOpen(false);
    }
  }, [menuOpen]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const linkClasses = (path) =>
    `relative transition-all duration-200 ${location.pathname === path
      ? "font-[500] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#22324A]"
      : "hover:text-blue-500"
    }`;

  return (
    <header className="relative w-full bg-[#F4EBE2] flex items-center z-50 shadow-sm h-[100px] sm:h-[80px] lg:h-[70px]">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-6">
        {/* Логотип */}
        <Link to="/" className="flex items-center">
          <img
            src={ailtLogo}
            alt="AILT Logo"
            className="w-[100px] h-[23px] object-contain"
          />
        </Link>

        {/* Навигация (десктоп) */}
        <nav className="hidden lg:flex items-center gap-8 text-[#22324A] text-[15px] font-gotham">
          <Link to="/visa" className={linkClasses("/visa")}>
            {t("header.visaServices")}
          </Link>
          <Link to="/kazakhstan" className={linkClasses("/kazakhstan")}>
            {t("header.kazakhstanTour")}
          </Link>
          <Link to="/travel/tips" className={linkClasses("/travel/tips")}>
            {t("header.travelTipsBlog")}
          </Link>
        </nav>

        {/* Правая часть */}
        <div className="flex items-center gap-4">
          {/* Контакты (только для десктопа) */}
          <div className="hidden lg:flex items-center gap-6 text-[#22324A] font-gotham">
            <div className="flex items-center gap-2">
              <img
                src={phoneIcon}
                alt="Phone"
                className="w-5 h-5 object-contain"
              />
              <span className="text-[16px]">+7 (707) 111-84-24</span>
            </div>

            <div className="flex items-center gap-2">
              <img
                src={emailIcon}
                alt="Email"
                className="w-5 h-5 object-contain"
              />
              <span className="text-[16px]">ailt.toursim@gmail.com</span>
            </div>
          </div>

          {/* Beautiful Language Selector (Desktop) */}
          <div className="hidden lg:block relative" ref={dropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-200 border border-[#22324A]/10 hover:border-[#22324A]/30 shadow-sm hover:shadow-md"
            >
              <span className="text-[#22324A] font-gotham font-[500] text-[15px]">
                {currentLang.label}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-[#22324A] transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Dropdown */}
            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-[#22324A]/10 overflow-hidden animate-fade-in z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 transition-all duration-200 ${language === lang.code
                      ? 'bg-[#22324A] text-white'
                      : 'hover:bg-[#F4EBE2] text-[#22324A]'
                      }`}
                  >
                    <div className="flex flex-col items-start">
                      <span className="font-gotham font-[500] text-[14px]">{lang.label}</span>
                      <span className="font-gotham text-[12px] opacity-70">{lang.name}</span>
                    </div>
                    {language === lang.code && (
                      <span className="ml-auto text-white">✓</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Бургер (мобилка) */}
          <button
            className="lg:hidden flex items-center justify-center text-[#22324A]"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Авторизация (desktop) */}
          <div className="hidden lg:flex items-center ml-4 relative">
            {!user ? (
              <button
                onClick={() => navigate("/auth")}
                className="bg-[#22324A] text-white px-4 py-2 rounded-lg hover:bg-[#334a6c] transition"
              >
                {t("header.login")}
              </button>
            ) : (
              <div className="group relative">
                <button className="bg-[#22324A] text-white p-2 rounded-full flex items-center justify-center">
                  <User size={20} />
                </button>
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition">
                  {user?.role === "admin" && (
                    <Link
                      to="/admin"
                      className="block px-4 py-2 hover:bg-gray-100 text-blue-600 font-medium"
                    >
                      Admin
                    </Link>
                  )}
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {t("header.profile")}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    {t("header.logout")}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#F4EBE2] border-t border-[#e2d5c8] flex flex-col items-center gap-4 py-6 text-[#22324A] font-gotham text-[16px] shadow-md animate-fade-in">
          <Link to="/visa" onClick={() => setMenuOpen(false)}>
            {t("header.visaServices")}
          </Link>
          <Link to="/kazakhstan" onClick={() => setMenuOpen(false)}>
            {t("header.kazakhstanTour")}
          </Link>
          <Link to="/travel/tips" onClick={() => setMenuOpen(false)}>
            {t("header.travelTipsBlog")}
          </Link>

          {/* Beautiful Language Selector (Mobile) */}
          <div className="flex flex-col items-center gap-2 mt-2 w-full px-6" ref={mobileDropdownRef}>
            <span className="font-gotham font-[500] text-[14px] text-[#22324A] mb-1">Language</span>
            <div className="relative w-full max-w-xs">
              <button
                onClick={() => setMobileLangDropdownOpen(!mobileLangDropdownOpen)}
                className="w-[90%] flex items-center justify-between gap-2 px-4 py-3 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-200 border border-[#22324A]/10 hover:border-[#22324A]/30 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#22324A] font-gotham font-[500] text-[15px]">
                    {currentLang.label}
                  </span>
                  <span className="text-[#22324A]/60 font-gotham text-[13px]">
                    ({currentLang.name})
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-[#22324A] transition-transform duration-200 ${mobileLangDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Mobile Dropdown */}
              {mobileLangDropdownOpen && (
                <div className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-[#22324A]/10 overflow-hidden animate-fade-in z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setMobileLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 transition-all duration-200 ${language === lang.code
                        ? 'bg-[#22324A] text-white'
                        : 'hover:bg-[#F4EBE2] text-[#22324A]'
                        }`}
                    >
                      <div className="flex flex-col items-start">
                        <span className="font-gotham font-[500] text-[14px]">{lang.label}</span>
                        <span className="font-gotham text-[12px] opacity-70">{lang.name}</span>
                      </div>
                      {language === lang.code && (
                        <span className="text-white">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col items-center gap-1 mt-2 text-[15px]">
            <span>+7 (707) 111-84-24</span>
            <span>ailt.toursim@gmail.com</span>
          </div>
          {user?.role === "admin" && (
            <Link
              to="/admin"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium"
            >
              Admin
            </Link>
          )}
          {user && (
            <Link
              to="/profile"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-[#22324A] text-white px-6 py-2 rounded-lg font-medium"
            >
              {t("header.profile")}
            </Link>
          )}
          {!user ? (
            <button
              onClick={() => {
                navigate("/auth");
                setMenuOpen(false);
              }}
              className="mt-4 bg-[#22324A] text-white px-6 py-2 rounded-lg"
            >
              {t("header.login")}
            </button>
          ) : (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg"
            >
              {t("header.logout")}
            </button>
          )}
        </div>
      )}
    </header>
  );
}
