import { useState } from "react";
import { User, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function AuthPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
    firstname: "",
    surname: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        const res = await api.post("/login", {
          phone_number: formData.phoneNumber,
          password: formData.password,
        });
        localStorage.setItem("token", res.data.token);
        toast.success("Успешный вход!");
        window.location.href = "/profile";
      } else {
        await api.post("/register", {
          phone_number: formData.phoneNumber,
          password: formData.password,
          firstname: formData.firstname,
          surname: formData.surname,
        });
        toast.success("Регистрация прошла успешно!");
        setIsLogin(true);
        window.location.href = "/profile";
      }
    } catch (err) {
      toast.error(err.response?.data?.error || "Ошибка запроса");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md font-gotham font-[300]">
        <div className="flex mb-6">
          <button
            className={`flex-1 py-2 rounded-l-2xl ${isLogin ? "bg-[#f4ebe2] text-[#22324A]" : "bg-white border-2 border-[#f4ebe2] hover:bg-[#f4ebe2]/30 transition"
              }`}
            onClick={() => setIsLogin(true)}
          >
            Authorization
          </button>
          <button
            className={`flex-1 py-2 rounded-r-2xl  ${!isLogin ? "bg-[#f4ebe2] text-[#22324A] " : "bg-white border-2 border-[#f4ebe2] hover:bg-[#f4ebe2]/30 transition"
              }`}
            onClick={() => setIsLogin(false)}
          >
            Registration
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="flex items-center border rounded-xl px-3">
                <User className="text-gray-500" size={18} />
                <input
                  type="text"
                  name="firstname"
                  placeholder="Ваше имя"
                  className="flex-1 p-2 outline-none"
                  value={formData.firstname}
                  onChange={handleChange}
                />
              </div>

              <div className="flex items-center border rounded-xl px-3">
                <User className="text-gray-500" size={18} />
                <input
                  type="text"
                  name="surname"
                  placeholder="Ваша фамилия"
                  className="flex-1 p-2 outline-none"
                  value={formData.surname}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          {/* ✅ Телефон с react-phone-input-2 */}
          <div>
            <PhoneInput
              country={"kz"} // по умолчанию Казахстан 🇰🇿
              value={formData.phoneNumber}
              onChange={(value) =>
                setFormData({ ...formData, phoneNumber: value })
              }
              inputClass="!w-full !h-11 !pl-12 !rounded-xl !border !outline-none"
              buttonClass="!rounded-l-xl"
              disableCountryGuess={true}
            />
          </div>

          <div className="flex items-center border rounded-xl px-3">
            <Lock className="text-gray-500" size={18} />
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              className="flex-1 p-2 outline-none"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#f4ebe2] text-black py-2 rounded-xl hover:bg-[#f4ebe2]/70 transition"
          >
            {isLogin ? "Войти" : "Зарегистрироваться"}
          </button>
        </form>
      </div>
    </div>
  );
}
