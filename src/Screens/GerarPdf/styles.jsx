import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    pageGerarPdf: {
        flex: 1,
        backgroundColor: '#ccc'
    },
    gerarPdfContainer: {
        flex: 1,
        alignItems: 'center',
    },
    buttonsView: {
        marginVertical: 'auto',        
    },
    button: {
        height: 100,
        backgroundColor: '#777',
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        elevation: 6,
        borderRadius: 10
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonHome: {
        marginBottom: 100,
        backgroundColor: '#a00000',
        width: 150,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonHomeText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#eee'
    }
});


export { styles };