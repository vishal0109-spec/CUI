import {View, Text, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import {
  backIcon,
  ConnctLogo,
} from '../../../Utils/img';
import {loginStyles} from './loginStyles';
import Button from '../../../Components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import MailOtp from '../Otp/MailOtp';

const MailLogin = () => {
  const navigation = useNavigation();
  const [mail, setMail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,24}$/;
    if (!mail.trim()) {
      setError('Please enter the Mail ID');
    } else if (!emailPattern.test(mail.trim())) {
      setError('Please enter a valid Mail ID');
    } else {
      setError('');
      navigation.navigate(MailOtp);

    }
  };

  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.container}>
        <View style={loginStyles.header}>
          <Button icon={backIcon} iconStyle={loginStyles.backIcon}
          onPress={() => navigation.goBack()} />
        </View>
        <View style={loginStyles.logo}>
          <Image source={ConnctLogo} />
        </View>
      </View>

      <View style={loginStyles.contentContainer2}>
        <Text style={loginStyles.loginTxt}>Enter your Mail ID</Text>

        <View style={loginStyles.emailContainer}>
          <View style={loginStyles.emailInput}>
            <TextInput
              placeholder="xyz@gmail.com"
              placeholderTextColor="#303030"
              keyboardType="email-address"
              value={mail}
              onChangeText={setMail}
            />
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
              onPress={() => validateEmail()}
            />
          </LinearGradient>
        </LinearGradient>
        <View style={loginStyles.footerContainer}>
          <Text style={loginStyles.footerText}>
            By clicking, I accept{' '}
            <Text style={loginStyles.link}>Terms & Conditions</Text> and
          </Text>
          <Text style={loginStyles.link2}>Privacy Policy</Text>
        </View>
      </View>
    </View>
  );
};

export default MailLogin;
