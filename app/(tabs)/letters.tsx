import React from 'react';
import { SafeAreaView, StyleSheet, useWindowDimensions, useColorScheme } from 'react-native';
import { useTranslation } from 'react-i18next';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ColorChangingIcons } from '@/components/ColorChangingIcons';

export default function LettersScreen() {
  const { width: screenWidth } = useWindowDimensions();
  const colorScheme = useColorScheme();
  const { t } = useTranslation();

  const icons = [
    { name: 'heart', text: 'icons.heart' },
    { name: 'logo-github', text: 'icons.github' },
    { name: 'planet', text: 'icons.planet' },
    { name: 'rocket', text: 'icons.rocket' },
    { name: 'star', text: 'icons.star' },
  ];

  const colors = ['#FF69B4', '#FF6347', '#4169E1', '#32CD32', '#FFD700'];
  const colorNames = [
    'colors.pink',
    'colors.tomato',
    'colors.royalBlue',
    'colors.limeGreen',
    'colors.gold',
  ];

  return (
    <SafeAreaView style={[
      styles.container, 
      { backgroundColor: colorScheme === 'dark' ? '#000' : '#fff' }
    ]}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{t('appTitle')}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.waveContainer}>
        <HelloWave width={screenWidth} />
      </ThemedView>
      <ThemedView style={styles.iconsContainer}>
        <ColorChangingIcons 
          icons={icons}
          colors={colors}
          colorNames={colorNames}
          title="appTitle"
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
