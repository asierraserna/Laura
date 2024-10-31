import React from 'react';
import { SafeAreaView, StyleSheet, useWindowDimensions, useColorScheme } from 'react-native';
import { useTranslation } from 'react-i18next';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ColorChangingIcons } from '@/components/ColorChangingEmoji';
import { useLanguage } from '@/components/LanguageContext';

const icons = [  
  { emoji: '🐅', text: 'icons.tiger' },
  { emoji: '🐕', text: 'icons.dog' },
  { emoji: '🦜', text: 'icons.parrot' },  
  { emoji: '🪳', text: 'icons.cockroach' },
  { emoji: '🐁', text: 'icons.mouse' },  
  { emoji: '🦉', text: 'icons.owl' },  
  { emoji: '🦅', text: 'icons.eagle' },
  { emoji: '🐖', text: 'icons.pig' },  
  { emoji: '🐏', text: 'icons.ram' },
  { emoji: '🐐', text: 'icons.goat' },  
  { emoji: '🕷️', text: 'icons.spider' },  
  { emoji: '🦆', text: 'icons.duck' },
  { emoji: '🦞', text: 'icons.lobster' },
  { emoji: '🐈', text: 'icons.cat' },  
  { emoji: '🦩', text: 'icons.flamingo' },
  { emoji: '🐇', text: 'icons.rabbit' },  
  { emoji: '🐂', text: 'icons.ox' }, 
  { emoji: '🦐', text: 'icons.shrimp' },
  { emoji: '🦙', text: 'icons.llama' },
  { emoji: '🐍', text: 'icons.snake' },  
  { emoji: '🐓', text: 'icons.rooster' },
  { emoji: '🦂', text: 'icons.scorpion' },
  { emoji: '🐆', text: 'icons.leopard' },
  { emoji: '🐄', text: 'icons.cow' },  
  { emoji: '🦚', text: 'icons.peacock' },  
  { emoji: '🦒', text: 'icons.giraffe' },  
  { emoji: '🦈', text: 'icons.shark' },
  { emoji: '🐿️', text: 'icons.chipmunk' },  
  { emoji: '🐞', text: 'icons.ladybug' },
  { emoji: '🦗', text: 'icons.cricket' },
  { emoji: '🐒', text: 'icons.monkey' },
  { emoji: '🦍', text: 'icons.gorilla' },  
  { emoji: '🪰', text: 'icons.fly' },
  { emoji: '🦃', text: 'icons.turkey' },
  { emoji: '🦓', text: 'icons.zebra' },  
  { emoji: '🐝', text: 'icons.bee' },
  { emoji: '🪲', text: 'icons.beetle' },
  { emoji: '🐎', text: 'icons.horse' },  
  { emoji: '🦟', text: 'icons.mosquito' },
  { emoji: '🦭', text: 'icons.seal' },
  { emoji: '🐪', text: 'icons.camel' },
  { emoji: '🦌', text: 'icons.deer' },  
  { emoji: '🪱', text: 'icons.worm' },
  { emoji: '🦠', text: 'icons.microbe' },
  { emoji: '🦛', text: 'icons.hippopotamus' },
  { emoji: '🐘', text: 'icons.elephant' },
  { emoji: '🦏', text: 'icons.rhinoceros' },  
  { emoji: '🦋', text: 'icons.butterfly' },
  { emoji: '🐛', text: 'icons.caterpillar' },
  { emoji: '🐜', text: 'icons.ant' },
  { emoji: '🦘', text: 'icons.kangaroo' },
  { emoji: '🦔', text: 'icons.hedgehog' },
  { emoji: '🦇', text: 'icons.bat' },
  { emoji: '🦫', text: 'icons.beaver' },  
  { emoji: '🐬', text: 'icons.dolphin' },
  { emoji: '🐠', text: 'icons.fish' },
  { emoji: '🦡', text: 'icons.badger' },
  { emoji: '🐦', text: 'icons.bird' },
  { emoji: '🐤', text: 'icons.chick' },
  { emoji: '🦨', text: 'icons.skunk' },
  { emoji: '🐧', text: 'icons.penguin' },
  { emoji: '🦢', text: 'icons.swan' },
  { emoji: '🪿', text: 'icons.goose' },
  { emoji: '🪺', text: 'icons.nest' },
  { emoji: '🐊', text: 'icons.crocodile' },
  { emoji: '🐢', text: 'icons.turtle' },
  { emoji: '🐳', text: 'icons.whale' },
  { emoji: '🐙', text: 'icons.octopus' },
  { emoji: '🪸', text: 'icons.coral' },
  { emoji: '🪼', text: 'icons.jellyfish' },
  { emoji: '🦀', text: 'icons.crab' },  
  { emoji: '🦑', text: 'icons.squid' },
  { emoji: '🦪', text: 'icons.oyster' },

  


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
