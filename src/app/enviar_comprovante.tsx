import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default function UploadProof() {
  const [file, setFile] = useState(null);

  // Função para selecionar o arquivo
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['application/pdf', 'image/*'], // Aceita PDF e imagens
      });

      if (result.type === 'success') {
        setFile(result);
      } else {
        Alert.alert("Erro", "Seleção de arquivo cancelada.");
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível selecionar o arquivo.");
    }
  };

  // Função para enviar o arquivo para o backend
  const uploadFile = async () => {
    if (!file) {
      Alert.alert("Erro", "Nenhum arquivo selecionado.");
      return;
    }

    const formData = new FormData();
    formData.append('file', {
      uri: file.uri,
      name: file.name,
      type: file.mimeType || 'application/octet-stream', // Tipo de arquivo
    });

    try {
      const response = await fetch(`http://10.0.2.2:8080/apartments/send-proof/12`, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      if (response.ok) {
        Alert.alert("Sucesso", "Arquivo enviado com sucesso!");
      } else {
        const errorData = await response.json();
        Alert.alert("Erro", errorData.message || "Erro ao enviar o arquivo.");
      }
    } catch (error) {
      Alert.alert("Erro", "Erro de conexão com o servidor.");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Selecionar Arquivo" onPress={pickDocument} />
      {file && (
        <Text style={{ marginTop: 10 }}>Arquivo selecionado: {file.name}</Text>
      )}
      <Button title="Enviar Arquivo" onPress={uploadFile} />
    </View>
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '80%',
        marginBottom: 20,
      },
      button: {
        backgroundColor: '#0093d1',
        padding: 15,
        borderRadius: 5,
        width: '45%',
        alignItems: 'center',
      }
});