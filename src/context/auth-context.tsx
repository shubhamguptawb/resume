import React, { createContext, ReactNode, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { initializeApp } from 'firebase/app';
import { app } from '@/config/firebase';


interface AuthContextType {
    isAuthenticated: boolean;
    login: (data: any) => void;
    user: any;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    login: (data: any) => undefined,
    user: null,
    logout: () => { },
});

const AuthContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState(null)
    const router = useRouter()
    const auth = getAuth()
    const login = (data: any) => {
        setUser(data)
    };
    useEffect(() => {
        let a = app

    }, [])


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
                if (router.asPath.includes('/admin')) {
                    router.push('/admin/login')
                }
            }
        });
    }, [auth])



    const logout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser(null)
            router.push('/admin/login')
        }).catch((error) => {
            toast.error('Something went wrong')
        });

    };

    return (
        <AuthContext.Provider value={{ login, logout, user, isAuthenticated: false }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;


export const useAuth = () => React.useContext(AuthContext)