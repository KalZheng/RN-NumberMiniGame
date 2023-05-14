import { useState } from "react";
import { View, Text, StyleSheet, } from "react-native";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import Colors from "../constants/colors";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

function GameScreen({userNumber}) {
    const initialGuess = generateRandomBetween(1 , 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);


    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
                {/* +
                - */}
            </View>
            {/* <View>Log Rounds</View> */}
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
        color: Colors.accent500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.accent500,
    }
});