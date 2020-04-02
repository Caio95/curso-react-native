import React from 'react'
import { Button, Alert, ToastAndroid, Platform } from 'react-native'

export default props => {
    const notificar = msg => {
        if(Platform.OS === 'android'){
            ToastAndroid.show(msg, ToastAndroid.LONG) //para Android
        } else{
            Alert.alert('Informação', msg) //para IOS
        }
    }

    return (
        <Button title='Plataforma?' onPress={() => notificar('Parabéns')}/>
    )
}