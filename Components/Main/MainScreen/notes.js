import React,{Component} from 'react';
import {AppRegistry,View,Text} from 'react-native';

import Note from './note';

export default class Notes extends Component{
    constructor(){
        super();
    }
    removeThat(index){
        this.props.remove(index);
    }
    render(){
            if( !this.props.notes || this.props.notes.length==0 ){
                return(
                        <Text style={{flex:1,color:'black',fontSize:32,fontWeight:'900',alignSelf:'center'}}>Add Notes</Text>
                )
            }
        return(
            <View style={{marginHorizontal:10}}>
                <Note notes={this.props.notes} removeIt={this.removeThat.bind(this)}></Note>
            </View>
        )
    }
}

AppRegistry.registerComponent('Notes',()=>Notes);