/**
 * InputField Component represents an input field for text entry with customizable styling.
 *
 * @param {string} value - The current value of the input field.
 * @param {function} onChangeText - Callback function to handle text changes.
 * @param {boolean} secureTextEntry - Indicates whether the input should be obscured (e.g., for passwords).
 * @param {string} keyboardType - The type of keyboard to display (e.g., numeric, default).
 * 
 * @returns {JSX.Element} - A React component that represents an input field.
 */
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { colors } from './colors';

const InputField = ({ value, onChangeText, secureTextEntry, keyboardType }) => (
  <TextInput
    style={styles.input}
    value={value}
    onChangeText={onChangeText}
    secureTextEntry={secureTextEntry}
    keyboardType={keyboardType}
  />
);

const styles = StyleSheet.create({
  input: {
    color: colors.text,
    borderBottomWidth: 1, 
    borderBottomColor: colors.text,
    padding: 10,
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default InputField;

