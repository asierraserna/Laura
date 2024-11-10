import React from 'react';
import { SafeAreaView, StyleSheet, useWindowDimensions, useColorScheme } from 'react-native';
import { useTranslation } from 'react-i18next';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ColorChangingIcons } from '@/components/ColorChangingEmoji';
import { useLanguage } from '@/components/LanguageContext';

const icons = [
  
    { emoji: 'Aa', text: 'a', name: 'Aa' },
    { emoji: 'Bb', text: 'b', name: 'Bb' },
    { emoji: 'Cc', text: 'c', name: 'Cc' },
    { emoji: 'Dd', text: 'd', name: 'Dd' },
    { emoji: 'Ee', text: 'e', name: 'Ee' },
    { emoji: 'Ff', text: 'f', name: 'Ff' },
    { emoji: 'Gg', text: 'g', name: 'Gg' },
    { emoji: 'Hh', text: 'h', name: 'Hh' },
    { emoji: 'Ii', text: 'i', name: 'Ii' },
    { emoji: 'Jj', text: 'j', name: 'Jj' },
    { emoji: 'Kk', text: 'k', name: 'Kk' },
    { emoji: 'Ll', text: 'l', name: 'Ll' },
    { emoji: 'Mm', text: 'm', name: 'Mm' },
    { emoji: 'Nn', text: 'n', name: 'Nn' },
    { emoji: 'Oo', text: 'o', name: 'Oo' },
    { emoji: 'Pp', text: 'p', name: 'Pp' },
    { emoji: 'Qq', text: 'q', name: 'Qq' },
    { emoji: 'Rr', text: 'r', name: 'Rr' },
    { emoji: 'Ss', text: 's', name: 'Ss' },
    { emoji: 'Tt', text: 't', name: 'Tt' },
    { emoji: 'Uu', text: 'u', name: 'Uu' },
    { emoji: 'Vv', text: 'v', name: 'Vv' },
    { emoji: 'Ww', text: 'w', name: 'Ww' },
    { emoji: 'Xx', text: 'x', name: 'Xx' },
    { emoji: 'Yy', text: 'y', name: 'Yy' },
    { emoji: 'Zz', text: 'z', name: 'Zz' },
    { emoji: 'Ññ', text: 'ñ', name: 'Ññ' },
    { emoji: 'Ąą', text: 'ą', name: 'Ąą' },
    { emoji: 'Ćć', text: 'ć', name: 'Ćć' },
    { emoji: 'Ęę', text: 'ę', name: 'Ęę' },
    { emoji: 'Łł', text: 'ł', name: 'Łł' },
    { emoji: 'Ńń', text: 'ń', name: 'Ńń' },
    { emoji: 'Óó', text: 'ó', name: 'Óó' },
    { emoji: 'Śś', text: 'ś', name: 'Śś' },
    { emoji: 'Źź', text: 'ź', name: 'Źź' },
    { emoji: 'Żż', text: 'ż', name: 'Żż' },
    { emoji: 'Ää', text: 'ä', name: 'Ää' },
    { emoji: 'Öö', text: 'ö', name: 'Öö' },
    { emoji: 'Üü', text: 'ü', name: 'Üü' },
    { emoji: 'ß', text: 'ß', name: 'ß' }
  


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
        <ThemedText type="title">{t('letters')}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.waveContainer}>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.iconsContainer}>
      <ColorChangingIcons 
          icons={icons}
          colors={colors}
          colorNames={colorNames}
          title="letters"
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
