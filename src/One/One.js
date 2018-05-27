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
export default class One extends Component<Props> {
  // 构造
    constructor(props) {
      super(props);
        // 初始状态
      this.state = {};
    }


    render() {
        return (
            <View style={styles.container}>
                <Text onPress={()=>this.add()}>
                    + 红
                </Text>
                <Text>
                    One {this.dataSource}
                </Text>
                <Text onPress={()=>this.sub()}>
                    - 蓝
                </Text>
            </View>
        );
    }

    @computed get dataSource() {
        return this.props.rootStore.OneInfo.allDatas.oneNum;
    }

    /**
     * +
     * */
    @action
    add() {
        this.props.rootStore.OneInfo.add(this.dataSource)
    }


    /**
     * -
     * */
    @action
    sub() {
        this.props.rootStore.OneInfo.sub(this.dataSource)
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
