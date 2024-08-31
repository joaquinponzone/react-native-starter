import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ImageBackground, View } from 'react-native';

export default function App() {
  return (
    <ImageBackground source={require('./assets/bg.png')} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>hello friend 👋🏼</Text>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color: 'black',
    fontSize: 24,
  },
});
