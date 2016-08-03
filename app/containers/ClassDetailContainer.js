/**
 * Created by lixiaodong on 16/8/3.
 */
import React from 'react';
import {connect} from 'react-redux';
import ClassDetail from '../pages/ClassDetail';

class ClassDetailContainer extends React.Component {
    render(){
        return (
            <ClassDetail {this.props}/>
        );
    }
}

export default connect((state)=>{
    const { ClassDetail } = state;
    return {
        ClassDetail
    }
})(ClassDetailContainer);