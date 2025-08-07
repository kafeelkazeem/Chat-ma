import { Text, View } from 'react-native';

export default function FriendsScreen() {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <Text className="text-xl font-bold mb-2.5">This is the Friends screen.</Text>
        <Text>Your list of friends will be here.</Text>
      </View>
    );
  }