import {View, Text, Image} from 'react-native';
import React from 'react';
import {registerStyles} from './registerStyle';
import {tick} from '../../../Utils/img';
import Button from '../../../Components/CustomButton';
import LinearGradient from 'react-native-linear-gradient';

const RegisterSuccess = () => {
  return (
    <View style={registerStyles.container}>
      <Image source={tick} />
      <Text>All Set, Albert.</Text> 
      <Text>You’ve successfully completed your profile</Text>
      <View style={registerStyles.nxtBtn}>
        <LinearGradient
          colors={['rgba(250,255,0,0.17)', 'rgba(250,255,0,0)']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={registerStyles.otpButtonContainer}>
          <LinearGradient
            colors={['rgba(20, 20, 20, 0.70)', '#2B2B2B']}
            start={{x: 0.34, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={registerStyles.otpButtonContainer2}>
            <Button
              style={[registerStyles.verifyOtpBtn]}
              //   onPress={() => handleNextPress()}
              title="Back To Home"
              btnStyle={registerStyles.btnTxt}
            />
          </LinearGradient>
        </LinearGradient>
      </View>
    </View>
  );
};

export default RegisterSuccess;
