import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import KeyboardButton from './KeyboardButton';

export default function MyComponent() {

  const keyboardOptions = ['C', '+/-', '%', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/', '=']; 

  const [number, setNumber] = useState('')
  const handlePress = (newNumber: string) => {
    setNumber(number + newNumber)
  };

  return (
   <View style={styles.container}>

      {keyboardOptions.map((buttonValue, index) => (
        <KeyboardButton key={index} character={buttonValue.toString()} onPress={() =>handlePress(buttonValue.toString())} bgColor='#eb9b34'/>
      ))}
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    flexWrap: 'wrap'
  }
});