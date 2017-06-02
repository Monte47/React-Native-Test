import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Image,
  ListView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MoviesListing from './components/MovieListings';
import About from './components/About';
import Input from './components/Input';
import ListViewComponent from './components/ListView';
import ListDetailComponent from './components/ListDetail'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };


  render() {
    const {navigate} = this.props.navigation;
    return(
    <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('MoviesListing', { user: 'Monte' })}
          title="Here's Some Movies"
        />
        <Button
          onPress={() => navigate('Input')}
          title="Go to Input"
        />
        <Button
          onPress={() => navigate('ListViewComponent')}
          title="List View"
        />
      </View>
    );
  }


}


const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  MoviesListing: { screen: MoviesListing },
  About: { screen: About },
  Input: { screen: Input },
  ListViewComponent: { screen: ListViewComponent },
  ListDetailComponent: { screen: ListDetailComponent }
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
