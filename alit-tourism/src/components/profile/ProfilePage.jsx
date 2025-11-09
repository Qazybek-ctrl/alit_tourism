import { useEffect, useState } from "react";
import api from "../../Api";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/auth");
      return;
    }

    api
      .get("/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setProfile(res.data))
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/auth");
      });
  }, [navigate]);

  if (!profile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Загрузка...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-[70vh] md:min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-6">Ваш профиль</h2>
        <div className="space-y-4 text-left">
          <p>
            <span className="font-semibold">Имя:</span> {profile.firstname}
          </p>
          <p>
            <span className="font-semibold">Фамилия:</span> {profile.surname}
          </p>
          <p>
            <span className="font-semibold">Телефон:</span>{" "}
            {profile.phone_number}
          </p>
        </div>
      </div>
    </div>
  );
}
