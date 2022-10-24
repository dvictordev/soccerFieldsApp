import { StyleSheet } from 'react-native';
import { THEME } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex:1
  },
  body:{
    paddingHorizontal:17,
    alignItems:'center'
  },
  button:{
    width:308,
    height:50,
    backgroundColor:THEME.colors.PRIMARY,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8
  }
});