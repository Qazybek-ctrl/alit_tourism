import { useState, useContext } from "react";
import { User, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../Api";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { AuthContext } from "../utility/AuthContext";

export default function AuthPage() {
  const navigate = useNavigate();

  const { user, setUser } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    try {
      let res;

      if (isLogin) {
        res = await api.post("/login", {
          phone_number: formData.phoneNumber,
          password: formData.password,
        });

        toast.success("Успешный вход!");
      } else {
        res = await api.post("/register", {
          phone_number: formData.phoneNumber,
          password: formData.password,
          firstname: formData.firstname,
          surname: formData.surname,
        });

        toast.success("Регистрация прошла успешно!");
      }

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);

      // Check if there's a redirect URL saved before auth
      const redirectUrl = localStorage.getItem("redirectAfterAuth");
      if (redirectUrl) {
        localStorage.removeItem("redirectAfterAuth");
        navigate(redirectUrl);
      } else {
        navigate("/profile");
      }

    } catch (err) {
      // ошибки обрабатывает интерцептор
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-[70vh] md:min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md font-gotham font-[300]">

        {/* TAB SWITCH */}
        <div className="flex mb-6">
          <button
            className={`flex-1 py-2 rounded-l-2xl ${isLogin
              ? "bg-[#f4ebe2] text-[#22324A]"
              : "bg-white border-2 border-[#f4ebe2] hover:bg-[#f4ebe2]/30 transition"
              }`}
            onClick={() => setIsLogin(true)}
          >
            Authorization
          </button>

          <button
            className={`flex-1 py-2 rounded-r-2xl ${!isLogin
              ? "bg-[#f4ebe2] text-[#22324A]"
              : "bg-white border-2 border-[#f4ebe2] hover:bg-[#f4ebe2]/30 transition"
              }`}
            onClick={() => setIsLogin(false)}
          >
            Registration
          </button>
        </div>

        {/* FORM */}
        <form className="space-y-4" onSubmit={handleSubmit}>

          {/* FIRSTNAME & SURNAME */}
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

          {/* PHONE INPUT */}
          <div>
            <PhoneInput
              country={"kz"}
              value={formData.phoneNumber}
              onChange={(value) =>
                setFormData({ ...formData, phoneNumber: value })
              }
              inputClass="!w-full !h-11 !pl-12 !rounded-xl !border !outline-none"
              buttonClass="!rounded-l-xl"
              disableCountryGuess
            />
          </div>

          {/* PASSWORD */}
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

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#f4ebe2] text-black py-2 rounded-xl hover:bg-[#f4ebe2]/70 transition disabled:opacity-50"
          >
            {loading
              ? "Подождите..."
              : isLogin
                ? "Войти"
                : "Зарегистрироваться"}
          </button>
        </form>
      </div>
    </div>
  );
}
