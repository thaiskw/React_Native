import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import imgPerfume from '../assets/premioPerfume.jpg';
import imgBrinquedos from '../assets/premioBrinquedos.jpg';
import imgRelogio from '../assets/premioRelogio.jpg';
import imgVoucher from '../assets/premioVoucher.jpg';
import imgWhey from '../assets/premioWhey.jpg';
import logo from '../assets/logoAppSorteio.png';

export default function Home({navigation}) {
  const [numeroSorteado, setNumeroSorteado] = useState(null);
  const [premio, setPremio] = useState(null);
  const [imgPremio, setImgPremio] = useState(logo);


const premios = [
  { nome: 'Perfume', img: imgPerfume },
  { nome: 'Brinquedos', img: imgBrinquedos },
  { nome: 'Relógio de pulso', img: imgRelogio },
  { nome: 'Voucher de desconto', img: imgVoucher },
  { nome: 'Whey Protein', img: imgWhey },
];


  function sortearPremio() {
    const numero = Math.floor(Math.random() * 5);
    setNumeroSorteado(numero + 1);
    setPremio(premios[numero].nome);
    setImgPremio(premios[numero].img);
  }


  function resetarSorteio() {
    setNumeroSorteado(null);
    setPremio(null);
    setImgPremio(logo);
  }

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>🎁 Sorteio de Prêmios 🎁</Text>

      <Image source={imgPremio} style={estilos.img} />

      {premio && (
        <Text style={estilos.textoPremio}>Você ganhou: {premio}!</Text>
      )}

      <TouchableOpacity style={estilos.botao} onPress={sortearPremio}>
        <Text style={estilos.textoBotao}>Sortear</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[estilos.botao, { backgroundColor: '#999' }]}
        onPress={resetarSorteio}
      >
        <Text style={estilos.textoBotao}>Tentar Novamente</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[estilos.botao, { backgroundColor: '#999', marginTop: 15 }]}
        onPress={() => navigation.navigate('Integrantes')}
      >
        <Text style={estilos.textoBotao}>Ir para Integrantes</Text>
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
    backgroundColor: '#fff',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffacf8ff',
    marginBottom: 20,
  },
  img: {
    width: 250,
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
  },
  textoPremio: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 200,
    height: 45,
    backgroundColor: '#ffacf8ff',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
