import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from 'react-native';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Shapes',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'shapes' : 'shapes-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="things"
        options={{
          title: 'Things',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'car' : 'car-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="sports"
        options={{
          title: 'Sports',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'football' : 'football-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="animals"
        options={{
          title: 'Animals',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'bug' : 'bug-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="letters"
        options={{
          title: 'Letters',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'library' : 'library-outline'} color={color} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="numbers"
        options={{
          title: 'Numbers',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'calculator' : 'calculator-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
