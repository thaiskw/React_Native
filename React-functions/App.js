import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import aster from "./assets/aster.png";
import desenho_floral from "./assets/desenho-floral.png";
import flor_de_cerejeira from "./assets/flor-de-cerejeira.png";
import flor from "./assets/flor.png";
import lotus from "./assets/lotus.png";
import rosa from "./assets/rosa.png";

export default function App() {
  const [imagem1, setImagem1] = useState(aster);
  const [imagem2, setImagem2] = useState(flor_de_cerejeira);
  const [imagem3, setImagem3] = useState(lotus);

  const toggleImagem1 = () => {
    setImagem1((prev) => (prev === aster ? desenho_floral : aster));
  };

  const toggleImagem2 = () => {
    setImagem2((prev) => (prev === flor_de_cerejeira ? flor : flor_de_cerejeira));
  };

  const toggleImagem3 = () => {
    setImagem3((prev) => (prev === lotus ? rosa : lotus));
  };

return (
  <View style={styles.principal}>
    {/* Container 1 */}
    <View style={styles.container1}>
      <Text style={styles.texto}>Container 1</Text>
      <Image source={imagem1} style={styles.imagem1} />
      <TouchableOpacity style={styles.botao} onPress={toggleImagem1}>
        <Text style={styles.textoBotao}>Trocar Imagem 1</Text>
      </TouchableOpacity>
    </View>

    {/* Container 2 */}
    <View style={styles.container2}>
      <Text style={styles.texto}>Container 2</Text>
      <Image source={imagem2} style={styles.imagem2} />
      <TouchableOpacity style={styles.botao} onPress={toggleImagem2}>
        <Text style={styles.textoBotao}>Trocar Imagem 2</Text>
      </TouchableOpacity>
    </View>

    {/* Container 3 */}
    <View style={styles.container3}>
      <Text style={styles.texto}>Container 3</Text>
      <Image source={imagem3} style={styles.imagem3} />
      <TouchableOpacity style={styles.botao} onPress={toggleImagem3}>
        <Text style={styles.textoBotao}>Trocar Imagem 3</Text>
      </TouchableOpacity>
    </View>
  </View>
);
}
const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: "#ECEFF1",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  //troquei o flex pois não estava cabendo a imagem!!!
  container1: {
    flex: 3,
    backgroundColor: "#FFE0B2",
    margin: 10,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "space-around",
  },

  container2: {
    flex: 3,
    backgroundColor: "#C8E6C9",
    margin: 10,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "space-around",
  },

  container3: {
    flex: 3,
    backgroundColor: "#BBDEFB",
    margin: 10,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "space-around",
  },

  texto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#212121",
    marginBottom: 10,
  },

  imagem1: {
    width: 120,
    height: 120,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#555",
  },

  imagem2: {
    width: 150,
    height: 150,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#555",
  },

  imagem3: {
    width: 180,
    height: 180,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#555",
  },

  botao: {
    backgroundColor: "#1976D2",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 10,
  },

  textoBotao: {
    color: "white",
    fontWeight: "bold",
  },
});