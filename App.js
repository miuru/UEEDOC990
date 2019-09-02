import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import {StyleSheet,ImageBackground,FlatList, ActivityIndicator,Dimensions, View,Button,Image,Alert,TouchableOpacity} from 'react-native';

import Main from './Components/Elements/Main';
export default class App extends Component {
    componentDidMount() {
        setTimeout(() => {
            SplashScreen.hide()
        }, 100)
    }

    render() {
        console.disableYellowBox = true;
        return (<Main/>);
    }
}