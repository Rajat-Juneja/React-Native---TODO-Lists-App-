import React from 'react';

import { 
createStackNavigator,
createSwitchNavigator
} 
from 'react-navigation';

//Screens
import WelcomeScreen from '../Components/Welcome/welcomeScreen';
import SignUp from '../Components/GetIn/SignUp/signup';
import SignIn from '../Components/GetIn/SignIn/signin';
import MainScreen from '../Components/Main/MainScreen/mainscreen';

const GetInScreen = createStackNavigator({
    'signIn':SignIn,
    'signUp':SignUp
})

export default AppNavigator = createSwitchNavigator({
    'Welcome':WelcomeScreen,
    'GetIn':GetInScreen,
    'Main':MainScreen
})