import React, { useState, useEffect } from 'react'
import { StyleSheet, StatusBar, SafeAreaView, Platform } from 'react-native'

import CurrentPrice from './src/components/CurrentPrice'
import HistoryGraphic from './src/components/HistoryGraphic'
import QuotationsList from './src/components/QuotationList'

function addZero(number) {
  if (number <= 9) {
    return '0' + number
  }
  return number
}

function url(qtdDays) {
  // No dia de hoje nao tinha nada pra retornar entao mudei pra um dia especifico
  const date = new Date()
  const listLastDays = qtdDays
  const end_date = `${date.getFullYear()}-${addZero(
    date.getMonth() + 1
  )}-${addZero(date.getDate())}`
  date.setDate(date.getDate() - listLastDays)
  const start_date = `${date.getFullYear()}-${addZero(
    date.getMonth() + 1
  )}-${addZero(date.getDate())}`
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`
}

async function getListCoins(url) {
  let response = await fetch(url)
  let returnApi = await response.json()
  let selectListQuotations = returnApi.bpi

  const queryCoinsList = Object?.keys(selectListQuotations).map(key => {
    return {
      data: key.split('-').reverse().join('/'),
      valor: selectListQuotations[key]
    }
  })
  let data = queryCoinsList.reverse()
  return data
}

async function getPriceCoinsGraphic(url) {
  let responseG = await fetch(url)
  let returnApiG = await responseG.json()
  let selectListQuotationsG = returnApiG.bpi
  const queryCoinsListG = Object.keys(selectListQuotationsG).map(key => {
    return selectListQuotationsG[key]
  })
  let dataG = queryCoinsListG
  return dataG
}

export default function App() {
  const [coinsList, setCoinsList] = useState([])
  const [coinsGraphiList, setCoinsGraphiList] = useState([0])
  const [days, setDays] = useState(30)
  const [updateData, setUpdateData] = useState(true)
  const [price, setPrice] = useState()

  function updateDay(number) {
    setDays(number)
    setUpdateData(true)
  }

  function priceCotation() {
    setPrice(coinsGraphiList.pop())
  }

  useEffect(() => {
    getListCoins(url(days)).then(data => {
      setCoinsList(data)
    })

    getPriceCoinsGraphic(url(days)).then(dataG => {
      setCoinsGraphiList(dataG)
    })
    priceCotation()
    if (updateData) {
      setUpdateData(false)
    }
  }, [updateData])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1a237e" barStyle="ligth-content" />
      <CurrentPrice lastCotation={price} />
      <HistoryGraphic infoDataGraphic={coinsGraphiList} />
      <QuotationsList filterDay={updateDay} listTransactions={coinsList} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0
  }
})
