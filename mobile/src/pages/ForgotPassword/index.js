import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class ForgotPassword extends React.Component{
   render(){
      return(
         <View style={styles.container}>
            <View style={styles.header}>
               <Text style={styles.textHeader}>Esqueci minha senha</Text>
             </View>  
             <Animatable.View 
               style={styles.footer}
               animation='fadeInUpBig'
            >
               <Text style={styles.textFooter}>
                  Esqueceu sua senha ? Não tem problema!
                  Nós iremos enviar um token no email
                  digitado, para poder redefinir a senha de sua conta.
               </Text>
               <View style={styles.action}>
                  <FontAwesome
                     keyboardType= {'email-adress'}
                     style={styles.icons} 
                     name='at' 
                     size={20}
                     />
                     <TextInput 
                     placeholder="email"
                     style={styles.textInput}
                     
                     returnKeyType= 'next'
                     onChangeText={(text) => this.textInputChange(text)}
                  />
                </View>
                <View style={styles.button}>
                  <TouchableOpacity
                     onPress={() => this.props.navigation.navigate('ResetPassword')}
                     style={[styles.login,{
                        borderColor: '#6c63ff',
                        borderWidth: 1,
                        marginTop: 15
                     }]}
                  >
                     <LinearGradient colors={['#6c63ff', '#3b5998']} style={styles.login}>
                        <Text style={styles.textForgotPassword}>Prosseguir</Text>
                     </LinearGradient>  
                  </TouchableOpacity>
               </View>
            </Animatable.View>
         </View>
      )
   }
}