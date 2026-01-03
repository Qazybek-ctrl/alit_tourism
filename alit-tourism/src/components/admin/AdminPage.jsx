import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users, FileText, Plane, BarChart3, Home } from "lucide-react";
import api from "../../Api";

export default function AdminPage() {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/auth");
            return;
        }
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

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <button
                        onClick={() => navigate("/")}
                        className="mb-4 text-[#22324A] hover:text-[#2f3e5c] flex items-center gap-2 transition"
                    >
                        <Home size={20} />
                        На главную
                    </button>
                    <h1 className="text-3xl font-bold text-[#22324A]">Admin Dashboard</h1>
                    <p className="text-gray-600 mt-2">Manage your tourism platform</p>
                </div>

                {/* Stats Cards */}
                {loading ? (
                    <div className="text-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#22324A] mx-auto mb-4"></div>
                        <p className="text-gray-500">Loading dashboard...</p>
                    </div>
                ) : (
                    <>
                        {/* Quick Actions */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Users Management */}
                            <div
                                onClick={() => navigate("/admin/users")}
                                className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-lg transition cursor-pointer group"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-blue-100 p-4 rounded-xl group-hover:bg-blue-200 transition">
                                        <Users className="text-blue-600" size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#22324A]">Users</h3>
                                        <p className="text-gray-600">Manage users</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-sm text-gray-600">Total: {stats?.total_users || 0}</p>
                                    </div>
                                    <button className="px-6 py-2 bg-[#22324A] text-white rounded-lg hover:bg-[#2f3e5c] transition">
                                        View All →
                                    </button>
                                </div>
                            </div>

                            {/* Tour Applications */}
                            <div
                                onClick={() => navigate("/admin/tours")}
                                className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-lg transition cursor-pointer group"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-green-100 p-4 rounded-xl group-hover:bg-green-200 transition">
                                        <Plane className="text-green-600" size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#22324A]">Tour Applications</h3>
                                        <p className="text-gray-600">Manage tour bookings</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-sm text-gray-600">Total: {stats?.total_tour_forms || 0}</p>
                                        <p className="text-sm text-yellow-600">New: {stats?.new_guest_forms || 0}</p>
                                    </div>
                                    <button className="px-6 py-2 bg-[#22324A] text-white rounded-lg hover:bg-[#2f3e5c] transition">
                                        View All →
                                    </button>
                                </div>
                            </div>

                            {/* Visa Applications */}
                            <div
                                onClick={() => navigate("/admin/visas")}
                                className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-lg transition cursor-pointer group"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-purple-100 p-4 rounded-xl group-hover:bg-purple-200 transition">
                                        <FileText className="text-purple-600" size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#22324A]">Visa Applications</h3>
                                        <p className="text-gray-600">Manage visa requests</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-sm text-gray-600">Total: {stats?.total_visa_forms || 0}</p>
                                        <p className="text-sm text-yellow-600">New: {stats?.new_visa_forms || 0}</p>
                                    </div>
                                    <button className="px-6 py-2 bg-[#22324A] text-white rounded-lg hover:bg-[#2f3e5c] transition">
                                        View All →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
