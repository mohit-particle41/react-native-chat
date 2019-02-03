
import React, {Component} from 'react'
import { NativeModules, View, Text } from 'react-native';

const { RNReactNativeChat } = NativeModules;

export default class TcdChat extends Component {
    render() {
        console.log("^^^^^^^^^^^^^",RNReactNativeChat)
        return (
            <View style={styles.container}>
            <Text style={styles.instructions}>Inside Chat Lib</Text>
          </View>
        );
      }
}

