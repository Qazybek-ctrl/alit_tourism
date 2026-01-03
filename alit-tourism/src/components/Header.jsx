import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

const ailtLogo = "/ailt.png";
const phoneIcon = "/phone.png";
const emailIcon = "/email.png";

import { AuthContext } from "../utility/AuthContext";
import { User, Menu, X } from "lucide-react";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

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
            Visa Services
          </Link>
          <Link to="/kazakhstan" className={linkClasses("/kazakhstan")}>
            Kazakhstan Tour
          </Link>
          <Link to="/travel/tips" className={linkClasses("/travel/tips")}>
            Travel Tips Blog
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

          {/* Локализация */}
          {/* <div className="flex items-center gap-2 relative">
            <select className="appearance-none bg-transparent text-[#22324A] text-[19px] lg:text-[15px] text-gotham font-[500] [letter-spacing:0.5px] pr-6 cursor-pointer focus:outline-none focus:ring-0">
              <option value="en">EN</option>
              <option value="ru">RU</option>
              <option value="kz">KZ</option>
            </select>
            <svg
              className="w-4 h-4 text-[#22324A] absolute right-0 pointer-events-none"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div> */}

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
                Login
              </button>
            ) : (
              <div className="group relative">
                <button className="bg-[#22324A] text-white p-2 rounded-full flex items-center justify-center">
                  <User size={20} />
                </button>
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  {user?.role === "admin" && (
                    <Link
                      to="/admin"
                      className="block px-4 py-2 hover:bg-gray-100 text-blue-600 font-medium"
                    >
                      Admin Panel
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Мобильное меню (как у тебя было) */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#F4EBE2] border-t border-[#e2d5c8] flex flex-col items-center gap-4 py-6 text-[#22324A] font-gotham text-[16px] shadow-md animate-fade-in">
          <Link to="/visa" onClick={() => setMenuOpen(false)}>
            Visa Services
          </Link>
          <Link to="/kazakhstan" onClick={() => setMenuOpen(false)}>
            Kazakhstan Tour
          </Link>
          <Link to="/travel/tips" onClick={() => setMenuOpen(false)}>
            Travel Tips Blog
          </Link>
          <div className="flex flex-col items-center gap-1 mt-2 text-[15px]">
            <span>+7 (707) 111-84-24</span>
            <span>ailt.toursim@gmail.com</span>
          </div>
          {user && (
            <Link
              to="/profile"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-[#22324A] text-white px-6 py-2 rounded-lg font-medium"
            >
              Profile
            </Link>
          )}
          {user?.role === "admin" && (
            <Link
              to="/admin"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium"
            >
              Admin Panel
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
              Login
            </button>
          ) : (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
}
