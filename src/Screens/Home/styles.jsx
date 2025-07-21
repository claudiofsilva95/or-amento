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
        marginHorizontal: 'auto',
        alignItems: 'center'
    },
    logo: {
        marginTop: 50,
    },
    buttonsView: {        
        height: 100,
        marginTop: 170
    },
    button: {        
        height: 70,
        marginBottom: 20,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    buttonAddOrcamento: {
        backgroundColor: '#888',
    },
    buttonAddRecibo: {
        backgroundColor: '#007308'
    },
    buttonText:{
        fontSize: 16,
        fontWeight: 'bold'
    }
});


export { styles };