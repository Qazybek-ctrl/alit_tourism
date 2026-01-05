import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Users, Shield, Key } from "lucide-react";
import api from "../../Api";
import toast from "react-hot-toast";
import { AuthContext } from "../../utility/AuthContext";

export default function UsersPage() {
    const { user: currentUser } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [passwordModal, setPasswordModal] = useState({ open: false, userId: null });
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
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
        fetchUsers();
    }, [navigate, page, debouncedSearch]);

    const fetchUsers = () => {
        setLoading(true);
        const params = new URLSearchParams({
            page: page.toString(),
            limit: limit.toString(),
        });
        if (debouncedSearch) {
            params.append("search", debouncedSearch);
        }

        api
            .get(`/admin/users?${params.toString()}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            })
            .then((res) => {
                setUsers(res.data?.data || []);
                setTotal(res.data?.total || 0);
                setTotalPages(res.data?.total_pages || 1);
            })
            .catch((err) => console.error("Error fetching users:", err))
            .finally(() => setLoading(false));
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
                toast.success(`Role changed to ${newRole}`, { id: 'user-role-change' });
            })
            .catch((err) => {
                console.error("Error updating role:", err);
                toast.error("Failed to update role", { id: 'user-role-error' });
            });
    };

    const handlePasswordChange = () => {
        if (newPassword.length < 6) {
            toast.error("Password must be at least 6 characters", { id: 'password-length-error' });
            return;
        }
        if (newPassword !== confirmPassword) {
            toast.error("Passwords do not match", { id: 'password-match-error' });
            return;
        }

        api
            .put(
                `/admin/users/${passwordModal.userId}/password`,
                {
                    new_password: newPassword,
                    confirm_password: confirmPassword
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            )
            .then(() => {
                toast.success("Password updated successfully", { id: 'password-update' });
                setPasswordModal({ open: false, userId: null });
                setNewPassword("");
                setConfirmPassword("");
            })
            .catch((err) => {
                console.error("Error updating password:", err);
                toast.error("Failed to update password", { id: 'password-update-error' });
            });
    };

    return (
        <>
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
                        <h1 className="text-3xl font-bold text-[#22324A]">User Management</h1>
                        <p className="text-gray-600 mt-2">Manage all registered users</p>
                    </div>

                    {/* Search */}
                    <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
                        <div className="flex gap-4 items-center">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Search Users
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
                                {total} user{total !== 1 ? 's' : ''} found
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
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
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="text-left py-3 px-4 text-[#22324A] font-semibold">ID</th>
                                            <th className="text-left py-3 px-4 text-[#22324A] font-semibold">Name</th>
                                            <th className="text-left py-3 px-4 text-[#22324A] font-semibold">Phone</th>
                                            <th className="text-left py-3 px-4 text-[#22324A] font-semibold">Role</th>
                                            <th className="text-left py-3 px-4 text-[#22324A] font-semibold">Registered</th>
                                            <th className="text-center py-3 px-4 text-[#22324A] font-semibold">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user) => (
                                            <tr key={user.ID} className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="py-3 px-4 text-gray-700">{user.ID}</td>
                                                <td className="py-3 px-4">
                                                    <div className="flex items-center gap-2">
                                                        <p className="font-medium text-[#22324A]">
                                                            {user.first_name || user.firstname} {user.surname}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-4 text-gray-700">{user.phone_number}</td>
                                                <td className="py-3 px-4">
                                                    {currentUser?.id === user.ID ? (
                                                        <span className={`px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 bg-green-100 text-green-700`}>
                                                            <Shield size={12} />
                                                            Это вы
                                                        </span>
                                                    ) : (
                                                        <button
                                                            onClick={() => toggleRole(user.ID, user.role)}
                                                            className={`px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 ${user.role === "admin"
                                                                ? "bg-purple-100 text-purple-700 hover:bg-purple-200"
                                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                                                } transition`}
                                                        >
                                                            <Shield size={12} />
                                                            {user.role === "admin" ? "Admin" : "User"}
                                                        </button>
                                                    )}
                                                </td>
                                                <td className="py-3 px-4 text-sm text-gray-600">
                                                    {new Date(user.CreatedAt).toLocaleDateString()}
                                                </td>
                                                <td className="py-3 px-4 text-center">
                                                    <button
                                                        onClick={() => setPasswordModal({ open: true, userId: user.ID })}
                                                        className="px-4 py-2 bg-[#22324A] text-white rounded-lg hover:bg-[#2f3e5c] transition inline-flex items-center gap-2"
                                                    >
                                                        <Key size={16} />
                                                        Change Password
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>

                    {/* Password Change Modal */}
                    {passwordModal.open && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
                                <h3 className="text-2xl font-semibold text-[#22324A] mb-6">
                                    Change User Password
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            New Password
                                        </label>
                                        <input
                                            type="password"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            placeholder="Enter new password (min 6 characters)"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22324A] focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            placeholder="Confirm new password"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22324A] focus:border-transparent"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-6">
                                    <button
                                        onClick={handlePasswordChange}
                                        className="flex-1 px-4 py-2 bg-[#22324A] text-white rounded-lg hover:bg-[#2f3e5c] transition"
                                    >
                                        Update Password
                                    </button>
                                    <button
                                        onClick={() => {
                                            setPasswordModal({ open: false, userId: null });
                                            setNewPassword("");
                                            setConfirmPassword("");
                                        }}
                                        className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {!loading && users.length > 0 && totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-6">
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
        </>
    );
}
