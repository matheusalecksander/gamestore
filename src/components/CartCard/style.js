import { StyleSheet } from 'react-native'
import themes from '../../global/theme'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  itemContainer:{
    flexDirection: 'row',
    width: '75%',    
  },
  imageContainer: {
    width: '35%',
    height: 'auto',
  },
  image: {
    width: '100%',
    height: 75,
    resizeMode: 'contain',
  },
  description: {
    width: '65%',
    height: 'auto',
    justifyContent: 'center'
  },
  title: {
    color: '#172022',
    fontFamily: themes.fonts.titleFont,
    fontSize: 16,
  },
  text: {
    color: '#172022',
    fontSize: 14,
    fontFamily: themes.fonts.textFont,
  },
  quantityContainer: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default styles
