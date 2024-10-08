import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './Styles'
import { arrow, line1, line2, line3, pr3, slide3 } from '../../../Utils/img'
import Button from '../../../Components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import Login from '../Login/Login'

const OnBoarding3 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.demoUser}>
        <Text>OnBoarding3</Text>
        </View>
        <View style={styles.footer}>
        <Text style={styles.footerText}>
        CONCT  <Text style={styles.highlight}>Family Tree</Text>
        </Text>
        <View style={styles.lines}>
          <Image source={line1} />
          <Image source={line2} />
          <Image source={line3} />
        </View>
        <View style={styles.subTextStyle2}>
          <Text style={styles.subText}>
          "Instantly notified in times of need – your safety is our priority with Emergency Alerts."
          </Text>
          <Image source={slide3} style={styles.slideIcn} />
        </View>
        

      </View>
      <View style={styles.footerActions2}>
        <Button title="Skip" style={styles.skipBtn} btnStyle={styles.skipTxt} 
        onPress={() => navigation.navigate(Login)}/>
        <View style={{flexDirection: 'row', marginRight: 10}}>
        <Button
          icon={arrow}
          iconStyle={styles.arrowIcon}
          style={styles.arrowBtn3}
          onPress={() => navigation.navigate(Login)}
        />
        <Button icon={pr3} style={styles.pr2} 
          onPress={() => navigation.navigate(Login)}/>
        </View>
        
      </View>
      
    </View>
  )
}

export default OnBoarding3