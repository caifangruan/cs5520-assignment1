
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { colors } from './colors';

const InputField = ({ value, onChangeText, placeholder, secureTextEntry, keyboardType }) => (
  <TextInput
    style={styles.input}
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
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

