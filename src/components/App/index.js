import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Home from '../Home';
import styles from './index.style';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
}

export default App;
