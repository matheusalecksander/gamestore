import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
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
  }
})

export default styles