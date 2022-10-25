import { StyleSheet } from 'react-native';
import { THEME } from '../../theme/theme';

export const styles = StyleSheet.create({
    button: {
        width:150, 
        height:80,
        backgroundColor:THEME.colors.SECONDARY,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8
    },
    label:{
        color:THEME.colors.TEXT_PRIMARY,
        fontSize:THEME.fonts.LG,
        fontWeight:'400'
    },
});