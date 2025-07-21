import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { useContext } from 'react';
import { OrcamentoContext } from '../../contexts/OrcamentoContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const PreviewModal = ({ enabledModal }) => {
    const { orcamento } = useContext(OrcamentoContext);

    return (
        <SafeAreaView style={styles.modalPreviaPage}>
            <Text style={styles.previaTitle}>Prévia do Orçamento</Text>

            <View style={styles.modalPreviaContainer}>
                <View style={styles.cab}>
                    <Image
                        style={styles.logoImg}
                        source={require('../../assets/imgs/logo.png')}
                    />
                    <Text style={styles.cabTitle}>AM - Contruções </Text>
                    <Text style={styles.cabCNPJ}>CNPJ: 12.345.678/0001-90 </Text>
                    <Text style={styles.cabContato}>Ailton | (11) 91234-5678</Text>
                </View>

                <Text style={styles.orcamentoDeServicos}>Orçamento de Serviços</Text>

                <View style={styles.orcamentoCorpo}>
                    {
                        orcamento.servicos.map((item) => {
                            return (
                                <View style={styles.servicoView} key={item.title}>
                                    <View style={styles.serviceTitleView}>
                                        <Icon name={'check'} size={16} color={'green'} />
                                        <Text style={styles.servicoTitle}>{item.title}</Text>
                                    </View>
                                    <Text style={styles.servicoDesc}>• {item.desc}</Text>
                                </View>
                            )
                        })
                    }

                    <View style={styles.hasMaterialView}>
                        <Icon name={'wrench'} size={18} color={'silver'} />
                        <Text style={styles.hasMaterialText}>Material incluso:{orcamento.hasMaterial ? 'Sim' : 'Não'}</Text>
                    </View>

                    <View style={styles.servicoLocalView}>
                        <Icon name={'map-marker'} size={18} color={'#bf0000'} />
                        <Text style={styles.localServicoText}>{orcamento.local}</Text>
                    </View>

                </View>
                <View style={styles.totalPriceView}>
                    <Text style={styles.totalPrice}>Valor Total: R$ {orcamento.price}</Text>
                </View>

                <View style={styles.rodapeView}>
                    <View style={styles.dataRodapeView}>
                        <Text style={styles.textRodape}>Data de emissão: 09/07/2025</Text>
                        <Text style={styles.textRodape}>Orçamento Válido por 30 dias</Text>
                    </View>
                    <View styles={styles.agradecimentoView}>
                        <Text style={styles.textRodape}>Obrigado pela preferência</Text>
                        <Text style={styles.amConstrucoesText}>AM - Construções</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => enabledModal()}
                style={styles.buttonClosePreview}
            >
                <Text>Fechar Prévia</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default PreviewModal;