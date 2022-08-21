//import liraries
import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import { moderateScale, textScale } from '../styles/responsiveSize';

// create a component
const TextInputComp = ({
    placeholder="",
    inputStyle={},
    onChangeText = () => {},
    ...props
}) => {
    return (
        <Fragment>
            <TextInput
                placeholder={placeholder}
                style={{...styles.inputStyle,...inputStyle}}
                onChangeText={onChangeText}
                {...props}
            />
        </Fragment>
    );
};

// define your styles
const styles = StyleSheet.create({
       inputStyle: {
        padding:moderateScale(12),
        borderBottomColor: colors.grey,
        fontFamily:fontFamily.regular,
        fontSize: textScale(16),
        height:moderateScale(42)
       }
});

//make this component available to the app
export default TextInputComp;
