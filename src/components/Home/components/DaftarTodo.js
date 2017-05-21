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

    this.renderRow = this.renderRow.bind(this)
  }

  renderRow(rowData) {
    return (
      <View style={styles.row}>
        <Text>{rowData.text}</Text>
        <TouchableOpacity onPress={() => this.props.deleteTodo(rowData.id)}>
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
