"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import type { ReactNode } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User
} from "firebase/auth";
import { auth } from "./firebase";

export type UserRole = "customer" | "provider" | "admin" | null;

interface AuthUser {
  uid: string;
  name: string;
  email: string;
  role: UserRole;
  token: string;
}

interface AuthContextType {
  user: AuthUser | null;
  role: UserRole;
  login: (email: string, password: string, role: UserRole) => Promise<boolean>;
  register: (email: string, password: string, fullName: string, role: UserRole, phone?: string, category?: string) => Promise<boolean>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: User | null) => {
      if (firebaseUser) {
        try {
          const token = await firebaseUser.getIdToken();
          const res = await fetch("http://localhost:5000/api/auth/profile", {
            headers: { Authorization: `Bearer ${token}` }
          });
          if (res.ok) {
            const profile = await res.json();
            setUser({
              uid: firebaseUser.uid,
              name: profile.fullName || firebaseUser.email || "",
              email: firebaseUser.email || "",
              role: profile.role || null,
              token
            });
          } else {
            setUser({
              uid: firebaseUser.uid,
              name: firebaseUser.email || "",
              email: firebaseUser.email || "",
              role: null,
              token
            });
          }
        } catch (err) {
          console.error("Auth state error:", err);
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const login = useCallback(async (email: string, password: string, role: UserRole): Promise<boolean> => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCredential.user.getIdToken();
      const res = await fetch("http://localhost:5000/api/auth/profile", {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const profile = await res.json();
        setUser({
          uid: userCredential.user.uid,
          name: profile.fullName || email,
          email,
          role: profile.role || role,
          token
        });
      }
      return true;
    } catch (err) {
      console.error("Login error:", err);
      return false;
    }
  }, []);

  const register = useCallback(async (
    email: string,
    password: string,
    fullName: string,
    role: UserRole,
    phone?: string,
    category?: string
  ): Promise<boolean> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const token = await userCredential.user.getIdToken();
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ fullName, role, phone: phone || "", category: category || "" })
      });
      if (res.ok) {
        setUser({
          uid: userCredential.user.uid,
          name: fullName,
          email,
          role,
          token
        });
        return true;
      }
      return false;
    } catch (err) {
      console.error("Register error:", err);
      return false;
    }
  }, []);

  const logout = useCallback(async () => {
    await signOut(auth);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      role: user?.role ?? null,
      login,
      register,
      logout,
      isAuthenticated: !!user,
      loading
    }}>
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