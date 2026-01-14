import { Ionicons } from '@expo/vector-icons';
import { NavigationIndependentTree } from '@react-navigation/core';
import type { RouteProp } from '@react-navigation/native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, type StackNavigationProp } from '@react-navigation/stack';
import * as Speech from 'expo-speech';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import type { PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';



const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25;

const Stack = createStackNavigator();

interface IconItem {
    emoji: string;
    text: string;
    name: string;
}

interface ColorChangingIconsProps {
    icons: IconItem[];
    colors: string[];
    colorNames: string[];
    title: string;
}

type IconScreenRouteParams = {
    icon: IconItem;
    colorIndex: number;
    colors: string[];
    colorNames: string[];
    icons: IconItem[];
};

type IconScreenRouteProp = RouteProp<Record<string, IconScreenRouteParams>, string>;
type IconScreenNavigationProp = StackNavigationProp<Record<string, IconScreenRouteParams>, string>;

function IconScreen({ route, navigation }: { route: IconScreenRouteProp; navigation: IconScreenNavigationProp }) {
    const { icon, colorIndex, colors, colorNames, icons } = route.params;
    //const [availableVoices, setAvailableVoices] = useState([]); // {{ edit_2 }}
    //const [selectedVoice, setSelectedVoice] = useState('com.apple.speech.synthesis.voice.Boing'); // {{ edit_3 }}
    const [selectedLanguage, setSelectedLanguage] = useState('en-GB'); // {{ edit_3 }}

    const pitch = 1.0; // {{ edit_4 }} // Default pitch
    const rate = 0.9; // {{ edit_5 }} // Default rate
    const { i18n } = useTranslation();
    // Get the currently selected language
    useEffect(() => {
        // Get the currently selected language
        const language = i18n.language;
        //console.log(language);

        switch (language) {
            case 'en':
                setSelectedLanguage('en-US');
                break; // Prevents fall-through

            case 'es':
                setSelectedLanguage('es-MX');
                break; // Prevents fall-through

            case 'de':
                setSelectedLanguage('de-DE');
                break; // Prevents fall-through

            case 'pl':
                setSelectedLanguage('pl-PL');
                break; // Prevents fall-through

            default:
                setSelectedLanguage('en-GB');
                break; // Optional, but good practice
        }
    }, [i18n.language]); // Dependency array to run effect when language changes


    /*
    useEffect(() => { // {{ edit_7 }}
        const fetchVoices = async () => {
            const voices = await Speech.getAvailableVoicesAsync();
            setAvailableVoices(voices);
            console.log(voices); // Log available voices
        };
        fetchVoices();
    }, []);
    */

    const colorScheme = useColorScheme();
    const { t } = useTranslation();

    const changeColor = useCallback(() => {
        const newColorIndex = (colorIndex + 1) % colors.length;
        navigation.setParams({ colorIndex: newColorIndex });
    }, [colorIndex, navigation, colors]);

    const onGestureEvent = ({ nativeEvent }: PanGestureHandlerGestureEvent) => {
        if (nativeEvent.state === State.END) {
            if (nativeEvent.translationX > SWIPE_THRESHOLD) {
                if (navigation.canGoBack()) {
                    navigation.goBack();
                } else {
                    //console.log("No screen to go back to");
                }
            } else if (nativeEvent.translationX < -SWIPE_THRESHOLD) {
                const nextScreenName = getNextScreenName(icon, icons);
                if (nextScreenName) {
                    navigation.navigate(nextScreenName);
                }
            }
        }
    };


    const speakText = (text: string) => { // {{ edit_8 }}
        Speech.speak(text, {
            //voice: selectedVoice,
            pitch: pitch,
            rate: rate,
            language: selectedLanguage
        });
    };

    return (
        <PanGestureHandler onHandlerStateChange={onGestureEvent}>
            <View style={[styles.container, { backgroundColor: colorScheme === 'dark' ? '#000' : '#fff' }]}>
                <View>
                    <TouchableOpacity onPress={() => { changeColor(); }} style={styles.itemContainer}>
                        <Text style={[styles.colorName, { color: colors[colorIndex] }]}>{t(colorNames[colorIndex])}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { speakText(t(colorNames[colorIndex])); }} style={styles.itemContainer}>
                        <Ionicons name="volume-high-outline" size={24} color={colorScheme === 'dark' ? '#fff' : '#000'} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => { changeColor(); }} style={styles.itemContainer}>
                    <Text style={[styles.emoji, { color: colors[colorIndex] }]}>{icon.emoji}</Text>
                    <Text style={[styles.text, { color: colors[colorIndex] }]}>{t(icon.text)}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { speakText(t(icon.text)); }} style={styles.itemContainer}>
                    <Ionicons name="volume-high-outline" size={48} color={colorScheme === 'dark' ? '#fff' : '#000'} />
                </TouchableOpacity>
            </View>
        </PanGestureHandler>
    );
}

function getNextScreenName(currentIcon: IconItem, icons: IconItem[]): string {
    const currentIndex = icons.findIndex(icon => icon.emoji === currentIcon.emoji);
    const nextIndex = (currentIndex + 1) % icons.length;
    return icons[nextIndex].emoji;
}

export function ColorChangingIcons({ icons, colors, colorNames, title }: ColorChangingIconsProps) {
    const colorScheme = useColorScheme();
    const { t } = useTranslation();


    return (
        <SafeAreaProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <NavigationIndependentTree>
                    <NavigationContainer
                        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
                    >
                        <Stack.Navigator
                            screenOptions={({ navigation, route }) => ({
                                headerShown: true,
                                gestureEnabled: false,
                                headerStyle: {
                                    backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
                                },
                                headerTintColor: colorScheme === 'dark' ? '#fff' : '#000',
                                headerTitleStyle: {
                                    color: colorScheme === 'dark' ? '#fff' : '#000',
                                },
                                headerTitleAlign: 'center',
                                headerLeft: () => {
                                    const currentIconIndex = route.params ? icons.findIndex(icon => icon.name === route.params.icon.name) : 0;
                                    const previousIconIndex = currentIconIndex === 0 ? icons.length - 1 : currentIconIndex - 1;

                                    return (
                                        <TouchableOpacity
                                            onPress={() => {
                                                navigation.navigate(icons[previousIconIndex].name); // Navigate to the previous icon
                                            }}
                                            style={styles.headerButton}
                                        >
                                            <Ionicons name="chevron-back" size={24} color={colorScheme === 'dark' ? '#fff' : '#000'} />
                                        </TouchableOpacity>
                                    );
                                },
                                headerRight: () => {
                                    const nextScreenName = route.params ? getNextScreenName(route.params.icon, icons) : icons[0].emoji;
                                    return (
                                        <TouchableOpacity onPress={() => navigation.navigate(nextScreenName)} style={styles.headerButton}>
                                            <Ionicons name="chevron-forward" size={24} color={colorScheme === 'dark' ? '#fff' : '#000'} />
                                        </TouchableOpacity>
                                    );
                                },
                                headerTitle: t(title),
                            })}
                        >
                            {icons.map((icon) => (
                                <Stack.Screen
                                    key={icon.emoji}
                                    name={icon.emoji}
                                    component={IconScreen}
                                    initialParams={{ icon, colorIndex: 0, colors, colorNames, icons }}
                                />
                            ))}
                        </Stack.Navigator>
                    </NavigationContainer>
                </NavigationIndependentTree>
            </GestureHandlerRootView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    emoji: {
        fontSize: 150,
    },
    text: {
        fontSize: 48,
        fontWeight: 'bold',
        marginTop: 10,
    },
    colorName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    headerButton: {
        padding: 10,
    },
});
