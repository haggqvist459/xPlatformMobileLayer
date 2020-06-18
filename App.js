import React from 'react';
import { StyleSheet, View} from 'react-native';
import { globalStyles } from './styles/styles';
import Header from './components/Header';
import Home from './screens/Home';



export default function App() {
  return (
    <View>
      <Header/>
      <Home style={styles.container}/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
