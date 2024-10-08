import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0B',
  },
  container2: {
    flexGrow: 1,
    backgroundColor: '#0B0B0B',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    marginLeft: wp(5),
    marginTop: hp(3),
  },
  backIcon: {
    width: hp(1.75),
    height: hp(1.75),
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(3.125),
  },
  contentContainer2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(10),
    marginTop:hp(10)
  },
  loginTxt: {
    width: wp(39),
    height: hp(3),
    fontSize: hp(2.1),
    fontWeight: '600',
    color: '#F2F2F2',
    marginBottom: hp(3.2),
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
  phnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp(2.5),
  },
  emailContainer: {
    marginBottom: hp(3),
  },
  phnContainer2: {
    marginBottom: hp(3.125),
  },
  countryIcon: {
    width: wp(19.5),
    height: hp(6),
    borderColor: '#303030',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(2),
  },
  flag: {
    width: hp(3),
    height: hp(2),
  },
  phnTxt: {
    color: '#F2F2F2',
    fontFamily: 'Poppins-Regular',
    fontSize: hp(1.75),
    fontWeight: '400',
  },
  phoneInput: {
    marginLeft: wp(4),
    width: wp(66.5),
    height: hp(6),
    borderColor: '#303030',
    borderWidth: 1,
    borderRadius: wp(2),
    paddingLeft: wp(4),
    borderStyle: 'solid',
    alignItems: 'center',
    flexDirection: 'row',
    gap: wp(1.5),
  },
  emailInput: {
    marginLeft: wp(2.5),
    width: wp(90),
    height: hp(6),
    borderColor: '#303030',
    borderWidth: 1,
    borderRadius: wp(2),
    paddingLeft: wp(4),
    borderStyle: 'solid',
    justifyContent: 'center',
  },
  errorMessage: {
    color: '#FF3E3E',
    marginLeft: wp(5),
    fontSize: hp(1.8),
    fontWeight: '300',
    fontFamily: 'Poppins-Light',
    marginTop: hp(1.5),
  },
  otpButtonContainer: {
    borderRadius: wp(2.2),
    marginBottom: hp(3.125),
    height: hp(6),
    width: wp(90),
    padding: hp(0.04),
    marginLeft: wp(2.5),
    shadowColor: 'rgba(0, 0, 0, 0.30)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 11.8,
    elevation: 10,
  },
  otpButtonContainer2: {
    backgroundColor: '#141414',
    borderRadius: wp(2.2),
    height: hp(6),
    width: wp(89.8),
    // padding: hp(0.4),
    marginTop: 0.4,
    marginLeft: 0.5,
  },
  gradientStyle: {
    borderRadius: wp(2.2),
  },
  otpButton: {
    borderRadius: wp(2.2),
    height: hp(6),
    width: wp(90),
    alignItems: 'center',
    justifyContent: 'center',
    // paddingBottom:hp(1)
  },
  otpButtonText: {
    color: '#FAFF00',
    fontSize: hp(2),
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    fontWeight: '500',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(3.125),
    width: wp(90),
    marginLeft: wp(2.5),
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: '#303030',
  },
  orText: {
    color: '#F2F2F2',
    marginHorizontal: wp(2.7),
    fontFamily: 'Poppins-Regular',
    fontSize: hp(2),
    fontWeight: '400',
  },
  socialContainer: {
    flexDirection: 'row',
    marginBottom: hp(3.2),
    gap: wp(15),
  },
  socialButton: {
    height: hp(6.5),
    width: hp(6.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(6.5),
    borderColor: '#D4D4D4',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  iconStyle: {
    height: hp(3),
    width: hp(3),
  },
  iconStyle2: {
    height: hp(2.5),
    width: hp(3.3),
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    display: 'flex',
    lineHeight: 20,
    marginBottom: 80,
  },
  footerText: {
    fontFamily: 'Poppins-Regular',
    color: '#d4d4d4',
    fontSize: 12,
    width: wp(75),
    fontWeight: '400',
  },
  link: {
    color: '#F2F2F2',
    textDecorationLine: 'underline',
    fontWeight: '700',
  },
  link2: {
    color: '#F2F2F2',
    textDecorationLine: 'underline',
    fontWeight: '700',

    // marginLeft: wp(30),
  },
});
