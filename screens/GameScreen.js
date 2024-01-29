import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Button from '../components/Button';
import { colors } from '../components/colors';

const GameScreen = ({ isVisible, userName, userNumber, onGuess, attemptsLeft, correctNumber }) => {
  const hasWon = userNumber === correctNumber;
  const attemptsText = `You have ${attemptsLeft} ${attemptsLeft === 1 ? 'attempt' : 'attempts'} left!`;
  // console.log(`Type of userNumber: ${typeof userNumber}, Value: ${userNumber}`);
  // console.log(`Type of correctNumber: ${typeof correctNumber}, Value: ${correctNumber}`);

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.screen}>
        <Card>
          {hasWon ? (
            <>
              <Text style={styles.message}>Congrats {userName}! You Won!</Text>
              <Button title="Thank you!" onPress={() => onGuess(true)} textColor="blue"/>
            </>
          ) : (
            <>
              <Text style={styles.message}>
                {"\n"}Hello {userName}
                {"\n"}You have chosen {userNumber}
                {"\n"}That's not my number! 
                {"\n"}Guess {userNumber > correctNumber ? 'lower' : 'higher'}!
              </Text>
              <Text style={styles.attempts}>{attemptsText}</Text>
              <Button title="I am done" onPress={() => onGuess(true)} textColor="red"/>
              <Button title="Let Me Guess Again" onPress={() => onGuess(false)} textColor="blue"/>
            </>
          )}
        </Card>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  message: {
    fontSize: 18,
    color: colors.text,
    textAlign: 'center',
    marginBottom: 20,
  },
  attempts: {
    fontSize: 16,
    color: colors.text,
    textAlign: 'center',
    marginBottom: 10,
  },
  
});

export default GameScreen;
