import React, { Component } from 'react';
import { Container, Tab, Tabs, ScrollableTab } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './Home';
import Dummy from './Dummy';
import Header from './Header';

const styles = EStyleSheet.create({
  $red: '#cc0000',
  $grey: '#A1A1A1',

  underLine: {
    backgroundColor: '$red'
  },
  tabStyle: {
    backgroundColor: '#FFF',
  },
  textStyle: {
    color: '$grey',
    fontWeight: 'bold',
  },
  activeTextStyle: {
    color: '$red',
    fontWeight: 'bold',
  }
})
export default class Categories extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <Header hasTabs/>
        <Tabs
          tabBarUnderlineStyle={styles.underLine}
          renderTabBar={() =>{
            return(
              <ScrollableTab />
            )
          }}
        >
          <Tab heading="General"
            tabStyle={styles.tabStyle}
            textStyle={styles.textStyle}
            activeTabStyle={styles.tabStyle}
            activeTextStyle={styles.activeTextStyle}
          >
            <Home category={'general'}/>
          </Tab>
          <Tab heading="Business"
            tabStyle={styles.tabStyle}
            textStyle={styles.textStyle}
            activeTabStyle={styles.tabStyle}
            activeTextStyle={styles.activeTextStyle}
          >
            <Home category={'business'}/>
          </Tab>
          <Tab heading="Entertainment"
            tabStyle={styles.tabStyle}
            textStyle={styles.textStyle}
            activeTabStyle={styles.tabStyle}
            activeTextStyle={styles.activeTextStyle}
          >
            <Home category={'entertainment'}/>
          </Tab>
          <Tab heading="Health"
            tabStyle={styles.tabStyle}
            textStyle={styles.textStyle}
            activeTabStyle={styles.tabStyle}
            activeTextStyle={styles.activeTextStyle}
          >
            <Home category={'health'}/>
          </Tab>
          <Tab heading="Science"
            tabStyle={styles.tabStyle}
            textStyle={styles.textStyle}
            activeTabStyle={styles.tabStyle}
            activeTextStyle={styles.activeTextStyle}
          >
            <Home category={'science'}/>
          </Tab>
          <Tab heading="Sports"
            tabStyle={styles.tabStyle}
            textStyle={styles.textStyle}
            activeTabStyle={styles.tabStyle}
            activeTextStyle={styles.activeTextStyle}
          >
            <Home category={'sports'}/>
          </Tab>
          <Tab heading="Technology"
            tabStyle={styles.tabStyle}
            textStyle={styles.textStyle}
            activeTabStyle={styles.tabStyle}
            activeTextStyle={styles.activeTextStyle}
          >
            <Home category={'technology'}/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}