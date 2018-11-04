import React,{Component} from 'react';
import {AppRegistry,Text,TextInput,View,TouchableWithoutFeedback,TouchableOpacity,Button,StyleSheet,Keyboard} from 'react-native';

export default class SignIn extends Component{
    static navigationOptions=({navigation})=>{
        return{
            title:'Sign In',
            headerRight:(
                <View  style={{marginRight:10}}>
                <Button title="Sign Up" onPress={()=>{navigation.navigate('signUp')}}/>
                </View>
            ),
            headerLeft:(
                <View  style={{display:'none'}}>
                <Button title="Sign Up" onPress={()=>{}}/>
                </View>
            ),
            headerTitleStyle: { textAlign:'center', flex:1 }
        }
    }
    constructor(){
        super();
        this.state={'mob':'','pass':'','checked':''}
    }
    SignIn(){
        if(this.state.mob.length!=10){
            this.setState({...this.state,'checked':'mob'})
            return;
        }
        if(!this.state.pass){
            this.setState({...this.state,'checked':'pass'})
            return;
        }
        this.setState({...this.state,'checked':''});
        alert('Please sign up');
        this.props.navigation.navigate('signUp');
    }
    render(){
            return(
                <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
                    <View style={{alignSelf:'flex-end',paddingTop:50,flex:1,width:'95%'}}>
                        
                        <TextInput placeholder="Enter your Mobile Number" keyboardType={'number-pad'} autoFocus={true} ref="mob" style={this.state.checked=='mob'?styles.red:styles.input} onSubmitEditing={()=>{this.refs.pass.focus()}} onChangeText={(tex)=>{this.setState({...this.state,'mob':tex})}} defaultValue={this.state.mob || ''}/>
                        
                        <TextInput placeholder="Enter your Password" textContentType={'password'} ref="pass" secureTextEntry={true} style={this.state.checked=='pass'?styles.red:styles.input} onChangeText={(tex)=>{this.setState({...this.state,'pass':tex})}} defaultValue={this.state.pass || ''}/>
                        
                        <TouchableOpacity style={styles.to} onPress={this.SignIn.bind(this)}>
                            <Text style={{color:'white',textAlign:'center',fontWeight:'900'}}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
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

AppRegistry.registerComponent('SignIn',()=>SignIn);