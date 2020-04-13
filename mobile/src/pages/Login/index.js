import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import styles from './styles';

export default class Login extends React.Component{

  constructor(props){
    super(props);
    this.state={
      check_textInputChange: false,
      password: '',
      secureTextEntry: true
    }
  }

  textInputChange(value){
    if(value.length !== 0){
      this.setState({
        check_textInputChange: true
      });
    }
    else{
      this.setState({
        check_textInputChange: false
      });
    }
  }
  secureTextEntry(){
    this.setState({
      secureTextEntry: !this.state.secureTextEntry
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Bem-vindo !</Text>
        </View>  
        <Animatable.View 
          style={styles.footer}
          animation='fadeInUpBig'
        >
          <Text style={styles.textFooter}>E-mail</Text>
          <View style={styles.action}>
            <FontAwesome 
              name='user-o' 
              size={20}
            />
            <TextInput 
              placeholder="email"
              style={styles.textInput}
              onChangeText={(text) => this.textInputChange(text)}
            />
            {this.state.check_textInputChange ?
              <Feather 
                name='check-circle'
                color='green'
                size={20}
              />
            :null}
          </View>

          <Text style={[styles.textFooter, {
            marginTop: 35
          }]}>Senha</Text>
          <View style={styles.action}>
            <FontAwesome 
              name='lock' 
              size={20}
            />
            {this.state.secureTextEntry ?
              <TextInput 
                placeholder="senha"
                secureTextEntry={true}
                style={styles.textInput}
                value={this.state.password}
                onChangeText={(text) => this.setState({
                  password:text
                })}
              />
              :
              <TextInput 
                placeholder="senha"
                style={styles.textInput}
                value={this.state.password}
                onChangeText={(text) => this.setState({
                  password:text
                })}
              />
            }
            <TouchableOpacity
              onPress={() => this.secureTextEntry() }
            >
              {this.state.secureTextEntry ?
                <Feather 
                  name='eye-off'
                  color='gray'
                  size={20}
                />
                :
                <Feather 
                  name='eye'
                  color='gray'
                  size={20}
                />
              }
            </TouchableOpacity>
          </View>
          <Text style={{color: '#6c63ff', marginTop: 15}}>Esqueceu sua senha ?</Text>
          <View style={styles.button}>
            <LinearGradient colors={['#6c63ff', '#3b5998']} style={styles.login}>
              <Text style={styles.textLogin}>Entrar</Text>
            </LinearGradient>  
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Register')}
              style={[styles.login,{
                borderColor: '#6c63ff',
                borderWidth: 1,
                marginTop: 15
              }]}
            >
              <Text style={styles.textLogin,{
                color: '#6c63ff',
                fontSize: 16.4
              }}>
                Cadastre-se
              </Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    )
  }
}