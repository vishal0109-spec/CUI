import {View, ActivityIndicator, Text} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';

const verifyLoader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <ActivityIndicator size="large" color="#FAFF00" />
        <Text
          style={{
            color: '#F2F2F2',
            fontFamily: 'Poppins-Regular',
            fontSize: hp(1.875),
          }}>
          Verifying Credentials
        </Text>
      </View>
    </View>
  );
};

export default verifyLoader;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'#000',

    
  },
  container2:{
    width: wp(90),
    height: hp(9.4),
    backgroundColor: '#141414',
    borderRadius: wp(1.5),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft:wp(5),
    gap:wp(5)

  },
  txt: {
    color: '#F2F2F2',
    fontSize: hp(1.875),
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
});
