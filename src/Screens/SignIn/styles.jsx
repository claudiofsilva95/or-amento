import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    pageHome: {
        flex: 1,
        backgroundColor: '#EEEEEE',
    },
    homeContainer: {
        alignItems: 'center',
        marginTop: 80,
        justifyContent: 'center',
    },
    logoView: {

    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 40
    },
    formView: {
        width: '80%',
        marginTop: 70
    },
    input: {
        backgroundColor: '#D9D9D9',
        marginTop: 30,
        color: '#000',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 6,
    },
    inputUser: {

    },
    button: {
        backgroundColor: '#008a17',
        width: '50%',
        marginHorizontal: 'auto',
        marginTop: 70,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export { styles };
