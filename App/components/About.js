import React from 'react';
import {
  Text,
  View,
  Button,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Home'})
  ]
})



export default class About extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Prop: ${navigation.state.params.coolProp}`,
  });

  backToHome() {
    return this.props.navigation.dispatch(resetAction);
  }

  onPress() {
    console.log("Area Pressed");
  }

  onPress2() {
    console.log("Area 2 Pressed");
  }

  render() {
    console.log("hello");
    let { coolProp } = this.props.navigation.state.params
    return(
      <View>
        <TouchableHighlight>
          <Text onPress={this.backToHome.bind(this)}>
            {coolProp}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onPress} style={styles.v1} underlayColor="blue">
          <Text style={styles.v1}>
            Hightligt me!
          </Text>
        </TouchableHighlight>
        <TouchableOpacity onPress={this.onPress2} style={styles.v2}>
          <Text style={styles.v2}>
            Opacity me!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  v1: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'red',
    height: 30,
    padding: 10,
    margin: 10,
  },
  v2: {
    flex: 1,
    backgroundColor: 'green',
    padding: 10,
  }
});
