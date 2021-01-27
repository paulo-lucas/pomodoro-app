import { StyleSheet } from 'react-native';

import colors from '../../config/colorPallete.json';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: colors.primary
  }
});