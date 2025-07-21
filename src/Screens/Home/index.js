import React, { } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.pageHome}>
            <View style={styles.homeContainer}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/imgs/logo.png')}
                />
                <View style={styles.buttonsView}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Orcamento')}
                        style={[styles.button, styles.buttonAddOrcamento]}
                    >
                        <Text style={styles.buttonText}>Criar um orçamento</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Recibo')}
                        style={[styles.button, styles.buttonAddRecibo]}
                    >
                        <Text style={styles.buttonText}>Criar um Recibo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home;