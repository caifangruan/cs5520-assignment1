
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { colors } from './colors';

const GradientBackground = ({ children }) => (
  <LinearGradient
    colors={[colors.backgroundStart, colors.backgroundEnd]}
    style={styles.gradient}
  >
    {children}
  </LinearGradient>
);

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});

export default GradientBackground;
