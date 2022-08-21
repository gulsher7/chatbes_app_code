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
    listEmptyStyle: {
        flex:1, 
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:moderateScale(16),

    },
    commStyle: {
        fontSize: textScale(22),
        fontFamily:fontFamily.regular,
    },
    headingSyle: {
        fontSize: textScale(26),
        fontFamily:fontFamily.bold,
    }
    
})

export default styles