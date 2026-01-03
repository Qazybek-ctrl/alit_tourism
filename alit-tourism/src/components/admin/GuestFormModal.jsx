import { useState, useEffect } from "react";
import { X, Save, History, FileText } from "lucide-react";
import api from "../../Api";
import toast, { Toaster } from "react-hot-toast";

const GUEST_STATUS = {
    0: { name: "Новый", color: "bg-yellow-100 text-yellow-700" },
    1: { name: "Оплачен", color: "bg-green-100 text-green-700" },
    2: { name: "Отмена", color: "bg-red-100 text-red-700" },
};

export default function GuestFormModal({ form, isOpen, onClose, onUpdate }) {
    const [activeTab, setActiveTab] = useState("details");
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({});
    const [status, setStatus] = useState(form?.status || 0);
    const [auditLogs, setAuditLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (form) {
            setFormData({
                tour_type: form.tour_type || "",
                full_name: form.full_name || "",
                country_of_residence: form.country_of_residence || "",
                language: form.language || "",
                visit_plan: form.visit_plan || "",
                people_count: form.people_count || "",
                trip_interests: form.trip_interests || "",
                request: form.request || "",
                dietary_preferences: form.dietary_preferences || "",
            });
            setStatus(form.status);
            setActiveTab("details");
        }
    }, [form]);

    const fetchAuditLogs = async () => {
        try {
            const response = await api.get(`/admin/audit/user_guest_form/${form.ID}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            setAuditLogs(response.data || []);
        } catch (error) {
            console.error("Error fetching audit logs:", error);
        }
    };

    useEffect(() => {
        if (activeTab === "logs" && form) {
            fetchAuditLogs();
        }
    }, [activeTab, form]);

    const handleSave = async () => {
        setLoading(true);
        try {
            await api.put(`/admin/forms/guest/${form.ID}`, formData, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            setIsEditing(false);
            onUpdate();
            toast.success("Form updated successfully!");
        } catch (error) {
            console.error("Error updating form:", error);
            toast.error("Failed to update form");
        } finally {
            setLoading(false);
        }
    };

    const handleStatusChange = async (newStatus) => {
        setLoading(true);
        try {
            await api.patch(
                `/admin/forms/guest/${form.ID}/status`,
                { status: newStatus },
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                }
            );
            setStatus(newStatus);
            onUpdate();
            toast.success(`Status changed to "${GUEST_STATUS[newStatus].name}"`);
        } catch (error) {
            console.error("Error updating status:", error);
            toast.error("Failed to update status");
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen || !form) return null;

    return (
        <>
            <Toaster position="top-right" />
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                    {/* Header */}
                    <div className="bg-[#f4ebe2] p-6 flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-semibold text-[#22324A]">
                                Tour Booking #{form.ID}
                            </h2>
                            <p className="text-sm text-gray-600 mt-1">
                                {form.User?.firstname} {form.User?.surname} ({form.User?.phone_number})
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-gray-600 hover:text-gray-800 transition"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Tabs */}
                    <div className="flex border-b">
                        <button
                            onClick={() => setActiveTab("details")}
                            className={`flex-1 py-3 px-6 flex items-center justify-center gap-2 transition ${activeTab === "details"
                                ? "bg-white text-[#22324A] border-b-2 border-[#22324A] font-medium"
                                : "text-gray-600 hover:bg-gray-50"
                                }`}
                        >
                            <FileText size={18} />
                            Details
                        </button>
                        <button
                            onClick={() => setActiveTab("logs")}
                            className={`flex-1 py-3 px-6 flex items-center justify-center gap-2 transition ${activeTab === "logs"
                                ? "bg-white text-[#22324A] border-b-2 border-[#22324A] font-medium"
                                : "text-gray-600 hover:bg-gray-50"
                                }`}
                        >
                            <History size={18} />
                            History
                        </button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto p-6">
                        {activeTab === "details" ? (
                            <>
                                {/* Status */}
                                <div className="mb-6 pb-4 border-b">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Status
                                    </label>
                                    <select
                                        value={status}
                                        onChange={(e) => handleStatusChange(parseInt(e.target.value))}
                                        disabled={loading}
                                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22324A] focus:border-transparent"
                                    >
                                        <option value={0}>Новый</option>
                                        <option value={1}>Оплачен</option>
                                        <option value={2}>Отмена</option>
                                    </select>
                                </div>

                                {/* Form Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name
                                        </label>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                value={formData.full_name}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, full_name: e.target.value })
                                                }
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22324A]"
                                            />
                                        ) : (
                                            <p className="font-medium text-[#22324A] py-2">
                                                {formData.full_name || "N/A"}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Country of Residence
                                        </label>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                value={formData.country_of_residence}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        country_of_residence: e.target.value,
                                                    })
                                                }
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22324A]"
                                            />
                                        ) : (
                                            <p className="font-medium text-[#22324A] py-2">
                                                {formData.country_of_residence || "N/A"}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Language
                                        </label>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                value={formData.language}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, language: e.target.value })
                                                }
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22324A]"
                                            />
                                        ) : (
                                            <p className="font-medium text-[#22324A] py-2">
                                                {formData.language || "N/A"}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            People Count
                                        </label>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                value={formData.people_count}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, people_count: e.target.value })
                                                }
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22324A]"
                                            />
                                        ) : (
                                            <p className="font-medium text-[#22324A] py-2">
                                                {formData.people_count || "N/A"}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Tour Type
                                        </label>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                value={formData.tour_type}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, tour_type: e.target.value })
                                                }
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22324A]"
                                            />
                                        ) : (
                                            <p className="font-medium text-[#22324A] py-2">
                                                {formData.tour_type || "N/A"}
                                            </p>
                                        )}
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Visit Plan
                                        </label>
                                        {isEditing ? (
                                            <textarea
                                                value={formData.visit_plan}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, visit_plan: e.target.value })
                                                }
                                                rows={3}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22324A]"
                                            />
                                        ) : (
                                            <p className="font-medium text-[#22324A] py-2">
                                                {formData.visit_plan || "N/A"}
                                            </p>
                                        )}
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Trip Interests
                                        </label>
                                        {isEditing ? (
                                            <textarea
                                                value={formData.trip_interests}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, trip_interests: e.target.value })
                                                }
                                                rows={3}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22324A]"
                                            />
                                        ) : (
                                            <p className="font-medium text-[#22324A] py-2">
                                                {formData.trip_interests || "N/A"}
                                            </p>
                                        )}
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Special Requests
                                        </label>
                                        {isEditing ? (
                                            <textarea
                                                value={formData.request}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, request: e.target.value })
                                                }
                                                rows={3}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22324A]"
                                            />
                                        ) : (
                                            <p className="font-medium text-[#22324A] py-2">
                                                {formData.request || "N/A"}
                                            </p>
                                        )}
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Dietary Preferences
                                        </label>
                                        {isEditing ? (
                                            <textarea
                                                value={formData.dietary_preferences}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        dietary_preferences: e.target.value,
                                                    })
                                                }
                                                rows={2}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22324A]"
                                            />
                                        ) : (
                                            <p className="font-medium text-[#22324A] py-2">
                                                {formData.dietary_preferences || "N/A"}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="space-y-3">
                                <h3 className="text-lg font-semibold text-[#22324A] mb-4">Change History</h3>
                                {auditLogs.length === 0 ? (
                                    <p className="text-gray-500 text-center py-8">No changes recorded yet</p>
                                ) : (
                                    auditLogs.map((log) => (
                                        <div
                                            key={log.ID}
                                            className="border border-gray-200 rounded-lg p-4 bg-gray-50"
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="font-medium text-[#22324A]">
                                                    {log.action === "status_change"
                                                        ? "Status Changed"
                                                        : "Data Updated"}
                                                </span>
                                                <span className="text-xs text-gray-500">
                                                    {new Date(log.timestamp).toLocaleString()}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-700 mb-1">{log.description}</p>
                                            <p className="text-xs text-gray-500">
                                                By: {log.user_name} • IP: {log.ip_address}
                                            </p>
                                        </div>
                                    ))
                                )}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    {activeTab === "details" && (
                        <div className="bg-gray-50 p-4 flex justify-end items-center border-t gap-2">
                            {isEditing ? (
                                <>
                                    <button
                                        onClick={() => {
                                            setIsEditing(false);
                                            setFormData({
                                                tour_type: form.tour_type || "",
                                                full_name: form.full_name || "",
                                                country_of_residence: form.country_of_residence || "",
                                                language: form.language || "",
                                                visit_plan: form.visit_plan || "",
                                                people_count: form.people_count || "",
                                                trip_interests: form.trip_interests || "",
                                                request: form.request || "",
                                                dietary_preferences: form.dietary_preferences || "",
                                            });
                                        }}
                                        className="px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleSave}
                                        disabled={loading}
                                        className="flex items-center gap-2 px-4 py-2 bg-[#22324A] text-white rounded-lg hover:bg-[#2f3e5c] transition disabled:opacity-50"
                                    >
                                        <Save size={18} />
                                        {loading ? "Saving..." : "Save Changes"}
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="px-4 py-2 bg-[#22324A] text-white rounded-lg hover:bg-[#2f3e5c] transition"
                                >
                                    Edit Form
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
