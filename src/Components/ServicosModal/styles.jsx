import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalServicoPage: {
        backgroundColor: '#aaaaaaa5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    servicosContainer: {
        backgroundColor: '#aaa',
        flex: 1,        
        padding: 20,
        width: '100%'
    },
    servicosTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    servicoTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 10
    },
    servicoDesc:{
        marginBottom: 5,
        marginTop: 3
    },
    servicoView: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        borderStyle: 'dashed',
    },
    buttonFechar: {
        backgroundColor: '#850000',
        width: '50%',
        marginHorizontal: 'auto',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: 30
    },
    buttonFecharText: {
        color: '#ddd',
        fontSize: 16,
        fontWeight: 'bold'


    }


});


export { styles };