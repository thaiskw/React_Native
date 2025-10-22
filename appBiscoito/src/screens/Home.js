import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
// Estado para a imagem do biscoito
const [img, setImg] = useState(require('../assets/biscoitoFechado.jpg'));

// Estado para o texto da frase
const [textoFrase, setTextoFrase] = useState('Texto aqui!');


  // Array de frases
  let frases = [
    'A vida trará coisas boas se tiveres paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Gente boa é gente que faz a diferença na vida da gente.'
  ];
  

  // Função para quebrar o biscoito
  function quebrarBiscoito() {
    // Gera um número aleatório para selecionar uma frase
    let numeroAleatorio = Math.floor(Math.random() * frases.length);

    // Atualiza a imagem do biscoito para o aberto
    setImg(require('../assets/biscoitoAberto.jpg'));

    // Atualiza o texto da frase com a frase selecionada
    setTextoFrase(' "' + frases[numeroAleatorio] + '" ');
  }
 

  return (
    <View style={estilos.container}>
      <Image source={img} style={estilos.img} />

      <Text style={estilos.textoFrase}>{textoFrase}</Text>

      <TouchableOpacity style={estilos.botao} onPress={quebrarBiscoito}>
        <Text style={estilos.btnTexto}>Abrir Biscoito</Text>
      </TouchableOpacity>

      {/* Botão para navegar para a tela Sobre */}
      <TouchableOpacity 
        style={[estilos.botao, { backgroundColor: '#999', marginTop: 15 }]}
        onPress={() => navigation.navigate('Sobre')}
      >
        <Text style={estilos.btnTexto}>Ir para Sobre</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 18,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 200,
    height: 45,
    backgroundColor: '#dd7b22',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});

