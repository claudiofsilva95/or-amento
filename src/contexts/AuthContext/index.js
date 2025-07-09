import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const userIn = {
        email: 'dodo',
        senha: '123'
    };

    useEffect(() => {
        const loadUser = async () => {
            const userStorage = await AsyncStorage.getItem('@user');
            // await AsyncStorage.removeItem('@user');
            setUser(userStorage !== null ? JSON.parse(userStorage) : null);            
        }
        loadUser();
    }, [user]);

    const signIn = (email, password) => {
        if (email === userIn.email && password === userIn.senha) {

            let data = {
                email,
                password
            };

            setUserStorage(data);
            setUser(data);
        } else {
            alert('Senha errada ANIMAL')
        }
    }

    const setUserStorage = async (data) => {
        await AsyncStorage.setItem('@user', JSON.stringify(data));
    }

    return (
        <AuthContext.Provider value={{ user, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext }

export default AuthProvider;