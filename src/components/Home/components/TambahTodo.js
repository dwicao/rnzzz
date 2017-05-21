import React, { Component } from 'react';
import {
  View,
  TextInput
} from 'react-native';
import styles from './TambahTodo.style';

class TambahTodo extends Component {
  render() {
    return (
      <View>
        <TextInput
          onSubmitEditing={this.props.onSubmitEditing}
          onChangeText={this.props.ubahInputanValue}
          value={this.props.inputanValue}
          style={styles.inputan}
        />
      </View>
    );
  }
}

export default TambahTodo;
