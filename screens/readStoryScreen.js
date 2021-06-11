import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Header} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler'

export default class readStoryScreen extends React.Component{
  render(){
      return(
<View style={styles.container}>
    <Text>
        Read Story
    </Text>

</View>
      );
  }

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    }
)}


