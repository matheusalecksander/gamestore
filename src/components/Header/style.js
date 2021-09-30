import { StyleSheet } from 'react-native'
import themes from '../../global/theme'

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: themes.colors.primary,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'flex-start'
  },
  logoPurple: {
    fontFamily: themes.fonts.logoFont,
    fontSize: 24,
    color: themes.colors.primary
  },
  logoGreen: {
    fontFamily: themes.fonts.logoFont,
    fontSize: 24,
    color: themes.colors.secondary
  },
  teste: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff'
  }
})

export default styles
