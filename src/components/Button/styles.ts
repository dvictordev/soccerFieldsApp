import { StyleSheet } from 'react-native';
import { THEME } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 50,
    borderWidth: 1,
    borderColor: THEME.colors.PRIMARY,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  buttonTitle:{
    color:THEME.colors.TEXT_PRIMARY,
    fontWeight:'bold',
    fontSize:THEME.fonts.LG
  }
});