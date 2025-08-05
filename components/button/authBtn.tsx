import { green } from "@/constants/mycolors";
import { Text, TouchableOpacity, View } from "react-native";

interface btnProps{
    title: String,
    onPress: ()=> void
}

export default function AuthBtn({title, onPress}: btnProps){
    return(
        <View className="w-full">
            <TouchableOpacity className="w-full mx-auto py-4 rounded-3xl mt-1 bg-[#24786D]" onPress={onPress}><Text className="text-white text-lg text-center font-semibold">{title}</Text></TouchableOpacity>
        </View>
    )
}