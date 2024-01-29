import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import FinalScreen from './screens/FinalScreen';
import GradientBackground from './components/GradientBackground';

// Function to generate a random number between 1020 and 1029
function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 10) + 1020;
  //console.log("Generated random number:", randomNumber);
  return randomNumber;
}


const App = () => {
  const [userName, setUserName] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [attempts, setAttempts] = useState(2);
  const [correctNumber, setCorrectNumber] = useState(null);
  const [currentScreen, setCurrentScreen] = useState('start');
  const [isNewGame, setIsNewGame] = useState(true);


  
  // Function to start a new game with a user name and number
  const startGameHandler = (name, number) => {
    setUserName(name);
    setUserNumber(number);
    setGameOver(false);
   
    if (isNewGame) {
      setAttempts(2);
      setCorrectNumber(generateRandomNumber());
      setIsNewGame(false); 
    }

    setCurrentScreen('game');
    
  };

  // Function to handle user guesses and game progression
  const guessHandler = (endGame = false) => {
    if (endGame || userNumber === correctNumber || attempts <= 0) {
      setGameOver(true);
      setCurrentScreen('final');
    } else {
      setAttempts(prevAttempts => prevAttempts - 1);
      setCurrentScreen('start');
    }
  };
  
  // Function to restart the game
  const restartGameHandler = () => {
    setUserName('');
    setUserNumber('');
    setGameOver(false);
    setAttempts(2);
    setCurrentScreen('start');
    setIsNewGame(true); 
  };

  // Function to handle name input change
  const onNameChange = (name) => {
    setUserName(name);
  };

  // Function to handle number input change
  const onNumberChange = (number) => {
    setUserNumber(number);
  };

  // Function to render different screens based on game state
  const renderScreen = () => {
    switch (currentScreen) {
      case 'start':
        return (
          <StartScreen
            onStartGame={startGameHandler}
            onNameChange={onNameChange}
            onNumberChange={onNumberChange}
            userName={userName}
            inputNumber={userNumber}
            
            
          />
        );
      case 'game':
        return (
          <GameScreen
            isVisible={!gameOver}
            userName={userName}
            userNumber={userNumber}
            onGuess={guessHandler}
            attemptsLeft={attempts}
            correctNumber={correctNumber}
          />
        );
      case 'final':
        //console.log(`Type of correctNumber in app: ${typeof correctNumber}, Value: ${correctNumber}`);
        return (
          <FinalScreen
            hasWon={userNumber === correctNumber}
            correctNumber={correctNumber}
            onRestart={restartGameHandler}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <GradientBackground>
        {renderScreen()}
      </GradientBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
