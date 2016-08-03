import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    ScrollView,
    TouchableOpacity,
    InteractionManager,
    RefreshControl,
    Navigator
} from 'react-native';

import {
    classDetail,
    resetState
} from '../actions/classDetailAction';
import Common from '../common/common';
import Loading from '../common/Loading';
import LoadMoreFooter from '../common/LoadMoreFooter';
import HeaderView from '../common/HeaderView';
import HomeDetail from './HomeDetail';

let limit = 21;
let offset = '';
let tag = '';
let isLoadMore = false;
let isLoading = false;
let isRefreshing = false;

class ClassDetail extends Component {
    constructor(props){
        super(props);
        this.renderRow = this.renderRow.bind(this);
        this.state = {
            dataSource:new ListView.DataSource({
                rowHasChanged:(row1,row2) => row1 != row2
            })
        }
    }

    componentDidMount(){
        const {dispatch, rowData} = this.props;
        tag = rowData;
        dispatch(classDetail(tag, offset, limit, isLoadMore, isRefreshing, isLoading));
    }

    componentWillUnmount(){
        const {dispatch} = this.props;
        dispatch(resetState());
    }

    render(){
        const { ClassDetail } = this.props;
        let classDetailList = ClassDetail.ClassDetailList;
        let titleName = tag;
        return (
            <View>
                <HeaderView
                    titleView={titleName}
                    leftIcon = {tag ? 'angle-left' :null}
                    leftIconAction={()=>this.props.navigator.pop()}
                />
                {ClassDetail.isLoading ? <Loading/> :
                    <ListView
                        dataSource={this.props.dataSource.cloneWithRows(classDetailList)}
                        renderRow={this.renderRow}
                        contentContainerStyle={styles.list}
                        enableEmptySections={true}
                        initialListSize={12}
                        onScroll={this.onScroll}
                        onEndReached={this.onEndReached.bind(this)}
                        onEndReachedThreshold={12}
                        renderFooter={this.renderFooter.bind(this)}
                        style={styles.listView}
                        refreshControl={
                            <RefreshControl
                                refreshing={ClassDetail.isRefreshing}
                                onRefresh={this.onRefresh.bind(this)}
                                title="正在加载中......"
                                color="#ccc"
                            />
                        }
                    >

                    </ListView>
                }
            </View>
        );
    }
    renderRow(rowData){
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    activeOpacity={0.75}
                    onPress={this.onPressFeedItem.bind(this)}

                >
                <Image
                    source={{uri : 'http://img.hb.aicdn.com/' + rowData.file.key + '_fw_236'}}
                    style={styles.thumbnail}
                />
                </TouchableOpacity>
            </View>
        );
    }

    onPressFeedItem(rowData){
        InteractionManager.runAfterInteractions(() => {
            this.props.navigator.push({
                name:'HomeDetail',
                component:HomeDetail,
                sceneConfig:Navigator.SceneConfigs.FloatFromBottom,
                passProps:{
                    rowData:rowData
                }
            })
        });
    }

    onScroll(){
        if(!isLoadMore) isLoadMore = true;
    }

    renderFooter(){
        const { ClassDetail } = this.props;
        if(ClassDetail.isLoadMore){
            return <LoadMoreFooter/>
        }
    }

    onRefresh(){
        if(isLoadMore){
            const {dispatch,ClassDetail} = this.props;
            isLoadMore = false;
            isRefreshing = true;
            dispatch(classDetail('','',limit,isLoadMore, isRefreshing, isLoading));
        }
    }

    onEndReached(){
        const {dispatch, ClassDetail } = this.props;
        let ClassDetailList = ClassDetail.ClassDetailList;
        isLoadMore = true;
        isLoading = false;
        offset = ClassDetailList[ ClassDetailList.length - 1].seq;

        dispatch(classDetail(tag, offset, limit, isLoadMore, isRefreshing, isLoading));
    }
}




const styles = Stylesheet.create({
    container:{

    }
});