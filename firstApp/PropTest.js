/**
 * Created by yueyunshi on 2018/2/9.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import propTypes from 'prop-types';  //导入propTypes 可以做属性检查
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
export default class PropTest extends  Component{

    static defaultProps = { //默认属性  Props 是只读的
        age:20,
        name: 'df'
    }

    static propTypes = {
        name: propTypes.string,  //要求name 属性类型为string
    }

    render(){
        let { name, age } = this.props;  //在使用属性的时候 先copy 出来一份 例如此时的 age 默认值为20 在此处修改为10 不影响其他调用的地方
        age = 10
        return <View>
              <Text style={{fontSize:20,backgroundColor:'green'}}>外部传入的属性: name={name}</Text>
             <Text style={{fontSize:20,backgroundColor:'green'}}>默认属性: age={age}</Text>

        </View>
    }
}

