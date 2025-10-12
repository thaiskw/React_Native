import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo(a)!</Text>
      <Image
        source={{ uri: 'https://via.placeholder.com/300x150.png?text=Bem-vindo' }}
        style={styles.image}
      />
      <Button title="Ir para Fotos" onPress={() => navigation.navigate('Fotos')} />
      <Button title="Ir para Cadastro" onPress={() => navigation.navigate('Cadastro')} />
      <Button title="Ir para Localização" onPress={() => navigation.navigate('Localizacao')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, alignItems:'center', justifyContent:'center' },
  title: { fontSize:24, marginBottom:20 },
  image: { width:300, height:150, marginBottom:20 }
});
