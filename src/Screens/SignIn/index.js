import React, { useContext, useState } from "react";
import { View, Text, Image, TextInput, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { AuthContext } from "../../contexts/AuthContext";

const SignIn = () => {
    const { signIn } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const entrar = () => {
        signIn(email, password);
        setEmail('');
        setPassword('')
    }

    return (
        <View style={{ flex: 1 }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "android" ? 60 : 0}
            >
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.homeContainer}>
                        <View style={styles.logoView}>
                            <Image source={require("../../assets/imgs/logo.png")} />
                        </View>

                        <Text style={styles.title}>ORÇAMENTO</Text>

                        <View style={styles.formView}>
                            <TextInput
                                style={[styles.inputUser, styles.input]}
                                placeholder="CPF ou CNPJ"
                                placeholderTextColor="#000"
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                                autoCapitalize="none"
                            />
                            <TextInput
                                style={[styles.inputPassword, styles.input]}
                                placeholder="SENHA"
                                placeholderTextColor="#000"
                                secureTextEntry
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                                autoCapitalize="none"
                            />
                            <TouchableOpacity
                                onPress={() => entrar(email, password)}
                                style={styles.button}
                            >
                                <Text style={styles.buttonText} >Entrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
};

export default SignIn;
