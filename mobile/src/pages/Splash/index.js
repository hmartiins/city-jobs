import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

import logo from '../img/logo.png'

export default class Splash extends React.Component{
   render(){
      return(
         <View style={styles.container}>
            <StatusBar barStyle='light-content' />
            <View style={styles.header}>
               <Animatable.Image 
                  animation='bounceIn'
                  duration={1800}
                  source={logo}
                  style={styles.logo}
                  resizeMode={'stretch'}
               />
            </View>
            <Animatable.View style={styles.footer} animation='fadeInUpBig'>
               <Text style={styles.title}> 
                  Se conecte com todos ao seu redor !
               </Text>
               <Text style={styles.text}>Faça login agora !</Text>
               <View style={styles.button}>
                  <TouchableOpacity 
                     onPress={() => this.props.navigation.navigate('Login')}
                     >
                     <LinearGradient colors={['#6c63ff', '#3b5998']} style={styles.login}>
                        <Text style={styles.textLogin}>Entrar </Text>
                        <MaterialIcons 
                           name='navigate-next'
                           color='white'
                           size={20}
                        />
                     </LinearGradient>
                  </TouchableOpacity>
               </View>
            </Animatable.View>
         </View>
      );
   }
};