import React, { Component } from 'react';
import {
  ListView,
  View,
  Text
} from 'react-native';
import TambahTodo from './components/TambahTodo';
import DaftarTodo from './components/DaftarTodo';
import uuid from 'uuid';

class Home extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.dataKu = [
      {
        id: uuid.v4(),
        text: 'row 1'
      },
      {
        id: uuid.v4(),
        text: 'row 2'
      }
    ];

    this.state = {
      inputanValue: 'Ovuvuvuv osas',
      dataSource: ds.cloneWithRows(this.dataKu),
    };

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.ubahInputanValue = this.ubahInputanValue.bind(this);
  }

  ubahInputanValue(text) {
    this.setState({ inputanValue: text });
  }

  addTodo() {
    this.dataKu.push({
      id: uuid.v4(),
      text: this.state.inputanValue
    });

    this.setTodo();
  }

  deleteTodo(id) {
    this.dataKu = this.dataKu.filter(todo => todo.id !== id);

    this.setTodo();
  }

  setTodo() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({ dataSource: ds.cloneWithRows(this.dataKu) });
  }

  render() {
    return (
      <View>
        <Text>ini adalah HOme</Text>
        <TambahTodo
          onSubmitEditing={this.addTodo}
          ubahInputanValue={this.ubahInputanValue}
          inputanValue={this.state.inputanValue}
        />
        <DaftarTodo
          deleteTodo={this.deleteTodo}
          dataSource={this.state.dataSource}
        />
      </View>
    );
  }
}

export default Home;
