import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Fotos from './pages/Fotos';

const Menu = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Menu.Navigator>
                <Menu.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Menu.Screen name="Fotos" component={Fotos} />
            </Menu.Navigator>
        </NavigationContainer>
    );
}

export default Routes;