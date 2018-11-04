import React,{Component} from 'react';
import {AppRegistry,Text,View,StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Note extends Component{
    constructor(){
        super();
    }
    remove(index){
        this.props.removeIt(index);
    }
    render(){
        return(
            <View>
            {this.props.notes.map((element,index)=>{
                return(
                    <View style={{paddingHorizontal:10,paddingVertical:10,flex:1,marginTop:15,marginBottom:10,flexDirection:'row',width:'100%',minHeight:80,backgroundColor:'white',borderRadius:10}} key={index}>
                        <View style={{flex:10,flexDirection:'column',paddingLeft:20}} >
                            <Text style={{flex:1,color:'black',paddingTop:10,marginBottom:0,paddingBottom:0,fontSize:10}}>{element.time}</Text>
                            <Text style={{flex:1,color:'black',fontSize:16}}>{element.note}</Text>
                        </View>
                        <Icon name="trash" size={24} color="green" onPress={this.remove.bind(this,index)}/>
                    </View>
                )
            })}
        </View>
        )
    }
}

AppRegistry.registerComponent('Note',()=>Note);