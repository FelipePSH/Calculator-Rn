import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function Display() {

  return (
   <View style={styles.result}>
        <Text>
            2+2 = 4
        </Text>
   </View>
  );
}

const styles = StyleSheet.create({
  result: {
    justifyContent: "flex-end",
    alignItems: 'flex-end',
    width: '100%',
    height: 300,
    backgroundColor: '#F5F5F5'
  },
  textResult: {
    fontSize: 20,
    margin: 10
  }
});