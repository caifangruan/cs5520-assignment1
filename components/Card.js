// src/components/Card.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from './colors';

const Card = ({ children }) => <View style={styles.card}>{children}</View>;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 10,
    padding: 20,
    margin: 10,
    width: '70%',
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 10,
  },
});

export default Card;
