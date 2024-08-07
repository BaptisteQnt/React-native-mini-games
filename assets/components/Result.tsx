import { Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import styles from '../styles/styles';

type ResultRouteParams = {
    winner: boolean;
    baseNumber: number;
    score: number;
};

type ResultScreenRouteProp = RouteProp<{ Result: ResultRouteParams }, 'Result'>;

export default function Result() {
    const route = useRoute<ResultScreenRouteProp>();
    const { winner, baseNumber, score } = route.params
    console.log(winner)
    return (
        <View style={styles.container}>
            <Text style={styles.message}>You've {winner ? `Won baseNumber was ${baseNumber} and score ${score}` : `lost baseNumber was ${baseNumber} and score ${score}`}</Text>
            {winner && (
                <LottieView autoPlay style={{ width:300, height:300,}} source={require('../winner.json')} resizeMode="cover" />
            )}
        </View>
    );
}