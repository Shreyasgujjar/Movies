import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Details = (props) => {

    const item = props?.route?.params?.details
    console.log(item)

    return (
        <View style={{flex: 1, marginTop: 20, paddingHorizontal: 20}}>
            <Text style={{fontSize: 22, textAlign: 'center'}}>{item.title}</Text>
            <Image source={{uri: 'https://image.tmdb.org/t/p/w185' + item.poster_path}} style={{width: 250, height: 300, borderRadius: 10, alignSelf: 'center', marginTop: 20}} resizeMode="cover"/>
            <Text style={{fontSize: 18, textAlign: 'center', marginTop: 20}}>{`Release Date - ${item.release_date}`}</Text>
            <Text style={{fontSize: 16, textAlign: 'justify', marginTop: 20}}>{item.overview}</Text>
        </View>
    )
}

export default Details;