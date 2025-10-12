import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';

export default function Fotos() {
  const fotos = [
    require('../../../assets/fotos/etec.jpg'),
    require('../../../assets/fotos/mar.jpg'),
    require('../../../assets/fotos/ponte.jpg'),
    require('../../../assets/fotos/ponteComMar.jpg')
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {fotos.map((img, i) => (
        <Image key={i} source={img} style={styles.image} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection:'row', flexWrap:'wrap', justifyContent:'center', padding:10 },
  image: { width:150, height:150, margin:5 }
});
