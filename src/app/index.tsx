import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, Image, Alert } from 'react-native';
import { Link, router } from 'expo-router'

export default function TelaDeLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {

    if(!username || !password){
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }
    const loginData = {
      username,
      password
    }

    try {
      const response = await fetch('http://10.0.2.2:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData)
      });

      if(!response.ok){
        Alert.alert("Erro", "Username ou senha incorretos!")
      }else {
        router.push('/usuario')
      }
    } catch(error) {
      Alert.alert("Erro", "Houve algum erro inesperado, tente novamente mais tarde.")
    }
  };

  return (
    <View style={styles.container}>
        <Image 
          source={require('../app/images/logoLogin.png')} 
          style={styles.logo} 
          resizeMode="contain"
        />

        <Text style={styles.label}>USUÁRIO</Text>
        <TextInput
          style={styles.input}
          placeholder="INSIRA SEU REGISTRO DE USUÁRIO" 
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.label}>SENHA</Text>
        <TextInput
          style={styles.input}
          placeholder="INSIRA SUA SENHA DE USUÁRIO"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity onPress={() => alert('Esqueci a senha')}>
          <Text style={styles.forgotPassword}>Esqueci a senha</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>

        <View style={styles.btnLoginCadastro}>
          <View style={styles.btx}>
            <TouchableOpacity onPress={login}>
              <Text>Login</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.btx}>
              <Link href={"/cadastro"} asChild>
                  <TouchableOpacity>
                      <Text>Cadastrar</Text>
                  </TouchableOpacity>
              </Link>
            </View>
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
  btnLoginCadastro:{
    flexDirection: "column",
    gap: 5,
    fontWeight: 'bold',    
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
    marginRight: '10%',
    color: '#007FFF',
    marginBottom: 20,
    fontWeight: 'bold',

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
    color: '007FFF',
    fontWeight: '200',
  }
});
