import React from 'react';
import { SafeAreaView, StyleSheet, useWindowDimensions, useColorScheme } from 'react-native';
import { useTranslation } from 'react-i18next';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ColorChangingIcons } from '@/components/ColorChangingEmoji';
import { useLanguage } from '@/components/LanguageContext';

const icons = [
  { emoji: '0', text: 'icons.zero', name: '0' },
  { emoji: '1', text: 'icons.one', name: '1' },
  { emoji: '2', text: 'icons.two', name: '2' },
  { emoji: '3', text: 'icons.three', name: '3' },
  { emoji: '4', text: 'icons.four', name: '4' },
  { emoji: '5', text: 'icons.five', name: '5' },
  { emoji: '6', text: 'icons.six', name: '6' },
  { emoji: '7', text: 'icons.seven', name: '7' },
  { emoji: '8', text: 'icons.eight', name: '8' },
  { emoji: '9', text: 'icons.nine', name: '9' },
  { emoji: '10', text: 'icons.ten', name: '10' },
  { emoji: '11', text: 'icons.eleven', name: '11' },
  { emoji: '12', text: 'icons.twelve', name: '12' },
  { emoji: '13', text: 'icons.thirteen', name: '13' },
  { emoji: '14', text: 'icons.fourteen', name: '14' },
  { emoji: '15', text: 'icons.fifteen', name: '15' },
  { emoji: '16', text: 'icons.sixteen', name: '16' },
  { emoji: '17', text: 'icons.seventeen', name: '17' },
  { emoji: '18', text: 'icons.eighteen', name: '18' },
  { emoji: '19', text: 'icons.nineteen', name: '19' },
  { emoji: '20', text: 'icons.twenty', name: '20' },
  { emoji: '21', text: 'icons.twenty-one', name: '21' },
  { emoji: '22', text: 'icons.twenty-two', name: '22' },
  { emoji: '23', text: 'icons.twenty-three', name: '23' },
  { emoji: '30', text: 'icons.thirty', name: '30' },
  { emoji: '40', text: 'icons.forty', name: '40' },
  { emoji: '50', text: 'icons.fifty', name: '50' },
  { emoji: '60', text: 'icons.sixty', name: '60' },
  { emoji: '70', text: 'icons.seventy', name: '70' },
  { emoji: '80', text: 'icons.eighty', name: '80' },
  { emoji: '90', text: 'icons.ninety', name: '90' },
  { emoji: '100', text: 'icons.one-hundred', name: '100' },
  { emoji: '101', text: 'icons.one-hundred-one', name: '101' },
  { emoji: '102', text: 'icons.one-hundred-two', name: '102' },
  { emoji: '103', text: 'icons.one-hundred-three', name: '103' },
  { emoji: '104', text: 'icons.one-hundred-four', name: '104' },
  { emoji: '1100', text: 'icons.eleven-hundred', name: '1100' },
  { emoji: '1200', text: 'icons.twelve-hundred', name: '1200' },
  { emoji: '1300', text: 'icons.thirteen-hundred', name: '1300' },
  { emoji: '1400', text: 'icons.fourteen-hundred', name: '1400' },
  { emoji: '1501', text: 'icons.fifteen-hundred-one', name: '1501' },
  { emoji: '1502', text: 'icons.fifteen-hundred-two', name: '1502' },
  { emoji: '1503', text: 'icons.fifteen-hundred-three', name: '1503' },
  { emoji: '1504', text: 'icons.fifteen-hundred-four', name: '1504' },
  { emoji: '2000', text: 'icons.two-thousand', name: '2000' },
  { emoji: '3000', text: 'icons.three-thousand', name: '3000' },
  { emoji: '4000', text: 'icons.four-thousand', name: '4000' },
  { emoji: '5000', text: 'icons.five-thousand', name: '5000' },
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
