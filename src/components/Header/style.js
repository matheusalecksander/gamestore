import { StyleSheet } from 'react-native'
import themes from '../../global/theme'

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 20,
    width: '100%',
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
  input: {
    backgroundColor: '#fff',
    width: '50%',
    padding: 5,
    borderRadius: 10
  }
})

export default styles
