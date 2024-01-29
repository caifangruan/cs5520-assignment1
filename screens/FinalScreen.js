
import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Button from '../components/Button';
import { colors } from '../components/colors';
import Header from '../components/Header';

const FinalScreen = ({ hasWon, correctNumber, onRestart }) => {
  //onsole.log(`Type of correctNumber in final: ${typeof correctNumber}, Value: ${correctNumber}`);
  const imageSource = hasWon
    //if won, display the online image
    ? {uri: `https://picsum.photos/id/${correctNumber}/100/100`}
    //if fail, display the local image
    : require('../assets/SadFace.jpeg'); 

  
  return (
    <View style={styles.container}>
      <Header  headerTitle = "Game is over"/>
      <Card>
        <Text style = {styles.label} >Here's your picture</Text>
        <Image source={imageSource} style={styles.image} />
        <Button title="Start Again" onPress={onRestart} textColor="blue"/>
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
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    alignSelf: 'center',
  },
  label: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 20,
    textAlign: 'center',
  },
  
});

export default FinalScreen;
 