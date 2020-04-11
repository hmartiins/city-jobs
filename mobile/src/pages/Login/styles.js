import { StyleSheet, StatusBar } from 'react-native';

export default StyleSheet.create({
   container: {
      flex: 1,
      paddingHorizontal: 22,
      //paddingTop: StatusBar.currentHeight + 20,
      backgroundColor: '#f0f0f5',
   },
   top: {
      alignContent: "center",
      alignItems: "center",
   },
   content: {
      alignContent: "center",
      alignItems: "center",
   },
   inputs: {
      backgroundColor: 'white',
      height: 40, 
      width: 350, 
      borderColor: '#a3a3a3',
      borderWidth: 2,
      borderRadius: 30,
      
   },
   inputsTwo: {
      backgroundColor: 'white',
      height: 40, 
      width: 350, 
      borderColor: '#a3a3a3',
      borderWidth: 2,
      borderRadius: 30,
      marginTop: 15,
   }
});