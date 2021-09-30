import { StyleSheet } from 'react-native'
import themes from '../../global/theme'

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'flex-start'
  },
  logoPurple: {
    fontFamily: themes.fonts.titleFont,
    fontSize: 24,
    color: themes.colors.primary
  },
  logoGreen: {
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
