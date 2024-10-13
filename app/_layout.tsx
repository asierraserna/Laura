import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import { Stack } from 'expo-router';
import { LanguageProvider } from '../components/LanguageContext';

export default function RootLayout() {
  return (
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        </Stack>
      </LanguageProvider>
    </I18nextProvider>
  );
}
