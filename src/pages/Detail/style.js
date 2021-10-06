import { StyleSheet } from 'react-native'
import themes from '../../global/theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.background,
  },
  image:{
    width: 200,
    height: 200,
  },
  imageContainer: {
    width: '100%',
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  content: {
    width: '100%',
    marginTop: 15,

  },
  title:{
    fontFamily: themes.fonts.titleFont,
    fontSize: 32,
    color: "#172022",
    textAlign: 'center'
  },
  text: {
    fontFamily: themes.fonts.textFont,
    fontSize: 18,
    color: "#172022",
    textAlign: 'center'
  },
  button: {
    width: '80%',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themes.colors.primary,
    borderRadius: 50,
    marginTop: 50,
    marginLeft: '10%'

  },
  buttonText: {
    fontFamily: themes.fonts.titleFont,
    fontSize: 24,
    color: themes.colors.background
  },
  quantWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonQuant: {
    marginLeft: 10,
    marginRight: 10
  },

})

export default styles