
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const PELICULAS = [
  { id: '1', titulo: 'Spider-Man: Multiverso', anio: '2023', sinopsis: 'Exploración de múltiples realidades cuánticas...' },
  { id: '2', titulo: 'Oppenheimer', anio: '2023', sinopsis: 'Desarrollo del arma definitiva de fisión.' },
  { id: '3', titulo: 'Super Mario Bros', anio: '2023', sinopsis: 'Misión de rescate en el Reino Champiñón.' },
];

export default function CarteleraScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={PELICULAS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate('Detalle', { pelicula: item })}
          >
            <Text style={styles.movieTitle}>{item.titulo}</Text>
            <Text style={styles.link}>VER ESPECIFICACIONES ➡️</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#06060b' },
  card: { backgroundColor: '#1a1a2e', padding: 20, marginBottom: 10, borderRadius: 8, borderLeftWidth: 4, borderLeftColor: '#ff00ff' },
  movieTitle: { fontSize: 18, fontWeight: 'bold', color: '#00ffff' },
  link: { color: '#39ff14', marginTop: 5, fontSize: 12 }
});