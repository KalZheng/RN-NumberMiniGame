import { View, Text, StyleSheet, } from "react-native";

import Title from "../components/Title";

function GameScreen() {
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {/* Guess
            <View>
                <Text>Higher or lower?</Text>
                +
                -
            </View>
            <View>Log Rounds</View> */}
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#ddb52f',
    }
});