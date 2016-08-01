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

}


