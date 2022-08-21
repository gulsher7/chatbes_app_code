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
    },
    headerStyle: {
        flexDirection:'row',
        alignItems:'center',
        margin:moderateScale(16)
    },
   
    newGroupText: {
        fontSize: textScale(22),
        fontFamily:fontFamily.regular,
        color: colors.lightBlue,
        marginLeft:moderateScale(16)
    },
    userName: {
        fontSize: textScale(16),
        fontFamily:fontFamily.bold,
        marginLeft:moderateScale(16),
        textTransform:'capitalize'
    }
    
})

export default styles