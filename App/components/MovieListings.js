import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ListView,
  TouchableHighlight
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import About from './About';

const API_KEY = '8fe224415d22eedcf1b6b22b7f8a8dfb';
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const REQUEST_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

class MoviesListing extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movies: null,
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    };
  }

  componentDidMount() {
  this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
    .then( (response) => response.json())
    .then( (responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData.results),
        movies: responseData.results
      });
    });
  }

  static navigationOptions = ({ navigation }) => ({
    title: `Some movies for ${navigation.state.params.user}`,
  });

  render() {
    if(!this.state.movies){
      return(
        <View></View>
      );
    }
    const { params } = this.props.navigation.state;
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Button onPress={() => navigate('About', { user: 'Monte', coolProp: "Go BAAACK" })} title="Try ME"/>
        <ListView dataSource={this.state.dataSource}
        renderRow={this.renderSingleMovie}
        style={styles.listView} />
      </View>
    );
  }

  renderSingleMovie(movie) {
    return (
      <View style={styles.container}>
      <Image style={styles.thumbnail}  source={{uri: POSTER_PATH + movie.poster_path}} />
      <View style={styles.listData}>
      <Text>{movie.original_title}</Text>
      <Text>{movie.release_date}</Text>
      </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 40,
    height: 80
  },
  listData: {
    marginLeft: 20,
    flex: 1,
  },
  listView: {
    flex: 1
  },
});

export default MoviesListing;
