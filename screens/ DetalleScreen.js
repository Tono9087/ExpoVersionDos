import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetalleScreen({ route }) {
  const { pelicula } = route.params; // Desestructuración de señal

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{pelicula.titulo}</Text>
      <Text style={styles.subtitle}>Ciclo de Lanzamiento: {pelicula.anio}</Text>
      <View style={styles.synopsisBox}>
        <Text style={styles.synopsisText}>{pelicula.sinopsis}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center', backgroundColor: '#06060b' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#ff00ff', textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#00ffff', marginBottom: 20 },
  synopsisBox: { padding: 15, backgroundColor: '#1a1a2e', borderRadius: 10, borderStyle: 'dashed', borderWidth: 1, borderColor: '#39ff14' },
  synopsisText: { fontSize: 16, color: '#fff', textAlign: 'justify' }
});