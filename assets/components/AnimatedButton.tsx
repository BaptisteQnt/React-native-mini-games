import React, {useRef} from "react";
import { Animated, Text, TouchableHighlight, TouchableWithoutFeedback } from "react-native";
import styles from "../styles/styles";

interface AnimatedButtonProps {
    action: 'higher' | 'lower'; // Si 'action' peut être 'higher' ou 'lower'
    onPress: () => void;       // Le type de la fonction onPress
}

export default function AnimatedButton({ action, onPress }: AnimatedButtonProps) {

    const opacity = useRef(new Animated.Value(1));

    return (
        <TouchableWithoutFeedback onPress={() => {
            Animated.timing(opacity.current, {
                toValue: 0.2,
                duration: 800,
                useNativeDriver: true,
            }).start(() => onPress());
        }}>
            <Animated.View style={[styles.button, action === 'higher' ? styles.buttonGreen : styles.buttonRed, {opacity: opacity.current }, ]}>
                <Text style={styles.buttonText}>{action}</Text>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
}