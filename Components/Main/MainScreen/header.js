import React from 'react';
import {AppRegistry,Text,View,Button,AsyncStorage} from 'react-native';
import { withNavigation } from 'react-navigation';

class Header extends React.Component{
    constructor(){
        super();
    }
    signOut(){
        AsyncStorage.removeItem('user',(err)=>{
            if(!err){
                alert("You have to signup again");
                AsyncStorage.removeItem('notes',(errr)=>{
                    if(!errr){
                        this.props.navigation.navigate('signUp');
                    }
                })

            }
        });
    }
    render(){
        return(
            <View style={{height:60,minHeight:'10%',position:'absolute',top:0,zIndex:1,width:'100%',paddingHorizontal:10,borderBottomWidth:3,paddingTop:10,paddingBottom:10,borderColor:'rgba(0,0,0,0.3)',flex:1,flexDirection:'row'}}>
                <Text style={{flex:1}}></Text>
                <Text style={{flex:3,fontSize:24,fontWeight:'700',textAlign:'center'}}>TODO</Text>
                <Button title="Sign Out" onPress={this.signOut.bind(this)} style={{flex:1}}></Button>
            </View>
        )
    }
}

export default withNavigation(Header);

AppRegistry.registerComponent('Header',()=>Header);