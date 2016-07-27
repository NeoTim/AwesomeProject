import * as types from '../actions/actionTypes.js';

const initialState = {
    ClassDetailList:[],
    isLoading:true,
    isLoadMore:false,
    isRefreshing:false,
}

let classDetailReducer = (state = initialState, action)=>{
    switch (action.type){
        case types.FETCH_CLASS_DETAIL_LIST:
            return Object.assign({}, state,{
                isLoadMore:action.isLoadMore,
                isLoading:action.isLoading,
                isRefreshing:action.isRefreshing
            });

        case types.RECEIVE_CLASS_DETAIL_LIST:
            return Object.assign({}, state, {
                ClassDetailList:state.isLoadMore ? state.ClassDetailList.concat(action.classDetailList) : action.classDetailList,
                isRefreshing:false,
                isLoading:false
            });

        case type.RESET_CLASS_DETAIL_STAT:
            return Object.assign({}, state, {
                ClassDetailList:[],
                isLoading:true
            });

        default :
            return state;
    }
}

export default classDetailReducer;