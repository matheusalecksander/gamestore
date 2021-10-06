import { StyleSheet } from 'react-native'
import themes from '../../global/theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.background
  },
  closedOptionsContainer: {
    paddingVertical: 15,
    width: '100%',
    height: 60,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  openedOptionsContainer: {
    paddingVertical: 15,
    width: '100%',
    height: 90,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  wrapperButtons: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  orderBy: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  logoPurple: {
    fontFamily: themes.fonts.titleFont,
    fontSize: 18,
    color: themes.colors.primary
  },
  input: {
    backgroundColor: '#fff',
    width: '70%',
    borderBottomWidth: 2,
    borderBottomColor: themes.colors.secondary,
    marginLeft: 10
  },
  wrapperButton: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  wrapperInput: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  optionsWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  sortOption: {
    padding: 4,
    backgroundColor: themes.colors.secondary,
    borderRadius: 10,
  },
  sortOptionSelected: {
    padding: 4,
    backgroundColor: themes.colors.primary,
    borderRadius: 10,
  },
  optionText: {
    color: themes.colors.background,
    fontFamily: themes.fonts.titleFont,
  }
})

export default styles
