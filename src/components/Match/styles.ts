import { StyleSheet } from 'react-native';
import { THEME } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    width:356,
    height:120,
    backgroundColor:THEME.colors.SECONDARY,
    marginTop:16,
    borderRadius:8,
    flexDirection:'row'
  },
  matchInfo:{
    padding:16
  },
  title:{
    fontSize:THEME.fonts.LG,
    color:THEME.colors.TEXT_PRIMARY,
    fontWeight:'600'
  },
  subtitle:{
    fontSize:THEME.fonts.MD,
    fontWeight:'300',
    color:THEME.colors.TEXT_PRIMARY,
    marginTop:10,
  }
});