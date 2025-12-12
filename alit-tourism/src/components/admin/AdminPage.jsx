import { useEffect, useState } from "react";
import api from "../../Api";
import { useNavigate } from "react-router-dom";
import {
    Users,
    FileText,
    Plane,
    BarChart3,
    ChevronDown,
    ChevronUp,
    Shield,
} from "lucide-react";
import { Tours } from "../helper/ImageHelper";

export default function AdminPage() {
    const [stats, setStats] = useState(null);
    const [users, setUsers] = useState([]);
    const [guestForms, setGuestForms] = useState([]);
    const [visaForms, setVisaForms] = useState([]);
    const [activeTab, setActiveTab] = useState("dashboard");
    const [expandedItem, setExpandedItem] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/auth");
            return;
        }

        // Load dashboard stats on mount
        fetchStats();
    }, [navigate]);

    const fetchStats = () => {
        setLoading(true);
        api
            .get("/admin/dashboard/stats", {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            })
            .then((res) => setStats(res.data))
            .catch((err) => {
                console.error("Error fetching stats:", err);
                if (err.response?.status === 403) {
                    navigate("/");
                }
            })
            .finally(() => setLoading(false));
    };

    const fetchUsers = () => {
        setLoading(true);
        api
            .get("/admin/users", {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            })
            .then((res) => setUsers(res.data || []))
            .catch((err) => console.error("Error fetching users:", err))
            .finally(() => setLoading(false));
    };

    const fetchGuestForms = () => {
        setLoading(true);
        api
            .get("/admin/forms/guest", {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            })
            .then((res) => setGuestForms(res.data || []))
            .catch((err) => console.error("Error fetching guest forms:", err))
            .finally(() => setLoading(false));
    };

    const fetchVisaForms = () => {
        setLoading(true);
        api
            .get("/admin/forms/visa", {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            })
            .then((res) => setVisaForms(res.data || []))
            .catch((err) => console.error("Error fetching visa forms:", err))
            .finally(() => setLoading(false));
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        if (tab === "users") {
            fetchUsers();
        } else if (tab === "tours") {
            fetchGuestForms();
        } else if (tab === "visa") {
            fetchVisaForms();
        }
    };

    const toggleRole = (userId, currentRole) => {
        const newRole = currentRole === "admin" ? "user" : "admin";
        api
            .put(
                `/admin/users/${userId}/role`,
                { role: newRole },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            )
            .then(() => {
                fetchUsers();
            })
            .catch((err) => console.error("Error updating role:", err));
    };

    const toggleExpand = (id) => {
        setExpandedItem(expandedItem === id ? null : id);
    };

    if (!stats && loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#22324A]"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 font-gotham">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="bg-white shadow-lg rounded-2xl p-8 mb-6">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-[#f4ebe2] rounded-full flex items-center justify-center">
                            <Shield size={32} className="text-[#22324A]" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-semibold text-[#22324A]">
                                Admin Panel
                            </h1>
                            <p className="text-gray-600">Manage users and view all forms</p>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
                    <div className="flex border-b overflow-x-auto">
                        <button
                            className={`flex-1 py-4 px-6 flex items-center justify-center gap-2 transition whitespace-nowrap ${activeTab === "dashboard"
                                    ? "bg-[#f4ebe2] text-[#22324A] font-medium"
                                    : "text-gray-600 hover:bg-gray-50"
                                }`}
                            onClick={() => handleTabChange("dashboard")}
                        >
                            <BarChart3 size={20} />
                            Dashboard
                        </button>
                        <button
                            className={`flex-1 py-4 px-6 flex items-center justify-center gap-2 transition whitespace-nowrap ${activeTab === "users"
                                    ? "bg-[#f4ebe2] text-[#22324A] font-medium"
                                    : "text-gray-600 hover:bg-gray-50"
                                }`}
                            onClick={() => handleTabChange("users")}
                        >
                            <Users size={20} />
                            Users ({users.length})
                        </button>
                        <button
                            className={`flex-1 py-4 px-6 flex items-center justify-center gap-2 transition whitespace-nowrap ${activeTab === "tours"
                                    ? "bg-[#f4ebe2] text-[#22324A] font-medium"
                                    : "text-gray-600 hover:bg-gray-50"
                                }`}
                            onClick={() => handleTabChange("tours")}
                        >
                            <Plane size={20} />
                            Tour Forms ({guestForms.length})
                        </button>
                        <button
                            className={`flex-1 py-4 px-6 flex items-center justify-center gap-2 transition whitespace-nowrap ${activeTab === "visa"
                                    ? "bg-[#f4ebe2] text-[#22324A] font-medium"
                                    : "text-gray-600 hover:bg-gray-50"
                                }`}
                            onClick={() => handleTabChange("visa")}
                        >
                            <FileText size={20} />
                            Visa Forms ({visaForms.length})
                        </button>
                    </div>

                    <div className="p-8">
                        {/* Dashboard Tab */}
                        {activeTab === "dashboard" && stats && (
                            <div>
                                <h2 className="text-2xl font-semibold text-[#22324A] mb-6">
                                    Statistics Overview
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm text-blue-600 mb-1">
                                                    Total Users
                                                </p>
                                                <p className="text-3xl font-bold text-blue-900">
                                                    {stats.total_users}
                                                </p>
                                            </div>
                                            <Users size={40} className="text-blue-600 opacity-50" />
                                        </div>
                                    </div>
                                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm text-green-600 mb-1">
                                                    Tour Bookings
                                                </p>
                                                <p className="text-3xl font-bold text-green-900">
                                                    {stats.total_tour_forms}
                                                </p>
                                            </div>
                                            <Plane size={40} className="text-green-600 opacity-50" />
                                        </div>
                                    </div>
                                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm text-purple-600 mb-1">
                                                    Visa Applications
                                                </p>
                                                <p className="text-3xl font-bold text-purple-900">
                                                    {stats.total_visa_forms}
                                                </p>
                                            </div>
                                            <FileText
                                                size={40}
                                                className="text-purple-600 opacity-50"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Users Tab */}
                        {activeTab === "users" && (
                            <div>
                                <h2 className="text-2xl font-semibold text-[#22324A] mb-6">
                                    User Management
                                </h2>
                                {loading ? (
                                    <div className="text-center py-12">
                                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#22324A] mx-auto mb-4"></div>
                                        <p className="text-gray-500">Loading users...</p>
                                    </div>
                                ) : users.length === 0 ? (
                                    <div className="text-center py-12">
                                        <Users size={48} className="mx-auto text-gray-300 mb-4" />
                                        <p className="text-gray-500">No users found</p>
                                    </div>
                                ) : (
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="border-b-2 border-gray-200">
                                                    <th className="text-left py-4 px-4 text-[#22324A] font-semibold">
                                                        ID
                                                    </th>
                                                    <th className="text-left py-4 px-4 text-[#22324A] font-semibold">
                                                        Name
                                                    </th>
                                                    <th className="text-left py-4 px-4 text-[#22324A] font-semibold">
                                                        Phone
                                                    </th>
                                                    <th className="text-left py-4 px-4 text-[#22324A] font-semibold">
                                                        Role
                                                    </th>
                                                    <th className="text-left py-4 px-4 text-[#22324A] font-semibold">
                                                        Registered
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {users.map((user) => (
                                                    <tr
                                                        key={user.ID}
                                                        className="border-b border-gray-100 hover:bg-gray-50"
                                                    >
                                                        <td className="py-4 px-4 text-gray-700">
                                                            {user.ID}
                                                        </td>
                                                        <td className="py-4 px-4 text-gray-900">
                                                            {user.firstname} {user.surname}
                                                        </td>
                                                        <td className="py-4 px-4 text-gray-700">
                                                            {user.phone_number}
                                                        </td>
                                                        <td className="py-4 px-4">
                                                            <button
                                                                onClick={() => toggleRole(user.ID, user.role)}
                                                                className={`px-3 py-1 rounded-full text-sm font-medium ${user.role === "admin"
                                                                        ? "bg-red-100 text-red-700 hover:bg-red-200"
                                                                        : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                                                                    }`}
                                                            >
                                                                {user.role || "user"}
                                                            </button>
                                                        </td>
                                                        <td className="py-4 px-4 text-gray-600 text-sm">
                                                            {new Date(user.CreatedAt).toLocaleDateString()}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Tour Forms Tab */}
                        {activeTab === "tours" && (
                            <div>
                                <h2 className="text-2xl font-semibold text-[#22324A] mb-6">
                                    All Tour Bookings
                                </h2>
                                {loading ? (
                                    <div className="text-center py-12">
                                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#22324A] mx-auto mb-4"></div>
                                        <p className="text-gray-500">Loading forms...</p>
                                    </div>
                                ) : guestForms.length === 0 ? (
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
                                                    onClick={() => toggleExpand(`tour-${form.ID}`)}
                                                >
                                                    <div className="flex-1">
                                                        <h3 className="font-semibold text-[#22324A]">
                                                            {Tours.find((tour) => tour.id === form.tour_id)
                                                                ?.title ||
                                                                form.tour_type ||
                                                                `Tour #${form.tour_id}`}
                                                        </h3>
                                                        <p className="text-sm text-gray-600">
                                                            {form.User?.firstname} {form.User?.surname} (
                                                            {form.User?.phone_number}) -{" "}
                                                            {new Date(form.CreatedAt).toLocaleDateString()}
                                                        </p>
                                                    </div>
                                                    {expandedItem === `tour-${form.ID}` ? (
                                                        <ChevronUp className="text-gray-600" />
                                                    ) : (
                                                        <ChevronDown className="text-gray-600" />
                                                    )}
                                                </div>
                                                {expandedItem === `tour-${form.ID}` && (
                                                    <div className="p-6 bg-white grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div>
                                                            <p className="text-sm text-gray-500">
                                                                Full Name
                                                            </p>
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
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Visa Forms Tab */}
                        {activeTab === "visa" && (
                            <div>
                                <h2 className="text-2xl font-semibold text-[#22324A] mb-6">
                                    All Visa Applications
                                </h2>
                                {loading ? (
                                    <div className="text-center py-12">
                                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#22324A] mx-auto mb-4"></div>
                                        <p className="text-gray-500">Loading forms...</p>
                                    </div>
                                ) : visaForms.length === 0 ? (
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
                                                    onClick={() => toggleExpand(`visa-${form.ID}`)}
                                                >
                                                    <div className="flex-1">
                                                        <h3 className="font-semibold text-[#22324A]">
                                                            {form.visa_invitation_type || "Visa Application"}
                                                        </h3>
                                                        <p className="text-sm text-gray-600">
                                                            {form.first_name} {form.last_name} - User:{" "}
                                                            {form.User?.firstname} {form.User?.surname} (
                                                            {form.User?.phone_number}) -{" "}
                                                            {new Date(form.CreatedAt).toLocaleDateString()}
                                                        </p>
                                                    </div>
                                                    {expandedItem === `visa-${form.ID}` ? (
                                                        <ChevronUp className="text-gray-600" />
                                                    ) : (
                                                        <ChevronDown className="text-gray-600" />
                                                    )}
                                                </div>
                                                {expandedItem === `visa-${form.ID}` && (
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
                                                            <p className="text-sm text-gray-500">
                                                                Last Name
                                                            </p>
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
                                                            <p className="text-sm text-gray-500">
                                                                Visa Type
                                                            </p>
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
