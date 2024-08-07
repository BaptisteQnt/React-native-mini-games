import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    baseNumber: {
        fontSize: 48,
        marginBottom: 30, 
    },
    button: {
        backgroundColor: 'blue',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 15,
        padding: 30,
        marginVertical: 15,
    },
    buttonRed: {
        backgroundColor: 'red',
    },
    buttonGreen: {
        backgroundColor: 'green',
    },
    buttonText: {
        color: 'white',
        fontSize: 24,
        textTransform: 'capitalize',
    },
    message: {
        fontSize: 48,
    }
});



export default styles;