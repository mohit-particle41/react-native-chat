
import React, {Component} from 'react'
import { NativeModules, View, Text } from 'react-native';

const { RNReactNativeChat } = NativeModules;

export default class TcdChat extends Component {
    render() {
        // RNReactNativeChat.pingMe(str => {
        //     console.log("5555555555",str)
        // })
        console.log("checking native component",RNReactNativeChat)
        return (
            <View>
            <Text>Inside Chat Lib</Text>
          </View>
        );
      }
}

