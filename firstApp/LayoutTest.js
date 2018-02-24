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
    View,
    Image
} from 'react-native';
export default class LayoutTest extends  Component{

    render(){

        return <View>
            <Text>-------------父试图属性--------------</Text>

            <Text>flexDirection 子试图排列的方向 默认是列排列  row | row-reverse | column | column-revers</Text>
            <View style={{flexDirection: 'row-reverse',flexWrap: 'nowrap',backgroundColor:"gray" }}>

                <View style={{width: 40,height: 40,backgroundColor: "red",margin: 5}}>
                    <Text style={{ fontSize:20 }}>1</Text>
                </View>

                <View style={{width: 40,height: 40,backgroundColor: "red",margin: 5}}>
                    <Text style={{ fontSize:20 }}>2</Text>
                </View>

                <View style={{width: 40,height: 40,backgroundColor: "red",margin: 5}}>
                    <Text style={{ fontSize:20 }}>3</Text>
                </View>
            </View>


            <Text>flexWrap 子试图是否允许换行 默认是不换行 nowrap | wrap </Text>
            <View style={{flexDirection: 'row',flexWrap: 'wrap',backgroundColor:"gray" }}>
                <View style={{width: 100,height: 40,backgroundColor: "red",margin: 5}}>
                    <Text style={{ fontSize:20 }}>wrap1</Text>
                </View>

                <View style={{width: 100,height: 40,backgroundColor: "red",margin: 5}}>
                    <Text style={{ fontSize:20 }}>wrap2</Text>
                </View>

                <View style={{width: 100,height: 40,backgroundColor: "red",margin: 5}}>
                    <Text style={{ fontSize:20 }}>wrap3</Text>
                </View>

                <View style={{width: 100,height: 40,backgroundColor: "red",margin: 5}}>
                    <Text style={{ fontSize:20 }}>wrap4</Text>
                </View>
            </View>

            <Text>justifyContent 子控件在主轴上的对齐方式,空间分配 跟flexDirection 配合使用 flex-start | flex-end | center | space-between | space-around</Text>
            <View style={{flexDirection: 'row',flexWrap: 'wrap',backgroundColor:"gray" ,justifyContent: 'center'}}>
                <View style={{width: 100,height: 40,backgroundColor: "red",margin: 5}}>
                    <Text style={{ fontSize:20 }}>wrap1</Text>
                </View>

                <View style={{width: 100,height: 40,backgroundColor: "red",margin: 5}}>
                    <Text style={{ fontSize:20 }}>wrap2</Text>
                </View>

                <View style={{width: 100,height: 40,backgroundColor: "red",margin: 5}}>
                    <Text style={{ fontSize:20 }}>wrap3</Text>
                </View>

                <View style={{width: 100,height: 40,backgroundColor: "red",margin: 5}}>
                    <Text style={{ fontSize:20 }}>wrap4</Text>
                </View>
            </View>

            <Text>alignItems 子控件在侧轴上的对齐方式,空间分配  flex-start | flex-end | center | baseline | stretch</Text>
            <View style={{flexDirection: 'row',flexWrap: 'nowrap',backgroundColor:"gray" , alignItems : 'center',height:300}}>
                <View style={{width: 100,height: 40,backgroundColor: "red",margin: 5}}>
                    <Text style={{ fontSize:20 }}>wrap1</Text>
                </View>

                <View style={{width: 100,height: 40,backgroundColor: "red",margin: 5}}>
                    <Text style={{ fontSize:20 }}>wrap2</Text>
                </View>

                <View style={{width: 100,height: 40,backgroundColor: "red",margin: 5}}>
                    <Text style={{ fontSize:20 }}>wrap3</Text>
                </View>

                <View style={{width: 100,height: 40,backgroundColor: "red",margin: 5}}>
                    <Text style={{ fontSize:20 }}>wrap4</Text>
                </View>
            </View>


            <Text>-------------子试图试图属性--------------</Text>
                <Text>alignSelf 子试自己控制侧轴排列方向 相当于重写了主视图的alignItems flex-start | flex-end | center | baseline | stretch</Text>
                <View style={{flexDirection: 'row',flexWrap: 'nowrap',backgroundColor:"gray",height:100}}>

                    <View style={{width: 40,height: 40,backgroundColor: "red",margin: 5,alignSelf: 'flex-end'}}>
                        <Text style={{ fontSize:20 }}>1</Text>
                    </View>

                    <View style={{width: 40,height: 40,backgroundColor: "red",margin: 5,alignSelf: 'center'}}>
                        <Text style={{ fontSize:20 }}>2</Text>
                    </View>

                    <View style={{width: 40,height: 40,backgroundColor: "red",margin: 5}}>
                     <Text style={{ fontSize:20 }}>3</Text>
                    </View>
                </View>


            <Text>flex 子试图的拉伸的权重比   默认为0 拉伸的时候不能指定宽或者高</Text>
            <View style={{flexDirection: 'row',flexWrap: 'nowrap',backgroundColor:"gray"}}>

                <View style={{height: 40,backgroundColor: "red",margin: 5,flex:1}}>
                    <Text style={{ fontSize:20 }}>1</Text>
                </View>

                <View style={{height: 40,backgroundColor: "red",margin: 5,flex:2}}>
                    <Text style={{ fontSize:20 }}>2</Text>
                </View>

                <View style={{height: 40,backgroundColor: "red",margin: 5,flex:3}}>
                    <Text style={{ fontSize:20 }}>3</Text>
                </View>
            </View>
        </View>;



    }
}

