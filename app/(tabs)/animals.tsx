import React from 'react';
import { SafeAreaView, StyleSheet, useWindowDimensions, useColorScheme } from 'react-native';
import { useTranslation } from 'react-i18next';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ColorChangingIcons } from '@/components/ColorChangingEmoji';
import { useLanguage } from '@/components/LanguageContext';

const icons = [  
  { emoji: '🐅', text: 'icons.tiger', name: '🐅' },
  { emoji: '🐕', text: 'icons.dog', name: '🐕' },
  { emoji: '🦜', text: 'icons.parrot', name: '🦜' },  
  { emoji: '🪳', text: 'icons.cockroach', name: '🪳' },
  { emoji: '🐁', text: 'icons.mouse', name: '🐁' },  
  { emoji: '🦉', text: 'icons.owl', name: '🦉' },  
  { emoji: '🦅', text: 'icons.eagle', name: '🦅' },
  { emoji: '🐖', text: 'icons.pig', name: '🐖' },  
  { emoji: '🐏', text: 'icons.ram', name: '🐏' },
  { emoji: '🐐', text: 'icons.goat', name: '🐐' },  
  { emoji: '🕷️', text: 'icons.spider', name: '🕷️' },  
  { emoji: '🦆', text: 'icons.duck', name: '🦆' },
  { emoji: '🦞', text: 'icons.lobster', name: '🦞' },
  { emoji: '🐈', text: 'icons.cat', name: '🐈' },  
  { emoji: '🦩', text: 'icons.flamingo', name: '🦩' },
  { emoji: '🐇', text: 'icons.rabbit', name: '🐇' },  
  { emoji: '🐂', text: 'icons.ox', name: '🐂' }, 
  { emoji: '🦐', text: 'icons.shrimp', name: '🦐' },
  { emoji: '🦙', text: 'icons.llama', name: '🦙' },
  { emoji: '🐍', text: 'icons.snake', name: '🐍' },  
  { emoji: '🐓', text: 'icons.rooster', name: '🐓' },
  { emoji: '🦂', text: 'icons.scorpion', name: '🦂' },
  { emoji: '🐆', text: 'icons.leopard', name: '🐆' },
  { emoji: '🐄', text: 'icons.cow', name: '🐄' },  
  { emoji: '🦚', text: 'icons.peacock', name: '🦚' },  
  { emoji: '🦒', text: 'icons.giraffe', name: '🦒' },  
  { emoji: '🦈', text: 'icons.shark', name: '🦈' },
  { emoji: '🐿️', text: 'icons.chipmunk', name: '🐿️' },  
  { emoji: '🐞', text: 'icons.ladybug', name: '🐞' },
  { emoji: '🦗', text: 'icons.cricket', name: '🦗' },
  { emoji: '🐒', text: 'icons.monkey', name: '🐒' },
  { emoji: '🦍', text: 'icons.gorilla', name: '🦍' },  
  { emoji: '🪰', text: 'icons.fly', name: '🪰' },
  { emoji: '🦃', text: 'icons.turkey', name: '🦃' },
  { emoji: '🦓', text: 'icons.zebra', name: '🦓' },  
  { emoji: '🐝', text: 'icons.bee', name: '🐝' },
  { emoji: '🪲', text: 'icons.beetle', name: '🪲' },
  { emoji: '🐎', text: 'icons.horse', name: '🐎' },  
  { emoji: '🦟', text: 'icons.mosquito', name: '🦟' },
  { emoji: '🦭', text: 'icons.seal', name: '🦭' },
  { emoji: '🐪', text: 'icons.camel', name: '🐪' },
  { emoji: '🦌', text: 'icons.deer', name: '🦌' },  
  { emoji: '🪱', text: 'icons.worm', name: '🪱' },
  { emoji: '🦠', text: 'icons.microbe', name: '🦠' },
  { emoji: '🦛', text: 'icons.hippopotamus', name: '🦛' },
  { emoji: '🐘', text: 'icons.elephant', name: '🐘' },
  { emoji: '🦏', text: 'icons.rhinoceros', name: '🦏' },  
  { emoji: '🦋', text: 'icons.butterfly', name: '🦋' },
  { emoji: '🐛', text: 'icons.caterpillar', name: '🐛' },
  { emoji: '🐜', text: 'icons.ant', name: '🐜' },
  { emoji: '🦘', text: 'icons.kangaroo', name: '🦘' },
  { emoji: '🦔', text: 'icons.hedgehog', name: '🦔' },
  { emoji: '🦇', text: 'icons.bat', name: '🦇' },
  { emoji: '🦫', text: 'icons.beaver', name: '🦫' },  
  { emoji: '🐬', text: 'icons.dolphin', name: '🐬' },
  { emoji: '🐠', text: 'icons.fish2', name: '🐠' },
  { emoji: '🦡', text: 'icons.badger', name: '🦡' },
  { emoji: '🐦', text: 'icons.bird', name: '🐦' },
  { emoji: '🐤', text: 'icons.chick', name: '🐤' },
  { emoji: '🦨', text: 'icons.skunk', name: '🦨' },
  { emoji: '🐧', text: 'icons.penguin', name: '🐧' },
  { emoji: '🦢', text: 'icons.swan', name: '🦢' },
  { emoji: '🪿', text: 'icons.goose', name: '🪿' },
  { emoji: '🪺', text: 'icons.nest', name: '🪺' },
  { emoji: '🐊', text: 'icons.crocodile', name: '🐊' },
  { emoji: '🐢', text: 'icons.turtle', name: '🐢' },
  { emoji: '🐳', text: 'icons.whale', name: '🐳' },
  { emoji: '🐙', text: 'icons.octopus', name: '🐙' },
  { emoji: '🪸', text: 'icons.coral', name: '🪸' },
  { emoji: '🪼', text: 'icons.jellyfish', name: '🪼' },
  { emoji: '🦀', text: 'icons.crab', name: '🦀' },  
  { emoji: '🦑', text: 'icons.squid', name: '🦑' },
  { emoji: '🦪', text: 'icons.oyster', name: '🦪' },
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
          title="nature"
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
