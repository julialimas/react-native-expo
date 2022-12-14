import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/fotojulia.png')}
        style={styles.image}
      />
      <Text style= {styles.text}>JÚLIA LIMA SANTOS</Text>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    resizeMode: 'contain', width: '100%', flex: 2
  },
  text:{
    bottom: '10%'
  }
})
