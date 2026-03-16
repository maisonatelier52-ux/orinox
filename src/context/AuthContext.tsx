"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
    fullName: string;
    email: string;
    password?: string; // Stored for mock validation
}

interface AuthContextType {
    user: User | null;
    registerUser: (userData: User) => boolean;
    login: (email: string, password: string) => boolean;
    generateResetCode: (email: string) => string | null;
    verifyResetCode: (email: string, code: string) => boolean;
    resetPassword: (email: string, newPassword: string) => boolean;
    logout: () => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem("orinox_active_session");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const getStoredUsers = (): User[] => {
        const users = localStorage.getItem("orinox_registered_users");
        return users ? JSON.parse(users) : [];
    };

    const registerUser = (userData: User) => {
        const users = getStoredUsers();
        if (users.find(u => u.email === userData.email)) {
            return false; // User already exists
        }

        const updatedUsers = [...users, userData];
        localStorage.setItem("orinox_registered_users", JSON.stringify(updatedUsers));

        return true;
    };

    const login = (email: string, password: string) => {
        const users = getStoredUsers();
        const foundUser = users.find(u => u.email === email && u.password === password);

        if (foundUser) {
            const sessionUser = { fullName: foundUser.fullName, email: foundUser.email };
            setUser(sessionUser);
            localStorage.setItem("orinox_active_session", JSON.stringify(sessionUser));
            return true;
        }
        return false;
    };

    const [resetCodes, setResetCodes] = useState<Record<string, string>>({});

    const generateResetCode = (email: string) => {
        const users = getStoredUsers();
        const userExists = users.some(u => u.email === email);

        if (!userExists) return null;

        const code = Math.floor(1000 + Math.random() * 9000).toString();
        setResetCodes(prev => ({ ...prev, [email]: code }));

        // In a real app, this would be an API call to send an email
        console.log(`[SECURITY PROTOCOL] Reset code for ${email}: ${code}`);
        return code;
    };

    const verifyResetCode = (email: string, code: string) => {
        return resetCodes[email] === code;
    };

    const resetPassword = (email: string, newPassword: string) => {
        const users = getStoredUsers();
        const userIndex = users.findIndex(u => u.email === email);

        if (userIndex !== -1) {
            users[userIndex].password = newPassword;
            localStorage.setItem("orinox_registered_users", JSON.stringify(users));
            // Clear the used code
            const newCodes = { ...resetCodes };
            delete newCodes[email];
            setResetCodes(newCodes);
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("orinox_active_session");
    };

    return (
        <AuthContext.Provider value={{ user, registerUser, login, generateResetCode, verifyResetCode, resetPassword, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
