/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { observer, inject } from 'mobx-react'
import { action, autorun, computed } from 'mobx'


@inject('rootStore')
@observer
export default class Two extends Component<Props> {
  render() {
    return (
      <View style={[styles.container,{backgroundColor:this.bgColor}]}>
       <Text>
           TWO
       </Text>
      </View>
    );
  }

    @computed get bgColor() {
        return this.props.rootStore.TwoInfo.allDatas.twoColor;
    }
}

const styles = StyleSheet.create({
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
