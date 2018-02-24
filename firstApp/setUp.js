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
    ScrollView
} from 'react-native';

import {name,age,sex,sumFuc} from './ExportProp'
import LifeCycleComponentTest from './LifeCycleComponentTest'
import PropTest from './PropTest'
import StateTest from './StateTest'
import RefTest from './RefTest'
import ClassTest from './ClassTest'
import Student from './Student'
import LayoutTest from './LayoutTest'
import TouchableTest from './TouchableTest'
import ImageTest from './ImageTest'
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class set extends Component<Props> {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            remove:false,  //控制子试图的展示和移除
            result:0, //获取加法的结果
            qiqiuSize:0 //refTest 气球尺寸
        };
          this.person = new ClassTest('类小明','19','male');
          this.stu = new Student('小红',19,'男',178)
      }

    render() {
        var text = this.state.remove?"显示出来":"删除掉";
        var view = this.state.remove?null:<LifeCycleComponentTest/>
        return (
             <View style={styles.container}>
                 <ScrollView>
                     <View>
                         <Text>——————测试组件导出,组件生命周期——————</Text>
                         <Text
                             style={{fontSize:20}}
                             onPress={()=>{
                       this.setState({
                           remove:!this.state.remove
                       })
                    }}
                         >{text}</Text>
                         {view}
                     </View>

                     <View>
                         <Text>——————测试属性导出——————</Text>
                         <Text>name:{name}</Text>
                         <Text>age:{age}</Text>
                         <Text>sex:{sex}</Text>

                         <Text>——————测试方法导出——————</Text>
                         <Text
                             style={{fontSize:30}}
                             onPress={()=>{
                         var sumResult = sumFuc(this.state.result,1)
                         this.setState({
                            result:sumResult,
                            })
                         }}
                         >点击加1--{this.state.result}</Text>
                     </View>

                     <View>
                         <Text>——————测试给属性传值——————</Text>
                         <PropTest
                             name = "发财"
                         />
                     </View>

                     <View>
                         <Text>——————state Test——————</Text>
                         <StateTest/>
                     </View>

                     <View>
                         <Text>——————Ref Test——————</Text>
                         <Text
                             style={{fontSize:20}}
                             onPress={()=>{
                         // var size = this.refs.refTest.getRef();  // 通过获取refTest组件  调用getRef方法 方法一
                         // var size = this.refTest.getRef();  // 通过获取refTest组件  调用getRef方法 方法二
                         var  size = this.refs['refTest'].getRef(); // 通过获取refTest组件  调用getRef方法 方法三 跟方法一类似
                         console.log('size'+size)
                         this.setState({
                            qiqiuSize:size
                         })
                         }}
                         >点击获取气球大小{this.state.qiqiuSize}</Text>

                         <RefTest
                             //通过ref 获取组件方法一
                             ref = "refTest"
                             // 方法二  不会 需要问
                             // ref={refTest=>this.refTest=refTest}
                         />
                     </View>

                     <View>
                         <Text>——————Class Test——————</Text>
                         <Text>
                         {this.person.getDesc()}
                     </Text>
                         <Text>
                             子类:{this.stu.getDesc()}
                         </Text>
                     </View>

                     <View>
                         <Text>——————Layout Test——————</Text>
                         <LayoutTest/>
                     </View>

                     <View>
                         <Text>——————Touchable Test——————</Text>
                         <TouchableTest/>
                     </View>

                     <View>
                         <Text>——————Image Test——————</Text>
                         <ImageTest/>
                     </View>
                 </ScrollView>

    </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop:100,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
