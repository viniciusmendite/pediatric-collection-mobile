import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/Home';
import NewRegister from './pages/NewRegister';
import ListRegisters from './pages/ListRegisters';
import Details from './pages/Details';

export default () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="NewRegister" component={NewRegister} />
        <AppStack.Screen name="ListRegisters" component={ListRegisters} />
        <AppStack.Screen name="Details" component={Details} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
