import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import OnBoarding1 from '../Screens/BeforeLogin/OnBoarding/OnBoarding1';
import OnBoarding2 from '../Screens/BeforeLogin/OnBoarding/OnBoarding2';
import OnBoarding3 from '../Screens/BeforeLogin/OnBoarding/OnBoarding3';
import Login from '../Screens/BeforeLogin/Login/Login';
import Otp from '../Screens/BeforeLogin/Otp/otp2';
import Register from '../Screens/BeforeLogin/Register/Register';
import MailLogin from '../Screens/BeforeLogin/Login/MailLogin';
import MailOtp from '../Screens/BeforeLogin/Otp/MailOtp';
import Profession from '../Screens/BeforeLogin/Register/Profession';
import RegisterSuccess from '../Screens/BeforeLogin/Register/RegisterSuccess';

const RootStack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen
          name="OnBoarding1"
          component={OnBoarding1}
        />
        <RootStack.Screen
          name="OnBoarding2"
          component={OnBoarding2}
        />
        <RootStack.Screen
          name="OnBoarding3"
          component={OnBoarding3}
        />
        <RootStack.Screen
          name="Login"
          component={Login}
        />
        <RootStack.Screen
          name="Otp"
          component={Otp}
        />
        <RootStack.Screen
          name="MailLogin"
          component={MailLogin}
        />
        <RootStack.Screen
          name="MailOtp"
          component={MailOtp}
        />
        <RootStack.Screen
          name="Register"
          component={Register}
        />
        <RootStack.Screen
          name="Profession"
          component={Profession}
        />
        <RootStack.Screen
          name="RegisterSuccess"
          component={RegisterSuccess}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
