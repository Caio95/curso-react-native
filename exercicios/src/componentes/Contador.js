import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

export default class Contador extends React.Component {

    state = {
        numero: this.props.numeroInicial
    }

    // constructor(props){
    //     super(props)

    //     this.maisUm = this.maisUm.bind(this) //esta amarrando o this ao Contexto
    // }

    maisUm = () => {
        this.setState({ numero: this.state.numero + 1 })
    }

    limpar = () => {
        this.setState({ numero: this.props.numeroInicial })
    }

    render() {
        return (
            <View>
                <Text style={{fontSize: 40}}>{this.state.numero}</Text>
                <TouchableHighlight
                    onPress={this.maisUm}
                    onLongPress={this.limpar}>
                    <Text>Imcrementar/Apagar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}