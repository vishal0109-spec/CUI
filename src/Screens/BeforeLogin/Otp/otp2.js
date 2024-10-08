import {View, Text, TextInput, Alert} from 'react-native';
import React, {useRef, useState} from 'react';
import Button from '../../../Components/CustomButton';
import {backIcon, logo2, sms} from '../../../Utils/img';
import {useNavigation} from '@react-navigation/native';
import Register from '../Register/Register';
import {styles} from './otpStyle';
import LinearGradient from 'react-native-linear-gradient';
import {loginStyles} from '../Login/loginStyles';
import CountDown from 'react-native-countdown-component';

const Otp = () => {
  const navigation = useNavigation();

  const otpRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');

  const otpValidate = () => {
    const otpValue = '123456';
    const enteredOtp = otp.join('');
    if (enteredOtp.length == 0) {
      setError('Please enter OTP to Login');
    } else if (enteredOtp === otpValue) {
      Alert.alert('OTP Matched');
      setError('');
      navigation.navigate(Register);
    } else {
      setError('Please enter a valid OTP');
    }
  };

  const handleChange = (txt, index) => {
    const newOtp = [...otp];
    newOtp[index] = txt;
    setOtp(newOtp);

    if (txt.length >= 1 && index < otpRefs.length - 1) {
      otpRefs[index + 1].current.focus();
    } else if (txt.length < 1 && index > 0) {
      otpRefs[index - 1].current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.header}>
          <Button
            icon={backIcon}
            iconStyle={styles.backIcon}
            style={styles.backIconStyle}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.title}> OTP Verification</Text>
        </View>

        <View style={styles.weHaveSentContainer}>
          <Text style={styles.weHaveSent}>We have sent a 6-digit code to</Text>
          <Text style={styles.text}>+91-9425145784</Text>
        </View>

        <View>
          <View style={styles.otpView}>
            {otp.map((value, index) => (
              <TextInput
                key={index}
                ref={otpRefs[index]}
                style={[
                  styles.inputView,
                  {borderColor: value.length >= 1 ? '#F2F2F2' : '#787878'},
                ]}
                keyboardType="number-pad"
                maxLength={1}
                value={value}
                onChangeText={txt => handleChange(txt, index)}
              />
            ))}
          </View>

          {error ? <Text style={styles.errorMessage}>{error}</Text> : null}
        </View>

        <View style={styles.resendView}>
          <Text style={styles.drcTxt}>Didn’t Receive Code? Try in</Text>
          <CountDown
            until={60}
            size={10}
            digitStyle={styles.cntStyle}
            // onFinish={() => Alert.alert('Finished')}
            digitTxtStyle={styles.cntTxt}
            timeToShow={['M', 'S']}
            timeLabels={{m: 'MM', s: 'SS'}}
            separatorStyle={styles.separatorStyle}
            showSeparator
          />
        </View>
        <Button
          icon={sms}
          title="SMS"
          btnStyle={styles.smsTxt}
          style={styles.smsBtn}
          iconStyle={styles.smsStyle}
        />
        <View style={styles.loginBtn}>
          <LinearGradient
            colors={['rgba(250,255,0,0.17)', 'rgba(250,255,0,0)']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.otpButtonContainer}>
            <LinearGradient
              colors={['rgba(20, 20, 20, 0.70)', '#2B2B2B']}
              start={{x: 0.34, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={loginStyles.otpButtonContainer2}>
              <Button
                style={[styles.verifyOtpBtn]}
                onPress={() => otpValidate()}
                title="Login"
                btnStyle={styles.btnTxt}
              />
            </LinearGradient>
          </LinearGradient>
        </View>
      </View>
      <View style={styles.container3}>
        <View style={styles.popup}>
          <Button
            icon={logo2}
            iconStyle={styles.logo2}
            style={styles.logoStyle}
          />
          <Text style={styles.logoTxt}>OTP has been sent to you</Text>
        </View>
      </View>
    </View>
  );
};

export default Otp;
