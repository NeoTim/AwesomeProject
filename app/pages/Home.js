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
        this._renderRow = this._renderRow.bind(this);
        this.state = {
            dataSource:new ListView.DataSource({
                rowHasChanged:(row1,row2)=> row1 != row2
            })
        }
    }

    componentDidMount(){
        InteractionManager.runAfterInteractions(()=>{
            const {dispatch} = this.props;
            dispatch(home(tag,offset,limit,isLoadMore,isRefreshing,isLoading));
        });
    }

    render(){
        const {Home, rowData } = this.props;
        tag  = rowData;
        let homeList = Home.homeList;
        let titleName = '最新';
        return (
            <View >
                <HeaderView
                    titleView={titleName}
                    leftIcon ={tag ? 'angle-left' : null}
                    ></HeaderView>
                {Home.isLoading ? <Loading /> :
                    <ListView
                        dataSource={this.state.dataSource.cloneWithRows(homeList)}
                        renderRow = {this._renderRow}
                        contentContainerStyle={styles.list}
                        enableEmpathScetions={true}
                        initialListSize={10}
                        onScroll={this._onScroll}
                        onEndReached={this._onEndEach.bind(this)}
                        onEndReachedThreshold={10}
                        renderFooter={this._renderFooter.bind(this)}
                        style={styles.listView}
                        refreshControl={
                            <RefreshControl
                            refreshing={Home.isRefreshing}
                            onRefresh={this._onRefresh.bind(this)}
                            title="正在加载中....."
                            color="#ccc"
                            />
                        }
                        ></ListView>

                }
            </View>
        );
    }

    _renderRow(rowData){
        return (
            <View style={styles.container} >
                <TouchableOpacity
                    activeOpacity={0.75}
                    onPress={this._onPressFeedItem.bind(this,rowData)}
                    >
                    <Image
                        source={{uri: 'http://img.hb.aicdn.com/' + rowData.file.key + '_fw236' }}
                        style={styles.thumbnail}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    _onPressFeedItem(rowData){
        InteractionManager.runAfterInteractions(()=>{
            this.props.navigator.push({
                name:   'HomeDetail',
                component:  HomeDetail,
                sceneConfig:    Navigator.SceneConfigs.FloatFromBottom,
                passProps:{
                    rowData:rowData
                }
            });
        });
    }
    _renderFooter(){
        const {home} = this.props;
        if(home.isLoadMore){
            return <LoadMoreFooter />
        }
    }

    _onScroll(){
        if(!isLoadMore){
            isLoadMore = true;
        }
    }

    _onRefresh(){
        if(isLoadMore){
            const {dispatch , home } = this.props;
            isLoadMore = true;
            isRefreshing = true;
            dispatch(home('','',limit,isLoadMore,isRefreshing,isLoading));
        }
    }

    //上拉加载
    _onEndEach(){
        InteractionManager.runAfterInteractions(()=>{
            const {dispatch, home} = this.props;
            let homeList = home.HomeList;
            isLoadMore = true;
            isLoading = true;
            offset = homeList[homeList.length - 1].seq;
            dispatch(home(tag,offset,limit,isLoadMore,isRefreshing,isLoading));
        });
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

