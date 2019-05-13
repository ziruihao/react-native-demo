import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native';

import VideoList from '../components/video-list';
// import VideoDetail from '../components/video_detail';

const TempDetail = props => (<Button onPress={() => { props.navigation.pop(); }} title="close" />);

// nest stack navigator to handle two internal views
const SearchTab = createStackNavigator({
  // keys are the names of the "routes"
  Search: VideoList,
  Detail: TempDetail,
});

// override some navigation options - set a pretty icon
SearchTab.navigationOptions = ({ navigation }) => ({
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="search"
      size={26}
      color={focused ? '#58AADA' : 'grey'}
    />
  ),
});

export default SearchTab;
