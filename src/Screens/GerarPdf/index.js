import React, { useState, useContext } from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Modal,
  Alert,
  Platform,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import PreviewModal from "../../Components/PreviewModel";
import { OrcamentoContext } from "../../contexts/OrcamentoContext";
import RNHTMLtoPDF from "react-native-html-to-pdf";
// import RNFS from "react-native-fs"; // <-- REATIVE E ADICIONE ESTA LINHA para usar o sistema de arquivos
// import SendIntentAndroid from "react-native-send-intent"; // Mantenha comentada ou remova
// import Share from 'react-native-share'; // <-- REMOVA OU COMENTE ESTA LINHA se não for mais usar o compartilhamento
import { useConfirm } from "../../Components/ConfirmModalContext";

const GerarPdf = () => {
  const navigation = useNavigation();
  const [modalPreviaEnabled, setModalPreviaEnabled] = useState(false);

  const { orcamento, servicos, resetarOrcamento, preview, alteraPreview } =
    useContext(OrcamentoContext);
  const { confirm } = useConfirm();

  const gerarPDF = async () => {
    try {
      const html = `
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; background-color: #f3f3f3; padding: 0; margin: 0; }
          .content { padding: 20px; display: flex; flex-direction: column; min-height: 100vh; box-sizing: border-box; }
          .cab { text-align: center; }
          .title { font-size: 14px; font-weight: bold; }
          .info { font-size: 12px; margin-bottom: 2px; }
          .section-title { font-size: 22px; font-weight: bold; margin: 20px 0; text-align: center; }
          .dash { border-bottom: 1px dashed #000; }
          .service { border-bottom: 1px dashed #000; margin-bottom: 10px; padding-bottom: 5px; }
          .service-title { font-weight: bold; font-size: 16px; margin: 5px 0; }
          .checkView { display: flex; align-items: center; }
          .checkGreen { color: green; margin-right: 5px; }
          .service-desc { margin-left: 10px; font-size: 14px; }
          .row { display: flex; flex-direction: row; align-items: center; margin: 10px 0; }
          .label { font-weight: bold; margin-right: 5px; }
          .price { text-align: center; font-size: 16px; font-weight: bold; margin-top: auto; margin-bottom: 20px; }
          .footer { display: flex; justify-content: space-between; font-size: 10px; margin-top: auto; border-top: 1px solid #ccc; padding-top: 10px; }
          .rodape-text { font-size: 14px; }
          .amConstrucoes { font-weight: bold; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="content">
          <div class="cab">
            <div class="title">AM - Construções</div>
            <div class="info">CNPJ: 12.345.678/0001-90</div>
            <div class="info">Ailton | (11) 91234-5678</div>
          </div>

          <div class="section-title">Orçamento de Serviços</div>
          <div class="dash"></div>

          ${servicos.map(
            (servico) => `
            <div class="service">
              <div class="checkView">
                <div class="checkGreen">✔</div>
                <div class="service-title">${servico.title}</div>
              </div>
              <div class="service-desc">• ${servico.desc}</div>
            </div>
          `
          ).join("")}

          <div class="row"><span class="label">🔧 Material incluso:</span><span>${orcamento.hasMaterial ? "Sim" : "Não"}</span></div>
          <div class="row"><span class="label">📍 Local:</span><span>${orcamento.local || "-"}</span></div>

          <div class="price">Valor Total: R$ ${orcamento.price}</div>

          <div class="footer">
            <div>
              <div class="rodape-text">Data de emissão: ${new Date().toLocaleDateString()}</div>
              <div class="rodape-text">Orçamento válido por 30 dias</div>
            </div>
            <div class="finalDiv">
              <div class="rodape-text">Obrigado pela preferência</div>
              <div class="amConstrucoes">AM - Construções</div>
            </div>
          </div>
        </div>
      </body>
      </html>
      `;

      // Define o nome do arquivo com timestamp para ser único
      const fileName = `orcamento_${Date.now()}.pdf`;

      // Define o diretório de destino
      // RNFS.DownloadDirectoryPath para Android
      // RNFS.DocumentDirectoryPath para iOS (geralmente acessível via "Arquivos" no iOS)
      const targetDirectory = Platform.select({
        ios: RNFS.DocumentDirectoryPath,
        android: RNFS.DownloadDirectoryPath, // Mais comum para documentos baixados
      });

      // Cria o caminho completo do arquivo de destino
      const targetFilePath = `${targetDirectory}/${fileName}`;

      const options = {
        html,
        fileName: `orcamento_${Date.now()}`, // O RNHTMLtoPDF ainda precisa de um fileName temporário
        directory: "Documents", // RNHTMLtoPDF gera em um temp dir, vamos copiá-lo
        base64: false,
      };

      const file = await RNHTMLtoPDF.convert(options);

      if (!file.filePath) {
        throw new Error("Arquivo PDF não foi gerado pelo conversor.");
      }

      // Agora, copie o arquivo gerado para o diretório de destino permanente
      await RNFS.copyFile(file.filePath, targetFilePath);

      // Opcional: Remova o arquivo temporário criado pelo RNHTMLtoPDF
      await RNFS.unlink(file.filePath);

      Alert.alert(
        "Sucesso",
        `PDF salvo em:\n${targetFilePath}`, // Informa o caminho completo
        [
          {
            text: "OK",
            onPress: () => {
              // Ações a serem executadas APÓS o usuário clicar em OK no alerta
              resetarOrcamento(); // Chama a função para resetar o orçamento
              navigation.navigate("Home"); // Navega de volta para a tela Home
            },
          },
        ]
      );      
    } catch (error) {
      console.error("Erro ao gerar ou salvar PDF:", error);
      Alert.alert("Erro", "Não foi possível gerar ou salvar o PDF. Verifique as permissões de armazenamento e tente novamente.");
    }
  };

  const handleInicio = async () => {
    const confirmed = await confirm(
      "Ao voltar para o início, irá apagar os dados do orçamento.\nDeseja continuar?"
    );
    if (confirmed) {
      resetarOrcamento();
      navigation.navigate("Home");
    }
  };

  const handleGeraPdf = async () => {
    if (!preview) {
      Alert.alert("Atenção", "Veja a Prévia do Orçamento para poder gerar o PDF.");
      return;
    }
    const confirmed = await confirm("Confirme para gerar e salvar o PDF.");
    if (confirmed) {
      gerarPDF();
    }
  };

  return (
    <SafeAreaView style={styles.pageGerarPdf}>
      <View style={styles.gerarPdfContainer}>
        <View style={styles.buttonsView}>
          <TouchableOpacity
            onPress={() => {
              alteraPreview();
              setModalPreviaEnabled(true);
            }}
            style={[styles.button, styles.buttonPrevia]}
          >
            <Text style={styles.buttonText}>Prévia do Orçamento</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Orcamento")}
            style={[styles.button, styles.buttonEditar]}
          >
            <Text style={styles.buttonText}>Editar Orçamento</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleGeraPdf}
            style={[styles.button, styles.buttonGerarPdf]}
          >
            <Text style={styles.buttonText}>Gerar PDF</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleInicio} style={styles.buttonHome}>
          <Text style={styles.buttonHomeText}>Início</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={modalPreviaEnabled} transparent={true} animationType="fade">
        <PreviewModal enabledModal={() => setModalPreviaEnabled(false)} />
      </Modal>
    </SafeAreaView>
  );
};

export default GerarPdf;