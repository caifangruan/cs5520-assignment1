import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from './colors';

const Button = ({ title, onPress, disabled, textColor }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
    if (!disabled) {
      onPress();
    }
  };

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
      style={[styles.button, disabled && styles.disabledButton]}
    >
      <Text style={[styles.text, { color: isPressed ? 'grey' : textColor }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  disabledButton: {
    backgroundColor: colors.text,
  },
  text: {
    fontSize: 16,
  },
});

export default Button;
