import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text} from 'react-native'

interface Props {
    number: number,
    onPress: () => void
  }

export default function ButtonNumber({number, onPress}: Props) {
  return (
    <View >
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>
            {number}
        </Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        backgroundColor: 'grey',
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
    }
  });
  