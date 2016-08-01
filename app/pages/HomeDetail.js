import React ,{Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';

import Common from '../common/common.js';

export default class HomeDetail extends Component{
    render(){
        const {rowData} = this.props;
        return (
            <View
                <Image
                    source={{uri: 'http://img.hb.aicdn.com/' + rowDate.file.key + '_fw658' }}
                    style={styles.thumbnail}
                    />
                >
            </View>
        );
    }
}

const styles = StyleSheet.create({
    thumbnail: {
        width: Common.window.width,
        height: Common.window.height,

    },
})