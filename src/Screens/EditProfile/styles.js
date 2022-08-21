import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
import { moderateScale, moderateScaleVertical, textScale } from "../../styles/responsiveSize";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    descStyle: {
        fontSize: textScale(12),
        fontFamily: fontFamily.blackFont,
        flex: 1,
        marginLeft: moderateScale(16),
        color: colors.grey
    },
    
})

export default styles