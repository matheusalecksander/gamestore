import { StyleSheet } from 'react-native'
import themes from '../../global/theme'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 'auto',
    padding: 10,
    alignItems: 'center'
  },
  imageContainer: {
    width: '36%',
    height: 'auto',
  },
  image: {
    width: 125,
    height: 125,
    resizeMode: 'cover',
  },
  description: {
    width: '65%',
    height: 'auto',
  },
  title: {
    color: '#172022',
    fontFamily: themes.fonts.titleFont,
    fontSize: 24,
    marginLeft: 10,
    lineHeight: 28

  },
  text: {
    color: '#172022',
    fontFamily: themes.fonts.textFont,
    marginLeft: 10
  }
})

export default styles
