import {
  View,
  Text,
  Image,
  TextInput,
  Modal,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {registerStyles} from './registerStyle';
import Button from '../../../Components/CustomButton';
import {
  asterik,
  backIcon,
  calendar,
  camera,
  compBar1,
  crossIcon,
  dlt,
  downIcon,
  editIcon,
  gallery,
  headerBar,
  profileUser,
} from '../../../Utils/img';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-modern-datepicker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomTextInput from '../../../Components/CustomTextInput';
import {useNavigation} from '@react-navigation/native';
import Profession from './Profession';
import RegisterSuccess from './RegisterSuccess';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Register = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [selectedGender, setSelectedGender] = useState(null);

  const [nameError, setNameError] = useState(false);
  const [dobError, setDobError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  function handleOnPress() {
    setOpen(!open);
  }
  function handleOnPress2() {
    setOpen2(!open2);
  }
  function handleOnPress3() {
    setOpen3(!open3);
  }

  const handleGalleryPress = async () => {
    setOpen2(!open2);
    const options = {
      mediaType: 'photo',
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image selection');
      } else if (response.error) {
        console.error('Image picker error:', response.error);
      } else {
        let source = response;
        // setSelectedImage(source);
        // uploadImage();
      }
    });
  };

  const handleCameraPress = async () => {
    setOpen2(!open2);
    const options = {
      mediaType: 'photo',
    };
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image capture');
      } else if (response.error) {
        console.error('Camera error:', response.error);
      } else {
        let source = response;
        // setSelectedImage(source);
        // uploadImage();
      }
    });
  };

  const validateName = (name) => {
    if (!name) {
      setNameError(true);
      return false;
    }
    setNameError(false);
    return true;
  };

  const validateDOB = (dob) => {
    const dobPattern = /^\d{4}\/\d{2}\/\d{2}$/;
    if (!dob || !dobPattern.test(dob)) {
      setDobError(true);
      return false;
    }
    setDobError(false);
    return true;
  };

  const validateEmail = email => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      setEmailError(true);
      return false;
    }
    setEmailError(false);
    return true;
  };

  const handleNextPress = () => {
    const isNameValid = validateName(name);
    const isDobValid = validateDOB(dob);
    const isEmailValid = validateEmail(email);

    if (isNameValid && isDobValid && isEmailValid) {
      // Proceed to the next step
      navigation.navigate(RegisterSuccess);
    } else {
      console.log('Validation failed');
    }
  };

  return (
    <View style={registerStyles.container}>
      <KeyboardAwareScrollView contentContainerStyle={registerStyles.container}>
        <View style={registerStyles.maskingView} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={registerStyles.scrollContent}
        style={registerStyles.scrollView}>
        <View style={registerStyles.container}>
          <View style={registerStyles.header}>
            <Button
              icon={backIcon}
              style={registerStyles.backIcon}
              onPress={() => navigation.goBack()}
            />
            <Text style={registerStyles.cntntTxt}>
              Before jumping in, let’s get to{'\n'}know you a bit.
            </Text>
          </View>
          <View style={registerStyles.profileHeader}>
            <Image source={compBar1} style={registerStyles.compBar} />
            <Text style={registerStyles.numTxt}>1/2</Text>
          </View>

          <View style={registerStyles.profileContainer}>
            <Button
              icon={profileUser}
              style={registerStyles.profileUser}
              onPress={handleOnPress2}
            />
            <Button
              icon={editIcon}
              style={registerStyles.editIcon}
              iconStyle={registerStyles.editIconStyle}
              onPress={handleOnPress2}
            />
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={open2}
            onRequestClose={() => setOpen2(false)}>
            <TouchableWithoutFeedback onPress={() => setOpen2(false)}>
              <View style={StyleSheet.absoluteFill}>
                {/* Overlay to dim the background */}
                <View style={registerStyles.overlay} />
                <TouchableWithoutFeedback onPress={() => {}}>
                  <View style={registerStyles.editModalContainer}>
                    <View style={registerStyles.editModal}>
                      <Button
                        icon={headerBar}
                        iconStyle={registerStyles.headerBarStyle}
                        style={registerStyles.headerBar}
                      />
                      <View style={registerStyles.editModalHeader}>
                        <Text style={registerStyles.ppTxt}>
                          Profile Picture
                        </Text>
                        <Button icon={dlt} iconStyle={registerStyles.dltIcon} />
                      </View>
                      <View style={registerStyles.iconContainer}>
                        <View>
                          <Button
                            icon={camera}
                            iconStyle={registerStyles.cameraStyle}
                            style={registerStyles.cameraIcn}
                            onPress={handleCameraPress}
                          />
                          <Text style={registerStyles.icnTxt}>Camera</Text>
                        </View>
                        <View>
                          <Button
                            icon={gallery}
                            iconStyle={registerStyles.galleryStyle}
                            style={registerStyles.cameraIcn}
                            onPress={handleGalleryPress}
                          />
                          <Text style={registerStyles.galleryTxt}>Gallery</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </TouchableWithoutFeedback>
          </Modal>

          <View style={registerStyles.inputContainer}>
            <View>
              <View
                style={[
                  registerStyles.inputWrapper,
                  nameError && registerStyles.errorBorder,
                ]}>
                <CustomTextInput
                  placeholder="First Name & Second Name"
                  label="First & Last Name *"
                  value={name}
                  onChangeText={text => {
                    setName(text);
                    validateName(text);
                  }}
                  error={nameError}
                />
              </View>
              {nameError && (
                <Text style={registerStyles.errorText}>
                  Kindly enter both First & Last Name
                </Text>
              )}
            </View>

            <View>
              <View
                style={[
                  registerStyles.inputWrapper,
                  dobError && registerStyles.errorBorder,
                ]}>
                <CustomTextInput
                  placeholder="DD/MM/YYYY"
                  label="Date of Birth *"
                  value={dob}
                  onChangeText={text => {
                    setDob(text);
                    validateDOB(text);
                  }}
                  error={dobError}
                />
                <Button
                  icon={calendar}
                  style={registerStyles.calendar}
                  onPress={handleOnPress}
                />
              </View>
              {dobError && (
                <Text style={registerStyles.errorText}>
                  Kindly Enter a valid Date of Birth
                </Text>
              )}
            </View>

            <Modal
              animationType="slide"
              transparent={true}
              visible={open}
              onRequestClose={() => setOpen(false)}>
              <TouchableWithoutFeedback onPress={() => setOpen(false)}>
                <View style={StyleSheet.absoluteFill}>
                  <View style={registerStyles.overlay} />
                  <View style={registerStyles.modalContainer}>
                    <View style={registerStyles.modalView}>
                      <DatePicker
                        mode="calendar"
                        onSelectedChange={date => setDob(date)}
                        options={registerStyles.datePicker}
                        style={registerStyles.datePickerStyle}
                      />
                      <View style={registerStyles.datePickerFooter}>
                        <Button
                          title="Cancel"
                          btnStyle={registerStyles.cnclTxt}
                          onPress={() => setOpen(false)}
                        />
                        <Button
                          title="OK"
                          btnStyle={registerStyles.cnclTxt}
                          onPress={() => setOpen(false)}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </Modal>

            <View>
              <View
                style={[
                  registerStyles.inputWrapper,
                  emailError && registerStyles.errorBorder,
                ]}>
                <CustomTextInput
                  placeholder="Enter your Mail ID here"
                  label="Email *"
                  value={email}
                  onChangeText={text => {
                    setEmail(text);
                    validateEmail(text);
                  }}
                />
              </View>
              {emailError && (
                <Text style={registerStyles.errorText}>
                  Kindly Enter a valid Email
                </Text>
              )}
            </View>

            <View style={registerStyles.inputWrapper}>
              <CustomTextInput placeholder="Location" label="Location" />
              <Image source={downIcon} style={registerStyles.downIcon} />
            </View>
            <View style={registerStyles.inputWrapper}>
              <CustomTextInput
                placeholder="Enter your Profession here"
                label="Profession *"
              />
              <Button
                icon={downIcon}
                style={registerStyles.downIcon}
                onPress={() => navigation.navigate(Profession)}
              />
            </View>

            <View style={registerStyles.inputWrapper}>
              <CustomTextInput 
              placeholder="Gender"
              label="Gender"
              value={selectedGender}
              onChangeText={text => {
                setSelectedGender(text);
              }}
              />
              <Button
                icon={downIcon}
                style={registerStyles.downIcon}
                onPress={handleOnPress3}
              />
            </View>

            <Modal
              animationType="slide"
              transparent={true}
              visible={open3}
              onRequestClose={() => setOpen3(false)}>
              <TouchableWithoutFeedback onPress={() => setOpen3(false)}>
                <View style={StyleSheet.absoluteFill}>
                  {/* Overlay to dim the background */}
                  <View style={registerStyles.overlay} />

                  <TouchableWithoutFeedback onPress={() => {}}>
                    <View style={registerStyles.editModalContainer}>
                      <View
                        style={[
                          registerStyles.genderModal,
                          selectedGender === 'Others' && {height: hp(55)},
                        ]}>
                        <Button
                          icon={headerBar}
                          iconStyle={registerStyles.headerBarStyle}
                          style={registerStyles.headerBar}
                        />
                        <View style={registerStyles.genderModalHeader}>
                          <Text style={registerStyles.genderTxt}>
                            Select the Gender
                          </Text>
                          <Button
                            icon={crossIcon}
                            iconStyle={registerStyles.crossIcon}
                            onPress={() => setOpen3(false)}
                          />
                        </View>
                        <View style={registerStyles.optionContainer2}>
                          {[
                            'Male',
                            'Female',
                            'Prefer Not to Say',
                            'Others',
                          ].map((gender, index) => (
                            <TouchableOpacity
                              key={index}
                              style={registerStyles.optionContainer}
                              onPress={() => setSelectedGender(gender)}>
                              <View
                                style={[
                                  registerStyles.radioButton,
                                  selectedGender === gender &&
                                    registerStyles.selectedRadioButton,
                                ]}>
                                {selectedGender === gender && (
                                  <View style={registerStyles.radioInner} />
                                )}
                              </View>
                              <Text style={registerStyles.optionText}>
                                {gender}
                              </Text>
                            </TouchableOpacity>
                          ))}

                          {selectedGender === 'Others' && (
                            <TextInput
                              style={registerStyles.input}
                              placeholder="Please Specify"
                              placeholderTextColor="#888"
                            />
                          )}
                        </View>
                        <View style={registerStyles.nxtBtn}>
                          <LinearGradient
                            colors={[
                              'rgba(250,255,0,0.17)',
                              'rgba(250,255,0,0)',
                            ]}
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
                                title="Done"
                                btnStyle={registerStyles.btnTxt}
                                onPress={() => setOpen3(false)}
                              />
                            </LinearGradient>
                          </LinearGradient>
                        </View>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </TouchableWithoutFeedback>
            </Modal>
          </View>
        </View>
      </ScrollView>
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
              onPress={() => handleNextPress()}
              title="NEXT"
              btnStyle={registerStyles.btnTxt}
            />
          </LinearGradient>
        </LinearGradient>
      </View>
      </KeyboardAwareScrollView>
      
    </View>
  );
};

export default Register;
