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
        text: 'row 1',
        isEditing: false,
      },
      {
        id: uuid.v4(),
        text: 'row 2',
        isEditing: false,
      }
    ];

    this.state = {
      inputanValue: 'Ovuvuvuv osas',
      dataSource: ds.cloneWithRows(this.dataKu),
    };

    this.ubahTodo = this.ubahTodo.bind(this);
    this.toEdit = this.toEdit.bind(this);
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
      text: this.state.inputanValue,
      isEditing: false,
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

  toEdit(id) {
    this.dataKu = this.dataKu.map(todo => {
      if (todo.id !== id) return todo;
      todo.isEditing = true;
      return todo;
    });

    this.setTodo();
  }

  ubahTodo(id, text) {
    this.dataKu = this.dataKu.map(todo => {
      if (todo.id !== id) return todo;
      todo.isEditing = false;
      todo.text = text;
      return todo;
    });

    this.setTodo();
  }

  render() {
    return (
      <View>
        <Text>ini adalah Home</Text>
        <TambahTodo
          onSubmitEditing={this.addTodo}
          ubahInputanValue={this.ubahInputanValue}
          inputanValue={this.state.inputanValue}
        />
        <DaftarTodo
          ubahTodo={this.ubahTodo}
          toEdit={this.toEdit}
          deleteTodo={this.deleteTodo}
          dataSource={this.state.dataSource}
        />
      </View>
    );
  }
}

export default Home;
