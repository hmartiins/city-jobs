import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

import logo from './img/logo.png'

import styles from './styles';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image 
          source={logo}
        />
      </View>
      <View style={styles.content}>
        <TextInput 
          placeholder='email'
          style={styles.inputs}
        />
        <TextInput 
          placeholder='password'
          style={styles.inputsTwo}
        />
      </View>
    </View>
  );
}
