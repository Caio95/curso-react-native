import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Padrao from '../Estilo/Padrao'

//opções de criaçao de function
// export default function (props) {
//     return <Text style={styles.prop}>{props.texto}</Text>
// }

//e como o Arrow , onde não precisa dos parentes do paramento e
//nem do return pois ja esta implicito
//caso quera retornar mais de um atributo insira a '[elementos, elementos] ex:'
// export default props => [
//         <Text key={1}>Arrow 1: {props.texto}</Text>,
//         <Text key={2}>Arrow 1: {props.texto}</Text>]

export default props => 
    <Text style={Padrao.ex}>Arrow 1: {props.texto}</Text>

// const styles = StyleSheet.create({
//     text :{
//         color : '#DD401E',
//         fontSize: 20
//     }
// })