import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('Fulano')

  function handleMudaNome() {
    if(nome === 'Fulano') {
      setNome('Sujeito Programador')
    } else {
      setNome('Fulano')
    }
  }

  return (
    <View style={styles.container}>
      
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    paddingTop: 28,
  },

  
})