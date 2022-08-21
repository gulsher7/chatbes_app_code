//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,SafeAreaView, StatusBar } from 'react-native';
import colors from '../styles/colors';

// create a component
const WrapperContainer = ({
    statusBarColor = colors.white,
    barStyle= 'dark-content',
    containerStyle ={},
    children
}) => {
    return (
        <View style={{...styles.container, ...containerStyle}}>
            <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
            <SafeAreaView style={{flex:1}}>
                {children}
            </SafeAreaView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal:16
    },
});

//make this component available to the app
export default WrapperContainer;
