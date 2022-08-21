//import liraries
import React from 'react';
import { Image, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constatns/imagePath';
import strings from '../../constatns/lang';
import navigationStrings from '../../constatns/navigationStrings';
import colors from '../../styles/colors';
import styles from './styles';



const TermsCondition = ({ navigation }) => {
    return (
        <WrapperContainer containerStyle={{ alignItems: 'center' }}>
            <Image resizeMode='contain' style={styles.logoStyle} source={imagePath.icLogo} />
            <Text style={styles.headingStyle}>{strings.WELCOME_TO_CHATBES}</Text>
            <Text style={styles.descStyle}>{strings.READ_OUR} <Text style={{ color: colors.lightBlue }}>{strings.PRIVACY_POLICY}</Text> {strings.TAP_AGREE_AND_CONTINUE_TO_CEEPT_THE} <Text style={{ color: colors.lightBlue }}>{strings.TERMS_OF_SERVICE}
            </Text></Text>

            <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.PHONE_NUMBER)} activeOpacity={0.7}>
                <Text style={styles.agreeStyle}>{strings.AGREE_AND_CONTINUE}</Text>
            </TouchableOpacity>
        </WrapperContainer>


    );
};

export default TermsCondition;
