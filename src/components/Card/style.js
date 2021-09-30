import { StyleSheet } from 'react-native'
import themes from '../../global/theme'

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    width: '100%',
    height: 175,
    padding: 10,
    alignItems: 'center'
  },
  image: {
    width: 125,
    height: 125
  },
  title: {
    color: '#fff',
    lineHeight: 35,
    fontFamily: themes.fonts.titleFont,
    fontSize: 28,
    marginLeft: 10
  },
  text: {
    color: '#fff',
    fontFamily: themes.fonts.textFont,
    marginLeft: 10
  }
})

export default styles
