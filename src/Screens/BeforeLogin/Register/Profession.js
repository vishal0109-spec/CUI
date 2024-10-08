import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {registerStyles} from './registerStyle';
import Button from '../../../Components/CustomButton';
import {backIcon, search2} from '../../../Utils/img';

const Profession = () => {
  return (
    <View style={registerStyles.container}>
      <View style={registerStyles.professionHeader}>
        <Button
          icon={backIcon}
          style={registerStyles.backIcon2}
          onPress={() => navigation.goBack()}
        />
        <Text style={registerStyles.professionHeaderTxt}>
          Select your Profession
        </Text>
      </View>
      <View style={registerStyles.searchBar}>
        <Button icon={search2} iconStyle={registerStyles.search2} />
        <TextInput
          placeholder="Search by Name..."
          placeholderTextColor="#FFF"
          style={registerStyles.searchTxt}
        />
      </View>

      <View style={registerStyles.divider}>
        <View style={registerStyles.line} />
        <Text style={registerStyles.orText}>POPULAR PROFESSIONS</Text>
        <View style={registerStyles.line} />
      </View>
    </View>
  );
};

export default Profession;
