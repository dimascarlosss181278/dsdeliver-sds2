import { OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native-gesture-handler';

export function Header() {
  const navigation = useNavigation();

  const handleOnPress = () => {
      navigation.navigate('Home');
  }


  return (
   <TouchableWithoutFeedback> 
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')}/>
      <Text style={styles.text}>DS Devlivery</Text>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#DA5C5C',
      height: 90,
      paddingTop: 50,
      flexDirection: 'row',
      justifyContent: 'center'
  },

text: {

  fontSize: 18,
  fontWeight: 'bold',
  lineHeight: 25,
  letterSpacing: -0.24,
  color: '#FFF',
  marginLeft: 15,
  fontFamily: 'OpenSans_700Bold'
}
});

export default Header;
