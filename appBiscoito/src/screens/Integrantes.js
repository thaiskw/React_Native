import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


export default function Integrantes({ navigation }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Integrantes</Text>
      <Image source={require('../assets/eu.jpg')} style={estilos.fotos} />
      <Image source={require('../assets/julia.jpg')} style={estilos.fotos} />
      <Image source={require('../assets/nicole.jpg')} style={estilos.fotos} />
      <TouchableOpacity 
        style={[estilos.botao, {marginTop: 15}]}
        onPress={() => navigation.goBack()}
      >
        <Text style={estilos.btnTexto}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  texto: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30
  },
  botao: {
    backgroundColor: '#dd7b22',
    padding: 10,
    borderRadius: 10
  },
  btnTexto: {
    color: '#fff',
    fontWeight: 'bold'
  },
    fotos: {
    width: 200,
    height: 200,
  }
});