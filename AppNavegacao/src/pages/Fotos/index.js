import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Fotos() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FontAwesome name="youtube" size={25} color="#f00" style={{ marginRight: 10 }} />
      <Text>Página Fotos</Text>
      <Button title="Voltar para Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
});
