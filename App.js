import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if(userNumber){
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
        source={require('./assets/images/background.png')} 
      >
        {/* <StartGameScreen /> */}
        <SafeAreaView style={styles.rootScreen}>
        {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    //use gradient, no need for color but use the ones from linear
    // backgroundColor: '#ddb52f', 
  },
  backgroundImage: {
    opacity: 0.15
  },
});
