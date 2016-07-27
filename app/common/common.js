/**
 * Created by lixd on 16/7/27.
 */
import {Dimensions} from 'react-native';

let window = {
    width:Dimensions.get('window'.width),
    height:Dimensions.get('window'.height)
}

export default {
    window : window
}