import React from 'react';
import {
    Navigator,
    View,
    StyleSheet,
    Text
} from 'react-native';
import TableView from './TabBarView';

class App extends React.Component {
    render(){
        return (
            <View style={{flex:1}}>
                <Navigator
                    initialRoute={{name:'TabBarView', component:TableView}}
                    configureScene={(route)=>{
                        if(route.sceneConfig){
                            return route.sceneConfig;
                        }
                        return Navigator.SceneConfigs.FloatFromRight;
                    }}
                    renderScene={(route, navigator)=>{
                        let component = route.component;
                        return (
                            <component navigator={navigator} route={...route} {...route.passProps} />
                        );
                    }}
                    />
            </View>
        );
    }
}

export default App;