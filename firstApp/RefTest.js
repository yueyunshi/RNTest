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
export default class RefTest extends  Component{

      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            size:80
        };
      }
    
    getRef(){
        return this.state.size
    }
    
    render(){
        return <View>

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

