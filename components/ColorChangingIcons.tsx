import React, { useCallback, useMemo } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25;

const Stack = createStackNavigator();

interface IconItem {
  name: string;
  text: string;
}

interface ColorChangingIconsProps {
  icons: IconItem[];
  colors: string[];
  colorNames: string[];
  title: string;
}

function IconScreen({ route, navigation }) {
    const { icon, colorIndex, colors, colorNames } = route.params;
    const colorScheme = useColorScheme();
    const { t } = useTranslation();

    const changeColor = useCallback(() => {
        const newColorIndex = (colorIndex + 1) % colors.length;
        navigation.setParams({ colorIndex: newColorIndex });
    }, [colorIndex, navigation, colors]);

    const onGestureEvent = ({ nativeEvent }) => {
        if (nativeEvent.state === State.END) {
            if (nativeEvent.translationX > SWIPE_THRESHOLD) {
                navigation.goBack();
            } else if (nativeEvent.translationX < -SWIPE_THRESHOLD) {
                const nextScreenName = getNextScreenName(icon, route.params.icons);
                navigation.navigate(nextScreenName);
            }
        }
    };

    return (
        <PanGestureHandler onHandlerStateChange={onGestureEvent}>
            <View style={[styles.container, { backgroundColor: colorScheme === 'dark' ? '#000' : '#fff' }]}>
                <Text style={[styles.colorName, { color: colors[colorIndex] }]}>{t(colorNames[colorIndex])}</Text>
                <TouchableOpacity onPress={changeColor} style={styles.itemContainer}>
                    <Ionicons name={icon.name} size={150} color={colors[colorIndex]} />
                    <Text style={[styles.text, { color: colors[colorIndex] }]}>{t(icon.text)}</Text>
                </TouchableOpacity>
            </View>
        </PanGestureHandler>
    );
}

function getNextScreenName(currentIcon, icons) {
    const currentIndex = icons.findIndex(icon => icon.name === currentIcon.name);
    const nextIndex = (currentIndex + 1) % icons.length;
    return icons[nextIndex].name;
}

export function ColorChangingIcons({ icons, colors, colorNames, title }: ColorChangingIconsProps) {
    const colorScheme = useColorScheme();
    const { t } = useTranslation();

    const memoizedIcons = useMemo(() => icons.map(icon => ({
        ...icon,
        text: t(icon.text)
    })), [icons, t]);

    const memoizedColorNames = useMemo(() => colorNames.map(name => t(name)), [colorNames, t]);

    return (
        <SafeAreaProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <NavigationContainer 
                    independent={true} 
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
                            headerLeft: () => (
                                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
                                    <Ionicons name="chevron-back" size={24} color={colorScheme === 'dark' ? '#fff' : '#000'} />
                                </TouchableOpacity>
                            ),
                            headerRight: () => {
                                const nextScreenName = getNextScreenName(route.params.icon, icons);
                                return (
                                    <TouchableOpacity onPress={() => navigation.navigate(nextScreenName)} style={styles.headerButton}>
                                        <Ionicons name="chevron-forward" size={24} color={colorScheme === 'dark' ? '#fff' : '#000'} />
                                    </TouchableOpacity>
                                );
                            },
                            headerTitle: t(title),
                        })}
                    >
                        {memoizedIcons.map((icon) => (
                            <Stack.Screen 
                                key={icon.name}
                                name={icon.name}
                                component={IconScreen}
                                initialParams={{ icon, colorIndex: 0, colors, colorNames: memoizedColorNames }}
                            />
                        ))}
                    </Stack.Navigator>
                </NavigationContainer>
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
