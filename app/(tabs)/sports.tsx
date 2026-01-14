import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, useColorScheme, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ColorChangingIcons } from '@/components/ColorChangingIcons';
import { HelloWave } from '@/components/HelloWave';
import { useLanguage } from '@/components/LanguageContext';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const icons = [
  { name: 'baseball', text: 'icons.baseball' },
  { name: 'football', text: 'icons.football' },
  { name: 'american-football', text: 'icons.american-football' },
  { name: 'barbell', text: 'icons.barbell' },
  { name: 'basketball', text: 'icons.basketball' },
  { name: 'bicycle', text: 'icons.bicycle' },
  { name: 'bowling-ball', text: 'icons.bowling-ball' },
  { name: 'car-sport', text: 'icons.car-sport' },
  { name: 'extension-puzzle', text: 'icons.extension-puzzle' },
  { name: 'earth', text: 'icons.earth' },
  { name: 'fish', text: 'icons.fish' },
  { name: 'game-controller', text: 'icons.game-controller' },
  { name: 'medal', text: 'icons.medal' },
  { name: 'stopwatch', text: 'icons.stopwatch' },
  { name: 'speedometer', text: 'icons.speedometer' },
  { name: 'shield', text: 'icons.shield' },
  { name: 'tennisball', text: 'icons.tennisball' },
  { name: 'trail-sign', text: 'icons.trail-sign' },
  { name: 'walk', text: 'icons.walk' },
  { name: 'body', text: 'icons.body' },
  

  
];

const colors = [
  '#FF69B4', // Pink
  '#FF6347', // Tomato
  '#4169E1', // Royal Blue
  '#32CD32', // Lime Green
  '#FFD700', // Gold
  '#FF0000', // Red
  '#008000', // Green
  '#0000FF', // Blue
  '#FFFF00', // Yellow
  '#800080', // Purple
  '#00FFFF', // Cyan
  '#808080', // Grey
  '#FFA500', // Orange
  '#A52A2A' // Brown
];

const colorNames = [
  'colors.pink',
  'colors.tomato',
  'colors.royalBlue',
  'colors.limeGreen',
  'colors.gold',
  'colors.red',
  'colors.green',
  'colors.blue',
  'colors.yellow',
  'colors.purple',
  'colors.cyan',
  'colors.grey',
  'colors.orange',
  'colors.brown'
];

export default function HomeScreen() {
  const { width: screenWidth } = useWindowDimensions();
  const colorScheme = useColorScheme();
  const { t } = useTranslation();
  const { language } = useLanguage(); // Add this line to force re-render on language change

  return (
    <SafeAreaView style={[
      styles.container, 
      { backgroundColor: colorScheme === 'dark' ? '#000' : '#fff' }
    ]}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{t('shapes')}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.waveContainer}>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.iconsContainer}>
      <ColorChangingIcons 
          icons={icons}
          colors={colors}
          colorNames={colorNames}
          title="sports"
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
