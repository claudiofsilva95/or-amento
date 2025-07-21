import { createContext, useEffect, useState } from "react";
import uuid from 'react-native-uuid';
import AsyncStorage from "@react-native-async-storage/async-storage";

const ReciboContext = createContext();


const ReciboProvider = ({ children }) => {
    const [servicos, setServicos] = useState([]);
    const [recibo, setRecibo] = useState({});
    const [preview, setPreview] = useState(false);

    useEffect(() => {
        const loadRecibo = async () => {
            const reciboStorage = await AsyncStorage.getItem('@recibo');
            // await AsyncStorage.removeItem('@recibo');
            setRecibo(reciboStorage !== null ? JSON.parse(reciboStorage) : {});
            if (reciboStorage) {
                console.log(recibo);
            }
        }
        loadRecibo();
    }, []);

    const salvarDadosRecibo = async (tomador, documento, local, price, obs) => {
        let novoRecibo = {
            tomador,
            documento,
            servicos,
            local,
            price,
            obs
        }
        await AsyncStorage.setItem('@recibo', JSON.stringify(novoRecibo));
        setRecibo(novoRecibo);
        setPreview(false);
    }

    const adicionarServico = (title, desc) => {
        const id = uuid.v4();
        setServicos(prevServicos => [
            ...prevServicos,
            { id, title, desc }
        ]);
        setPreview(false);
    }


    const apagarServico = (id) => {
        setServicos(prevServicos => prevServicos.filter(servico => servico.id !== id));
        setPreview(false);
    }

    const resetarRecibo = async () => {
        await AsyncStorage.removeItem('@recibo');
        setRecibo({});
        setServicos([]);
    }
    const alteraPreview = () => {
        setPreview(true);
    }

    return (
        <ReciboContext.Provider value={{ adicionarServico, servicos, apagarServico, salvarDadosRecibo, recibo, resetarRecibo, alteraPreview }}>
            {children}
        </ReciboContext.Provider>
    )
}

export { ReciboContext }
export default ReciboProvider;