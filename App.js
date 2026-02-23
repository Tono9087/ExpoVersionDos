import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function inicioScreen () {
  return (
    <View style={styles.inicio}>
      <Text>Pantalla De Inicio</Text>
      <button title="Ir a RavenCLaw" onPress={() => navigation.navigate('RavenCLaw')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function RavenCLawScreen () {
  return (
    <View style={styles.inicio}>
      <Text>RavenCLaw</Text>
    </View>
  );
}

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={inicioScreen} />
        <Stack.Screen name="RavenCLaw" component={RavenCLawScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  inicio: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



