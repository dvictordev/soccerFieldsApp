import { StyleSheet } from 'react-native';
import { THEME } from '../../theme/theme';

export const styles = StyleSheet.create({
  header:{
    color:THEME.colors.SECONDARY,
    alignSelf:'center',
    marginTop:14,
    fontWeight:'700',
    fontSize:20
  },
  body:{
    width:700,
    borderRadius:8,
    borderWidth:1,
    borderColor:THEME.colors.PRIMARY
  },
  
});