import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Keyboard from './components/Keyboard'
import Display from './components/Display';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Display />
      <Keyboard/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
});
