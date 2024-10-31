import React from 'react';
import { SafeAreaView, StyleSheet, useWindowDimensions, useColorScheme } from 'react-native';
import { useTranslation } from 'react-i18next';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ColorChangingIcons } from '@/components/ColorChangingIcons';
import { useLanguage } from '@/components/LanguageContext';

const icons = [
  { name: 'heart', text: 'icons.heart' },
  { name: 'ellipse', text: 'icons.ellipse' },
  { name: 'add', text: 'icons.add' },
  { name: 'square', text: 'icons.square' },
  { name: 'star', text: 'icons.star' },
  { name: 'triangle', text: 'icons.triangle' },  
  { name: 'tablet-landscape', text: 'icons.tabletLandscape' },
  { name: 'egg', text: 'icons.egg' },
  { name: 'arrow-forward', text: 'icons.arrowForward' },
  { name: 'cloud', text: 'icons.cloud' },  
  { name: 'snow', text: 'icons.snow' },
  { name: 'sparkles', text: 'icons.sparkles' },
  { name: 'cog', text: 'icons.cog' },
  { name: 'diamond', text: 'icons.diamond' },
  { name: 'flame', text: 'icons.flame' },
  { name: 'flash', text: 'icons.flash' },
  { name: 'hand-right', text: 'icons.handRight' },
  { name: 'happy', text: 'icons.happy' },
  { name: 'shield', text: 'icons.shield' },
  { name: 'sunny', text: 'icons.sunny' },
  { name: 'moon', text: 'icons.moon' },
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
          title="shapes"
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
