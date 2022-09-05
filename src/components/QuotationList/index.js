import React, { Fragment } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native'
import QuotationItems from './QuotationItems'
import styles from './styles'

export default function QuotationsList(props) {
  const daysQurey = props.filterDay

  return (
    <Fragment>
      <View style={styles.filters}>
        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => daysQurey(7)}
        >
          <Text style={styles.textButtonQuery}>7D</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => daysQurey(15)}
        >
          <Text style={styles.textButtonQuery}>15D</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => daysQurey(30)}
        >
          <Text style={styles.textButtonQuery}>1M</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => daysQurey(90)}
        >
          <Text style={styles.textButtonQuery}>3M</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonQuery}
          onPress={() => daysQurey(180)}
        >
          <Text style={styles.textButtonQuery}>6M</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <FlatList
          data={props.listTransactions}
          renderItem={({ item }) => {
            return <QuotationItems valor={item.valor} data={item.data} />
          }}
        />
      </ScrollView>
    </Fragment>
  )
}