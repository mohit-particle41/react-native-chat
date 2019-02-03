
import React, {Component} from 'react'
import { NativeModules, Text } from 'react-native';

const { RNReactNativeChat } = NativeModules;

export default class TcdChat extends Component {
    render() {
        console.log("^^^^^^^^^^^^^",RNReactNativeChat)
        return (
            <View >
            <Text >Welcome to Chat Module!</Text>
            </View>
        );
      }
}

