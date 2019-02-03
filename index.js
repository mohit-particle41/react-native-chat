
import React, {Component} from 'react'
import { NativeModules, View, Text } from 'react-native';


var nativeChat = NativeModules.RNReactNativeChat
export default class TcdChat extends Component {
    render() {
        nativeChat.pingMe(str => {
            console.log("5555555555",str)
        })
        console.log("checking native component",nativeChat)
        return (
            <View>
            <Text>Inside Chat Lib</Text>
          </View>
        );
      }
}

