import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Card from '../components/Card';
import InputField from '../components/InputField';
import Button from '../components/Button';
import CheckboxComponent from '../components/Checkbox';
import { colors } from '../components/colors';
import Header from '../components/Header';

const StartScreen = ({ onStartGame, onNameChange, onNumberChange, userName, inputNumber }) => {
  const [isChecked, setChecked] = useState(false);
  const [nameError, setNameError] = useState('');
  const [numberError, setNumberError] = useState('');

  // Function to validate user inputs
  const validateInputs = () => {
    let isValid = true;
    
    if (!userName || userName.length < 2 || !isNaN(userName)) {
      setNameError('Please enter a valid name.');
      isValid = false;
    } else {
      setNameError('');
    }

    const userNumber = parseInt(inputNumber, 10);
    // console.log(`Input Number: ${inputNumber}, Parsed Number: ${userNumber}`);
    // console.log(`Type of inputNumber: ${typeof inputNumber}, Value: ${inputNumber}`);
    // console.log(`Type of userNumber: ${typeof userNumber}, Value: ${userNumber}`);

    if (isNaN(userNumber) || userNumber < 1020 || userNumber > 1029 || inputNumber.length > 4 ){
      setNumberError('Please enter a valid number.');
      isValid = false;
    } else {
      setNumberError('');
    }

    return isValid;
  };

  // Function to handle the confirmation button click
  const handleConfirm = () => {
    if (validateInputs() && isChecked) {
      const numericUserNumber = parseInt(inputNumber, 10);
      onStartGame(userName, numericUserNumber); 
    }
  };

  // Function to handle the reset button click
  const handleReset = () => {
    onNameChange('');
    onNumberChange('');
    setChecked(false);
  };

  return (
    <View style={styles.container}>
      <Header headerTitle = "Guess My Number" />
      <Card>
        <Text style={styles.label}>Name</Text>
        <InputField
          value={userName}
          onChangeText={onNameChange}
          keyboardType="default"
        />
        <Text style={styles.errorText}>{nameError}</Text>

        <Text style={styles.label}>Enter a Number</Text>
        <InputField
          value={inputNumber.toString()}
          onChangeText={text => onNumberChange(text)}
          keyboardType="numeric"
        />
        <Text style={styles.errorText}>{numberError}</Text>

        <CheckboxComponent
          label="I am not a robot"
          isChecked={isChecked}
          setChecked={setChecked}
        />

        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={handleReset} textColor="red"/>
          <Button title="Confirm" onPress={handleConfirm}  textColor="blue"/>
        </View>
      </Card>
    </View>
  
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    color: colors.text,
    alignSelf: 'flex-start',
  },
  errorText: {
    color: colors.errorText,
    fontSize: 14,
    height: 18,
  },
});

export default StartScreen;