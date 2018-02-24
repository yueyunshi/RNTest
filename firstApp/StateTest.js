/**
 * Created by yueyunshi on 2018/2/9.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';  //导入propTypes 可以做属性检查
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
export default class StateTest extends  Component{

    /*
    * state 定义的两种方式
    * */

    /*
    * 1. 构造函数外创建
    * */

    // state = {
    //     score:100
    // }
    //
    // // 构造
    //   constructor(props) {
    //     super(props);
    //   }

    /**
     * 2. 构造函数内创建
     * */

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            score1:200,
            size:80
        };
      }

    render(){
        return <View>
              <Text style={{fontSize:20,backgroundColor:'gray'}}>直接创建state: score={this.state.score}</Text>
            <Text style={{fontSize:20,backgroundColor:'blue'}}>直接创建state: score={this.state.score1}</Text>


            <Text
            style={{fontSize:20,backgroundColor:'red'}}
            onPress={()=>{
                        this.setState({
                            size:this.state.size+10
                        })
                 }}
            > 变大变大 </Text>

            <Text
                style={{fontSize:20,backgroundColor:'red'}}
                onPress={()=>{
                        this.setState({
                            size:this.state.size-10
                        })
                 }}
            > 变小变小 </Text>

             <Image
                 style={{width:this.state.size,height:this.state.size}}
                 source={require('./qiqiu.jpeg')}
             />
        </View>
    }
}

