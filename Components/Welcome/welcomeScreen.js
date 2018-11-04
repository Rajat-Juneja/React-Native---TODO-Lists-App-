import React from 'react';
import {AppRegistry,Text,AsyncStorage,StyleSheet,View,ActivityIndicator} from 'react-native';

const WelcomeScreen = (props) =>{
    setTimeout(()=>{
        AsyncStorage.getItem('user',(err,data)=>{
            if(data){
                props.navigation.navigate('Main');
            }
            else{
                props.navigation.navigate('signIn');
            }
        })
    },500);
    return(
        <View>
            <Text style={styles.welcome}>Welcome To <Text style={styles.welcome2}>TODO</Text> Lists</Text>
            <ActivityIndicator color="red" size="large" style={{marginTop:40}}></ActivityIndicator>
        </View>
    )
}

const styles = StyleSheet.create({
    'welcome':{
        textAlign:'center',
        fontSize:24,
        fontWeight:"500",
        color:'black',
        marginTop:'50%'
    },
    'welcome2':{
        fontWeight:"900",
        fontSize:28,
        color:'red'
    }
})

export default WelcomeScreen;

AppRegistry.registerComponent('WelcomeScreen',()=>WelcomeScreen);