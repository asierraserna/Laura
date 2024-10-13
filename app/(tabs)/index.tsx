import React from 'react';
import { SafeAreaView, StyleSheet, useWindowDimensions, useColorScheme } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ColorChangingIcons } from '@/components/ColorChangingIcons';

const icons = [
  { name: 'heart', text: 'Heart' },
  { name: 'logo-github', text: 'GitHub' },
  { name: 'planet', text: 'Planet' },
  { name: 'rocket', text: 'Rocket' },
  { name: 'star', text: 'Star' },
];

const colors = ['#FF69B4', '#FF6347', '#4169E1', '#32CD32', '#FFD700'];
const colorNames = ['Pink', 'Tomato', 'Royal Blue', 'Lime Green', 'Gold'];


export default function HomeScreen() {
  const { width: screenWidth } = useWindowDimensions();
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={[
      styles.container, 
      { backgroundColor: colorScheme === 'dark' ? '#000' : '#fff' }
    ]}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Shapes</ThemedText>
      </ThemedView>
      <ThemedView style={styles.waveContainer}>
        <HelloWave width={screenWidth} />
      </ThemedView>
      <ThemedView style={styles.iconsContainer}>
      <ColorChangingIcons 
          icons={icons}
          colors={colors}
          colorNames={colorNames}
          title="Icons"
        />
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  waveContainer: {
    alignItems: 'center',
    marginBottom: 16,
    width: '100%',
  },
  iconsContainer: {
    flex: 1,
  },
});
