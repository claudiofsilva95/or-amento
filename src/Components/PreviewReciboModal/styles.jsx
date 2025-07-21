import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalPreviaPage: {
        flex: 1,
        backgroundColor: '#dec3c3',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },
    modalPreviaContainer: {
        backgroundColor: '#eee',
        height: '80%',
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 30
    },
    previaTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20
    },
    cab: {
        width: '100%',
        alignItems: 'center'
    },
    logoImg: {
        height: 80,
        width: 80,
        marginBottom: -20,
        marginTop: 10
    },
    cabTitle: {
        fontWeight: 'bold',
        fontSize: 12,
        marginTop: 5
    },
    cabCNPJ: {
        fontSize: 10
    },
    cabContato: {
        fontSize: 10
    },
    obs:{
        fontSize: 12,
        marginTop: 5
    },
    orcamentoDeServicos: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
        width: '100%',
        textAlign: 'center'
    },
    orcamentoCorpo: {
        width: '100%',
    },
    textoServico:{
        marginTop: 10,
        fontSize: 12
    },
    servicoExecutado: {
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 13
    },
    servicoView: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        borderStyle: 'dashed',
        width: '100%',
        marginTop: '10'
    },
    serviceTitleView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    servicoTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    servicoDesc: {
        marginBottom: 10,
        fontSize: 12
    },
    servicoLocalView: {
        flexDirection: 'row',
        marginTop: 30
    },
    localServicoText: {
        marginLeft: 12,
        fontSize: 12
    },
    assinaturaView: {
        marginTop: 'auto',
        alignItems: 'center'
    },
    assinatura: {
        textAlign: 'center',
        fontSize: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#000'
    },
    assinaturaText: {
        fontWeight: 'bold',
        marginTop: 5,
        fontSize: 10
    },
    rodapeView: {
        width: '100%',
        flexDirection: 'row',
        // marginTop: 'auto',
        marginBottom: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    dataRodapeView: {

    },
    agradecimentoView: {

    },
    textRodape: {
        fontSize: 8
    },
    amConstrucoesText: {
        fontWeight: 'bold',
        fontSize: 8
    },
    dadosBancarios:{
        marginRight: 'auto',
        borderColor: '#000',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 10        
    },
    textDadosBancarios:{
        fontSize: 8
    },
    buttonClosePreview: {
        backgroundColor: '#ad0000',
        width: 150,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 100,
    }
});

export { styles };