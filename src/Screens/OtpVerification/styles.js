import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
import { moderateScale, moderateScaleVertical, textScale } from "../../styles/responsiveSize";


const styles = StyleSheet.create({
 
    descStyle: {
        fontSize: textScale(18),
        fontFamily: fontFamily.regular,
        marginLeft: moderateScale(16),
        color: colors.grey,
        textAlign:'center'
    },
    bottomText: {
        fontSize: textScale(18),
        fontFamily: fontFamily.regular,
        marginLeft: moderateScale(16),
        color: colors.grey,
        textAlign:'center'
    },
    inputStyle: {
        marginRight: moderateScale(8),
        height: moderateScale(42),
        width:moderateScale(42),
        borderBottomWidth: 1,
        textAlign: 'center'
    }
    
})

export default styles