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
export default class TouchableTest extends  Component{

    render(){

        return <View style={{marginTop:20}}>
            <Image
                style={style.image1}
                source={require('./qiqiu.jpeg')}
                //resizeMode图片展示模式 cover平铺图片大小不变可能大于容器
                //contain 图片等比缩放到容器内
                //stretch 拉伸图片填满容器
                //center 图片居中但不拉伸
                resizeMode={'center'}
            />
            <Image
                style={
                    style.image1
                }
                //通过网络获取的图片 需要指定容器的宽和高 如果不制定就不知道图片的大小就会不显示
                source={{uri:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=54022973,710494679&fm=173&s=F580F91502406AEE8699F54D030070B1&w=218&h=146&img.JPEG'}}
            />

            <Image
                style={
                    style.image2
                }
                //获取xcode 中的图片 如果不显示需用在模拟器上重装
                //同样不指定样式 也是无法加载出来图片的因为不知道图片的大小
                // tintColor:'red' 可以给图片着色

                source={{uri:'dixianquan_bg'}}
            />
        </View>
    }
}

//自定义style
const style = StyleSheet.create({
    image1:{
        borderWidth:1,
        width:500,
        height:100
    },

    image2:{
        borderWidth:1,
        width:500,
        height:100,
        tintColor:'red'
    }
})
