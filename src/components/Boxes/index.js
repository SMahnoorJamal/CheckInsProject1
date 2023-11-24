import {View, Text, Image, ImageBackground, ScrollView} from 'react-native';

import React from 'react';

export class Boxes extends React.Component {

    render() {
        return (
            <ScrollView style={{flex: 1, height: 300}}>
                <View style ={{justifyContent:'center', marginLeft: 20, backgroundColor: 'white', width: '90%',
                height: 260, marginTop: 10, borderRadius: 30,
            marginBottom: 100}}
                >

                <View style={{alignItems: 'center'}}>
                <ImageBackground
                style={{width: '92%', height: '81%',  resizeMode: 'contain'}}
               imageStyle={{borderRadius: 19,marginLeft: 11,
                marginTop: 15, justifyContent: 'center',
               }} 
                source={require('../../images/image1.jpg')}>
                    
                    <View style ={{backgroundColor: 'pink',
                    marginTop: 22, borderRadius: 21, marginLeft: '67%',
                    height:26, width: 80}}>
                    <Text style={{marginLeft: 5, marginTop: 3}}>Checked In</Text></View>
                </ImageBackground>
</View>
                
                <Text style={{fontWeight: 'bold',
                marginTop: -50, fontSize: 18, marginLeft: '6%'}}  >CheckIn Name</Text>
                <Text style={{
                marginTop: 9, fontSize: 14, marginLeft: '6%'}} >12, Nov 2022</Text>
 <Text style={{
                marginTop: 9, fontSize: 14, marginLeft: '6%'}} >Owner: John Doe</Text>


                </View>
                
            </ScrollView>
        )
    }
}