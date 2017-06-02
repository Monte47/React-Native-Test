import React from 'react';
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  ListView,
  TouchableHighlight
} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';

export default class ListDetailComponent extends React.Component {


  static navigationOptions = ({ navigation }) => ({
    title: `List Detail`,
  });

  pressed(){
    console.log("hi");
  }


  render() {
    return(
      <View>
        <TouchableHighlight onPress={this.pressed}>
          <Text>{this.props.navigation.state.params.user.name}</Text>
        </TouchableHighlight>
        <Text>{this.props.navigation.state.params.user.role}</Text>
        <Text>{this.props.navigation.state.params.user.songs.join(", ")}</Text>
        <Text>{this.props.navigation.state.params.user.alive}</Text>
      </View>
    );
  }
}
