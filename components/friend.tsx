import { View, Text, TouchableOpacity } from "react-native";

interface friend{
    onPress: () => void
}

export default function Friend({onPress}: friend ){
    return(
        <View className='w-full flex flex-row items-start gap-3 mb-4 p-1'>
        {/* Avatar */}
        <View className='w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center'>
          <Text className='text-white font-bold text-2xl'>JD</Text>
        </View>
        <TouchableOpacity className="w-full flex-1" onPress={onPress}>
          <View className='flex flex-row w-full justify-between items-center'>
            <Text className="text-2xl font-semibold text-[#000E08]">John Doe</Text>
          </View>
          <Text className='text-lg text-[#797C7B]'>Good morning</Text>
        </TouchableOpacity>
      </View>
    );   
}