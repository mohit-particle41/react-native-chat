
import React, {Component} from 'react'
import { NativeModules, View, Text } from 'react-native';

const { RNReactNativeChat } = NativeModules;

export default class TcdChat extends Component {
    render() {
        console.log("^^^^^^^^^^^^^",RNReactNativeChat)
        return (
            <View>
            <Text>Inside Chat Lib</Text>
          </View>
        );
      }
}

