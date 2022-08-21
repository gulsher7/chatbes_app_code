import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
import { moderateScale, moderateScaleVertical, textScale } from "../../styles/responsiveSize";


const styles = StyleSheet.create({

    descStyle: {
        fontSize: textScale(16),
        fontFamily: fontFamily.regular,
        textAlign: 'center',
        margin: moderateScaleVertical(16),

    },
    dialCodeStyle: {
        fontSize: textScale(16),
        fontFamily: fontFamily.regular,
    },
    phoneInputStyle: {
        flexDirection: 'row', 
        alignItems: 'center', 
        borderBottomWidth: 0.7,
        paddingHorizontal: moderateScale(8)
    },
    inputStyle: {
        padding:moderateScale(12),
        borderBottomColor: colors.grey,
        fontFamily:fontFamily.regular,
        fontSize: textScale(16)
    }
    
})

export default styles