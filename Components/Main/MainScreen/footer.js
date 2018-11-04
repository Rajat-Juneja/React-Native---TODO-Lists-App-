import React,{Component} from 'react';
import {AppRegistry,View,TextInput,TouchableHighlight,Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Footer extends Component{
    constructor(){
        super();
        this.note=''
        this.state={'note':''};
    }
    addNote(){
        this.refs.note.clear();
        this.state.note=this.note;
        if(this.state.note.trim().length<1){
            return;
        }
        this.props.addnote(this.state.note.trim());
        this.note='';
        this.setState({'note':''});
        Keyboard.dismiss();
    }
    render(){
        return(
            <View style={{position:'absolute',zIndex:1,bottom:0,flex:1,width:'100%',paddingHorizontal:10,borderTopWidth:3,backgroundColor:'rgb(250,250,250)',borderColor:'rgba(0,0,0,0.3)',flex:1,flexDirection:'row',paddingTop:10,paddingBottom:10}}>
                <TextInput placeholder="Add to your List" multiline={true} style={{flex:5,backgroundColor:'white',color:'black',borderWidth:2,borderColor:'rgba(0,0,0,0.2)',marginRight:15,borderRadius:5}} onChangeText={(note) => this.note=note} ref="note" defaultValue={this.state.note} editable={true} blurOnSubmit={true}></TextInput>

                <TouchableHighlight style={{flex:1,backgroundColor:'rgba(255,0,0,0.8)',paddingHorizontal:10,borderRadius:50,paddingTop:2}}>
                    <Icon name="plus" size={54} color="white" style={{alignSelf:'center'}} onPress={this.addNote.bind(this)}/>
                </TouchableHighlight>
            </View>
        )
    }
}

AppRegistry.registerComponent('Footer',()=>Footer);