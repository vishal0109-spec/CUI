import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0B',
  },

  demoUser: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userStyle:{
    width:hp(6),
    height:hp(6),
    zIndex:7
  },
  circle: {
    borderColor: '#D1D500',
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 7,
  },
  circleImage: {
    position: 'absolute',
  },
  content: {
    alignItems: 'center',
    marginTop: hp(15),
    zIndex: 1,
  },
  
  title: {
    fontSize: hp(1.8),
    fontWeight: '300',
    lineHeight: hp(2.5),
    zIndex: -1,
    marginLeft: wp(12),
    fontFamily: 'Poppins-SemiBold',
    
  },
  
 
  anyone: {
    color: '#FFFFFF',
    fontSize: hp(5),
    fontWeight: '500',
    lineHeight: hp(7),
    zIndex: 1,
    marginTop: hp(-2),
    fontFamily: 'Poppins-Medium',
    textTransform: 'uppercase',
  },
  searchContainer: {
    flexDirection: 'row',
    borderWidth: 0.215,
    borderRadius: wp(2),
    width: 279.828,
    height: 44.635,
    padding: wp(0.25),
  },

  innerContainer: {
    flexDirection: 'row',
    backgroundColor: '#0D0D0D',
    width: wp(77.7),
    justifyContent: 'space-between',
    borderRadius: wp(2),
  },

  animatedTextContainer: {
    height: hp(1.9),
    overflow: 'hidden',
    marginTop: wp(3.7),
  },
  searchInput: {
    fontSize: hp(1.5),
    fontWeight: '400',
    paddingTop: wp(3),
    paddingLeft: wp(5),
    color: 'rgba(170, 170, 170, 0.70)',
    
  },
  animatedText: {
    fontSize: hp(1.5),
    fontWeight: '400',
    color: 'rgba(170, 170, 170, 0.90)',
  },
  searchIcn: {
    alignSelf: 'center',
    backgroundColor: '#EFEFEF1A',
    height: hp(3.7),
    width: hp(3.7),
    marginRight: wp(3),
    borderRadius: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIconStyle: {
    resizeMode: 'cover',
    width: hp(2),
    height: hp(2),
  },
  semicircleContainer: {
    position: 'relative',
    height: hp('36%'),
    width: wp('100%'),
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    zIndex: -1,
  },
  innerCircle7: {
    position: 'absolute',
    borderRadius: wp(155) / 2,
    width: wp(155),
    height: wp(155),
    bottom: hp(0.7),
    shadowColor: '#FAFF00',
    shadowOffset: {width: 0, height: 2.575},
    shadowOpacity: 1,
    shadowRadius: 12.017,
    borderWidth: 0.858,
    borderColor: '#3E3E3E',
    backgroundColor: '#0B0B0B',
    zIndex:1,
    borderBottomWidth:1.5

  },
  innerCircle6: {
    position: 'absolute',
    borderRadius: wp(135) / 2,
    width: wp(135),
    height: wp(135),
    bottom: hp(5),
    shadowColor: '#FAFF00',
    shadowOffset: {width: 0, height: 2.575},
    shadowOpacity: 1,
    shadowRadius: 12.017,
    borderWidth: 0.858,
    borderColor: '#3E3E3E',
    backgroundColor: '#0B0B0B',
    zIndex:2,
    borderBottomWidth:1.5

  },
  innerCircle5: {
    position: 'absolute',
    borderRadius: wp(115) / 2,
    width: wp(115),
    height: wp(115),
    bottom: hp(10),
    shadowColor: '#FAFF00',
    shadowOffset: {width: 0, height: 2.575},
    shadowOpacity: 1,
    shadowRadius: 12.017,
    borderWidth: 0.858,
    borderColor: '#3E3E3E',
    backgroundColor: '#0B0B0B',
    zIndex:3,
    borderBottomWidth:1.5

  },
  innerCircle4: {
    position: 'absolute',
    borderRadius: wp(95) / 2,
    width: wp(95),
    height: wp(95),
    bottom: hp(15),
    shadowColor: '#FAFF00',
    shadowOffset: {width: 0, height: 2.575},
    shadowOpacity: 1,
    shadowRadius: 12.017,
    borderWidth: 0.858,
    borderColor: '#3E3E3E',
    backgroundColor: '#0B0B0B',
    zIndex:4,
    borderBottomWidth:1.5

  },
  innerCircle3: {
    position: 'absolute',
    borderRadius: hp(60),
    width: wp(105),
    height: wp(95),
    bottom: hp(20),
    backgroundColor: '#0B0B0B',
    zIndex:5
  },
  innerCircle2: {
    position: 'absolute',
    borderRadius: wp(75) / 2,
    width: wp(75),
    height: wp(75),
    bottom: hp(20),
    shadowColor: '#FAFF00',
    shadowOffset: {width: 0, height: 2.575},
    shadowOpacity: 1,
    shadowRadius: 12.017,
    borderWidth: 0.858,
    borderColor: '#3E3E3E',
    backgroundColor: '#0B0B0B',
    zIndex:6,
    borderBottomWidth:1.5

  },

  innerCircle1: { 
    position: 'absolute',
    borderRadius: hp(63),
    width: wp(83),
    height: wp(75),
    bottom: hp(25),
    backgroundColor: '#0B0B0B',
    zIndex:7
  },
  innerCircle0: {
    position: 'absolute',
    borderRadius: wp(55) / 2,
    width: wp(55),
    height: wp(55),
    bottom: hp(25),
    shadowColor: '#FAFF00',
    shadowOffset: {width: 0, height: 2.575},
    shadowOpacity: 1,
    shadowRadius: 12.017,
    borderWidth: 0.858,
    borderColor: '#3E3E3E',
    backgroundColor: '#0B0B0B',
    zIndex:8,
    borderBottomWidth:1.5

  },
  footer: {
    marginLeft: wp(5),
    marginTop: hp(6),
  },
  footer2: {
    marginLeft: wp(5),
  },
  footerText: {
    fontWeight: '500',
    fontSize: hp(2.9),
    lineHeight: hp(4.3),
    color: '#FFFFFF',
    fontFamily: 'Poppins-Medium',
  },
  highlight: {
    color: '#FAFF00',
    fontWeight: '700',
    fontSize: hp(2.9),
    lineHeight: hp(4.3),
    fontFamily: 'Poppins-Medium',
  },
  lines: {
    flexDirection: 'row',
    gap: wp(1),
    marginTop: hp(1),
    marginBottom: hp(1),
  },
  subTextStyle: {
    width: wp(60),
    marginBottom: hp(8),
  },
  subTextStyle2: {
    width: wp(80),
    marginBottom: hp(8),
  },
  subText: {
    fontWeight: '400',
    fontSize: hp(1.9),
    color: 'rgba(255, 255, 255, 0.80)',
    lineHeight: hp(2),
    marginTop: hp(1),
    fontFamily: 'Poppins-Regular',
  },
  footerActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(-4),
  },
  footerActions2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(4),
    marginTop: hp(-4),
  },
  slideIcn: {
    marginTop: hp(4),
  },
  skipBtn: {
    marginLeft: wp(5),
    justifyContent: 'center',
  },
  skipTxt: {
    color: '#868686',
    fontSize: hp(1.8),
    fontWeight: '400',
    fontFamily: 'Inter-Regular',
  },
  arrowBtn: {
    marginRight: wp(5),
    backgroundColor: '#2A2A2A',
    height: hp(6.87),
    width: hp(6.87),
    borderRadius: wp(8),
    justifyContent: 'center',
    alignItems: 'center',
    // borderBlockStartColor:'yellow',
    // borderWidth:1
  },
  pr1: {
    marginLeft: wp(-12),
    marginTop: hp(-0.5),
  },
  pr2: {
    marginLeft: wp(-19.6),
    marginTop: hp(-0.5),
  },
  arrowBtn2: {
    marginRight: wp(5),
    backgroundColor: '#2A2A2A',
    height: hp(6.87),
    width: hp(6.87),
    borderRadius: wp(8),
    justifyContent: 'center',
    alignItems: 'center',
    border: 'yellow',
    borderWidth: 1,
  },
  arrowBtn3: {
    marginRight: wp(5),
    backgroundColor: '#2A2A2A',
    height: hp(6.7),
    width: hp(6.7),
    borderRadius: wp(8),
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor:'yellow',
    // borderWidth:1
  },
  arrowIcon: {
    resizeMode: 'cover',
    height: hp(3),
    width: hp(3),
  },
});
