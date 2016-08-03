import React ,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    ListView,
    TouchableOpacity,
    View,
    InteractionManager
} from 'react-native';

import { ClassAction } from '../actions/ClassificationAction';
import Common from '../common/common';
import Loading from '../common/Loading';
import Detail from '../containers/ClassDetailContainer';
import HeaderView from '../common/HeaderView';
import Icon from 'react-native-vector-icons/FontAwesome';

let isLoading = true;

class Class extends Component {
    constructor(props){
        super(props);
        this.renderRow = this.renderRow.bind(this);
        this.state = {
            dataSource:new ListView.DataSource({
                rowHasChanged:(row1,row2)=> row1 != row2
            })
        }
    }

    componentDidMount(){
        InteractionManager.runAfterInteractions(()=>{
            const {dispatch } = this.props;
            dispatch(ClassAction(isLoading));
        });
    }

    render(){
        const {Class} = this.props;
        let classList = Class.ClassData;

        return (
            <View>
                <HeaderView titleView="分类"/>
                {Class.isLoading
                    ? <Loading />
                    : <ListView
                    dataSource={this.state.dataSource.cloneWithRows(classList)}
                    renderRow={this.renderRow}
                    enableEmptySections={true}
                    initialListSize={10}
                    style={{height:Common.window.height = 54 - 64}}
                >

                </ListView>

                }
            </View>
        );

    }

    renderRow(rowData){
        return (
            <TouchableOpacity
                activeOpacity={0.75}
                onPress={this.onPressFeedItem.bind(this, rowData.tag_name)}
                style={styles.center}
            >
                <View style={styles.container}>
                    <Text>{rowData.tag_name + '共' + rowData.pin_count + '张'}</Text>
                    <Icon color="gray" size={30} name="angle-right"></Icon>
                </View>

            </TouchableOpacity>
        );
    }
    onPressFeedItem(rowData){
        this.props.navigator.push({
            name:'Detail',
            component:Detail,
            passProps:{
                rowData:rowData
            }
        });
    }
}

const styles = StyleSheet.create({
    center:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',

    },
    container:{
        width:Common.window.width - 20,
        height:50,
        paddingLeft:10,
        paddingRight:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white',
        borderBottomColor:'#ccc',
        borderBottomWidth:0.5
    }
});

module.exports = Class;