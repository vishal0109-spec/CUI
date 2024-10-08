import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Animated, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomTextInput = ({
  label, // Text that will be displayed on the border
  placeholder, // Placeholder text inside the TextInput
  value,
  onChangeText,
  error,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [animatedValue] = useState(new Animated.Value(value ? 1 : 0));

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    if (!value) {
      setIsFocused(false);
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  const labelStyle = {
    position: 'absolute',
    left: wp(5),
    top: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [18, -10], // Move up when focused
    }),
    fontSize: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 14], // Adjust font size when focused
    }),
    color: error
      ? '#FF0033'
      : animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['#ECECEC', '#F2F2F2'], // Change color when focused
        }),
    backgroundColor: '#0B0B0B',
    zIndex: 1,
  };

  return (
    <View>
      <Animated.Text style={labelStyle}>
        {isFocused || value ? label : ''}
      </Animated.Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="" // Placeholder changes on focus
        placeholderTextColor="#ECECEC"
        style={[styles.inputField, error && styles.errorInputField]}
      />
      {!isFocused && !value && (
        <Text style={styles.placeholderText}>
          {placeholder}
          <Text style={styles.asterisk}> *</Text>
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    width: wp(54),
    lineHeight: hp(2.5),
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    paddingLeft: wp(5),
    fontSize: hp(1.875),
    opacity: 0.3,
  },
  errorInputField: {
    borderBottomColor: 'red', // Red border when there's an error
  },
  placeholderText: {
    position: 'absolute',
    left: wp(5),
    top: 12,
    fontSize: hp(1.875),
    color: '#ECECEC',
    opacity: 0.3,
  },
  asterisk: {
    color: '#FFD700', // Yellow color for the asterisk
    opacity: 1,
  },
});

export default CustomTextInput;
