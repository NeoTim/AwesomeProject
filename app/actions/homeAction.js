/**
 * Created by lixiaodong on 16/8/1.
 */
import * as types from './actionTypes';
import Util from '../common/utils';

export let home = (tag,offset,limit,isLoadMore,isRefreshing,isLoading) =>{
  let url = "http://api.huaban.com/fm/wallpaper/pins?limit=";
  if (limit) URL += limit;
  offest ? URL += '&max=' + offest : URL += '&max=';
  tag ? URL += '&tag=' + encode_utf8(tag) : URL += '&tag='
  // console.log(URL)

  return dispatch => {
      dispatch(fetchHomeList(isLoadMore, isRefreshing, isLoading));
      return Util.get(URL, (response) => {
          //  console.log(response)
          //  debugger
          dispatch(receiveHomeList(response.pins))
      }, (error) => {
          // console.log('加载首页数据error==>' + error);
          // // debugger
          dispatch(receiveHomeList([]));
      });
  }
}

function encode_utf8(s) {
    return encodeURIComponent(s);
}

let fetchHomeList = (isLoadMore, isRefreshing, isLoading) => {
    return {
        type: types.FETCH_HOME_LIST,
        isLoadMore: isLoadMore,
        isRefreshing: isRefreshing,
        isLoading: isLoading,
    }
}

let receiveHomeList = (homeList) => {
    return {
        type: types.RECEIVE_HOME_LIST,
        homeList: homeList,
    }
}
