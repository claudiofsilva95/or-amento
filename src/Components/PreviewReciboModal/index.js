import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { useContext } from 'react';
import { ReciboContext } from '../../contexts/ReciboContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const PreviewReciboModal = ({ enabledModal }) => {
    const { recibo, alteraPreview } = useContext(ReciboContext);

    const hoje = new Date();
    const meses = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];

    const dia = hoje.getDate();
    const mes = meses[hoje.getMonth()];
    const ano = hoje.getFullYear();

    const dataCompleta = `São Paulo, ${dia} de ${mes} de ${ano}`;

    const text = `Eu, Ailton Moreira dos Santos, declaro que recebi do ${recibo.tomador}, inscrito(a) no CNPJ/CPF sob o nº ${recibo.documento}, o valor de R$ ${recibo.price},00.`



    return (
        <SafeAreaView style={styles.modalPreviaPage}>
            <Text style={styles.previaTitle}>Prévia do Recibo</Text>

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


                <Text style={styles.orcamentoDeServicos}>Recibo de Pagamento</Text>

                <View style={styles.orcamentoCorpo}>

                    <Text style={styles.textoServico}>
                        {text}
                    </Text>

                    {
                        recibo.obs && (
                            <Text style={styles.obs}>
                                Obs: {recibo.obs}
                            </Text>
                        )
                    }

                    <Text style={styles.servicoExecutado}>
                        Serviço(s) executado(s)
                    </Text>
                    {
                        recibo.servicos.map((item) => {
                            return (
                                <View style={styles.servicoView} key={item.id}>
                                    <View style={styles.serviceTitleView}>
                                        <Icon name={'check'} size={16} color={'green'} />
                                        <Text style={styles.servicoTitle}>{item.title}</Text>
                                    </View>
                                    <Text style={styles.servicoDesc}>• {item.desc}</Text>
                                </View>
                            )
                        })
                    }

                    <View style={styles.servicoLocalView}>
                        <Icon name={'map-marker'} size={16} color={'#bf0000'} />
                        <Text style={styles.localServicoText}>{recibo.local}</Text>
                    </View>

                </View>
                <View style={styles.assinaturaView}>
                    <Text style={styles.assinatura}>Ailton Moreira dos Santos</Text>
                    <Text style={styles.assinaturaText}>Assinatura</Text>
                </View>

                <View style={styles.dadosBancarios}>
                    <Text style={styles.textDadosBancarios}>Dados bancários</Text>
                    <Text style={styles.textDadosBancarios}>Nome: Ailton Moreira dos Santos</Text>
                    <Text style={styles.textDadosBancarios}>Banco: Caixa Econômica Federal</Text>
                    <Text style={styles.textDadosBancarios}>Agência: 1652</Text>
                    <Text style={styles.textDadosBancarios}>Conta/P: 000925378679-0</Text>
                    <Text style={styles.textDadosBancarios}>Pix:11 966116488</Text>
                </View>

                <View style={styles.rodapeView}>
                    <View style={styles.dataRodapeView}>
                        <Text style={styles.textRodape}></Text>
                        <Text style={styles.textRodape}></Text>
                    </View>
                    <View styles={styles.agradecimentoView}>
                        <Text style={styles.textRodape}>São Paulo, {dataCompleta}</Text>
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

export default PreviewReciboModal;