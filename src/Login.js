import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../services/loginService';

const styles = StyleSheet.create({
    button: {
        width: 200, 
        margin: 10,
        backgroundColor: "#007f00"
    }
})

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {loginState} = useSelector(state => state.loginReducer);
    const dispatch = useDispatch();
    const loginDisptach = () => dispatch(login({username: username, password: password}))
    useEffect(() => {
        console.log("Value changed to = " + loginState);
        if(loginState){
            props.navigation.navigate('Movies')
        }
    }, [loginState])
    useEffect(() => {
        console.log("I can call this as many times as required");
    }, [username])

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TextInput style={{height: 50, margin: 10, width: '80%', borderColor: '#000', borderWidth: 1, borderRadius: 10, paddingLeft: 20, paddingRight: 20}} placeholder='Username' onChangeText={text => setUsername(text)} autoCapitalize='none' defaultValue={username}/>
            <TextInput style={{height: 50, margin: 10, width: '80%', borderColor: '#000', borderWidth: 1, borderRadius: 10, paddingLeft: 20, paddingRight: 20}} placeholder='Password' secureTextEntry={true} onChangeText={text => setPassword(text)} autoCapitalize='none' defaultValue={password}/>
            <Button title='Sing In' style={styles.button} onPress={()=>loginDisptach()} />
        </View>
    )
}

export default Login