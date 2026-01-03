import { useState, useEffect } from "react";
import { X, Save, History, FileText, Download } from "lucide-react";
import api from "../../Api";
import toast, { Toaster } from "react-hot-toast";

const VISA_STATUS = {
    0: { name: "Новый", color: "bg-yellow-100 text-yellow-700" },
    1: { name: "На проверке", color: "bg-blue-100 text-blue-700" },
    2: { name: "Оплачено", color: "bg-green-100 text-green-700" },
    3: { name: "Одобрено", color: "bg-emerald-100 text-emerald-700" },
    4: { name: "Отказано", color: "bg-red-100 text-red-700" },
};

const MINIO_BASE_URL = "http://89.207.253.252:9000/alit-tourism";

export default function VisaFormModal({ form, isOpen, onClose, onUpdate }) {
    const [activeTab, setActiveTab] = useState("details");
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({});
    const [status, setStatus] = useState(form?.status || 0);
    const [auditLogs, setAuditLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (form) {
            setFormData({
                first_name: form.first_name || "",
                last_name: form.last_name || "",
                middle_name: form.middle_name || "",
                gender: form.gender || "",
                place_of_birth: form.place_of_birth || "",
                citizenship: form.citizenship || "",
                passport_number: form.passport_number || "",
                country_of_issue: form.country_of_issue || "",
                phone_number: form.phone_number || "",
                email_address: form.email_address || "",
                work_place: form.work_place || "",
                visa_invitation_type: form.visa_invitation_type || "",
                residence_country: form.residence_country || "",
                residence_address_abroad: form.residence_address_abroad || "",
                visa_type: form.visa_type || "",
                visa_issuance_country: form.visa_issuance_country || "",
                visa_issuance_city: form.visa_issuance_city || "",
                travel_history: form.travel_history || "",
            });
            setStatus(form.status);
            setActiveTab("details");
        }
    }, [form]);

    const fetchAuditLogs = async () => {
        try {
            const response = await api.get(`/admin/audit/visa_invitation_form/${form.ID}`, {
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
            await api.put(`/admin/forms/visa/${form.ID}`, formData, {
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
                `/admin/forms/visa/${form.ID}/status`,
                { status: newStatus },
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                }
            );
            setStatus(newStatus);
            onUpdate();
            toast.success(`Status changed to "${VISA_STATUS[newStatus].name}"`);
        } catch (error) {
            console.error("Error updating status:", error);
            toast.error("Failed to update status");
        } finally {
            setLoading(false);
        }
    };

    const downloadFile = (filename) => {
        const fileUrl = `${MINIO_BASE_URL}/${filename}`;
        window.open(fileUrl, "_blank");
    };

    if (!isOpen || !form) return null;

    const fieldLabels = {
        first_name: "First Name",
        last_name: "Last Name",
        middle_name: "Middle Name",
        gender: "Gender",
        place_of_birth: "Place of Birth",
        citizenship: "Citizenship",
        passport_number: "Passport Number",
        country_of_issue: "Country of Issue",
        phone_number: "Phone Number",
        email_address: "Email Address",
        work_place: "Work Place",
        visa_invitation_type: "Visa Invitation Type",
        residence_country: "Residence Country",
        residence_address_abroad: "Residence Address Abroad",
        visa_type: "Visa Type",
        visa_issuance_country: "Visa Issuance Country",
        visa_issuance_city: "Visa Issuance City",
        travel_history: "Travel History",
    };

    return (
        <>
            <Toaster position="top-right" />
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                    {/* Header */}
                    <div className="bg-[#f4ebe2] p-6 flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-semibold text-[#22324A]">
                                Visa Application #{form.ID}
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
                                        <option value={1}>На проверке</option>
                                        <option value={2}>Оплачено</option>
                                        <option value={3}>Одобрено</option>
                                        <option value={4}>Отказано</option>
                                    </select>
                                </div>

                                {/* Passport Download */}
                                {form.passport_url && (
                                    <div className="mb-6 pb-4 border-b">
                                        <button
                                            onClick={() => downloadFile(form.passport_url)}
                                            className="px-4 py-2 bg-[#22324A] text-white rounded-lg hover:bg-[#2f3e5c] transition flex items-center gap-2"
                                        >
                                            <Download size={18} />
                                            Download Passport Document
                                        </button>
                                    </div>
                                )}

                                {/* Form Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {Object.entries(formData).map(([key, value]) => (
                                        <div key={key} className={key === "travel_history" || key === "residence_address_abroad" ? "md:col-span-2" : ""}>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                {fieldLabels[key]}
                                            </label>
                                            {isEditing ? (
                                                key === "travel_history" || key === "residence_address_abroad" ? (
                                                    <textarea
                                                        value={value}
                                                        onChange={(e) =>
                                                            setFormData({ ...formData, [key]: e.target.value })
                                                        }
                                                        rows={3}
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22324A]"
                                                    />
                                                ) : (
                                                    <input
                                                        type="text"
                                                        value={value}
                                                        onChange={(e) =>
                                                            setFormData({ ...formData, [key]: e.target.value })
                                                        }
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22324A]"
                                                    />
                                                )
                                            ) : (
                                                <p className="font-medium text-[#22324A] py-2">
                                                    {value || "N/A"}
                                                </p>
                                            )}
                                        </div>
                                    ))}
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
                                        onClick={() => setIsEditing(false)}
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
