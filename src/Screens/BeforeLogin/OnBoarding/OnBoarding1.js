import {
  View,
  Text,
  TextInput,
  Image,
  Animated,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './Styles';
import Button from '../../../Components/CustomButton';
import {
  arrow,
  line1,
  line2,
  line3,
  pr1,
  search,
  slide1,
} from '../../../Utils/img';
import {Easing} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import OnBoarding2 from './OnBoarding2';
import AnimatedIcons from './AnimatedIcons';
import Login from '../Login/Login';
import LinearGradient from 'react-native-linear-gradient';
import TextGradient from '../../../Components/TextGradient';
import Register from '../Register/Register';

const professions = [
  'Lawyer',
  'Accountant',
  'Plumber',
  'Teacher',
  'Engineer',
  'Doctor ',
  'Architect',
  'Data Scientist',
];

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const OnBoarding1 = () => {
  const navigation = useNavigation();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const fadeAnim = useState(new Animated.Value(1))[0];
  const slideAnim = useState(new Animated.Value(0))[0];

  const shadowAnims = [
    useState(new Animated.Value(0))[0],
    useState(new Animated.Value(0))[0],
    useState(new Animated.Value(0))[0],
    useState(new Animated.Value(0))[0],
    useState(new Animated.Value(0))[0],
    useState(new Animated.Value(0))[0],
    useState(new Animated.Value(0))[0],
    useState(new Animated.Value(0))[0],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: -20,
          duration: 500,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
      ]).start(() => {
        setCurrentWordIndex((currentWordIndex + 1) % professions.length);
        slideAnim.setValue(20);
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(slideAnim, {
            toValue: 0,
            duration: 500,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
          }),
        ]).start();
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [currentWordIndex, fadeAnim, slideAnim]);

  useEffect(() => {
    Animated.stagger(
      800,
      shadowAnims.map((anim, index) =>
        Animated.timing(anim, {
          toValue: 10 - index * 0.7,
          duration: 500,
          useNativeDriver: false,
        }),
      ),
    ).start();
  }, [shadowAnims]);

  return (
    <SafeAreaView style={styles.container}>
      <AnimatedIcons />
      <View style={styles.content}>
        <View>
          <TextGradient
            style={styles.title}
            locations={[0, 1]}
            colors={['#FFF', '#787878']}
            start={{x: 0, y: 0.4}}
            end={{x: 0, y: 0.7}}
            text="Do you know"
          />
          <Text style={styles.anyone}>ANYONE?</Text>
        </View>

        <AnimatedLinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0.9, y: 0}}
          colors={['rgba(51, 51, 51, 1)', 'rgba(31, 31, 31, 0.5)']}
          style={styles.searchContainer}>
          <View style={styles.innerContainer}>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search For"
                editable={false}
              />
              <View style={styles.animatedTextContainer}>
                <Animated.Text
                  style={[
                    styles.animatedText,
                    {opacity: fadeAnim, transform: [{translateY: slideAnim}]},
                  ]}>
                  {professions[currentWordIndex]}
                </Animated.Text>
              </View>
            </View>
            <Button
              icon={search}
              style={styles.searchIcn}
              iconStyle={styles.searchIconStyle}
            />
          </View>
        </AnimatedLinearGradient>
      </View>

      <View style={styles.semicircleContainer}>
        {shadowAnims.map((anim, index) => (
          <Animated.View
            key={index}
            style={[styles[`innerCircle${index}`], {elevation: anim}]}
          />
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Do you know <Text style={styles.highlight}>anyone?</Text>
        </Text>
        <View style={styles.lines}>
          <Image source={line1} />
          <Image source={line2} />
          <Image source={line3} />
        </View>
        <View style={styles.subTextStyle}>
          <Text style={styles.subText}>
            "Know someone in the app? Let's get you connected!"
          </Text>
          <Image source={slide1} style={styles.slideIcn} />
        </View>
      </View>

      <View style={styles.footerActions}>
        <Button
          title="Skip"
          style={styles.skipBtn}
          btnStyle={styles.skipTxt}
          onPress={() => navigation.navigate(Register)}
        />
        <View style={{flexDirection: 'row', marginRight: 10}}>
          <Button
            icon={arrow}
            iconStyle={styles.arrowIcon}
            style={styles.arrowBtn}
            onPress={() => navigation.navigate(OnBoarding2)}
          />
          <Image source={pr1} style={styles.pr1} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding1;
