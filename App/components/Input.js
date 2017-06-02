import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Switch
} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';

export default class Input extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      textVal: "",
      switchVal: false
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: `Input`,
  });

  onSubmit() {
    console.log("submitted");
  }

  onSwitchChange(value) {
    this.setState({
      switchVal: value
    });
  }


  render() {
    console.log("hello");
    return(
      <View>
          <TextInput
          style={styles.t2}
          onChangeText={(text) => this.setState({textVal: text})}
          placeholder="Hi"
          value={this.state.textVal}
          onSubmitEditing={this.onSubmit}
          />
          <Text style={styles.t1}>
            {this.state.textVal}
          </Text>
          <Switch
            value={this.state.switchVal}
            onValueChange={(value) => this.onSwitchChange(value)}
          />
      </View>
    );
  }
}

styles = StyleSheet.create({
  t1: {
    margin: 10,
    backgroundColor: 'red',
    width: 200,
  },
  t2: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200
  }
});
