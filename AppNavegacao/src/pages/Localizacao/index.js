import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Localizacao() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nosso Endereço:</Text>

      <iframe
        title="Mapa"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.7786183230924!2d-47.29275002385237!3d-23.287492478988984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf5ab2d35d2b0d%3A0x90131a5f0c2272b3!2sEscola%20T%C3%A9cnica%20Estadual%20Martinho%20di%20Ciero%20-%20Itu!5e0!3m2!1spt-BR!2sbr!4v1760283522479!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        style={{ border: 0, marginTop: 10 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, alignItems:'center', justifyContent:'center', padding:20 },
  title: { fontSize:20, marginBottom:10 }
});
