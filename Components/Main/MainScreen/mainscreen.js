import React,{Component} from 'react';
import {AppRegistry,View,AsyncStorage,ScrollView,Vibration} from 'react-native';

import Header from './header';
import Notes from './notes';
import Footer from './footer';


export default class MainScreen extends Component{
    constructor(){
        super();
        this.state={'notes':[]};
    }
    addNote(note){
        var now = new Date();
        var value = (now.toDateString()).split(' ');
        var date = value[1]+' '+value[2]+' '+value[3];
        var time = now.toLocaleTimeString();
        var today = date +' '+ time;
        var obj = {
            "note":note,
            "time":today
        }
        if(this.state.notes){
            this.state.notes.push(obj);
            this.setState({});
        }
        else{
            this.setState({'notes':[obj]});
        }
        Vibration.vibrate(200);
        AsyncStorage.setItem('notes',JSON.stringify(this.state.notes));
    }
    removeNote(index){
        var noted = this.state.notes;
        noted.splice(index,1);
        this.setState({...this.state,'notes':noted},()=>{
        Vibration.vibrate(200);
            AsyncStorage.setItem('notes',JSON.stringify(this.state.notes));
        });
    }
    componentDidMount(){
        AsyncStorage.getItem('notes',(err,data)=>{
            if(err){
                alert("Couldn't load list");
            }
            else{
                var notes = JSON.parse(data);
                this.setState({...this.state,'notes':notes});
            }
        })
    }
    render(){
        var view;
            if( !this.state.notes || this.state.notes.length==0){
                return(
                    <View>
                    <Header></Header>
                    <View style={{marginTop:'35%',width:'100%',height:'70%'}}>
                        <Notes notes={this.state.notes}></Notes>
                    </View>
                    <Footer addnote={this.addNote.bind(this)}></Footer>
                </View>
                )
            }
        return(
            <View style={{position:'relative',height:'100%'}}>
                <Header></Header>
                <ScrollView style={{height:'80%',marginBottom:77,marginTop:60,zIndex:0}}>
                    <Notes notes={this.state.notes} remove={this.removeNote.bind(this)}></Notes>
                </ScrollView>
                <Footer addnote={this.addNote.bind(this)}></Footer>
            </View>
        )
    }
}

AppRegistry.registerComponent('MainScreen',()=>MainScreen);