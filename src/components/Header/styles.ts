import { StyleSheet } from 'react-native';
import { width } from '../../utils/window';

export const styles = StyleSheet.create({
  container: {
    width:width,
    height:300,
    marginTop:-60
  },
  headerBack:{
    width:width,
    height:300,
  },
  headItems:{
    height:123,
    width:width - 43,
    marginTop:112,
    alignSelf:"center",
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  user:{
    width:65,
    height:65,
    borderRadius:999,
    borderWidth:1,
    borderColor:'black'
  },
  logo:{
    marginLeft:-33
  }
});
