// import React, { useState } from "react";
// import { Alert, StyleSheet, Text, Image,
//   KeyboardAvoidingView,Pressable, View, TextInput, Keyboard } from "react-native";
// import Button from "../components/Button";
// import Modal from "react-native-modal";
import React, { useState } from "react";
import { Button, Text, View, TextInput } from "react-native";
import Modal from "react-native-modal";

function ModalTester() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal isVisible={isModalVisible}>
        <View style={{ width: '90%', height: '40%', marginLeft: 17,
        alignItems: 'center', justifyContent: 'center', backgroundColor: 'green' }}>
          <Text>Hello!</Text>

          <Button title="Hide modal" onPress={toggleModal} />
          <TextInput style={{width: '10%', padding: '10%', height: '10%', backgroundColor: 'white'}}></TextInput>
        </View>
      </Modal>
    </View>
  );
}

export default ModalTester;
//  import {ref, set} from 'firebase/database';
//  import {db} from '../../environment/config';

//       export default function Remainder () {

//         const [title, setTitle] = useState('')

      
// function writeUserData() {
//   // const db = getDatabase();
//   set(ref(db, 'users/' + title), {
  
//     title: title,
//   }).then(() => {

//     alert('data updated');

//   }). catch((error)  => {

//     alert(error);
//   });
// }
        
//             const [modalVisible, setModalVisible] = useState(false);
//             return (
//               <View style={styles.centeredView}>
//                     <Modal isVisible={true}>
//         <View style={{ flex: 1 }}>
//           <Text>I am the modal content!</Text>
//         </View>
//       </Modal>
                {/* <Modal
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
                avoidKeyboard     
                      {/* <Keyboard
    behavior="position"
    enabled
  > */}
                      {/* <TextInput style={{borderRadius: 4, borderColor: 'gray', borderWidth: 1,  
                     width: '220%', }}
                     placeholder="Enter title"
                     onChange={(title) => {setTitle(title)}}>
                        {/* <Text> Enter title</Text> */}
                      {/* </TextInput>
                     
                      <Text style={styles.modalText3}>Upload Image</Text>

<Image source={require('../../src/images/download.png')}
style={{height: 
'35%', resizeMode: 'contain'}}></Image> */}
 {/* </Keyboard> */}
{/* <View style={{flexDirection: 'row', width: 90,marginLeft:150, 
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
                    </View> */}
                  {/* </View> 
                
                // </Modal>  */}
                {/* // <Pressable
                //   style={[styles.button, styles.buttonOpen]}
                //   onPress={() => setModalVisible(true)}>
                //   <Text style={styles.textStyle}>Add Check In</Text>
                // </Pressable> */}
//                </View>   
//     )
//   }

//   const styles = StyleSheet.create({
//     centeredView: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       //  height: 89
//     },
//     modalView: {
//         height: '55%',
//         width: '1%',
//       margin: 20,
//       backgroundColor: 'white',
//       borderRadius: 20,
//       padding: 145,
//       alignItems: 'center',
//       shadowColor: '#000',
//       shadowOffset: {
//         width: 0,
//         height: 2,
//       },
//       shadowOpacity: 0.25,
//       shadowRadius: 4,
//       elevation: 5,
//     },
//     button: {
//       borderRadius: 20,
//       padding: 10,
//       elevation: 2,
//       marginLeft: -30,
//       marginTop: 30
//     },
//     buttonOpen: {
//       backgroundColor: '#F194FF',
//     },
//     buttonClose: {
//       backgroundColor: '#2196F3',
//     },
//     textStyle: {
//       color: 'white',
//       fontWeight: 'bold',
//       textAlign: 'center',
//     },
//     modalText: {
//     marginTop: -92,
//       marginBottom: 15,
//       textAlign: 'center',
//     },
//     modalText2: {
//     marginTop: -192,
//       marginBottom: 15,
//       textAlign: 'center',
// marginLeft: -190,
//     },
//         modalText3: {
//           marginLeft: -130,
//       marginTop:-20,
//       marginBottom: 15,
//       textAlign: 'center',
//     },
// });
