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
import ListDetailComponent from './ListDetail';


const users = [
  {
    name: 'John',
    role: 'singer/songwriter',
    alive: false,
    songs: ['let it be', 'imagine', 'blackbird']},
  {name: 'Paul'},
  {name: 'George'},
  {name: 'Ringo'},
  {name: 'John'},
  {name: 'Paul'},
  {name: 'George'},
  {name: 'Ringo'},
  {name: 'John'},
  {name: 'Paul'},
  {name: 'George'},
  {name: 'Ringo'},
  {name: 'John'},
  {name: 'Paul'},
  {name: 'George'},
  {name: 'Ringo'},
  {name: 'John'},
  {name: 'Paul'},
  {name: 'George'},
  {name: 'Ringo'},
  {name: 'John'},
  {name: 'Paul'},
  {name: 'George'},
  {name: 'Ringo'},
  {name: 'John'},
  {name: 'Paul'},
  {name: 'George'},
  {name: 'Ringo'},
  {name: 'John'},
  {name: 'Paul'},
  {name: 'George'},
  {name: 'Ringo'},
  {name: 'John'},
  {name: 'Paul'},
  {name: 'George'},
  {name: 'Ringo'},
  {name: 'John'},
  {name: 'Paul'},
  {name: 'George'},
  {name: 'Ringo'},
  {name: 'John'},
  {name: 'Paul'},
  {name: 'George'},
  {name: 'Ringo'},
  {name: 'John'},
  {name: 'Paul'},
  {name: 'George'},
  {name: 'Ringo'},
];

const SimpleApp = StackNavigator({
  ListDetailComponent: { screen: ListDetailComponent }
});

export default class ListViewComponent extends React.Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userDataSource: ds.cloneWithRows(users),
    };
    this.renderRow = this.renderRow.bind(this);
  }

  static navigationOptions = ({ navigation }) => ({
    title: `List View`,
  });

  renderRow(user) {
    const {navigate} = this.props.navigation;
    return(
      <View style={styles.row}>
        <Text style={styles.rowText} onPress={() => navigate('ListDetailComponent', { user: user })}>
          {user.name}
        </Text>
      </View>
    );
  }

  render() {
    return(
      <ListView
        dataSource={this.state.userDataSource}
        renderRow={this.renderRow.bind(this)}
      />
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
