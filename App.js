import React from 'react';
import {AppRegistry,View} from 'react-native';
import AppNavigator from './Routes/routes';

const App = () =>{
    return(
        // <View>
            <AppNavigator></AppNavigator>
        // </View>
    )
}

export default App;

AppRegistry.registerComponent('App',()=>App);

