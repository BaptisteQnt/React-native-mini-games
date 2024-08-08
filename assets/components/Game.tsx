import React, { useEffect, useState } from "react";
import { Text, View, StatusBar, TouchableHighlight, Alert } from 'react-native';
import { useNavigation, RouteProp } from "@react-navigation/native";
import styles from "../styles/styles";
import AnimatedButton from "./AnimatedButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
    Game: undefined;
    Result: {
        winner: boolean;
        baseNumber: number;
        score: number;
    };
};

type GameScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Game'>;

export default function Game() {

    const [choice, setChoice] = useState<string>('');

    const baseNumber = Math.floor(Math.random() * 100);
    const score = Math.floor(Math.random() * 100);

    console.log(`beginning base number = ${baseNumber} et score = ${score}`)

    const navigation = useNavigation<GameScreenNavigationProp>();

    useEffect(() => {

        if(choice) {
            console.log(`Base Number = ${baseNumber} et score = ${score}`)
            const winner = 
                (choice === 'higher' && score > baseNumber) ||
                (choice === 'lower' && baseNumber > score);
                // Alert.alert(`You've ${winner ? 'won' : 'lost'}`,
                //     `You scored: ${score}`);
                navigation.navigate('Result', {
                    winner: winner,
                    baseNumber: baseNumber,
                    score: score
                });
        }
    }, [baseNumber, score, choice])

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.baseNumber}>
                Starting: {baseNumber}
            </Text>
            <AnimatedButton action="higher" onPress={() => setChoice('higher')} />
            <AnimatedButton action="lower" onPress={() => setChoice('lower')} />
        </View>
    );
}
