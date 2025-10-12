import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Fotos from './src/pages/Fotos';
import Cadastro from './src/pages/Cadastro';
import Localizacao from './src/pages/Localizacao';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Fotos" component={Fotos} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Localizacao" component={Localizacao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
