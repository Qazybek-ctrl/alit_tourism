import { useState } from "react";

export default function AdminPanel() {
  const [selected, setSelected] = useState("users");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Alice Kim",
      phone: "+77011223344",
      email: "alice@mail.com",
    },
    { id: 2, name: "Bob Lee", phone: "+77015556677", email: "bob@mail.com" },
    {
      id: 3,
      name: "Charlie Park",
      phone: "+77018889900",
      email: "charlie@mail.com",
    },
  ]);

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const handleAddUser = () => {
    const newUser = {
      id: Date.now(),
      name: "New User",
      phone: "+7701XXXXXXX",
      email: "newuser@mail.com",
    };
    setUsers([...users, newUser]);
  };

  const filteredUsers = users.filter(
    (u) =>
      (u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())) &&
      (filter === "all" || u.email.endsWith(filter))
  );

  return (
    <div className="flex h-screen bg-gray-100 text-[#22324A]">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-8">Admin</h2>
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => setSelected("users")}
                className={`w-full text-left px-4 py-2 rounded-lg transition ${
                  selected === "users"
                    ? "bg-[#22324A] text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                Users
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelected("immigrants")}
                className={`w-full text-left px-4 py-2 rounded-lg transition ${
                  selected === "immigrants"
                    ? "bg-[#22324A] text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                Immigrants
              </button>
            </li>
          </ul>
        </div>

        <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
          Log out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        {selected === "users" && (
          <>
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="border border-gray-300 rounded-xl px-4 py-2 w-64 outline-none focus:ring-1 focus:ring-[#22324A]"
                />
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="border border-gray-300 rounded-xl px-4 py-2 outline-none focus:ring-1 focus:ring-[#22324A]"
                >
                  <option value="all">All</option>
                  <option value="@mail.com">@mail.com</option>
                  <option value="@gmail.com">@gmail.com</option>
                </select>
              </div>

              <button
                onClick={handleAddUser}
                className="bg-[#22324A] text-white px-5 py-2 rounded-xl hover:bg-[#2f3e5c] transition"
              >
                + Add User
              </button>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <table className="w-full border-collapse">
                <thead className="bg-[#F6F6F6]">
                  <tr className="text-left text-gray-600">
                    <th className="p-4">Name</th>
                    <th className="p-4">Phone</th>
                    <th className="p-4">Email</th>
                    <th className="p-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="border-t hover:bg-gray-50">
                      <td className="p-4">{user.name}</td>
                      <td className="p-4">{user.phone}</td>
                      <td className="p-4">{user.email}</td>
                      <td className="p-4 text-center">
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="text-red-500 hover:text-red-700 font-medium"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}

                  {filteredUsers.length === 0 && (
                    <tr>
                      <td
                        colSpan="4"
                        className="text-center py-6 text-gray-400"
                      >
                        No users found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
