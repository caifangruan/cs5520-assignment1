
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from './colors';

/**
 * Card component represents a styled container for content.
 *
 * @param {ReactNode} children - The content to be displayed within the card.
 * @returns {JSX.Element} - A React component that provides a card-like container for content.
 */
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
