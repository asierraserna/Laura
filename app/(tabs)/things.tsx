import React from 'react';
import { SafeAreaView, StyleSheet, useWindowDimensions, useColorScheme } from 'react-native';
import { useTranslation } from 'react-i18next';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ColorChangingIcons } from '@/components/ColorChangingIcons';
import { useLanguage } from '@/components/LanguageContext';

const icons = [
  { name: 'business', text: 'icons.business' },
  { name: 'airplane', text: 'icons.airplane' },
  { name: 'alarm', text: 'icons.alarm' },
  { name: 'rocket', text: 'icons.rocket' },
  { name: 'star', text: 'icons.star' },
  { name: 'bandage', text: 'icons.bandage' },
  { name: 'bed', text: 'icons.bed' },
  { name: 'boat', text: 'icons.boat' },
  { name: 'car-sport', text: 'icons.car-sport' },
  { name: 'bulb', text: 'icons.bulb' },
  { name: 'bus', text: 'icons.bus' },
  { name: 'home', text: 'icons.home' },
  { name: 'mail', text: 'icons.mail' },
  { name: 'storefront', text: 'icons.storefront' },
  { name: 'train', text: 'icons.train' },
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
          title="things"
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
