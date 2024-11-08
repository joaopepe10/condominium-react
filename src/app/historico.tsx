import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { Link } from 'expo-router';

type Status = 'emAberto' | 'pago' | 'atrasado';
type MesesStatus = {
    Janeiro: Status;
    Fevereiro: Status;
    Marco: Status;
    Abril: Status;
    Maio: Status;
    Junho: Status;
    Julho: Status;
    Agosto: Status;
    Setembro: Status;
    Outubro: Status;
    Novembro: Status;
    Dezembro: Status;
  };

export default function Historico() {
  // Estado para controlar o status de pagamento de cada mês
  const [mesesStatus, setMesesStatus] = useState<MesesStatus>({
    Janeiro: 'emAberto',
    Fevereiro: 'emAberto',
    Marco: 'emAberto',
    Abril: 'emAberto',
    Maio: 'emAberto',
    Junho: 'emAberto',
    Julho: 'emAberto',
    Agosto: 'emAberto',
    Setembro: 'emAberto',
    Outubro: 'emAberto',
    Novembro: 'emAberto',
    Dezembro: 'emAberto'
  });

  // Função para simular o envio de comprovante e atualizar o status do mês
  const enviarComprovante = (mes: keyof MesesStatus) => {
    // Enviar comprovante e atualizar o status do mês
    setMesesStatus((prevStatus) => ({
      ...prevStatus,
      [mes]: 'pago'
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerContainer}>HISTÓRICO DE PAGAMENTOS</Text>
      <ScrollView style={styles.elementos}>
        <View style={styles.mesesContainer}>
          {Object.keys(mesesStatus).map((mes) => (
            <TouchableOpacity
              key={mes}
              style={[styles.mes, styles[mesesStatus[mes]]]}
              onPress={() => enviarComprovante(mes)}
            >
              <Text>{mes}</Text>
              <Text>{`10/${Object.keys(mesesStatus).indexOf(mes) + 1}/2024`}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
              <Link href={"/enviar_comprovante"} asChild>
                  <TouchableOpacity>
                      <Text style={styles.buttonText}>Enviar Comprovante</Text>
                  </TouchableOpacity>
              </Link>
          </View>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B5D2FF',
  },
  elementos: {
    flexDirection: 'column'
  },
  headerContainer: {
    width: '100%',
    backgroundColor: '#4071D1',
    paddingVertical: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff'
  },
  mesesContainer: {
    marginTop: 80,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  mes: {
    padding: 15,
    margin: 5,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
  },
  emAberto: {
    backgroundColor: '#FCF6BD',
  },
  pago: {
    backgroundColor: '#C7EFCF',
  },
  atrasado: {
    backgroundColor: '#F1A7A7',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0093d1',
    padding: 15,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },  
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
