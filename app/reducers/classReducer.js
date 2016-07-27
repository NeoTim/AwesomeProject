/**
 * Created by lixd on 16/7/27.
 */
import * as types from '../actions/actionTypes.js';

const initialState = {
    ClassDate:[],
    isLoading:true
};


let classReducer = (state = initialState, action) => {
    switch (action.type){
        case types.FETCH_CLASS_LIST:
            return Object.assign({}, state, {
                isLoading:action.isLoading
            });

        case types.RECEIVE_CLASS_LIST:
            return Object.assign({}, state, {
                ClassDate:action.classList,
                isLoading:false
            });

        default :
            return state;
    }
}

export default classReducer;