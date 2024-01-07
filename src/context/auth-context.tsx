import React, { createContext, ReactNode, useState } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (data: any) => void;
    user: any;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    login: (data: any) => undefined,
    user: {},
    logout: () => { },
});

const AuthContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState(null)
    const login = (data: any) => {
        setUser(data)
    };

    const logout = () => {
        setUser(null)
    };

    return (
        <AuthContext.Provider value={{ login, logout, user, isAuthenticated: false }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;


export const useAuth = () => React.useContext(AuthContext)