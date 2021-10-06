import { StyleSheet } from 'react-native'

import themes from '../../global/theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: themes.colors.background
  },
  cartHeader: {
    width: '85%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  cartContent: {
    width: '100%',
    height: '60%'
  },
  finishContent: {
    width: '100%',
    height: '40%'
  },
  title: {
    fontFamily: themes.fonts.titleFont,
    fontSize: 18,
    color: themes.colors.secondary
  },
  alert: {
    fontFamily: themes.fonts.titleFont,
    fontSize: 18,
    color: themes.colors.primary,
    alignSelf: 'center',
    marginTop: '40%'
  },
  finishWrapper:{
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  textWrapper: {
    width: '90%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15
  },
  finishTitle: {
    fontFamily: themes.fonts.titleFont,
    fontSize: 18,
    color: themes.colors.primary,
    marginTop: 10
  },
  wrapperTitle: {
    fontFamily: themes.fonts.titleFont,
    fontSize: 18,
    color: themes.colors.secondary,
  }
})

export default styles