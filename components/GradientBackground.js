
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { colors } from './colors';

/**
 * GradientBackground.js defines a reusable component for creating a gradient background.
 * It uses the LinearGradient component from Expo and applies a gradient from 'backgroundStart' to 'backgroundEnd' colors.
 * This component wraps its children with the gradient background.
 */
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
