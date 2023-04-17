import {Dimensions, StyleSheet} from 'react-native';
import {colors, dimensions, text} from '../../../../constants';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    marginVertical: dimensions.offset.normal,
    justifyContent: 'center',
  },
  listItemContainer: {
    width: windowWidth,
  },
  listHeader: {
    fontSize: text.size.big,
    fontWeight: text.weight.bold,
    marginBottom: dimensions.offset.normal,
  },
  separator: {
    borderBottomColor: colors.black,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: dimensions.offset.small,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  refText: {
    fontSize: text.size.large,
  },
  refCodeWrapper: {
    backgroundColor: colors.white,
    padding: dimensions.offset.small,
    borderRadius: dimensions.borderRadius.large,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    shadowColor: colors.black,
  },
  refCode: {
    fontSize: text.size.large,
  },
  invitedUsers: {
    fontSize: text.size.large,
    textAlign: 'center',
  },
  bottomOffset: {
    marginBottom: dimensions.offset.normal,
  },
});
