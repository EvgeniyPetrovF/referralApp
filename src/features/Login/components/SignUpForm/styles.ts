import {StyleSheet} from 'react-native';
import {dimensions} from '../../../../constants';

export const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: dimensions.offset.huge,
    width: '100%',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: dimensions.offset.normal,
  },
  bottomOffset: {
    marginBottom: dimensions.offset.normal,
  },
  hugeBottomOffset: {
    marginBottom: dimensions.offset.huge,
  },
});
