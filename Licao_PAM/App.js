import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [mensagem, setMensagem] = useState('Olá, seja bem-vindo!');
  const [mensagem2, setMensagem2] = useState('Ficamos muito felizes de te receber!');
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{mensagem}</Text>
      <Button
        title="Clique aqui"
        onPress={() => setMensagem('Você clicou no botão!')}/>
        <Text style={styles.texto}>{mensagem2}</Text>
        <Button
        title="Clique aqui"
        onPress={() => setMensagem2('Ao clicar a mensagem muda')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 24,
    marginBottom: 20,
  },
});