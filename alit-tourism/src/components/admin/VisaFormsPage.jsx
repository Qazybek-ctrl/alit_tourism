import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, Eye } from "lucide-react";
import api from "../../Api";
import VisaFormModal from "./VisaFormModal";

const VISA_STATUS = {
    0: { name: "Новый", color: "bg-yellow-100 text-yellow-700" },
    1: { name: "На проверке", color: "bg-blue-100 text-blue-700" },
    2: { name: "Оплачено", color: "bg-green-100 text-green-700" },
    3: { name: "Одобрено", color: "bg-emerald-100 text-emerald-700" },
    4: { name: "Отказано", color: "bg-red-100 text-red-700" },
};

export default function VisaFormsPage() {
    const [visaForms, setVisaForms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [statusFilter, setStatusFilter] = useState("0");
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [selectedVisaForm, setSelectedVisaForm] = useState(null);
    const [visaFormModalOpen, setVisaFormModalOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [total, setTotal] = useState(0);
    const limit = 10;
    const navigate = useNavigate();

    // Debounce search
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
            setPage(1); // Reset to first page on search
        }, 500);
        return () => clearTimeout(timer);
    }, [search]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/auth");
            return;
        }
        fetchVisaForms();
    }, [navigate, page, debouncedSearch, statusFilter]);

    const fetchVisaForms = () => {
        setLoading(true);
        const params = new URLSearchParams({
            page: page.toString(),
            limit: limit.toString(),
        });
        if (debouncedSearch) {
            params.append("search", debouncedSearch);
        }
        if (statusFilter && statusFilter !== "all") {
            params.append("status", statusFilter);
        }

        api
            .get(`/admin/forms/visa?${params.toString()}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            })
            .then((res) => {
                setVisaForms(res.data?.data || []);
                setTotal(res.data?.total || 0);
                setTotalPages(res.data?.total_pages || 1);
            })
            .catch((err) => console.error("Error fetching visa forms:", err))
            .finally(() => setLoading(false));
    };



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
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold text-[#22324A]">Visa Applications</h1>
                            <p className="text-gray-600 mt-2">Manage all visa invitation requests</p>
                        </div>
                    </div>
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
                                <option value="1">На проверке</option>
                                <option value="2">Оплачено</option>
                                <option value="3">Одобрено</option>
                                <option value="4">Отказано</option>
                            </select>
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Search by Name or Phone
                            </label>
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search by name or phone number..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22324A] focus:border-transparent"
                            />
                        </div>
                        <div className="text-sm text-gray-600 mt-6">
                            {total} form{total !== 1 ? 's' : ''} found
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
                    ) : visaForms.length === 0 ? (
                        <div className="text-center py-12">
                            <FileText size={48} className="mx-auto text-gray-300 mb-4" />
                            <p className="text-gray-500">No visa applications found</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="text-left py-3 px-4 text-[#22324A] font-semibold">ID</th>
                                        <th className="text-left py-3 px-4 text-[#22324A] font-semibold">Applicant</th>
                                        <th className="text-left py-3 px-4 text-[#22324A] font-semibold">User</th>
                                        <th className="text-left py-3 px-4 text-[#22324A] font-semibold">Type</th>
                                        <th className="text-left py-3 px-4 text-[#22324A] font-semibold">Status</th>
                                        <th className="text-left py-3 px-4 text-[#22324A] font-semibold">Date</th>
                                        <th className="text-center py-3 px-4 text-[#22324A] font-semibold">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {visaForms.map((form) => (
                                        <tr key={form.ID} className="border-b border-gray-100 hover:bg-gray-50">
                                            <td className="py-3 px-4 text-gray-700">{form.ID}</td>
                                            <td className="py-3 px-4">
                                                <div>
                                                    <p className="font-medium text-[#22324A]">
                                                        {form.first_name} {form.last_name}
                                                    </p>
                                                    <p className="text-sm text-gray-500">{form.phone_number}</p>
                                                </div>
                                            </td>
                                            <td className="py-3 px-4">
                                                <div>
                                                    <p className="font-medium text-[#22324A]">
                                                        {form.User?.firstname} {form.User?.surname}
                                                    </p>
                                                    <p className="text-sm text-gray-500">{form.User?.phone_number}</p>
                                                </div>
                                            </td>
                                            <td className="py-3 px-4 text-gray-700">
                                                {form.visa_invitation_type || "N/A"}
                                            </td>
                                            <td className="py-3 px-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${VISA_STATUS[form.status]?.color}`}>
                                                    {VISA_STATUS[form.status]?.name}
                                                </span>
                                            </td>
                                            <td className="py-3 px-4 text-sm text-gray-600">
                                                {new Date(form.CreatedAt).toLocaleDateString()}
                                            </td>
                                            <td className="py-3 px-4 text-center">
                                                <button
                                                    onClick={() => {
                                                        setSelectedVisaForm(form);
                                                        setVisaFormModalOpen(true);
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
                <VisaFormModal
                    form={selectedVisaForm}
                    isOpen={visaFormModalOpen}
                    onClose={() => {
                        setVisaFormModalOpen(false);
                        setSelectedVisaForm(null);
                    }}
                    onUpdate={() => {
                        fetchVisaForms();
                    }}
                />

                {/* Pagination */}
                {!loading && visaForms.length > 0 && totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-6 pb-8">
                        <button
                            onClick={() => setPage(p => Math.max(1, p - 1))}
                            disabled={page === 1}
                            className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
                        >
                            Previous
                        </button>
                        <div className="flex gap-2">
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => setPage(i + 1)}
                                    className={`px-4 py-2 rounded-lg transition ${page === i + 1
                                        ? "bg-[#22324A] text-white"
                                        : "bg-white border border-gray-300 hover:bg-gray-50"
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                            disabled={page === totalPages}
                            className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
