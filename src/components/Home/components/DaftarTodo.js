import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  ListView,
  TouchableOpacity,
} from 'react-native';
import styles from './DaftarTodo.style';

export default class DaftarTodo extends Component {
  constructor() {
    super();

    this.state = {
      textValue: '',
    };

    this.renderRow = this.renderRow.bind(this);
    this.ubahText = this.ubahText.bind(this);
  }

  ubahText(text) {
    this.setState({ textValue: text });
  }

  renderRow(rowData) {
    if (rowData.isEditing) {
      return (
        <TextInput
          style={styles.ketikaEdit}
          onSubmitEditing={() => this.props.ubahTodo(rowData.id, this.state.textValue)}
          onChangeText={this.ubahText}
          value={this.state.textValue}
        />
      );
    }

    return (
      <TouchableOpacity
        onPress={() => this.props.toEdit(rowData.id)}
        style={styles.row}
      >
        <Text>{rowData.text}</Text>
        <TouchableOpacity onPress={() => this.props.deleteTodo(rowData.id)}>
          <Text>{'\u2716'}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
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
