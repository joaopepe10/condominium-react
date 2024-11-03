import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';

export default function TelaDeCriacaoDeUsuario() {
  const [uri, setUri] = useState('http://10.0.2.2:8080');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [apartmentNumber, setApartmentNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreateAccount = async () => {
    if (!name || !email || !phoneNumber || !apartmentNumber || !username || !password || !confirmPassword) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }
  
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem");
      return;
    }
  
    const userData = {
      name,
      email,
      phoneNumber,
      apartmentNumber,
      username,
      password,
    };
  
    try {
      const response = await fetch(`${uri}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        
        // Tratar erros específicos, como duplicidade de email
        if (errorData.message.includes("Unique index or primary key violation")) {
          Alert.alert("Erro", "Email ou nome de usuário já existe. Tente outro.");
        } else {
          Alert.alert("Erro", errorData.message || "Ocorreu um erro ao criar a conta.");
        }
      } else {
        Alert.alert("Sucesso", "Conta criada com sucesso!");
      }
    } catch (error) {
      // Tratar erros de conexão ou outros
      Alert.alert("Erro", "Erro de conexão com o servidor. Tente novamente mais tarde.");
    }
  };
  

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
    
        <Image 
          source={require('../app/images/logoLogin.png')} 
          style={styles.logo} 
          resizeMode="contain"
        />

        <Text style={styles.label}>NOME</Text>
        <TextInput
          style={styles.input}
          placeholder="INSIRA SEU NOME"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>EMAIL</Text>
        <TextInput
          style={styles.input}
          placeholder="INSIRA SEU EMAIL"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>TELEFONE</Text>
        <TextInput
          style={styles.input}
          placeholder="INSIRA SEU TELEFONE"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>NÚMERO DO APARTAMENTO</Text>
        <TextInput
          style={styles.input}
          placeholder="INSIRA O NÚMERO DO APARTAMENTO"
          value={apartmentNumber}
          onChangeText={setApartmentNumber}
          keyboardType="numeric"
        />

        <Text style={styles.label}>USUÁRIO</Text>
        <TextInput
          style={styles.input}
          placeholder="INSIRA SEU USUÁRIO"
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.label}>SENHA</Text>
        <TextInput
          style={styles.input}
          placeholder="INSIRA SUA SENHA"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Text style={styles.label}>CONFIRMAR SENHA</Text>
        <TextInput
          style={styles.input}
          placeholder="CONFIRME SUA SENHA"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <View style={styles.buttonContainer}>
          <View style={styles.btx}>
            <TouchableOpacity onPress={handleCreateAccount}>
              <Text>Criar Conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#B5D2FF',
  },
  container: {
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  label: {
    padding: 5,
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginTop: 10,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#e0e0e0',
  },
  buttonContainer: {
    width: '80%',
    borderRadius: 5,
  },
  btx: {
    fontSize: 16,
    alignItems: 'center',
    backgroundColor: '#007FFF',
    padding: 10,
  }
});
