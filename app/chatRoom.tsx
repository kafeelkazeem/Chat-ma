import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, SafeAreaView } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ChatRoom() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const handleAttachment = () => {
    console.log("Opening attachment picker");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* Chat Messages */}
        <View className="flex-1 p-4">
          <Text>Chat Messages go here...</Text>
        </View>

        {/* Input Area */}
        <View className="flex-row items-center p-2 mb-12 bg-white border-t border-gray-300 w-full h-20">
          {/* Attachment Button */}
          <TouchableOpacity
            onPress={handleAttachment}
            className="p-2 mr-2 rounded-full"
          >
            <Entypo name="attachment" size={24} color="black" />
          </TouchableOpacity>

          {/* Input */}
          <TextInput
            className="flex-1 h-14 px-4 bg-[#F3F6F6] text-gray-900 rounded-full"
            placeholder="Type a message..."
            placeholderTextColor="rgb(156 163 175)"
            value={message}
            onChangeText={setMessage}
            multiline
          />

          {/* Send Button */}
          <TouchableOpacity
            onPress={handleSend}
            className="ml-2 p-3 rounded-full bg-[#20A090]"
          >
            <Text className="text-white text-lg font-bold"><Ionicons name="send" size={24} color="white" /></Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
