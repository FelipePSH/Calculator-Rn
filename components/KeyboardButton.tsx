import { View, TouchableOpacity, StyleSheet, Text} from 'react-native'

interface Props {
    character: string,
    bgColor: string,
    onPress: () => void
  }

export default function KeyboardButton({character, bgColor, onPress}: Props) {
    const styles = StyleSheet.create({
        button: {
            flex:2,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: bgColor,
            minHeight: 82,
            minWidth:  130,
            borderStyle: 'solid',
            borderColor: 'white',
            borderWidth: 0.2,

        },
        text: {
            color: 'white',
            textAlign: 'center',
            fontSize: 20,
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
