import { StyleSheet } from 'react-native';
import { THEME } from '../../theme/theme';

export const styles = StyleSheet.create({
  input: {
    height: 57,
    width:'100%',
    marginVertical: 18,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: THEME.colors.PRIMARY,
  },
  label:{
    color: THEME.colors.PRIMARY,
    marginBottom: -10,
    marginLeft: 5,
  }
});