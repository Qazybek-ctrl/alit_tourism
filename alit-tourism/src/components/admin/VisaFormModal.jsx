import { useState, useEffect } from "react";
import { X, Save, History, FileText, Download } from "lucide-react";
import api from "../../Api";
import toast from "react-hot-toast";

const VISA_STATUS = {
    0: { name: "Новый", color: "bg-yellow-100 text-yellow-700" },
    1: { name: "На проверке", color: "bg-blue-100 text-blue-700" },
    2: { name: "Оплачено", color: "bg-green-100 text-green-700" },
    3: { name: "Одобрено", color: "bg-emerald-100 text-emerald-700" },
    4: { name: "Отказано", color: "bg-red-100 text-red-700" },
};

export default function VisaFormModal({ form, isOpen, onClose, onUpdate }) {
    const [activeTab, setActiveTab] = useState("details");
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({});
    const [status, setStatus] = useState(form?.status || 0);
    const [auditLogs, setAuditLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (form) {
            // Helper function to format date for input[type="date"]
            const formatDateForInput = (dateString) => {
                if (!dateString) return "";
                const date = new Date(dateString);
                if (isNaN(date.getTime())) return "";
                return date.toISOString().split('T')[0];
            };

            setFormData({
                first_name: form.first_name || "",
                last_name: form.last_name || "",
                middle_name: form.middle_name || "",
                gender: form.gender || "",
                date_of_birth: formatDateForInput(form.date_of_birth),
                place_of_birth: form.place_of_birth || "",
                citizenship: form.citizenship || "",
                passport_number: form.passport_number || "",
                date_of_issue: formatDateForInput(form.date_of_issue),
                date_of_expiry: formatDateForInput(form.date_of_expiry),
                country_of_issue: form.country_of_issue || "",
                phone_number: form.phone_number || "",
                email_address: form.email_address || "",
                work_place: form.work_place || "",
                visa_invitation_type: form.visa_invitation_type || "",
                residence_country: form.residence_country || "",
                residence_address_abroad: form.residence_address_abroad || "",
                visa_type: form.visa_type || "",
                visa_period_start: formatDateForInput(form.visa_period_start),
                visa_period_end: formatDateForInput(form.visa_period_end),
                visa_issuance_country: form.visa_issuance_country || "",
                visa_issuance_city: form.visa_issuance_city || "",
                travel_history: form.travel_history || "",
                travel_itinerary: form.travel_itinerary || "",
                address_kz_street: form.address_kz_street || "",
                address_kz_building: form.address_kz_building || "",
                address_kz_block: form.address_kz_block || "",
                address_kz_apartment: form.address_kz_apartment || "",
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
            toast.success("Form updated successfully!", { id: 'visa-form-update' });
        } catch (error) {
            console.error("Error updating form:", error);
            toast.error("Failed to update form", { id: 'visa-form-update-error' });
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
            toast.success(`Status changed to "${VISA_STATUS[newStatus].name}"`, { id: 'visa-status-change' });
        } catch (error) {
            console.error("Error updating status:", error);
            toast.error("Failed to update status", { id: 'visa-status-error' });
        } finally {
            setLoading(false);
        }
    };

    const downloadFile = async (filename) => {
        try {
            // Получаем presigned URL
            const response = await api.get(`/admin/files/url?filename=${filename}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });

            // Скачиваем файл как blob
            const fileResponse = await fetch(response.data.url);
            const blob = await fileResponse.blob();

            // Создаем URL для blob
            const blobUrl = window.URL.createObjectURL(blob);

            // Создаем временную ссылку для скачивания
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = filename;
            document.body.appendChild(link);
            link.click();

            // Очищаем
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);

            // Уведомление об успешном скачивании
            toast.success("File downloaded successfully!", { id: 'file-download' });
        } catch (error) {
            console.error("Error downloading file:", error);
            toast.error("Failed to download file", { id: 'file-download-error' });
        }
    };

    const handleExportExcel = async () => {
        try {
            const response = await api.get(`/admin/forms/visa/${form.ID}/export`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                responseType: "blob",
            });

            const blob = response.data;
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `visa_application_${form.ID}_${new Date().toISOString().split('T')[0]}.xlsx`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);

            toast.success("Excel file exported successfully!", { id: 'excel-export' });
        } catch (error) {
            console.error("Error exporting Excel:", error);
            toast.error(`Export failed: ${error.response?.data?.error || error.message || "Unknown error"}`, { id: 'excel-export-error' });
        }
    };

    if (!isOpen || !form) return null;

    const fieldLabels = {
        first_name: "First Name",
        last_name: "Last Name",
        middle_name: "Middle Name",
        gender: "Gender",
        date_of_birth: "Date of Birth",
        place_of_birth: "Place of Birth",
        citizenship: "Citizenship",
        passport_number: "Passport Number",
        date_of_issue: "Passport Date of Issue",
        date_of_expiry: "Passport Date of Expiry",
        country_of_issue: "Country of Issue",
        phone_number: "Phone Number",
        email_address: "Email Address",
        work_place: "Place of Work and Position",
        visa_invitation_type: "Visa Invitation Type",
        residence_country: "Country of Residence Abroad",
        residence_address_abroad: "Residential Address Abroad",
        visa_type: "Visa Type (Single/Multiple Entry)",
        visa_period_start: "Visa Period Start Date",
        visa_period_end: "Visa Period End Date",
        visa_issuance_country: "Visa Issuance Country",
        visa_issuance_city: "Visa Issuance City",
        travel_history: "Travel History (Last 5 Years)",
        travel_itinerary: "Travel Itinerary in Kazakhstan",
        address_kz_street: "Address in Kazakhstan - Street",
        address_kz_building: "Address in Kazakhstan - Building",
        address_kz_block: "Address in Kazakhstan - Block",
        address_kz_apartment: "Address in Kazakhstan - Apartment",
    };

    return (
        <>
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
                                {/* Actions Section - Status, Download, Export */}
                                <div className="mb-6 pb-6 border-b">
                                    <div className="flex flex-col md:flex-row gap-4 md:items-end">
                                        {/* Status */}
                                        <div className="flex-1">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Status
                                            </label>
                                            <select
                                                value={status}
                                                onChange={(e) => handleStatusChange(parseInt(e.target.value))}
                                                disabled={loading}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22324A] focus:border-transparent"
                                            >
                                                <option value={0}>Новый</option>
                                                <option value={1}>На проверке</option>
                                                <option value={2}>Оплачено</option>
                                                <option value={3}>Одобрено</option>
                                                <option value={4}>Отказано</option>
                                            </select>
                                        </div>

                                        {/* Download Passport */}
                                        {form.passport_url && (
                                            <div className="flex-1">
                                                <button
                                                    onClick={() => downloadFile(form.passport_url)}
                                                    className="w-full px-4 py-2 bg-[#22324A] text-white rounded-lg hover:bg-[#2f3e5c] transition flex items-center justify-center gap-2"
                                                >
                                                    <Download size={18} />
                                                    Download Passport
                                                </button>
                                            </div>
                                        )}

                                        {/* Export to Excel */}
                                        <div className="flex-1">
                                            <button
                                                onClick={handleExportExcel}
                                                className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
                                            >
                                                <Download size={18} />
                                                Export to Excel
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Form Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {Object.entries(formData).map(([key, value]) => {
                                        const isDateField = key.includes('date') || key.includes('period');
                                        const isTextArea = key === "travel_history" || key === "residence_address_abroad" || key === "travel_itinerary";
                                        const isFullWidth = isTextArea;

                                        // Format date for display
                                        const displayValue = isDateField && value ?
                                            new Date(value).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
                                            : value;

                                        return (
                                            <div key={key} className={isFullWidth ? "md:col-span-2" : ""}>
                                                <label className="block text-sm font-[600] text-[#22324A] ">
                                                    {fieldLabels[key]}
                                                </label>
                                                {isEditing ? (
                                                    isTextArea ? (
                                                        <textarea
                                                            value={value}
                                                            onChange={(e) =>
                                                                setFormData({ ...formData, [key]: e.target.value })
                                                            }
                                                            rows={3}
                                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22324A]"
                                                        />
                                                    ) : isDateField ? (
                                                        <input
                                                            type="date"
                                                            value={value}
                                                            onChange={(e) =>
                                                                setFormData({ ...formData, [key]: e.target.value })
                                                            }
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
                                                    <p className="font-[400] text-[#22324A] py-2">
                                                        {displayValue || "N/A"}
                                                    </p>
                                                )}
                                            </div>
                                        );
                                    })}
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
