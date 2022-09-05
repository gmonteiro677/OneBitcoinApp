import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  mainContent: {
    width: '90%',
    height: 'auto',
    marginLeft: '3%',
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  contextLeft: {
    width: '36%',
    alignItems: 'flex-start'
  },
  contextRigth: {
    width: '60%',
    alignItems: 'flex-end'
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18
  },
  deyCotation: {
    fontSize: 16,
    paddingLeft: 5,
    fontWeight: 'bold'
  },
  logBitcoin: {
    width: 40,
    height: 40,
    marginLeft: 2
  },
  boxLogo: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default styles
