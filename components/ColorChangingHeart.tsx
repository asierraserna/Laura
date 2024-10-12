import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const colors = ['#FF69B4', '#FF6347', '#4169E1', '#32CD32', '#FFD700'];

export function ColorChangingHeart() {
  const [colorIndex, setColorIndex] = useState(0);

  const changeColor = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <TouchableOpacity onPress={changeColor} style={styles.container}>
      <Ionicons name="heart" size={200} color={colors[colorIndex]} />
      <Text style={[styles.text, { color: colors[colorIndex] }]}>Heart</Text>
      <Ionicons name="logo-github" size={150} color={colors[colorIndex]} style={styles.github} />
      <Text style={[styles.text, { color: colors[colorIndex] }]}>Cat</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 48,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
  },
  github: {
    marginTop: 20,
  },
});
