import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    pageHome: {
        flex: 1,
        backgroundColor: '#ccc',
    },

    homeContainer: {
        marginTop: 20,
        flex: 1,
        width: '90%',
        marginHorizontal: 'auto'
    },
    homeTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    inputView: {
        // backgroundColor: '#777',
        marginBottom: 20
    },
    inputText: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#aaa',
        marginTop: 5,
        borderWidth: 2,
        borderColor: '#444',
        color: '#000',
    },
    inputViewTitle: {
        marginTop: 30
    },
    descView: {

    },
    descText: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 5
    },
    descInput: {
        backgroundColor: '#aaa',
        borderWidth: 2,
        borderColor: '#444',
        height: 130,
        textAlignVertical: 'top',
        color: '#000'
    },
    adicionarServicosView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonAddService: {
        backgroundColor: '#005ef6',
        marginTop: 20,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#002869'
    },
    buttonAddServiceText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#ddd'
    },
    servicoAdicionadoButton: {
        backgroundColor: '#007100',
        flexDirection: 'row',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    numServiceView: {
        backgroundColor: '#b70000',
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 30,
        borderRadius: 15,
        marginRight: 5
    },
    numService:{
        fontWeight: 'bold'
    },
    textService:{
        textAlign: 'center',
        fontWeight: 'bold',
        marginRight: 5
    },
    buttonWithMaterial: {
        marginTop: -10,
        backgroundColor: '#aaa',
        width: '50%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonWithMaterialText: {
        fontWeight: 'bold'
    },
    buttonContinue: {
        backgroundColor: '#3DB864',
        width: '50%',
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#358d51',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto'
    }
});


export { styles };