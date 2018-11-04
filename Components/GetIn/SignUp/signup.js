import React,{Component} from 'react';
import {AppRegistry,TextInput,Text,View,Button,TouchableWithoutFeedback,ScrollView,TouchableOpacity,Keyboard,AsyncStorage,StyleSheet} from 'react-native';

export default class SignUp extends Component{
    static navigationOptions=({navigation})=>{
        return{
            title:'Sign Up',
            headerLeft:(
                <View  style={{marginLeft:10}}>
                <Button title="Sign In" onPress={()=>{navigation.navigate('signIn')}}/>
                </View>
            ),
            headerRight:(
                <View  style={{display:'none'}}>
                <Button title="Sign In" onPress={()=>{}}/>
                </View>
            ),
            headerTitleStyle: { textAlign:'center', flex:1 }
        }
    }
    constructor(){
        super();
        this.state={'name':'','mob':'','email':'','pass':'','checked':''};
    }
    SignUp(){
        if(!this.state.name){
            this.setState({...this.state,'checked':'name'})
            return;
        }

        if(this.state.mob.length!=10){
            this.setState({...this.state,'checked':'mob'})
            return;
        }

        if(!this.state.email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)){
            this.setState({...this.state,'checked':'email'});
            return;
        }

        if(!this.state.pass){
            this.setState({...this.state,'checked':'pass'})
            return;
        }
        this.setState({...this.state,'checked':''});
        var obj={
            'name':this.state.name,
            'email':this.state.email,
            'mob':this.state.mob
        };
        AsyncStorage.setItem('user',JSON.stringify(obj));
        this.props.navigation.navigate('Main');
    }
    render(){
        return(
            <ScrollView>
                <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
                    <View style={{alignSelf:'flex-end',paddingTop:50,flex:1,width:'95%'}}>
                        <TextInput style={this.state.checked=='name'?styles.red:styles.input} placeholder="Enter your Name" autoFocus={true} defaultValue={this.state.name || ''} ref="name" onChangeText={(tex)=>{this.setState({...this.state,'name':tex})}} onSubmitEditing={()=>{this.refs.mob.focus()}}/>

                        <TextInput style={this.state.checked=='mob'?styles.red:styles.input} placeholder="Enter your Mobile Number" ref="mob"  defaultValue={this.state.mob || ''} onChangeText={(tex)=>{this.setState({...this.state,'mob':tex})}} textContentType={'telephoneNumber'} keyboardType={'number-pad'} onSubmitEditing={()=>{this.refs.email.focus()}}/>

                        <TextInput style={this.state.checked=='email'?styles.red:styles.input} placeholder="Enter your Email-Id" ref="email" textContentType={'emailAddress'} defaultValue={this.state.email || ''} onChangeText={(tex)=>{this.setState({...this.state,'email':tex})}} keyboardType={'email-address'} onSubmitEditing={()=>{this.refs.pass.focus()}}/>

                        <TextInput style={this.state.checked=='pass'?styles.red:styles.input} onChangeText={(tex)=>{this.setState({...this.state,'pass':tex})}}  defaultValue={this.state.pass || ''} secureTextEntry={true} placeholder="Enter your Password" ref="pass" textContentType={'password'}/>

                        <TouchableOpacity activeOpacity={0.5} style={styles.to} onPress={this.SignUp.bind(this)}>
                            <Text style={{color:'white',textAlign:'center',fontWeight:'900'}}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        )
    }
}



const styles = StyleSheet.create({
    'input':{
        backgroundColor:'rgba(250,250,250,1)',
        width:'80%',
        marginVertical:12.5,
        borderRadius:10,
        alignSelf:'center',
        color:'black'
    },
    'red':{
        borderColor:'red',
        color:'white',
        backgroundColor:'rgba(255,0,0,0.5)',
        width:'80%',
        marginVertical:12.5,
        borderRadius:10,
        alignSelf:'center'
    },
    'to':{
        backgroundColor:'#1194F6',
        marginTop:10,
        alignSelf:'center',
        padding:10,
        width:'80%',
        borderRadius:10
    }
})

AppRegistry.registerComponent('SignUp',()=>SignUp);