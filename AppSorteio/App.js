import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Integrantes from './src/screens/Integrantes';

// Cria a pilha de navegação
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Sorteio de prêmios!!!' }}
        />
        <Stack.Screen 
          name="Integrantes" 
          component={Integrantes} 
          options={{ title: 'Integrantes' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}