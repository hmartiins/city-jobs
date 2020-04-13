import { StyleSheet, Dimensions } from 'react-native';

//const {height} = Dimensions.get('screen');
//const heightLogo = height * 0.7 * 0.4;

export default StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#043563'
   },
   header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
   },
   footer:{
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
   },
   logo: {
      width: 350,
      height: 350
   },
   title: {
      color: '#6c63ff',
      fontWeight: 'bold',
      fontSize: 30
   },
   text: {
      color: 'grey',
      marginTop: 5
   },
   button: {
      alignItems: "flex-end",
      marginTop: 30
   },
   login: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
   },
   textLogin: {
      color: 'white',
      fontWeight: 'bold',
   }

});