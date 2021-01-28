import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../config/colorPallete.json';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.others[2]
  },
  barContainer: {
    width: width * 0.6,
    height: 40,
    flexDirection: 'row'
  },
  workBar: {
    height: 40,
    backgroundColor: colors.others[3],
    borderStyle: 'solid',
    borderColor: colors.secondary,
    borderRightWidth: 2,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  breakBar: {
    height: 40,
    backgroundColor: colors.others[1],
    borderStyle: 'solid',
    borderColor: colors.secondary,
    borderLeftWidth: 2,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },
  info: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  infoWork: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.others[3]
  },
  infoInterval: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.others[1]
  }
});