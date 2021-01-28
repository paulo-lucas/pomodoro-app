import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../config/colorPallete.json';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary
  },
  presetsContainer: {

  },
  presetsRow: {
    flexDirection: 'row'
  },
  presetsLeftCell: {
    marginRight: 40
  },
  picker: {
    height: 50,
    width: 100,
    color: colors.others[2]
  },
  presetsTitle: {
    marginTop: 60,
    color: colors.others[2],
    fontSize: 20,
    fontWeight: 'bold'
  },
  presetsText: {
    color: colors.others[2],
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 40
  },
  saveButton: {
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    borderRadius: 1000
  },
  saveText: {
    fontWeight: 'bold',
    color: '#fff'
  },
  discardButton: {
    aspectRatio: 1,
    backgroundColor: colors.others[3],
    borderRadius: 1000,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  discardImage: {
    height: 20,
    aspectRatio:1.5
  }
});