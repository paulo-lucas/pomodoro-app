import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../config/colorPallete.json';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  progress: {
   position: 'absolute'
  },
  infoContainer: {
    backgroundColor: colors.others[0],
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').width * 0.6,
    position: 'absolute',
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center'
  },
  message: {
    fontSize: 24,
    color: colors.secondary
  },
  counter: {
    fontSize: 24,
    color: colors.secondary
  },
  series: {
    marginTop: 20,
    fontSize: 18,
    color: colors.secondary
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  pauseButton: {
    width: 40,
    height: 40,
  }
});