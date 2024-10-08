import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import {ConnctLogo, flag, googleIcon, mailIcon} from '../../../Utils/img';
import {loginStyles} from './loginStyles';
import Button from '../../../Components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import Otp from '../Otp/otp2';
import LinearGradient from 'react-native-linear-gradient';
import MailLogin from './MailLogin';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Login = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const phnValidate = () => {
    const phoneRegex = /^(?:[1-9][0-9]{9}|0[0-9]{10})$/;
    if (!phoneNumber) {
      setError('Please enter a valid mobile number');
    } else if (!phoneRegex.test(phoneNumber)) {
      setError('Please enter a valid mobile number');
    } else {
      setError('');
      navigation.navigate(Otp);
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={loginStyles.container} >
      <View style={loginStyles.logo}>
        <Image source={ConnctLogo} />
      </View>
      <View style={loginStyles.contentContainer}>
        <Text style={loginStyles.loginTxt}>Login/Signup</Text>

        <View style={loginStyles.phnContainer2}>
          <View style={loginStyles.phnContainer}>
            <View style={loginStyles.countryIcon}>
              <Image source={flag} style={loginStyles.flag} />
            </View>
            <View style={loginStyles.phoneInput}>
              <Text style={loginStyles.phnTxt}>+91</Text>
              <TextInput
                placeholder="Enter your phone number"
                placeholderTextColor="#303030"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>
          </View>
          {error ? <Text style={loginStyles.errorMessage}>{error}</Text> : null}
        </View>

        <LinearGradient
          colors={['rgba(250,255,0,0.17)', 'rgba(250,255,0,0)']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={loginStyles.otpButtonContainer}>
          <LinearGradient
            colors={['rgba(20, 20, 20, 0.70)', '#2B2B2B']}
            start={{x: 0.34, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={loginStyles.otpButtonContainer2}>
            <Button
              title="Get OTP"
              style={loginStyles.otpButton}
              btnStyle={loginStyles.otpButtonText}
              onPress={() => phnValidate()}
            />
          </LinearGradient>
        </LinearGradient>

        <View style={loginStyles.divider}>
          <View style={loginStyles.line} />
          <Text style={loginStyles.orText}>Or</Text>
          <View style={loginStyles.line} />
        </View>
        <View style={loginStyles.socialContainer}>
          <Button
            icon={googleIcon}
            style={loginStyles.socialButton}
            iconStyle={loginStyles.iconStyle}
          />
          <Button
            icon={mailIcon}
            style={loginStyles.socialButton}
            iconStyle={loginStyles.iconStyle2}
            onPress={() => navigation.navigate(MailLogin)}
          />
        </View>
        <View style={loginStyles.footerContainer}>
          <Text style={loginStyles.footerText}>
            By clicking, I accept{' '}
            <Text style={loginStyles.link}>Terms & Conditions</Text> and
          </Text>
          <Text style={loginStyles.link2}>Privacy Policy</Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
