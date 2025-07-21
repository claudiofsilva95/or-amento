import { SafeAreaView, View, TouchableOpacity, Text } from "react-native";
import { styles } from './styles';
import { OrcamentoContext } from "../../contexts/OrcamentoContext";
import { useContext } from "react";
import { useConfirm } from "../ConfirmModalContext";


const ServicosModal = ({ setEnabled }) => {
    const { servicos, apagarServico } = useContext(OrcamentoContext);
    const { confirm } = useConfirm();

    const handleDeleteService = async (id) => {
        const confirmed = await confirm('Tem certeza que deseja apagar este serviço?');
        if (confirmed) {
            apagarServico(id)
        }
    };

return (
    <SafeAreaView style={styles.modalServicoPage}>
        <View style={styles.servicosContainer}>
            <Text style={styles.servicosTitle}>Serviços Adicionados</Text>
            {
                servicos.length === 0 && <Text>Você não tem nenhum serviço adicionado ainda... </Text>
            }
            {
                servicos.map((item) => {
                    return (
                        <TouchableOpacity
                            onLongPress={() => handleDeleteService(item.id)}
                            style={styles.servicoView} key={item.id}
                        >
                            <Text style={styles.servicoTitle}>{item.title}</Text>
                            <Text style={styles.servicoDesc}>{item.desc}</Text>
                        </TouchableOpacity>
                    )
                })
            }

            <TouchableOpacity
                onPress={() => setEnabled()}
                style={styles.buttonFechar}
            >
                <Text style={styles.buttonFecharText}>Fechar</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
)
}

export default ServicosModal;