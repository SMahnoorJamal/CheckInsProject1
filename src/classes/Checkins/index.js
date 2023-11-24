import { View, Text, Image, ImageBackground, FlatList, TouchableOpacity, ScrollView } from 'react-native';

import React from 'react';
import { Boxes } from '../../components/Boxes'
import Remainder from '../../popups/Remainder';

export class Checkins extends React.Component {

    constructor() {
        super();
        this.state = {
            data: null
        }
    }

    renderItem = () => {
        console.log('propss')
        return (<Boxes />)
    };
    render() {
        return (
            <ScrollView style={{ flex: 1, }}>

<View style ={{ alignItems: 'center', marginTop: 30,justifyContent: 'center', marginLeft: 15,
    borderRadius: 50, width: '90%', height: '5%', backgroundColor: 'white',
}}>
<Image source={require('../../images/download.jpg')}
style={{marginLeft: -240,width: '20%', height: 30, resizeMode: 'contain'}}></Image>
    {/* <View style={{borderRadius: 20, backgroundColor: 'red', width: 70, height: 80}}></View> */}
</View>
                <ImageBackground
                    source={require('../../images/image2.jpg')}
                    style={{ width: '90%', height: '50%', marginLeft: 34, marginTop: 30 }}
                    imageStyle={{ borderRadius: 28, }}
                >
   {/* <Remainder ModalVisible={true} /> */}

  
                    <View style={{ alignItems: 'center', marginTop: 30 }}>
                        <Text style={{ color: 'white', marginLeft: -17 }}>Hi! James Doe</Text>
                        <Text style={{ width: '70%', marginTop: 20, color: 'white' }}>Lorem ipsus dolor sit amen, something important to say here
                        </Text>
                           <Remainder/>
                    </View>
                </ImageBackground>


                <Text style={{ marginTop: -240, fontWeight: 'bold', marginLeft: 30, fontSize: 20 }}>Added CheckIns</Text>
                <View style={{ marginTop: 20, marginBottom: 100 }} >
                    <FlatList

                        data={[{ title: 'Title Text', key: 'item1' },
                        { title: 'Title Text', key: 'item1' },
                        { title: 'Title Text', key: 'item1' }]}
                        renderItem={this.renderItem}

                    />
                </View>


            </ScrollView>


        )
    }
}