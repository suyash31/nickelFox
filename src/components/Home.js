import React, { Component } from 'react';
import { Container, Tab, Tabs, ScrollableTab, Drawer } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import SourceList from './SourceList';
import Header from './Header';
import SideBar from './SideBar';

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

export default class Home extends Component {
  constructor() {
    super();
  }

  manageDrawer = (s) => {
    this.openDrawer();
  }

  closeDrawer() {
    this._drawer._root.close()
  };

  openDrawer() {
    this._drawer._root.open()
  };

  render() {
    return (
      <Drawer ref={(ref) => { this._drawer = ref; }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}
      >
      <Container>
        <Header hasTabs component={'Home'} manageDrawer={this.manageDrawer}/>
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
            <SourceList category={'general'} />
          </Tab>
          <Tab heading="Business"
            tabStyle={styles.tabStyle}
            textStyle={styles.textStyle}
            activeTabStyle={styles.tabStyle}
            activeTextStyle={styles.activeTextStyle}
          >
            <SourceList category={'business'} />
          </Tab>
          <Tab heading="Entertainment"
            tabStyle={styles.tabStyle}
            textStyle={styles.textStyle}
            activeTabStyle={styles.tabStyle}
            activeTextStyle={styles.activeTextStyle}
          >
            <SourceList category={'entertainment'}/>
          </Tab>
          <Tab heading="Health"
            tabStyle={styles.tabStyle}
            textStyle={styles.textStyle}
            activeTabStyle={styles.tabStyle}
            activeTextStyle={styles.activeTextStyle}
          >
            <SourceList category={'health'} />
          </Tab>
          <Tab heading="Science"
            tabStyle={styles.tabStyle}
            textStyle={styles.textStyle}
            activeTabStyle={styles.tabStyle}
            activeTextStyle={styles.activeTextStyle}
          >
            <SourceList category={'science'} />
          </Tab>
          <Tab heading="Sports"
            tabStyle={styles.tabStyle}
            textStyle={styles.textStyle}
            activeTabStyle={styles.tabStyle}
            activeTextStyle={styles.activeTextStyle}
          >
            <SourceList category={'sports'} />
          </Tab>
          <Tab heading="Technology"
            tabStyle={styles.tabStyle}
            textStyle={styles.textStyle}
            activeTabStyle={styles.tabStyle}
            activeTextStyle={styles.activeTextStyle}
          >
            <SourceList category={'technology'} />
          </Tab>
        </Tabs>
      </Container>
      </Drawer>
    );
  }
}