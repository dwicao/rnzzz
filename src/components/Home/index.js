import React, { Component } from 'react';
import {
  ListView,
  View,
  Text
} from 'react-native';
import TambahTodo from './components/TambahTodo';
import DaftarTodo from './components/DaftarTodo';

class Home extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.dataKu = ['row 1', 'row 2'];

    this.state = {
      inputanValue: 'Ovuvuvuv osas',
      dataSource: ds.cloneWithRows(this.dataKu),
    };

    this.addTodo = this.addTodo.bind(this);
    this.ubahInputanValue = this.ubahInputanValue.bind(this);
  }

  ubahInputanValue(text) {
    this.setState({ inputanValue: text });
  }

  addTodo() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.dataKu.push(this.state.inputanValue);

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
        <DaftarTodo dataSource={this.state.dataSource} />
      </View>
    );
  }
}

export default Home;
