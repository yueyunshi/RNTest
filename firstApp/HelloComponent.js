/**
 * Created by yueyunshi on 2018/2/9.
 */
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
export default class HelloComonent extends  Component{
    render(){
        return <Text style={{fontSize:20,backgroundColor:'red'}}>Hello</Text>;
    }
}

