import {
  View,
  Text,
  Image,
  Animated,
  Dimensions,
  TouchableOpacity,
  Easing,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {styles} from './Styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  arrow,
  demoUser,
  icon1,
  icon10,
  icon11,
  icon12,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  icon9,
  line1,
  line2,
  line3,
  pr2,
  slide2,
} from '../../../Utils/img';
import Button from '../../../Components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import OnBoarding3 from './OnBoarding3';
import Login from '../Login/Login';

const {width, height} = Dimensions.get('window');

const OnBoarding2 = () => {
  const navigation = useNavigation();
  const images = [
    {id: 1, src: icon1, left: 120, top: 200},
    {id: 2, src: icon2, left: 215, top: 200},
    {id: 3, src: icon3, left: 165, top: 285},
    {id: 4, src: icon4, left: 165, top: 140},
    {id: 5, src: icon5, left: 90, top: 280},
    {id: 6, src: icon6, left: 240, top: 280},
    {id: 7, src: icon7, left: 70, top: 160},
    {id: 8, src: icon8, left: 260, top: 160},
    {id: 9, src: icon9, left: 160, top: 350},
    {id: 10, src: icon10, left: 160, top: 75},
    {id: 11, src: icon11, left: 15, top: 230},
    {id: 12, src: icon12, left: 310, top: 230},
  ];

  const circleRadius = [60, 90, 120, 150];
  const circleAnimationValues = useRef(circleRadius.map(() => new Animated.Value(0))).current;
  const iconAnimationValues = useRef(images.map(() => new Animated.Value(0))).current;
  
  const circleBackgroundColors = useRef(circleRadius.map(() => new Animated.Value(0))).current; // Added for background color

  const circleBorderColors = useRef(circleRadius.map(() => new Animated.Value(1))).current;

  useEffect(() => {
    const animations = circleRadius.map((radius, index) => {
      const iconAnimations = images
        .filter((_, imgIndex) => Math.floor(imgIndex / 3) === index)
        .map((_, imgIndex) =>
          Animated.sequence([
            Animated.timing(iconAnimationValues[imgIndex + index * 3], {
              toValue: 0.1, // Intermediate visibility
              duration: 300,
              delay: (index - 1) * 300, // Previous circle's delay
              easing: Easing.inOut(Easing.ease),
              useNativeDriver: false,
            }),
            Animated.timing(iconAnimationValues[imgIndex + index * 3], {
              toValue: 1, // Fully visible
              duration: 300,
              delay: 300,
              easing: Easing.inOut(Easing.ease),
              useNativeDriver: false,
            })
          ])
        );
  
      return Animated.parallel([
        Animated.sequence([
          Animated.timing(circleAnimationValues[index], {
            toValue: 0.1, // Intermediate visibility
            duration: 500,
            delay: (index - 1) * 500, // Previous circle's delay
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
          }),
          Animated.timing(circleAnimationValues[index], {
            toValue: 1, // Fully visible
            duration: 500,
            delay: 500,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
          })
        ]),
        ...iconAnimations,
      ]);
    });
  

    Animated.stagger(1000, animations).start(() => {
      // Change background color to grey and border color to transparent after initial animation
      Animated.parallel(
        circleBackgroundColors.map((bgColor) =>
          Animated.timing(bgColor, {
            toValue: 1,
            duration: 500,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
          })
        ).concat(
          circleBorderColors.map((borderColor) =>
            Animated.timing(borderColor, {
              toValue: 0,
              duration: 500,
              easing: Easing.inOut(Easing.ease),
              useNativeDriver: false,
            })
          )
        )
      ).start(() => {
        const loopAnimation = Animated.loop(
          Animated.sequence([
            // Change background color to black and border color to yellow starting from the center
            Animated.stagger(
              500,
              circleRadius.map((_, index) =>
                Animated.parallel([
                  Animated.timing(circleBackgroundColors[index], {
                    toValue: 0, // Animating to black
                    duration: 500,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: false,
                  }),
                  Animated.timing(circleBorderColors[index], {
                    toValue: 1, // Animating to yellow
                    duration: 500,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: false,
                  })
                ])
              )
            ),
            // Reset background color to grey and border color to transparent for the next loop
            Animated.parallel(
              circleRadius.map((_, index) =>
                Animated.parallel([
                  Animated.timing(circleBackgroundColors[index], {
                    toValue: 1, // Animating to grey
                    duration: 500,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: false,
                  }),
                  Animated.timing(circleBorderColors[index], {
                    toValue: 0, // Animating to transparent
                    duration: 500,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: false,
                  })
                ])
              )
            ),
          ])
        );

        loopAnimation.start();
      });
    });
  }, [circleAnimationValues, iconAnimationValues, circleBackgroundColors, circleBorderColors]);

  const interpolatedBackgroundColors = circleBackgroundColors.map((bgColor) =>
    bgColor.interpolate({
      inputRange: [0, 1], 
      outputRange: ['#141414', '#262626'], 
    })
  );

  const interpolatedBorderColors = circleBorderColors.map((borderColor) =>
    borderColor.interpolate({
      inputRange: [0, 1],
      outputRange: ['transparent', '#D1D500'],
    })
  );

  return (
    <View style={styles.container}>
      <View style={styles.demoUser}>
        <Image source={demoUser} style={styles.userStyle} />
        {circleRadius.map((radius, index) => (
          <Animated.View
            key={index}
            style={[
              styles.circle,
              {
                width: radius * 2,
                height: radius * 2,
                borderRadius: radius,
                opacity: circleAnimationValues[index],
                backgroundColor: interpolatedBackgroundColors[index],
                borderColor: interpolatedBorderColors[index],
                borderWidth: 0.7, // Add border width to make border visible
                zIndex: circleRadius.length - index,
              },
            ]}
          />
        ))}
        {images.map((image, index) => {
          const circleIndex = Math.floor(index / 3);
          const iconSize = circleIndex === 0 ? hp(3) : circleIndex === 1 ? hp(3.5) : circleIndex === 2 ? hp(4) : hp(4.5);
          return (
            <Animated.View
              key={image.id}
              style={{
                position: 'absolute',
                left: image.left,
                top: image.top,
                opacity: iconAnimationValues[index],
                zIndex: 7,
              }}
            >
              <Image
                source={image.src}
                style={[
                  styles.circleImage,
                  {
                    width: iconSize,
                    height: iconSize,
                  },
                ]}
              />
            </Animated.View>
          );
        })}
      </View>
      <View style={styles.footer2}>
        <Text style={styles.footerText}>
          CONCT <Text style={styles.highlight}>ALERT</Text>
        </Text>
        <View style={styles.lines}>
          <Image source={line1} />
          <Image source={line2} />
          <Image source={line3} />
        </View>
        <View style={styles.subTextStyle2}>
          <Text style={styles.subText}>
            "Instantly notified in times of need – your safety is our priority
            with Emergency Alerts."
          </Text>
          <Image source={slide2} style={styles.slideIcn} />
        </View>
      </View>
      <View style={styles.footerActions2}>
        <Button
          title="Skip"
          style={styles.skipBtn}
          btnStyle={styles.skipTxt}
          onPress={() => navigation.navigate(Login)}
        />
        <View style={{flexDirection: 'row', marginRight: 10}}>
          <Button
            icon={arrow}
            iconStyle={styles.arrowIcon}
            style={styles.arrowBtn2}
            onPress={() => navigation.navigate(OnBoarding3)}
          />

          <Button
            icon={pr2}
            style={styles.pr2}
            onPress={() => navigation.navigate(OnBoarding3)}
          />
        </View>
      </View>
    </View>
  );
};

export default OnBoarding2;
