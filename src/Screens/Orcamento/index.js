import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, View, Text, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity, Pressable, Modal } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Header from "../../Components/Header";
import { OrcamentoContext } from "../../contexts/OrcamentoContext";
import ServicosModal from "../../Components/ServicosModal";

const Orcamento = () => {
    const navigation = useNavigation();

    const { salvarDadosOrcamento, adicionarServico, servicos, orcamento } = useContext(OrcamentoContext);

    const [title, setTitle] = useState('');
    const [local, setLocal] = useState(orcamento.local);
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState(orcamento.price);
    const [hasMaterial, setHasMaterial] = useState(orcamento.hasMaterial);
    const [servicosModalEnabled, setServicosModalEnabled] = useState(false);

    const salvaDados = () => {
        if (!local.trim() || !price.trim()) {
            alert('Preenchas campos necessários');
        } else {
            salvarDadosOrcamento(local, price, hasMaterial);
            navigation.navigate('GerarPdf')
        }
    }

    const addService = () => {
        if (!title.trim() || !desc.trim()) {
            alert('Preencha todos os campos')
        } else {
            adicionarServico(title, desc);
            setTitle('');
            setDesc('');
        }
    }

    return (
        <SafeAreaView style={styles.pageHome}>
            <View style={styles.homeContainer}>
                <Header title='Orçamento' />
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
                                value={title}
                                onChangeText={(text) => setTitle(text)}
                            />
                        </View>

                        <View style={styles.descView}>
                            <Text style={styles.descText}>Descrição</Text>
                            <TextInput
                                style={styles.descInput}
                                multiline
                                numberOfLines={10}
                                cursorColor='#000'
                                value={desc}
                                onChangeText={(text) => setDesc(text)}
                            />
                        </View>

                        <View style={styles.adicionarServicosView}>
                            <TouchableOpacity
                                onPress={() => addService()}
                                style={styles.buttonAddService}
                            >
                                <Text style={styles.buttonAddServiceText}>Adicionar Serviço</Text>
                            </TouchableOpacity>

                            {
                                servicos.length !== 0 && (
                                    <TouchableOpacity
                                        onPress={() => setServicosModalEnabled(true)}
                                        style={styles.servicoAdicionadoButton}
                                    >
                                        <View style={styles.numServiceView}>
                                            <Text style={styles.numService}>{servicos.length}</Text>
                                        </View>
                                        {
                                            servicos.length > 1 ?
                                                <Text style={styles.textService}>{'Serviços \nAdicionados'}</Text>
                                                :
                                                <Text style={styles.textService}>{'Serviço \nAdicionado'}</Text>
                                        }
                                    </TouchableOpacity>
                                )


                            }

                        </View>

                        <View style={styles.inputView}>
                            <Text style={styles.inputText}>Local do serviço</Text>
                            <TextInput
                                style={styles.input}
                                cursorColor='#000'
                                value={local}
                                onChangeText={(text) => setLocal(text)}
                            />
                        </View>

                        <View style={styles.inputView}>
                            <Text style={styles.inputText}>Valor Total R$</Text>
                            <TextInput
                                style={styles.input}
                                cursorColor='#000'
                                value={price}
                                onChangeText={(text) => setPrice(text)}
                                keyboardType="numeric"

                            />
                        </View>
                        <Pressable
                            onPress={() => setHasMaterial(prev => !prev)}
                            style={({ pressed }) => [
                                styles.buttonWithMaterial,
                                hasMaterial && { backgroundColor: '#357ABD' },
                                pressed && { opacity: 0.7 } // ou qualquer outro feedback visual
                            ]}
                        >
                            <Text style={styles.buttonWithMaterialText}>{hasMaterial ? 'Com Material' : 'Sem Material'}</Text>
                        </Pressable>

                        <TouchableOpacity
                            onPress={() => salvaDados()}
                            style={styles.buttonContinue}
                        >
                            <Text style={styles.buttonContinueText}>Continuar</Text>
                        </TouchableOpacity>

                        <Modal visible={servicosModalEnabled} transparent={true} animationType="fade">
                            <ServicosModal setEnabled={() => setServicosModalEnabled(false)} />
                        </Modal>


                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )
}

export default Orcamento;