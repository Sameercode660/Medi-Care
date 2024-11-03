import { View, Text, Button } from 'react-native'
import React from 'react'
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image
} from 'react-native';
import ImageSlider from '../components/ImageSlider';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Navigator } from 'expo-router';
import { Link } from 'expo-router';
import OurServices from '../components/OurServices';

const HomeScreen = () => {
  return (
    <SafeAreaView >
      <ScrollView>
        <ImageSlider></ImageSlider>

        <View style={styles.buttonContainerStyle}>

          <Link href="./Appointment" style={[styles.appointmentButtonStyle, styles.bookAppointmentTextStyle]}>Book Appointment</Link>

        </View>

        <View style={styles.ourServicesTextContainerStyle}>
          <Text style={styles.ourSevicesTextStyle}>Our Services</Text>
        </View>

        <View style={styles.ourServicesContainer}>
          <OurServices image={'https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} title={'This is title'} description={'This is description'} price={'112'}></OurServices>
          <OurServices image={'https://images.pexels.com/photos/954585/pexels-photo-954585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} title={'This is title'} description={'This is description'} price={'112'}></OurServices>
          <OurServices image={'https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} title={'This is title'} description={'This is description'} price={'112'}></OurServices>
          <OurServices image={'https://images.pexels.com/photos/208518/pexels-photo-208518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} title={'This is title'} description={'This is description'} price={'112'}></OurServices>
          <OurServices image={'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} title={'This is title'} description={'This is description'} price={'112'}></OurServices>
          <OurServices image={'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} title={'This is title'} description={'This is description'} price={'112'}></OurServices>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  ourServicesTextContainerStyle: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'gray',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
  },

  ourSevicesTextStyle: {
    fontSize: 24,  // Large font size for titles
    fontWeight: 'bold',  // Make the title stand out
    color: '#333',  // Dark color for good contrast
    marginBottom: 10,
  },

  buttonContainerStyle: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 15,
  },

  appointmentButtonStyle: {
    backgroundColor: 'aqua',
    width: 300,
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: 'center',

  },

  bookAppointmentTextStyle: {
    fontSize: 16,
    width: '100%',
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
  },

  // our servicess container styles
  ourServicesContainer: {
    width: '100%',
    padding: 5
  }
})

export default HomeScreen