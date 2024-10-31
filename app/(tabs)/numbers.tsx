import React from 'react';
import { SafeAreaView, StyleSheet, useWindowDimensions, useColorScheme } from 'react-native';
import { useTranslation } from 'react-i18next';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ColorChangingIcons } from '@/components/ColorChangingEmoji';
import { useLanguage } from '@/components/LanguageContext';

const icons = [
  { emoji: '0', text: 'icons.zero' },
  { emoji: '1', text: 'icons.one' },
  { emoji: '2', text: 'icons.two' },
  { emoji: '3', text: 'icons.three' },
  { emoji: '4', text: 'icons.four' },
  { emoji: '5', text: 'icons.five' },
  { emoji: '6', text: 'icons.six' },
  { emoji: '7', text: 'icons.seven' },
  { emoji: '8', text: 'icons.eight' },
  { emoji: '9', text: 'icons.nine' },
  { emoji: '10', text: 'icons.ten' },
  { emoji: '11', text: 'icons.eleven' },
  { emoji: '12', text: 'icons.twelve' },
  { emoji: '13', text: 'icons.thirteen' },
  { emoji: '14', text: 'icons.fourteen' },
  { emoji: '15', text: 'icons.fifteen' },
  { emoji: '16', text: 'icons.sixteen' },
  { emoji: '17', text: 'icons.seventeen' },
  { emoji: '18', text: 'icons.eighteen' },
  { emoji: '19', text: 'icons.nineteen' },
  { emoji: '20', text: 'icons.twenty' },
  { emoji: '21', text: 'icons.twenty-one' },
  { emoji: '22', text: 'icons.twenty-two' },
  { emoji: '23', text: 'icons.twenty-three' },
  { emoji: '30', text: 'icons.thirty' },
  { emoji: '40', text: 'icons.forty' },
  { emoji: '50', text: 'icons.fifty' },
  { emoji: '60', text: 'icons.sixty' },
  { emoji: '70', text: 'icons.seventy' },
  { emoji: '80', text: 'icons.eighty' },
  { emoji: '90', text: 'icons.ninety' },
  { emoji: '100', text: 'icons.one-hundred' },
  { emoji: '101', text: 'icons.one-hundred-one' },
  { emoji: '102', text: 'icons.one-hundred-two' },
  { emoji: '103', text: 'icons.one-hundred-three' },
  { emoji: '104', text: 'icons.one-hundred-four' },
  { emoji: '1100', text: 'icons.eleven-hundred' },
  { emoji: '1200', text: 'icons.twelve-hundred' },
  { emoji: '1300', text: 'icons.thirteen-hundred' },
  { emoji: '1400', text: 'icons.fourteen-hundred' },
  { emoji: '1501', text: 'icons.fifteen-hundred-one' },
  { emoji: '1502', text: 'icons.fifteen-hundred-two' },
  { emoji: '1503', text: 'icons.fifteen-hundred-three' },
  { emoji: '1504', text: 'icons.fifteen-hundred-four' },
  { emoji: '2000', text: 'icons.two-thousand' },
  { emoji: '3000', text: 'icons.three-thousand' },
  { emoji: '4000', text: 'icons.four-thousand' },
  { emoji: '5000', text: 'icons.five-thousand' },

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
        <ThemedText type="title">{t('numbers')}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.waveContainer}>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.iconsContainer}>
        <ColorChangingIcons
          icons={icons}
          colors={colors}
          colorNames={colorNames}
          title="numbers"
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
