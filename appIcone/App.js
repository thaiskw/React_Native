import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextComponent, } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function App() {

  const mostrarMensagem = () => {
    alert('Botão pressionado!')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.TextComponent}>Bem-Vindo!</Text>
      <TouchableOpacity onPress={mostrarMensagem} style={styles.btn}>
        <AntDesign name="check" size={30} color='black'></AntDesign>
        <Text style={styles.btnTexto}>Pressione aqui</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: 'pink',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    margin: 20,
    borderWidth: 3,
    borderColor: 'purple',
    borderRadius: 10,
  },
  btnTexto: {
    fontSize: 20,
    color: 'black',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  TextComponent: {
    fontSize: 45,
    color: 'white',
    marginBottom: 150,
  },
});
