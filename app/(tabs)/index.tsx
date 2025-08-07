import { Text, View } from 'react-native';

export default function MessagesScreen() {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <Text className="text-xl font-bold mb-2.5">This is the Messages screen.</Text>
        <Text>Your conversations will be displayed here.</Text>
      </View>
    );
  }