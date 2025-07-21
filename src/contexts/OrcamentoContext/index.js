import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from 'react-native-uuid';

const OrcamentoContext = createContext();

const OrcamentoProvider = ({ children }) => {
    const [servicos, setServicos] = useState([]);
    const [orcamento, setOrcamento] = useState({});
    const [preview, setPreview] = useState(false);

    useEffect(() => {
        const loadOrcamento = async () => {
            const orcamentoStorage = await AsyncStorage.getItem('@orcamento');
            // await AsyncStorage.removeItem('@orcamento');            
            setOrcamento(orcamentoStorage !== null ? JSON.parse(orcamentoStorage) : {});
            if (orcamentoStorage) {
                console.log(orcamentoStorage);
            }
        }        
        loadOrcamento();
    }, []);

    const salvarDadosOrcamento = async (local, price, hasMaterial) => {
        let novoOrcamento = {
            servicos,
            local,
            price,
            hasMaterial
        }
        await AsyncStorage.setItem('@orcamento', JSON.stringify(novoOrcamento));
        setOrcamento(novoOrcamento);
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

    const resetarOrcamento = async () => {
        await AsyncStorage.removeItem('@orcamento');
        setOrcamento({});
        setServicos([]);        
    }

    const alteraPreview = () => {
        setPreview(true);
    }

    return (
        <OrcamentoContext.Provider value={{ salvarDadosOrcamento, orcamento, adicionarServico, servicos, apagarServico, resetarOrcamento, preview, alteraPreview }}>
            {children}
        </OrcamentoContext.Provider>
    )
}

export { OrcamentoContext }
export default OrcamentoProvider;