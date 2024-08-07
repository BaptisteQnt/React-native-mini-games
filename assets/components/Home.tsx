import React from "react";
import styles from "../styles/styles";
import { View, StatusBar, Text, TouchableHighlight, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { GestureHandlerRootView, LongPressGestureHandler, TapGestureHandler, State, GestureHandlerStateChangeEvent } from "react-native-gesture-handler";


type RootStackParamList = {
    Home: undefined;
    Game: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function Home() {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    function onLongPress(e: GestureHandlerStateChangeEvent) {
        if (e.nativeEvent.state === State.ACTIVE) {
            navigation.navigate('Game');
        }
    }

    function onTape(e: GestureHandlerStateChangeEvent) {
        if(e.nativeEvent.state === State.ACTIVE) {
            Alert.alert('Long press to start the game');
        }
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TapGestureHandler onHandlerStateChange={onTape}>
                    <LongPressGestureHandler onHandlerStateChange={onLongPress} minDurationMs={600}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Start game !</Text>
                        </View>
                    </LongPressGestureHandler>
                </TapGestureHandler>
            </View>
        </GestureHandlerRootView>
    );
}