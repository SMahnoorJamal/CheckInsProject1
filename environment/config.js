// import * as firebase from 'firebase';
import firebase from 'firebase/compat/app';
import {initializeApp} from 'firebase/database';
import { getDatabase } from 'firebase/database';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB6_mXLpGf5ZEs72wzz1abmj_yGEkfE7RM",
    authDomain: "taskpro1-1f3b9.firebaseapp.com",
    projectId: "taskpro1-1f3b9",
    storageBucket: "taskpro1-1f3b9.appspot.com",
    messagingSenderId: "332575366808",
    appId: "1:332575366808:web:6f45a86ede9ca12af57aed",
    measurementId: "G-2MF5PV110F"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export const db  = getDatabase(app);


  // const database = firebase.database();

  // const dataPath = '/users';

  // const data = {
  //   key1: 'value1',
  //   key2: 'value2',
  // };

  // database.ref(dataPath).set(data)
  // .then(() => {
  //   console.log('Data added successfully!');
  // })
  // .catch((error) => {
  //   console.error('Error adding data: ', error);
  // });