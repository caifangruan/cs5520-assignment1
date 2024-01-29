import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from './colors';


const CheckboxComponent = ({isChecked,setChecked}) => {
  return(
  <View style={styles.section}>
    <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
    <Text style={styles.label}>I am not a robot</Text>
  </View>
  )
  };

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 13,
    height: 13,
    borderWidth: 1,
    borderColor: colors.text,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    width: 14,
    height: 14,
    backgroundColor: colors.button,
  },
  label: {
    fontSize: 13,
    color: colors.text,
  },
});

export default CheckboxComponent;
