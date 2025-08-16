import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, SafeAreaView } from "react-native";

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
    <SafeAreaView className="flex-1 bg-white dark:bg-black">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* Chat Messages */}
        <View className="flex-1 p-4">
          <Text>Chat Messages go here...</Text>
        </View>

        {/* Input Area */}
        <View className="flex-row items-center p-2 mb-12 bg-gray-100 dark:bg-zinc-800 border-t border-gray-300 dark:border-zinc-700 w-full">
          {/* Attachment Button */}
          <TouchableOpacity
            onPress={handleAttachment}
            className="p-2 mr-2 rounded-full bg-blue-500 dark:bg-blue-600"
          >
            <Text className="text-white text-lg font-bold">+</Text>
          </TouchableOpacity>

          {/* Input */}
          <TextInput
            className="flex-1 h-10 px-4 bg-white dark:bg-zinc-700 text-gray-900 dark:text-white rounded-full"
            placeholder="Type a message..."
            placeholderTextColor="rgb(156 163 175)"
            value={message}
            onChangeText={setMessage}
            multiline
          />

          {/* Send Button */}
          <TouchableOpacity
            onPress={handleSend}
            className="ml-2 p-2 rounded-full bg-green-500 dark:bg-green-600"
          >
            <Text className="text-white text-lg font-bold">➤</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
