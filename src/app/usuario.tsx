import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';

export default function TelaInicial() {
  const { id, name, email, phoneNumber, apartmentNumber } = useLocalSearchParams();

  const formattedName = name ? name.replace(/\b\w/g, char => char.toUpperCase()) : '';
  const formattedPhoneNumber = phoneNumber ? phoneNumber.replace(/^(\d{2})(\d{4,5})(\d{4})$/, '($1) $2-$3') : '';

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>ÁREA DO USUÁRIO</Text>
      </View>

      <View style={styles.userContainer}>
      <Image source={require('../app/images/ImageUser.png')} style={styles.imageUser} />

        <Text style={styles.username}>Nome: {formattedName}</Text>
        <Text style={styles.username}>E-mail: {email}</Text>
        <Text style={styles.username}>Celular: {formattedPhoneNumber}</Text>
        <Text style={styles.username}>Apartamento: {apartmentNumber}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Link href="/historico" asChild>
            <TouchableOpacity>
              <Text style={styles.buttonText}>HISTÓRICO</Text>
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
    backgroundColor: '#B5D2FF',
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
  headerContainer: {
    width: '100%',
    backgroundColor: '#4071D1',
    paddingVertical: 10,
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  userContainer: {
    width: '85%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 50,
    borderWidth: 1,
    borderColor: '#000000',
    marginTop: 20, 
  },
  imageUser: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
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
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  footerContainer: {
    width: '100%',
    backgroundColor: '#4071D1',
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
