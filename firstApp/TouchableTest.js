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
    Image,
    TouchableWithoutFeedback,
    Alert,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
export default class TouchableTest extends  Component{
    // TouchableWithoutFeedback | TouchableHighlight
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            count : 0,
            presstime:0,
            highlightText:'0'
        };
      }
    render(){

        return <View style={{marginTop:10, backgroundColor:'green'}}>
            <TouchableWithoutFeedback
                onPress={()=>{
                    this.setState({count: this.state.count +1})
                }}

                onLongPress={()=>{
                    Alert.alert('提示','确认删除?',[
                        {text:'取消',onPress:()=>{},style:'cancel'},
                        {text:'确认',onPress:()=>{}}
                    ])
                }}
            >
                <View style={style.button}>
                    <Text style={style.buttonText}>
                        我是TouchableNativeFeedback ,请单击
                    </Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
                disabled={this.state.waiting}
                onPress={()=>{
                    this.setState({text:'正在登陆。。。',waiting:true})
                    setTimeout(()=>{
                      this.setState({text:'网络不通畅',waiting:false})
                    },2000)
                }}
            >

                <View style={style.button}>
                    <Text style={style.buttonText}>
                        登陆(测试disable 属性  关闭交互)
                    </Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
                onPressIn={()=>{
                    this.setState({
                        presstime:'触摸开始',
                        startTime: new  Date().getTime()
                    })
                }}

                onPressOut={()=>{
                    this.setState({
                        presstime:'触摸结束,持续时间:'+(new Date().getTime() - this.state.startTime)/1000
                    })
                }}
            >
                <View style={style.button}>
                    <Text style={style.buttonText}>
                        点击/松开(用来点击时长记录时间)
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            <Text style={style.text}>你单击了:{this.state.count}次</Text>
            <Text style={style.text}>{this.state.text}</Text>
            <Text style={style.text}>{this.state.presstime}</Text>

            <TouchableHighlight
                style={style.button}
                activeOpacity={0.7} //按下时按钮的不透明度
                underlayColor= 'red' //按下时按钮的背景颜色
                onHideUnderlay={()=>{
                    this.setState({highlightText:'底衬被隐藏'})
                }}
                onShowUnderlay={()=>{
                    this.setState({highlightText:'底衬被显示'})
                }}

                onPress={()=>{

                }}
            >
                <View style={style.button}>
                    <Text style={style.buttonText}>
                        TouchableHighlight
                    </Text>
                </View>
            </TouchableHighlight>
            <Text style={style.text}>{this.state.highlightText}</Text>

            <TouchableOpacity
                activeOpacity={0.5} // TouchableOpacity 点击的时候只能改变不透明度
                onPress={()=>{

                }}
            >

                <View style={style.button}>
                    <Text style={style.buttonText}>
                        TouchableOpacity
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
    }
}

//自定义style
const style = StyleSheet.create({
    button:{
        borderWidth:1,
    },
    buttonText:{
        fontSize:20
    },
    text:{
        fontSize: 20
    }
})
