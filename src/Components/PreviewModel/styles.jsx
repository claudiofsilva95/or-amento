import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalPreviaPage: {
        flex: 1,
        backgroundColor: '#dec3c3',
        justifyContent: 'center',
        alignItems: 'center'
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
        height: 100,
        width: 100,
        marginBottom: -20,
        marginTop: 10
    },
    cabTitle: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    cabCNPJ:{
        fontSize: 12
    },
    cabContato:{
        fontSize: 12
    },
    orcamentoDeServicos: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        borderStyle: 'dashed',
        width: '100%',
        textAlign: 'center'
    },
    orcamentoCorpo: {
        width: '100%',        
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
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    servicoDesc: {
        marginBottom: 10
    },
    hasMaterialView: {
        flexDirection: 'row',
        marginTop: 20
    },
    hasMaterialText: {
        marginLeft: 10,        
    },
    servicoLocalView: {
        flexDirection: 'row'
    },
    localServicoText:{
        marginLeft: 17,        
    },
    totalPriceView:{
        marginTop: 'auto'
    },
    totalPrice:{
        textAlign: 'center',        
        fontSize: 16,
        fontWeight: 'bold',        
    },
    rodapeView: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 'auto',
        marginBottom: 20,
        justifyContent: 'space-between',        
        alignItems: 'center'
    },
    dataRodapeView:{
        
    },
    agradecimentoView:{

    },
    textRodape:{
        fontSize: 8
    },
    amConstrucoesText:{
        fontWeight: 'bold',
        fontSize: 8
    }
    ,
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