import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableNativeFeedback
} from 'react-native';
export default class ReactNativeHacks extends Component {
  constructor(props){
    super(props);
    this.state = {
      isShow: true
    }
  }
  buttonClick() {
    this.setState(state => ({ isShow: !state.isShow }));
  }
  render() {
    return (
    <View style={styles.container}>
    
         {
             <Text isShow={this.state.isShow}> Hello World<Text />

         
         }


        {
             <Text style={styles.welcome} isShow={this.state.isShow}> Hello World<Text /> 
         
         }




     <TouchableNativeFeedback>
      <View style={styles.button}>
       <Text style={styles.buttonText} //call function `buttonClick`
             onPress={() => { this.buttonClick()}}>Click here.</Text>
      </View>
     </TouchableNativeFeedback>
     </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
 button: {
   backgroundColor: '#ff8000',
   borderRadius: 4,
   padding:10
 },
  buttonText : {
    color : '#fff',
    textAlign:'center',
    fontWeight: 'bold'
  },
  hideClass: {
    height: 0,
    width: 0
  }
});
AppRegistry.registerComponent('ReactNativeHacks', () => ReactNativeHacks);