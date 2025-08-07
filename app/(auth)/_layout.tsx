import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';

export default function AuthNav(){
    return(
        <>
        <StatusBar style="dark" />
        <Stack>
            <Stack.Screen name="signin" />
            <Stack.Screen name='signup' />
        </Stack>
        </>
    )
}