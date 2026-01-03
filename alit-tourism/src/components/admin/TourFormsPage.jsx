import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plane, Eye } from "lucide-react";
import api from "../../Api";
import { Tours } from "../helper/ImageHelper";
import GuestFormModal from "./GuestFormModal";

const GUEST_STATUS = {
    0: { name: "Новый", color: "bg-yellow-100 text-yellow-700" },
    1: { name: "Оплачен", color: "bg-green-100 text-green-700" },
    2: { name: "Отмена", color: "bg-red-100 text-red-700" },
};

export default function TourFormsPage() {
    const [guestForms, setGuestForms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [statusFilter, setStatusFilter] = useState("0");
    const [phoneSearch, setPhoneSearch] = useState("");
    const [debouncedPhone, setDebouncedPhone] = useState("");
    const [selectedGuestForm, setSelectedGuestForm] = useState(null);
    const [guestFormModalOpen, setGuestFormModalOpen] = useState(false);
    const navigate = useNavigate();

    // Debounce phone search
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedPhone(phoneSearch);
        }, 500);
        return () => clearTimeout(timer);
    }, [phoneSearch]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/auth");
            return;
        }
        fetchGuestForms();
    }, [navigate]);

    const fetchGuestForms = () => {
        setLoading(true);
        api
            .get("/admin/forms/guest", {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            })
            .then((res) => setGuestForms(res.data?.data || res.data || []))
            .catch((err) => console.error("Error fetching guest forms:", err))
            .finally(() => setLoading(false));
    };

    const filteredForms = guestForms.filter(form => {
        const matchesStatus = statusFilter === "all" || form.status === parseInt(statusFilter);
        const matchesPhone = !debouncedPhone || form.User?.phone_number?.includes(debouncedPhone);
        return matchesStatus && matchesPhone;
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <button
                        onClick={() => navigate("/admin")}
                        className="mb-4 text-[#22324A] hover:text-[#2f3e5c] flex items-center gap-2"
                    >
                        ← Back to Dashboard
                    </button>
                    <h1 className="text-3xl font-bold text-[#22324A]">Tour Applications</h1>
                    <p className="text-gray-600 mt-2">Manage all tour booking requests</p>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Filter by Status
                            </label>
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22324A] focus:border-transparent"
                            >
                                <option value="all">All Statuses</option>
                                <option value="0">Новый</option>
                                <option value="1">Оплачен</option>
                                <option value="2">Отмена</option>
                            </select>
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Search by Phone
                            </label>
                            <input
                                type="text"
                                value={phoneSearch}
                                onChange={(e) => setPhoneSearch(e.target.value)}
                                placeholder="Enter phone number"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22324A] focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    {loading ? (
                        <div className="text-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#22324A] mx-auto mb-4"></div>
                            <p className="text-gray-500">Loading forms...</p>
                        </div>
                    ) : filteredForms.length === 0 ? (
                        <div className="text-center py-12">
                            <Plane size={48} className="mx-auto text-gray-300 mb-4" />
                            <p className="text-gray-500">No tour bookings found</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="text-left py-3 px-4 text-[#22324A] font-semibold">ID</th>
                                        <th className="text-left py-3 px-4 text-[#22324A] font-semibold">User</th>
                                        <th className="text-left py-3 px-4 text-[#22324A] font-semibold">Tour</th>
                                        <th className="text-left py-3 px-4 text-[#22324A] font-semibold">Status</th>
                                        <th className="text-left py-3 px-4 text-[#22324A] font-semibold">Date</th>
                                        <th className="text-center py-3 px-4 text-[#22324A] font-semibold">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredForms.map((form) => (
                                        <tr key={form.ID} className="border-b border-gray-100 hover:bg-gray-50">
                                            <td className="py-3 px-4 text-gray-700">{form.ID}</td>
                                            <td className="py-3 px-4">
                                                <div>
                                                    <p className="font-medium text-[#22324A]">
                                                        {form.User?.firstname} {form.User?.surname}
                                                    </p>
                                                    <p className="text-sm text-gray-500">{form.User?.phone_number}</p>
                                                </div>
                                            </td>
                                            <td className="py-3 px-4 text-gray-700">
                                                {Tours.find((tour) => tour.id === form.tour_id)?.title || form.tour_type || "N/A"}
                                            </td>
                                            <td className="py-3 px-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${GUEST_STATUS[form.status]?.color}`}>
                                                    {GUEST_STATUS[form.status]?.name}
                                                </span>
                                            </td>
                                            <td className="py-3 px-4 text-sm text-gray-600">
                                                {new Date(form.CreatedAt).toLocaleDateString()}
                                            </td>
                                            <td className="py-3 px-4 text-center">
                                                <button
                                                    onClick={() => {
                                                        setSelectedGuestForm(form);
                                                        setGuestFormModalOpen(true);
                                                    }}
                                                    className="px-4 py-2 bg-[#22324A] text-white rounded-lg hover:bg-[#2f3e5c] transition inline-flex items-center gap-2"
                                                >
                                                    <Eye size={16} />
                                                    View
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                {/* Modal */}
                <GuestFormModal
                    form={selectedGuestForm}
                    isOpen={guestFormModalOpen}
                    onClose={() => {
                        setGuestFormModalOpen(false);
                        setSelectedGuestForm(null);
                    }}
                    onUpdate={() => {
                        fetchGuestForms();
                    }}
                />
            </div>
        </div>
    );
}
