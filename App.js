import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';
// 全局注册并注入mobx，首页新品，分类页，商品详情页，购物车页面都要用到store
import {Provider} from 'mobx-react';
// 获取store实例
import store from './src/Mobx/Store';

import One from './src/One/One';
import Two from './src/Two/Two';

export default class TwoDetails extends Component<Props> {
  render () {
    return (
      <Provider rootStore={store}>

        <Navigator
          onNavigationStateChange={(prevState, currentState) => {
            // 只要切换tab,push,pop,这里一定走
            console.log (prevState);
            console.log (currentState);
          }}
        />
      </Provider>
    );
  }

  componentDidMount = () => {
    console.disableYellowBox = true; //去除黄色弹框警告
  };
}

const Tab = TabNavigator (
  {
    One: {
      screen: One,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '男孩',
        tabBarIcon: ({focused, tintColor}) => (
          <Image
            source={
              focused
                ? require ('./src/Image/boy_active.png')
                : require ('./src/Image/boy.png')
            }
            style={{width: 25, height: 25}}
          />
        ),
      }),
    },
    Two: {
      screen: Two,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '女孩',
        tabBarIcon: ({focused, tintColor}) => (
          <Image
            source={
              focused
                ? require ('./src/Image/girl_active.png')
                : require ('./src/Image/girl.png')
            }
            style={{width: 25, height: 25}}
          />
        ),
      }),
    },
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    lazy: true,
    tabBarOptions: {
      activeTintColor: '#979797',
      inactiveTintColor: '#979797',
      style: {backgroundColor: '#ffffff'},
    },
  }
);

const Navigator = StackNavigator ({
  Tab: {
    screen: Tab,
  },
});

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
