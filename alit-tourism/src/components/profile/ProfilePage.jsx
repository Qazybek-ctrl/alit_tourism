import { useEffect, useState } from "react";
import api from "../../Api";
import { useNavigate } from "react-router-dom";
import { User, FileText, Plane, ChevronDown, ChevronUp, CheckCircle, Clock, XCircle } from "lucide-react";
import { Tours } from "../helper/ImageHelper";

// Статусы для туров
const TOUR_STATUS = {
  0: { name: "Новый", color: "bg-yellow-100 text-yellow-700 border-yellow-200", icon: Clock },
  1: { name: "Оплачен", color: "bg-green-100 text-green-700 border-green-200", icon: CheckCircle },
  2: { name: "Отменён", color: "bg-red-100 text-red-700 border-red-200", icon: XCircle },
};

// Статусы для виз
const VISA_STATUS = {
  0: { name: "Новый", color: "bg-yellow-100 text-yellow-700 border-yellow-200", icon: Clock },
  1: { name: "На проверке", color: "bg-blue-100 text-blue-700 border-blue-200", icon: Clock },
  2: { name: "Оплачено", color: "bg-green-100 text-green-700 border-green-200", icon: CheckCircle },
  3: { name: "Одобрено", color: "bg-emerald-100 text-emerald-700 border-emerald-200", icon: CheckCircle },
  4: { name: "Отказано", color: "bg-red-100 text-red-700 border-red-200", icon: XCircle },
};

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [guestForms, setGuestForms] = useState([]);
  const [visaForms, setVisaForms] = useState([]);
  const [activeTab, setActiveTab] = useState("profile");
  const [expandedForm, setExpandedForm] = useState(null);
  const [guestFormsFetched, setGuestFormsFetched] = useState(false);
  const [visaFormsFetched, setVisaFormsFetched] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/auth");
      return;
    }

    // Fetch profile
    api
      .get("/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setProfile(res.data))
      .catch(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      });

    // Fetch counts for tabs immediately
    fetchGuestFormsCount();
    fetchVisaFormsCount();
  }, [navigate]);

  const fetchGuestFormsCount = () => {
    const token = localStorage.getItem("token");
    api
      .get("/forms/guest", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const forms = res.data || [];
        setGuestForms(forms);
        setGuestFormsFetched(true);
      })
      .catch((err) => console.error("Error fetching guest forms:", err));
  };

  const fetchVisaFormsCount = () => {
    const token = localStorage.getItem("token");
    api
      .get("/forms/visa", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const forms = res.data || [];
        setVisaForms(forms);
        setVisaFormsFetched(true);
      })
      .catch((err) => console.error("Error fetching visa forms:", err));
  };


  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const toggleForm = (id) => {
    setExpandedForm(expandedForm === id ? null : id);
  };

  if (!profile) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 font-gotham">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-[#f4ebe2] rounded-full flex items-center justify-center">
              <User size={32} className="text-[#22324A]" />
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-[#22324A]">
                {profile.firstname} {profile.surname}
              </h1>
              <p className="text-gray-600">{profile.phone_number}</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <div className="flex border-b">
            <button
              className={`flex-1 py-4 px-6 flex items-center justify-center gap-2 transition ${activeTab === "profile"
                ? "bg-[#f4ebe2] text-[#22324A] font-medium"
                : "text-gray-600 hover:bg-gray-50"
                }`}
              onClick={() => handleTabChange("profile")}
            >
              <User size={20} />
              Profile Information
            </button>
            <button
              className={`flex-1 py-4 px-6 flex items-center justify-center gap-2 transition ${activeTab === "tours"
                ? "bg-[#f4ebe2] text-[#22324A] font-medium"
                : "text-gray-600 hover:bg-gray-50"
                }`}
              onClick={() => handleTabChange("tours")}
            >
              <Plane size={20} />
              Tour Bookings ({guestForms.length})
            </button>
            <button
              className={`flex-1 py-4 px-6 flex items-center justify-center gap-2 transition ${activeTab === "visa"
                ? "bg-[#f4ebe2] text-[#22324A] font-medium"
                : "text-gray-600 hover:bg-gray-50"
                }`}
              onClick={() => handleTabChange("visa")}
            >
              <FileText size={20} />
              Visa Applications ({visaForms.length})
            </button>
          </div>

          <div className="p-8">
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#22324A] mb-6">
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-sm text-gray-500 mb-1">First Name</p>
                    <p className="text-lg font-medium text-[#22324A]">
                      {profile.firstname}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-sm text-gray-500 mb-1">Last Name</p>
                    <p className="text-lg font-medium text-[#22324A]">
                      {profile.surname}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-sm text-gray-500 mb-1">Phone Number</p>
                    <p className="text-lg font-medium text-[#22324A]">
                      {profile.phone_number}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tour Bookings Tab */}
            {activeTab === "tours" && (
              <div>
                <h2 className="text-2xl font-semibold text-[#22324A] mb-6">
                  Your Tour Bookings
                </h2>
                {guestForms.length === 0 ? (
                  <div className="text-center py-12">
                    <Plane size={48} className="mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-500">No tour bookings yet</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {guestForms.map((form) => (
                      <div
                        key={form.ID}
                        className="border border-gray-200 rounded-xl overflow-hidden"
                      >
                        <div
                          className="bg-gray-50 p-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition"
                          onClick={() => toggleForm(form.ID)}
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold text-[#22324A]">
                                {Tours.find((tour) => tour.id === form.tour_id)?.title || form.tour_type || `Tour #${form.tour_id}`}
                              </h3>
                              {TOUR_STATUS[form.status] && (
                                <span className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${TOUR_STATUS[form.status].color}`}>
                                  {(() => {
                                    const StatusIcon = TOUR_STATUS[form.status].icon;
                                    return <StatusIcon size={14} />;
                                  })()}
                                  {TOUR_STATUS[form.status].name}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600">
                              {new Date(form.CreatedAt).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </p>
                          </div>
                          {expandedForm === form.ID ? (
                            <ChevronUp className="text-gray-600" />
                          ) : (
                            <ChevronDown className="text-gray-600" />
                          )}
                        </div>
                        {expandedForm === form.ID && (
                          <div className="p-6 bg-white grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-gray-500">Full Name</p>
                              <p className="font-medium text-[#22324A]">
                                {form.full_name}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Country</p>
                              <p className="font-medium text-[#22324A]">
                                {form.country_of_residence}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Language</p>
                              <p className="font-medium text-[#22324A]">
                                {form.language}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">
                                People Count
                              </p>
                              <p className="font-medium text-[#22324A]">
                                {form.people_count}
                              </p>
                            </div>
                            {form.visit_plan && (
                              <div className="md:col-span-2">
                                <p className="text-sm text-gray-500">
                                  Visit Plan
                                </p>
                                <p className="font-medium text-[#22324A]">
                                  {form.visit_plan}
                                </p>
                              </div>
                            )}
                            {form.trip_interests && (
                              <div className="md:col-span-2">
                                <p className="text-sm text-gray-500">
                                  Trip Interests
                                </p>
                                <p className="font-medium text-[#22324A]">
                                  {form.trip_interests}
                                </p>
                              </div>
                            )}
                            {form.dietary_preferences && (
                              <div className="md:col-span-2">
                                <p className="text-sm text-gray-500">
                                  Dietary Preferences
                                </p>
                                <p className="font-medium text-[#22324A]">
                                  {form.dietary_preferences}
                                </p>
                              </div>
                            )}
                            {form.request && (
                              <div className="md:col-span-2">
                                <p className="text-sm text-gray-500">
                                  Special Requests
                                </p>
                                <p className="font-medium text-[#22324A]">
                                  {form.request}
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Visa Applications Tab */}
            {activeTab === "visa" && (
              <div>
                <h2 className="text-2xl font-semibold text-[#22324A] mb-6">
                  Your Visa Applications
                </h2>
                {visaForms.length === 0 ? (
                  <div className="text-center py-12">
                    <FileText
                      size={48}
                      className="mx-auto text-gray-300 mb-4"
                    />
                    <p className="text-gray-500">No visa applications yet</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {visaForms.map((form) => (
                      <div
                        key={form.ID}
                        className="border border-gray-200 rounded-xl overflow-hidden"
                      >
                        <div
                          className="bg-gray-50 p-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition"
                          onClick={() => toggleForm(`visa-${form.ID}`)}
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold text-[#22324A]">
                                {form.visa_invitation_type || "Visa Application"}
                              </h3>
                              {VISA_STATUS[form.status] && (
                                <span className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${VISA_STATUS[form.status].color}`}>
                                  {(() => {
                                    const StatusIcon = VISA_STATUS[form.status].icon;
                                    return <StatusIcon size={14} />;
                                  })()}
                                  {VISA_STATUS[form.status].name}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600">
                              {form.first_name} {form.last_name} -{" "}
                              {new Date(form.CreatedAt).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </p>
                          </div>
                          {expandedForm === `visa-${form.ID}` ? (
                            <ChevronUp className="text-gray-600" />
                          ) : (
                            <ChevronDown className="text-gray-600" />
                          )}
                        </div>
                        {expandedForm === `visa-${form.ID}` && (
                          <div className="p-6 bg-white grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-gray-500">
                                First Name
                              </p>
                              <p className="font-medium text-[#22324A]">
                                {form.first_name}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Last Name</p>
                              <p className="font-medium text-[#22324A]">
                                {form.last_name}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">
                                Citizenship
                              </p>
                              <p className="font-medium text-[#22324A]">
                                {form.citizenship}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">
                                Passport Number
                              </p>
                              <p className="font-medium text-[#22324A]">
                                {form.passport_number}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Visa Type</p>
                              <p className="font-medium text-[#22324A]">
                                {form.visa_type}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">
                                Phone Number
                              </p>
                              <p className="font-medium text-[#22324A]">
                                {form.phone_number}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Email</p>
                              <p className="font-medium text-[#22324A]">
                                {form.email_address}
                              </p>
                            </div>
                            {form.visa_period_start && (
                              <div>
                                <p className="text-sm text-gray-500">
                                  Visa Period
                                </p>
                                <p className="font-medium text-[#22324A]">
                                  {new Date(
                                    form.visa_period_start
                                  ).toLocaleDateString()}{" "}
                                  -{" "}
                                  {new Date(
                                    form.visa_period_end
                                  ).toLocaleDateString()}
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
