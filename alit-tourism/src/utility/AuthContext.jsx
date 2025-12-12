import { createContext, useEffect, useState } from "react";
import api from "../Api";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            setLoading(false);
            return;
        }

        api
            .get("/profile", { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => setUser(res.data))
            .catch(() => {
                setUser(res.data);

                localStorage.setItem("user", JSON.stringify(res.data));
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, loading }}>
            {children}
        </AuthContext.Provider>
    );
}
