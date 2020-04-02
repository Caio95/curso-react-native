import React from 'react'
import { View, StyleSheet } from 'react-native'
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/Multi'

export default class App extends React.Component {
    render() {
      return (
        <View style={styles.container}>
            <Simples texto='Caio Henrique de Sousa'/>
            <ParImpar numero={9}/>
            <Inverter texto='React Nativo'/>
            <MegaSena numeros={8}/>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : 'center',
    alignItems: 'center'
  },
  texto: {
    fontSize: 30,
  }
})