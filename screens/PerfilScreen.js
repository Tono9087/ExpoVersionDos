import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PerfilScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>PERFIL DEL CADETE 🍿</Text>
      <Text style={styles.info}>Usuario: [ID_UNIDAD_DGETI]</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#06060b' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#ff00ff' },
  info: { color: '#00ffff', marginTop: 10 }
});


