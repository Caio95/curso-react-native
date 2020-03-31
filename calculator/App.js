import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Button from './src/componentes/Button';
import Display from './src/componentes/Display'

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
}
// "..." (tres pontos) gera um clone do objeto chamado

export default class App extends Component {
state= { ...initialState }

addDigit = n => {

    const clearDisplay = this.state.displayValue === '0'
    || this.state.clearDisplay   // validacao que limpa o campo ao digitar algum numero
    
    if (n === '.' && !clearDisplay && this.state.displayValue.includes('.')){ //validacao que nao deixa incluir mais de um ponto no display
      return
    }
    
    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({ displayValue, clearDisplay: false})

    if (n !== '.'){
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = newValue
      this.setState({ values})
    }
}

clearMemory = () =>{
    this.setState({ ...initialState })
}

setOperation = operation => {
    if(this.state.current === 0) {
      this.setState({operation, current: 1, clearDisplay:true})  //validacao que funciona para pegar a operacao, mudar a posicao do armazenamento e limpar o campo pra digitar o proximo numero
    } else {
      const equals = operation === '='
      const values = [...this.state.values]
      try{
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      }
      catch (e) {
        values[0] = this.state.values[0]
      }

      values[1] = 0
      this.setState({ displayValue:`${values[0]}`, //interpolar o valor 0 dentro de um valor string (sempre sera string)
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: true, //ao clicar no igual se receber true ele limpa o valor no momento que o usuario digitar um novo valor, com o !equals ele apenas acrescenta o valor no resultado sem limpar
        values,
    })
    }
}

  render() {
    return (
      <View style={styles.container}>
          <Display value={this.state.displayValue} />
          <View style={styles.Buttons}>
              <Button label='AC' triple onClick={this.clearMemory} />
              <Button label='/' operation onClick={this.setOperation}/>
              <Button label='7' onClick={this.addDigit}/>
              <Button label='8' onClick={this.addDigit}/>
              <Button label='9' onClick={this.addDigit}/>
              <Button label='*' operation onClick={this.setOperation}/>
              <Button label='4' onClick={this.addDigit}/>
              <Button label='5' onClick={this.addDigit}/>
              <Button label='6' onClick={this.addDigit}/>
              <Button label='-' operation onClick={this.setOperation}/>
              <Button label='1' onClick={this.addDigit}/>
              <Button label='2' onClick={this.addDigit}/>
              <Button label='3' onClick={this.addDigit}/>
              <Button label='+' operation onClick={this.setOperation}/>
              <Button label='0' double onClick={this.addDigit} />
              <Button label='.' onClick={this.addDigit}/>
              <Button label='=' operation onClick={this.setOperation}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
