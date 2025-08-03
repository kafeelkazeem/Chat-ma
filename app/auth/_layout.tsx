import { Stack } from "expo-router";

export default function AuthNav(){
    return(
        <Stack>
            <Stack.Screen name="signin" />
            <Stack.Screen name='signup' />
        </Stack>
    )
}