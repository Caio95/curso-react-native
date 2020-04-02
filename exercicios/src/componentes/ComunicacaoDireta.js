import React from 'react'
import { View, Text} from 'react-native'

const fonte = { style: { fontSize: 30 }}

function filhosComProps(props) {
    return React.Children.map(props.children,
        c=> React.cloneElement(c, {...props, ...c.props}))
}

export const Filho = props =>
    <View>
        <Text {...fonte}>Filho: {props.nome} {props.sobrenome}</Text>
    </View>

//propriedade do pai passando para os filhos
export const Pai = props =>
    <View>
        <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
        {/* {props.children} */}
        {filhosComProps(props)}
    </View>

export const Avo = props =>
    <View>
        <Text {...fonte}>Avô: {props.nome} {props.sobrenome}</Text>
        <Pai nome='Josivan' sobrenome={props.sobrenome}>
            <Filho nome='Caio'/>
            <Filho nome='Mateus'/>
            <Filho nome='Victor'/>
        </Pai>
        <Pai {...props} nome='Josivaldo'>
            <Filho nome='Arthur'/>
            <Filho nome='Victor'/>
        </Pai>
    </View>