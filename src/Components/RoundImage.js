//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import { moderateScale, textScale } from '../styles/responsiveSize';

// create a component
const RoundImage = ({
    image = '',
    size = 80,
    onPress = () => { },
    isStatic = false,
    imageStyle
}) => {
    let compImg = isStatic ?  image : {uri: image}
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            style={{
                height: moderateScale(size),
                width: moderateScale(size),
                borderRadius: moderateScale(size / 2),
                backgroundColor: colors.white,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: colors.grey,
                ...imageStyle
            }}>
            {!!image ? <Image style={{
                height: moderateScale(size),
                width: moderateScale(size),
                borderRadius: moderateScale(size / 2),

            }} source={compImg} /> : <Text style={styles.textStyle}>add photo</Text>}
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    textStyle: {
        fontSize: textScale(12),
        fontFamily: fontFamily.blackFont,
        color: colors.lightBlue
    },
});

//make this component available to the app
export default RoundImage;
