import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator
} from 'react-native';

import Common from './common.js';

export default class Loading extends React.Component {
    render(){
        return (
            <View style={styles.loading}>
                <ActivityIndicator />
                <Text style={styles.loadingTitle}>亲 正在为您加载中 请稍等...</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loading:{
        backgroundColor:'gray',
        height:80,
        width:100,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:(Common.window.height - 80) /2,
        left:(Common.window.width - 100) /2
    },
    loadingTitle:{
        marginTop:10,
        fontSize:14,
        color:'white'
    }
});