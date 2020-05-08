import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/Home';
import NewRegister from './pages/NewRegister';

export default () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="NewRegister" component={NewRegister} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
