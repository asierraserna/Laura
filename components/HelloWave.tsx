import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';
import Flag from 'react-native-flags';
import { useLanguage } from './LanguageContext';

import { ThemedText } from '@/components/ThemedText';

export function HelloWave() {
  const { t } = useTranslation();
  const { setLanguage } = useLanguage();

  const rotationAnimation = useSharedValue(0);

  const startAnimation = () => {
    rotationAnimation.value = withRepeat(
      withSequence(
        withTiming(25, { duration: 150, easing: Easing.linear }),
        withTiming(0, { duration: 150, easing: Easing.linear }),
        withTiming(-25, { duration: 150, easing: Easing.linear }),
        withTiming(0, { duration: 150, easing: Easing.linear })
      ),
      4,
      false // Don't reverse the animation
    );
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationAnimation.value}deg` }],
  }));

  return (
    <View style={styles.container}>
      <View style={styles.languageButtons}>
        <TouchableOpacity onPress={() => setLanguage('en')} style={styles.languageButton}>
          <Flag code="GB" size={32} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setLanguage('es')} style={styles.languageButton}>
          <Flag code="ES" size={32} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setLanguage('pl')} style={styles.languageButton}>
          <Flag code="PL" size={32} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setLanguage('de')} style={styles.languageButton}>
          <Flag code="DE" size={32} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
  },
  languageButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  languageButton: {
    marginHorizontal: 20,
  },
});
