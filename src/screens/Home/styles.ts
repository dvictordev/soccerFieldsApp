import { StyleSheet } from 'react-native';
import { width } from '../../utils/window';

export const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  body:{
    marginTop:16,
    justifyContent:'center',
    paddingHorizontal:26,
    width:width,
  },
  buttons:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:40,
  },
  matchsHeader:{
    flexDirection:'row',
    justifyContent:'space-between'
}
});