import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DaftarKontak from './components/DaftarKontak';
import DetailKontak from './components/DetailKontak';

const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen
          name="DaftarKontak" component={DaftarKontak} options={{ title: 'Daftar Kontak' }} />
       <Stack.Screen
          name="DetailKontak" component={DetailKontak} options={{ title: 'Detail Kontak' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

