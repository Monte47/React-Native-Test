import React from 'react';
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  ListView
} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';

export default class ListDetailComponent extends React.Component {


  static navigationOptions = ({ navigation }) => ({
    title: `List Detail`,
  });


  render() {
    return(
      <View>
        <Text>{this.props.navigation.state.params.user.name}</Text>
        <Text>{this.props.navigation.state.params.user.role}</Text>
      </View>
    );
  }
}

styles = StyleSheet.create({
  row: {
    marginBottom: 5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
  },
  rowText: {
    flex: 1,
  }
});
