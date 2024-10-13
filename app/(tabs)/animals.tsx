import React from 'react';
import { SafeAreaView, StyleSheet, useWindowDimensions, useColorScheme } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ColorChangingIcons } from '@/components/ColorChangingIcons';

const numberIcons = [
  { name: 'calculator', text: '1' },
  { name: 'calculator-outline', text: '2' },
  { name: 'stats-chart', text: '3' },
  { name: 'stats-chart-outline', text: '4' },
  { name: 'timer', text: '5' },
];

const numberColors = ['#8A2BE2', '#20B2AA', '#FF4500', '#00CED1', '#FF1493'];
const numberColorNames = ['Blue Violet', 'Light Sea Green', 'Orange Red', 'Dark Turquoise', 'Deep Pink'];

export default function NumbersScreen() {
  const { width: screenWidth } = useWindowDimensions();
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={[
      styles.container, 
      { backgroundColor: colorScheme === 'dark' ? '#000' : '#fff' }
    ]}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Numbers</ThemedText>
      </ThemedView>
      <ThemedView style={styles.waveContainer}>
        <HelloWave width={screenWidth} />
      </ThemedView>
      <ThemedView style={styles.iconsContainer}>
        <ColorChangingIcons 
          icons={numberIcons}
          colors={numberColors}
          colorNames={numberColorNames}
          title="Numbers"
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
  