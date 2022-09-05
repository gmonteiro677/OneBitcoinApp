import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import Styles from './styles'

export default function QuotationItems(props) {
  return (
    <View style={Styles.mainContent}>
      <View style={Styles.contextLeft}>
        <View style={styles.boxLogo}>
          <Image
            style={styles.logBitcoin}
            source={require('../../../img/logo.png')}
          />
          <Text style={styles.deyCotation}>{props.data}</Text>
        </View>
      </View>
      <View style={Styles.contextRigth}>
        <Text style={styles.price}>{props.valor}</Text>
      </View>
    </View>
  )
}
