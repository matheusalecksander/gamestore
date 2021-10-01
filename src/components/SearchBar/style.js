import { StyleSheet } from 'react-native'
import themes from '../../global/theme'

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  orderBy: {
    width: '30%',
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
    width: '50%',
    padding: 5,
    borderRadius: 10,
    borderBottomWidth: 2,
    borderBottomColor: themes.colors.secondary
  }
})

export default styles
