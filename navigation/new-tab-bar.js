/* eslint-disable react/no-multi-comp */
import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import About from '../components/about';
import SearchTab from './search-tab';

class AboutTab extends React.Component {
  componentWillMount() {

  }

  render() {
    return (
      <About />
    );
  }
}

const MainTabBar = createBottomTabNavigator({ SearchTab, AboutTab }, { initialRouteName: 'SearchTab' });

export default createAppContainer(MainTabBar);
