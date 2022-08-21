//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import HeaderComponent from '../../Components/HeaderComponent';
import HorizontalLine from '../../Components/HorizontalLine';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constatns/imagePath';
import strings from '../../constatns/lang';
import navigationStrings from '../../constatns/navigationStrings';
import { moderateScaleVertical } from '../../styles/responsiveSize';
import styles from './styles';
import OtpInputs from 'react-native-otp-inputs';
import actions from '../../reudx/actions';

// create a component
const OtpVerification = ({ navigation, route }) => {

    const { data } = route?.params

    console.log("route parms", data)

    const leftCustomView = () => {
        return (
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Image source={imagePath.icBack} />
            </TouchableOpacity>
        )
    }

    const handleChange = async (value) => {
        if (value.length >= 6) {
            try {
                let res = await actions.otpVerify({
                    otp: value,
                    user_id: data._id
                })
                console.log("api res",res)
            } catch (error) {
                console.log("error riased in verify api",error)
                alert(error?.message)
            }
        }
    }

    return (
        <WrapperContainer
            containerStyle={{ paddingHorizontal: 0 }}
        >
            <HeaderComponent
                centerText={`${data?.selectedCountry?.dialCode} ${data?.phoneNumber}`}
                containerStyle={{ paddingHorizontal: 8 }}
                leftCustomView={leftCustomView}
                isLeftView={true}
                isRight={false}
            />
            <HorizontalLine />

            <Text style={{ ...styles.descStyle, marginVertical: moderateScaleVertical(24) }}>{strings.WE_HAVE_SENT_YOU_AN_SMS}</Text>
            <Text style={styles.descStyle}>{strings.TO_COMPLETE_YOUR_PHONE_NUMBER}</Text>

            <View style={{ marginHorizontal: moderateScaleVertical(16) }}>
                <OtpInputs
                    placeholder='*'
                    handleChange={handleChange}
                    numberOfInputs={6}
                    style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: moderateScaleVertical(42) }}
                    inputStyles={styles.inputStyle}
                />

                <View style={{ marginTop: moderateScaleVertical(52) }}>
                    <Text style={styles.bottomText}>{strings.RESEND_CODE}</Text>
                </View>
            </View>
        </WrapperContainer>
    );
};

export default OtpVerification;
