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
export default class ClassTest extends  Component{

     // 构造
       constructor(name,age,sex) {
         super(name,age,sex);
         // 初始状态
         this.state = {};
           this.name = name;
           this.age  = age;
           this.sex = sex
       }

    getDesc(){
        return 'name ='+this.name+'age ='+this.age+'sex ='+this.sex
    }
}

