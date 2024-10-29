import {Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" 
            options={{
                title: "Login",
                headerShown: false
            }}/>
        <Stack.Screen name="usuario" 
            options={{
                title: "Usuario"
            }}/>

        <Stack.Screen name="historico" 
            options={{
                title: "Usuario"
            }}/>
        </Stack>
    )

}