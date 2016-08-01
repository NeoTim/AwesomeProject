import React , { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    InteractionManager,
    RefreshControl,
    Navigator
} from 'react-native';

import {
    home
} from '../actions/homeAction';

import Common from '../common/common';

import Loading from '../common/Loading';
import LoadMoreFooter from '../common/LoadMoreFooter';
import HeaderView from '../common/HeaderView';
import HomeDetail from './HomeDetail';

let limit = 21;
let offset = '';
let tag = '';
let isLoadMore = false;
let isRefreshing = false;
let isLoading = false;

class Home extends Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){

    }

    render(){

    }

    _renderRow(rowData){
        return (
            <View style={styles.container} >
                <TouchableOpacity
                    activeOpacity={0.75}
                    onPress={this._onPressFeedItem.bind(this,rowData)}
                    >
                    <Image
                        source={{uri: 'http://img.hb.aicdn.com/' + rowDate.file.key + '_fw236' }}
                        style={styles.thumbnail}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    _onPressFeedItem(rowData){

    }
}

const styles = StyleSheet.create({
    container:{
        width:  Common.window.width / 3,
        height: Common.window.height /2,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF',
    },
    listView:{
        backgroundColor:'#F5FCFF',
        height: Common.window.height - 44 -60 - 20
    },
    thumbnail:{
        width:  Common.window.width / 3 - 10,
        height: Common.height / 2 - 10
    },
    list:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        flexWrap:'wrap',
    },
    header:{
        marginTop:20,
        height:44,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        backgroundColor:'white'
    },
    title:{
        color:'black'
    }
});

module.exports = Home;

