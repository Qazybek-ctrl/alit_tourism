import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ailtLogo from "../assets/ailt.png";
import phoneIcon from "../assets/phone.png";
import emailIcon from "../assets/email.png";
import api from "../Api";
import { User } from "lucide-react";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api
        .get("/profile", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setUser(res.data))
        .catch(() => setUser(null));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  const linkClasses = (path) =>
    `relative transition-all duration-200 ${location.pathname === path
      ? "font-bold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#22324A]"
      : "hover:text-blue-500"
    }`;

  return (
    <header className="w-full h-[100px] bg-[#F4EBE2] flex items-center z-50">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-8">
        {/* Логотип */}
        <div>
          <Link to="/">
            <img
              src={ailtLogo}
              alt="AILT Logo"
              className="w-[100px] h-[23px] object-contain"
            />
          </Link>
        </div>

        {/* Навигация */}
        <nav className="flex gap-6 text-[15px] font-gotham [letter-spacing:0.5px] text-[#22324A]">
          <Link to="/visa" className={linkClasses("/visa")}>
            Visa Services
          </Link>
          <Link to="/kazakhstan" className={linkClasses("/kazakhstan")}>
            Kazakhstan Tour
          </Link>
          <Link to="/blog" className={linkClasses("/blog")}>
            Travel Tips Blog
          </Link>
          <Link to="/insurance" className={linkClasses("/insurance")}>
            Insurance
          </Link>
        </nav>

        {/* Контакты */}
        <div className="flex items-center gap-6 text-[#22324A] font-gotham">
          <div className="flex items-start gap-2">
            <img
              src={phoneIcon}
              alt="Phone"
              className="w-5 h-5 mt-1 object-contain"
            />
            <div className="flex flex-col text-[16px] leading-tight">
              <span>+7 (701) 123-45-67</span>
              <span>+7 (727) 765-43-21</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <img
              src={emailIcon}
              alt="Email"
              className="w-5 h-5 object-contain"
            />
            <span className="text-[16px]">info@myvisa.my</span>
          </div>
        </div>

        <div className="flex items-center gap-2 relative ml-4">
          <select className="appearance-none bg-transparent text-[#22324A] text-[15px] font-gotham [letter-spacing:0.5px] pr-6 cursor-pointer focus:outline-none focus:ring-0">
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <div className="ml-6 relative">
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
    </header>
  );
}
