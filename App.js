import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CarteleraScreen from './screens/CarteleraScreen';
import DetalleScreen from './screens/DetalleScreen';
import PerfilScreen from './screens/PerfilScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// SUB-NAVEGADOR: Pila de la Cartelera
function CarteleraStack() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#06060b' }, headerTintColor: '#00ffff' }}>
      <Stack.Screen 
        name="CarteleraLista" 
        component={CarteleraScreen} 
        options={{ title: 'CARTELERA NADESICO' }} 
      />
      <Stack.Screen 
        name="Detalle" 
        component={DetalleScreen} 
        options={({ route }) => ({ title: route.params.pelicula.titulo })} 
      />
    </Stack.Navigator>
  );
}

// NAVEGADOR PRINCIPAL: Pestañas de la Unidad
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{ 
          headerShown: false,
          tabBarStyle: { backgroundColor: '#06060b', borderTopColor: '#ff00ff' },
          tabBarActiveTintColor: '#ff00ff',
          tabBarInactiveTintColor: '#00ffff'
        }}
      >
        <Tab.Screen name="Misión: Cine" component={CarteleraStack} />
        <Tab.Screen name="Archivo: Perfil" component={PerfilScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}