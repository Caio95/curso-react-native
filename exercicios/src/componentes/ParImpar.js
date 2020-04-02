import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../Estilo/Padrao'

//renderização condicional pode ser das seguintes formas
function parOuImpar(num) {
    // if(num % 2==0){
    //     return <Text style={Padrao.ex}>Par</Text>
    // } else {
    //     return <Text style={Padrao.ex}>Ímpar</Text>
    // }

    //ou dessa forma
    const v = num % 2 == 0 ? 'Par' : 'Impar'
    return <Text style={Padrao.ex}>{v}</Text>
}

export default props =>
    <View>
        {/* chamando a função descrita a cima e passando o parametro */}
        {parOuImpar(props.numero)}
        {/* Ou por essa estrategia logo abaixo */}
        {/* {
            props.numero % 2 == 0
            ? <Text style={Padrao.ex}>Par</Text>
            : <Text style={Padrao.ex}>Ímpar</Text>
        } */}
    </View>