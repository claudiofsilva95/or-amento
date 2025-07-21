import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    overlay: {
        flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)'
    },
    container: {
        backgroundColor: '#aaaaaa', padding: 20, borderRadius: 10, width: '80%'
    },
    message: {
        fontSize: 16, marginBottom: 20, textAlign: 'center'
    },
    buttons: {
        flexDirection: 'row', justifyContent: 'space-between'
    },
    button: {
        padding: 10, borderRadius: 5, marginHorizontal: 5
    },
    buttonCancelar: {
        backgroundColor: '#660000'
    },
    buttonConfirmar: {
        backgroundColor: '#005b0b'
    },
    buttonText:{
        color: '#ddd'
    }
});

export { styles };