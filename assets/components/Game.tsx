import React, { useEffect, useState } from "react";
import { Text, View, StatusBar, TouchableHighlight, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/styles";
import AnimatedButton from "./AnimatedButton";

export default function Game() {

    const [choice, setChoice] = useState('');

    const baseNumber = Math.floor(Math.random() * 100);
    const score = Math.floor(Math.random() * 100);

    console.log(`beginning base number = ${baseNumber} et score = ${score}`)

    const navigation = useNavigation();
    useEffect(() => {

        if(choice) {
            console.log(`Base Number = ${baseNumber} et score = ${score}`)
            const winner = 
                (choice === 'higher' && score > baseNumber) ||
                (choice === 'lower' && baseNumber > score);
                Alert.alert(`You've ${winner ? 'won' : 'lost'}`,
                    `You scored: ${score}`);
                navigation.goBack();
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
