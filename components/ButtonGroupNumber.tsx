import React, { useState } from 'react'
import { View, StyleSheet, Text} from 'react-native'
import ButtonNumber from './ButtonNumber'

export default function MyComponent() {
    const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [number, setNumber] = useState('')
    const handlePress = (newNumber: string) => {
        setNumber(number + newNumber)
      };
      
  return (
    <View style={styles.container}>
        <Text>
            {number}
        </Text>
        {buttons.map((buttonValue, index) => (
        <ButtonNumber key={index} number={buttonValue} onPress={() =>handlePress(buttonValue.toString())}/>
      ))}
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap-reverse'
    },
    button: {
        backgroundColor: 'grey',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10, 
        margin: 20
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
    }
  });
  