/**
 * Created by yueyunshi on 2018/2/9.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/***
 *  1.导出属性
 *  2.导出方法
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
export var name = "小明" //单个导出
//批量导出
var  age = 20
const sex = "female"
export {age,sex}

//导出一个sum 方法
export function sumFuc(a,b) {
    return a+b;
}
