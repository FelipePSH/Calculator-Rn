import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text} from 'react-native'

interface Props {
    character: string,
    bgColor: string,
    onPress: () => void
  }

export default function GenericRoundedButton({character, bgColor, onPress}: Props) {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: bgColor,   
            paddingVertical: 12,
            paddingHorizontal: 20,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 10, 
        },
        text: {
            color: 'white',
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
        },
        title: {
          color: 'white',
          textAlign: 'center',
          fontSize: 25,
          fontWeight: 'bold',
      }
      });

  return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>
            {character}
        </Text>
      </TouchableOpacity>
  )
}
