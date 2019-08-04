import React, { Component } from 'react';
import { Container, Tab, Tabs, ScrollableTab } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './Home';
import Dummy from './Dummy';
import Header from './Header';

const styles = EStyleSheet.create({
  underLine: {
    backgroundColor: 'red'
  },
  tabsContainerStyle: {
    borderWidth: 2,
    borderColor: 'red',
  },
  scrollableTab: {
    backgroundColor: '#000',
    borderColor: 'blue',
    borderWidth: 1,
  }
})
export default class Categories extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs/>
        <Tabs
          tabBarUnderlineStyle={styles.underLine}
          renderTabBar={() => {  
            return(
              <ScrollableTab 
                // underlineStyle = {styles.underLine}
                tabsContainerStyle = {styles.tabsContainerStyle}
                style = {styles.scrollableTab}
              />
            )
          }}
        >
          <Tab heading="General" tabBarBackgroundColor={'#FFF'}>
            <Home />
          </Tab>
          <Tab heading="Business">
            <Dummy />
          </Tab>
          <Tab heading="Entertainment">
            <Home />
          </Tab>
          <Tab heading="Health">
            <Dummy />
          </Tab>
          <Tab heading="Science">
            <Home />
          </Tab>
          <Tab heading="Sports">
            <Home />
          </Tab>
          <Tab heading="Technology">
            <Home />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}