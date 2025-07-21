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
import PreviewReciboModal from "../../Components/PreviewReciboModal";
import { ReciboContext } from "../../contexts/ReciboContext";
import RNHTMLtoPDF from "react-native-html-to-pdf";
import RNFS from "react-native-fs"; // <-- REATIVE E ADICIONE ESTA LINHA para usar o sistema de arquivos
import { useConfirm } from "../../Components/ConfirmModalContext";

const GerarPdfRecibo = () => {
  const navigation = useNavigation();
  const [modalPreviaEnabled, setModalPreviaEnabled] = useState(false);

  const { recibo, servicos, resetarRecibo, preview, alteraPreview } = useContext(ReciboContext);
  const { confirm } = useConfirm();

  const gerarPDF = async () => {
    try {
      const hoje = new Date();
      const dia = hoje.getDate();
      const mesIndex = hoje.getMonth();
      const ano = hoje.getFullYear();
      const meses = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
      ];

      const html = `
              <html>
                <head>
                  <meta charset="UTF-8" />
                  <style>
                    body { font-family: Arial, sans-serif; padding: 20px; background-color: #f3f3f3; }
                    .cab { text-align: center; margin-bottom: 20px; }
                    .title { font-size: 16px; font-weight: bold; }
                    .info { font-size: 12px; margin-bottom: 2px; }
                    .section-title {
                      text-align: center;
                      font-size: 14px;
                      font-weight: bold;
                      margin-top: 20px;
                      margin-bottom: 10px;
                    }
                    .text { font-size: 12px; margin-bottom: 10px; }
                    .servico { margin-bottom: 10px; border-bottom: 1px dashed #000; padding-bottom: 5px; }
                    .servico-title { font-weight: bold; font-size: 13px; }
                    .servico-desc { font-size: 12px; margin-left: 10px; }
                    .assinatura { margin-top: 40px; text-align: center; font-size: 12px; }
                    .assinatura-linha { border-top: 1px solid #000; width: 200px; margin: 10px auto 0 auto; }
                    .banco { font-size: 10px; margin-top: 20px; border: 1px solid #000; padding: 10px; }
                    .rodape { text-align: right; font-size: 10px; margin-top: 30px; }
                  </style>
                </head>
                <body>
                  <div class="cab">
                    <img src="https://via.placeholder.com/80" />
                    <div class="title">AM - Construções</div>
                    <div class="info">CNPJ: 12.345.678/0001-90</div>
                    <div class="info">Ailton | (11) 91234-5678</div>
                  </div>

                  <div class="section-title">Recibo de Pagamento</div>

                  <div class="text">
                    Eu, Ailton Moreira dos Santos, declaro que recebi do <strong>${recibo.tomador}</strong>,
                    inscrito(a) no CNPJ/CPF sob o nº <strong>${recibo.documento}</strong>, o valor de
                    <strong>R$ ${recibo.price},00</strong>.
                  </div>

                  ${recibo.obs ? `<div class="text"><strong>Obs:</strong> ${recibo.obs}</div>` : ''}

                  <div class="section-title">Serviço(s) executado(s)</div>

                  ${recibo.servicos.map(s => `
                    <div class="servico">
                      <div class="servico-title">✔ ${s.title}</div>
                      <div class="servico-desc">• ${s.desc}</div>
                    </div>
                  `).join('')}

                  <div class="text"><strong>Local do serviço:</strong> ${recibo.local}</div>

                  <div class="assinatura">
                    <div class="assinatura-linha"></div>
                    Ailton Moreira dos Santos<br/>
                    Assinatura
                  </div>

                  <div class="banco">
                    <div><strong>Dados bancários:</strong></div>
                    <div>Nome: Ailton Moreira dos Santos</div>
                    <div>Banco: Caixa Econômica Federal</div>
                    <div>Agência: 1652</div>
                    <div>Conta/P: 000925378679-0</div>
                    <div>Pix: 11 966116488</div>
                  </div>

                  <div class="rodape">São Paulo, ${dia} de ${meses[mesIndex]} de ${ano}</div>
                </body>
              </html>
            `;


      // Define o nome do arquivo com timestamp para ser único
      const fileName = `recibo_${Date.now()}.pdf`;

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
        fileName: `recibo_${Date.now()}`, // O RNHTMLtoPDF ainda precisa de um fileName temporário
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
              resetarRecibo(); // Chama a função para resetar o orçamento
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
      resetarRecibo();
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
            <Text style={styles.buttonText}>Prévia do Recibo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Recibo")}
            style={[styles.button, styles.buttonEditar]}
          >
            <Text style={styles.buttonText}>Editar Recibo</Text>
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
        <PreviewReciboModal enabledModal={() => setModalPreviaEnabled(false)} />
      </Modal>
    </SafeAreaView>
  );
};

export default GerarPdfRecibo;