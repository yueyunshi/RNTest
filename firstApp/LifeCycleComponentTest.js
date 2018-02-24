/**
 * Created by yueyunshi on 2018/2/9.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/***
 *组件的生命周期
 */


import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class LifeCycleComponentTest extends  Component{
      constructor(props) {
        super(props);
          console.log('------constructor---------')
        // 初始状态
        this.state = {
            count:0   //记录组件被点击次数
        };
      }

    componentWillMount() {
        //组件即将装载
        console.log('------componentWillMount---------')
    }

    componentDidMount() {
        //组件装载完成
        console.log('------componentDidMount---------')
    }

    componentWillReceiveProps() {
        //组件将要收到更新数据的时候
        console.log('------componentWillReceiveProps---------')
    }

    shouldComponentUpdate() {
        //询问组件是否要更新 需要有返回值类型
        console.log('------shouldComponentUpdate---------')
        return true
    }

    componentDidUpdate() {
        //组件更新
        console.log('------componentDidUpdate---------')
    }

    componentWillUnmount() {
        //组件被移除之前
        console.log('------componentWillUnmount---------')
    }


    render(){
        console.log('------render---------')

        return <View>
            <Text style={{fontSize:20,backgroundColor:'red'}}
                  onPress={()=>{
                    this.setState({
                    count:this.state.count+1,
                    })
                    // this.state.count++
                }}

            >来打我</Text>
            <Text style={{fontSize:20}}

            >被打了{this.state.count}次
            </Text>
            </View>
    }
}

