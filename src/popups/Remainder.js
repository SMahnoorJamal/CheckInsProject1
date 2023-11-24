import React, { useState } from "react";
import { Alert, StyleSheet, Text, Image,
  KeyboardAvoidingView,Pressable, View, Modal, TextInput } from "react-native";
// import Button from "../components/Button";
// import Modal from "react-native-modal";
 import {ref, set} from 'firebase/database';
 import {db} from '../../environment/config';

      export default function Remainder () {

        const [title, setTitle] = useState('')

      
function writeUserData() {
  // const db = getDatabase();
  set(ref(db, 'users/' + title), {
  
    title: title,
  }).then(() => {

    alert('data updated');

  }). catch((error)  => {

    alert(error);
  });
}
        
            const [modalVisible, setModalVisible] = useState(false);
            return (
              <View style={styles.centeredView}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                  }}>

                
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>


                      <Text style={styles.modalText}>Add Check In</Text>
                      <Text style={styles.modalText2}>Title</Text>
                     
                     
                      <TextInput style={{borderRadius: 4, borderColor: 'gray', borderWidth: 1,  
                     width: '100%', }}
                     placeholder="Enter title"
                     onChange={(title) => {setTitle(title)}}>
                        {/* <Text> Enter title</Text> */}
                      </TextInput>
                      <Text style={styles.modalText3}>Upload Image</Text>

<Image source={require('../../src/images/download.png')}
style={{height: 
'35%', resizeMode: 'contain'}}></Image>
                      {/* <Text>Click or drag file to this area to upload
Support for a single or bulk upload. Strictly prohibit from uploading company data 
or other band files</Text> */}

<View style={{flexDirection: 'row', width: 90,marginLeft:150, 
justifyContent: 'space-between'}}>

<Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Cancel</Text>
                      </Pressable>

                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => writeUserData()}>
                        <Text style={styles.textStyle}>Add</Text>
                      </Pressable>
</View>
                    </View>
                  </View>

                </Modal>
                <Pressable
                  style={[styles.button, styles.buttonOpen]}
                  onPress={() => setModalVisible(true)}>
                  <Text style={styles.textStyle}>Add Check In</Text>
                </Pressable>
              </View>   
    )
  }

  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
        height: '60%',
        width: '81%',
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      marginLeft: -30,
      marginTop: 30
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    modalText2: {
      marginBottom: 15,
      textAlign: 'center',
marginLeft: -190,
    },
        modalText3: {
          marginLeft: -130,
      marginTop:30,
      marginBottom: 15,
      textAlign: 'center',
    },
});
