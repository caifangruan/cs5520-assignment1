/**
 * Header.js defines a reusable header component for displaying a title.
 * It accepts a 'headerTitle' prop to customize the title text.
 */

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header({headerTitle}) {

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>{headerTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center', 
    paddingTop: 5, 
  },
  header: {
    color: "darkmagenta",
    fontSize: 20,
    padding: 60,
    borderRadius: 5,
    textAlign: 'center',
  },

});