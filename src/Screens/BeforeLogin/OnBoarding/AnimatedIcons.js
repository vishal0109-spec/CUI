import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, Animated, Easing} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  scIcon1,
  scIcon2,
  scIcon3,
  scIcon4,
  scIcon5,
  scIcon6,
  scIcon7,
  scIcon8,
} from '../../../Utils/img';

const icons = [
  scIcon1,
  scIcon2,
  scIcon3,
  scIcon4,
  scIcon5,
  scIcon6,
  scIcon7,
  scIcon8,
];

const positions = [
  {top: 65, left: 100},
  {top: 85, left: 265},
  {top: 160, left: 150},
  {top: 145, left: 250},
  {top: 230, left: 200},
  {top: 260, left: 125},
  {top: 235, left: 290},
  {top: 190, left: 30},
];

const AnimatedIcons = () => {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const opacity = useState(new Animated.Value(0))[0];

  useEffect(() => {
    const showNextIcon = () => {
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 500,
          delay: 500,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setCurrentIconIndex(prevIndex => (prevIndex + 1) % icons.length);
      });
    };

    showNextIcon();

    const interval = setInterval(showNextIcon, 1500);

    return () => clearInterval(interval);
  }, [opacity]);

  return (
    <View style={styles.container}>
      {icons.map((icon, index) => (
        <Animated.View
          key={index}
          style={[
            styles.iconContainer,
            positions[index],
            {opacity: currentIconIndex === index ? opacity : 0},
          ]}>
          <Image source={icon} style={styles.icon} />
        </Animated.View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '25%',
    flex: 1,
  },
  iconContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.2,
    borderColor: 'grey',
    width: hp(5),
    height: hp(5),
    borderRadius: hp(6),
    backgroundColor: '#1B1B1B',
    // borderBlockEndColor:'grey',
    // borderEndColor:'grey'
  },
  icon: {
    width: hp(3),
    height: hp(3),
    // borderRadius: 25,
  },
});

export default AnimatedIcons;
