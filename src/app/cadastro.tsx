import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { Link } from 'expo-router';

export default function TelaDeCriacaoDeUsuario() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [apartmentNumber, setApartmentNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreateAccount = () => {
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem");
      return;
    }

    // Continua o fluxo para criar a conta
    Alert.alert("Sucesso", "Conta criada com sucesso!");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Logo ou imagem no topo */}
        <Image 
          source={require('../app/images/logoLogin.png')} 
          style={styles.logo} 
          resizeMode="contain"
        />

        {/* Campo de nome */}
        <Text style={styles.label}>NOME</Text>
        <TextInput
          style={styles.input}
          placeholder="INSIRA SEU NOME"
          value={name}
          onChangeText={setName}
        />

        {/* Campo de email */}
        <Text style={styles.label}>EMAIL</Text>
        <TextInput
          style={styles.input}
          placeholder="INSIRA SEU EMAIL"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {/* Campo de telefone */}
        <Text style={styles.label}>TELEFONE</Text>
        <TextInput
          style={styles.input}
          placeholder="INSIRA SEU TELEFONE"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />

        {/* Campo de número do apartamento */}
        <Text style={styles.label}>NÚMERO DO APARTAMENTO</Text>
        <TextInput
          style={styles.input}
          placeholder="INSIRA O NÚMERO DO APARTAMENTO"
          value={apartmentNumber}
          onChangeText={setApartmentNumber}
          keyboardType="numeric"
        />

        {/* Campo de usuário */}
        <Text style={styles.label}>USUÁRIO</Text>
        <TextInput
          style={styles.input}
          placeholder="INSIRA SEU USUÁRIO"
          value={username}
          onChangeText={setUsername}
        />

        {/* Campo de senha */}
        <Text style={styles.label}>SENHA</Text>
        <TextInput
          style={styles.input}
          placeholder="INSIRA SUA SENHA"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Campo de confirmação de senha */}
        <Text style={styles.label}>CONFIRMAR SENHA</Text>
        <TextInput
          style={styles.input}
          placeholder="CONFIRME SUA SENHA"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        {/* Botão de criação de conta */}
        <View style={styles.buttonContainer}>
          <View style={styles.btx}>
            <Link href={'/index'}>
              <TouchableOpacity onPress={handleCreateAccount}>
                <Text>Criar Conta</Text>
              </TouchableOpacity>            
            </Link>
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
