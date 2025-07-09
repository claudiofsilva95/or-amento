import React, { } from "react";
import { SafeAreaView, View, Text, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Home = () => {
    return (
        <SafeAreaView style={styles.pageHome}>
            <View style={styles.homeContainer}>
                <Text style={styles.homeTitle}>Orçamento</Text>
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={Platform.OS === "android" ? 60 : 0}
                >
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled" >
                        <View style={[styles.inputView, styles.inputViewTitle]}>
                            <Text style={styles.inputText}>Título</Text>
                            <TextInput
                                style={styles.input}
                                cursorColor='#000'
                            />
                        </View>
                        <View style={styles.inputView}>
                            <Text style={styles.inputText}>Local do serviço</Text>
                            <TextInput
                                style={styles.input}
                                cursorColor='#000'
                            />
                        </View>

                        <View style={styles.descView}>
                            <Text style={styles.descText}>Descrição</Text>
                            <TextInput
                                style={styles.descInput}
                                multiline
                                numberOfLines={10}
                                cursorColor='#000'
                            />
                        </View>

                        <TouchableOpacity style={styles.buttonAddService}>
                            <Text style={styles.buttonAddServiceText}>Adicionar Serviço</Text>
                        </TouchableOpacity>

                        <View style={styles.inputView}>
                            <Text style={styles.inputText}>Valor</Text>
                            <TextInput
                                style={styles.input}
                                cursorColor='#000'
                            />
                        </View>
                        <TouchableOpacity style={styles.buttonWithMaterial}>
                            <Text style={styles.buttonWithMaterialText}>Com Material</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonContinue}>
                            <Text style={styles.buttonContinueText}>Continuar</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )
}

export default Home;