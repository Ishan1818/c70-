
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Header} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler'



export default class writeStoryScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            author:'',
            storyText:''
        }

    }
render(){
    return(

        <View style={styles.container}>
<Header backroundColor={'pink'}
centerComponent={{text:'Story Hub', 
style:{color:'black', fontSize:35}}}

/>
<TextInput
          style={styles.title}
          placeholder="Story Title"
           onChangeText ={text => this.setState({title:text})}
          value={this.state.title}
          
          styles={styles.title}
          placeHolderTextColor='black'
          />


          <TextInput
          style={styles.Author}
          placeholder="Story Author"
           onChangeText ={text => this.setState({Author:text})}
          value={this.state.Author}
          
          styles={styles.Author}
          placeHolderTextColor='black'
          />


          <TextInput
          style={styles.storyText}
          placeholder="Story storyText"
           onChangeText ={text => this.setState({storyText:text})}
          value={this.state.storyText}
          
          styles={styles.StoryText}
          placeHolderTextColor='black'
          multiline={true}
          />
        <TouchableOpacity styles={styles.submitButton}>
            <Text style={styles.submitButtonText}>
                Submit
            </Text>
        </TouchableOpacity>

        </View>
     
    )
}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },

    title:{
        height:40,
        borderWidth:2,
        marginTop:40,
        margin:10,
        padding:6
    },
    Author:{
        height:40,
        borderWidth:2,
        marginTop:40,
        margin:10,
        padding:6
    },
    storyText:{
        height:100,
        borderWidth:2,
        marginTop:40,
        margin:10,
        padding:6
    },
    submitButton:{
       justifyContent:'center',
       alignSelf:'center'
    },
    submitButtonText:{
        justifyContent:'center',
        alignSelf:'center'
     }

  });

  
  





