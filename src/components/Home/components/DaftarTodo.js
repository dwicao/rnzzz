import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  TouchableOpacity,
} from 'react-native';
import styles from './DaftarTodo.style';

export default class DaftarTodo extends Component {
  constructor() {
    super();
  }

  renderRow(rowData) {
    return (
      <View style={styles.row}>
        <Text>{rowData}</Text>
        <TouchableOpacity>
          <Text>{'\u2716'}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.props.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}
