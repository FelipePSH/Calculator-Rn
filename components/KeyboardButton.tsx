import { View, TouchableOpacity, StyleSheet, Text} from 'react-native'
import {horizontalScale, moderateScale, verticalScale} from '../utils/Metrics'

interface Props {
    character: string,
    bgColor: string,
    textColor: string,
    onPress: () => void,
  }

export default function KeyboardButton({character, bgColor, textColor="#383b40", onPress}: Props) {
    const styles = StyleSheet.create({
        button: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: bgColor,
            minHeight: verticalScale(70),
            minWidth:  horizontalScale(70),
            marginHorizontal: horizontalScale(1),
            marginVertical: verticalScale(3),
            borderRadius: 15
        },
        text: {
            color: textColor,
            textAlign: 'center',
            fontSize: moderateScale(20),
            fontWeight: 'bold',
        }
      });

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>
            {character}
        </Text>
      </TouchableOpacity>
    </View>
  )
}
