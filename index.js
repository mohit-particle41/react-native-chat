
import React, {Component} from 'react'
import { NativeModules } from 'react-native';

const { RNReactNativeChat } = NativeModules;

export default class TcdChat extends Component {
    render() {
        console.log("^^^^^^^^^^^^^",RNReactNativeChat)
        return (
         <React.Fragment />
        );
      }
}

