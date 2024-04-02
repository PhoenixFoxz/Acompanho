import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import ImageHome from '../../assets/home.png'

export default function Inicio() {
  return (
    <View style={styles.container}>
      <Image source={ImageHome} style={styles.imagem}/>
      <Text style={styles.title}>Acompanho</Text>
      <Text style={styles.subtitle}>A plataforma que acompanha seus familiares nas consultas médicas.</Text>
      <Pressable>
        <Text style={styles.botao}>Início</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3FAFE',
  },
  imagem: {
    width: "68%",
    height: "43%",
    marginBottom: 30,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    marginHorizontal: 25,
    textAlign: "center",
    fontSize: 23,
    color: '#888',
  },
  botao: {
    backgroundColor: "#6D9DC5",
    padding: 15,
    paddingHorizontal: 80,
    borderRadius: 50,
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});