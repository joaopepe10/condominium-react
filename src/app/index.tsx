import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, Image, Pressable } from 'react-native';
import { Link } from 'expo-router'

export default function TelaDeLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Logo ou imagem no topo */}
      <Image 
        source={require('../app/images/logoLogin.png')} 
        style={styles.logo} 
        resizeMode="contain"
       />

      {/* Campo de usuário */}
      <Text style={styles.label}>USUÁRIO</Text>
      <TextInput
        style={styles.input}
        placeholder="INSIRA SEU REGISTRO DE USUÁRIO" 
        value={username}
        onChangeText={setUsername}
      />

      {/* Campo de senha */}
      <Text style={styles.label}>SENHA</Text>
      <TextInput
        style={styles.input}
        placeholder="INSIRA SUA SENHA DE USUÁRIO"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Esqueci a senha */}
      <TouchableOpacity onPress={() => alert('Esqueci a senha')}>
        <Text style={styles.forgotPassword}>Esqueci a senha</Text>
      </TouchableOpacity>

      {/* Botão de login */}
      <View style={styles.buttonContainer}>
    
      <View style={styles.btx}>
        <Link href={"/usuario"} asChild>
            <TouchableOpacity>
                <Text>Login</Text>
            </TouchableOpacity>
        </Link>
      </View>
    

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B5D2FF',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 40,

  },
  label: {
    padding:5,
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
  forgotPassword: {
    width:100,
    alignSelf: 'flex-end',
    marginRight: '10%',
    color: '#007FFF',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    borderRadius: 5,
  },
  btx: {
    alignItems: 'center',
    backgroundColor: '#007FFF',
    padding: 10,
    color: '007FFF'
  }
});
