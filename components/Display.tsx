import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {horizontalScale, moderateScale, verticalScale} from '../utils/Metrics'

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
    flex: 2,
    justifyContent: "flex-end",
    alignItems: 'flex-end',
    width: '100%',
    backgroundColor: '#F5F5F5'
  },
  textResult: {
    fontSize: moderateScale(20),  
  }
});