import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';

// Define the type for a single message object.
interface Message {
  id: string;
  text: string;
  isSelf: boolean;
  isTyping?: boolean; // Optional property for the "typing..." indicator
}

// A function to get a unique ID for messages
const getMessageId = (): string => Math.random().toString(36).substring(7);

export default function ChatRoom() {
  // Use <string> to explicitly type the state for the input message.
  const [message, setMessage] = useState<string>("");

  // Use <Message[]> to explicitly type the state for the messages array.
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Hey there! How's it going?", isSelf: false },
    { id: "2", text: "It's going great, thanks! Just testing out this chat app.", isSelf: true },
  ]);

  // Create a ref to control the FlatList's scrolling
  const flatListRef = useRef<FlatList>(null);

  // Handle sending a message
  const handleSend = () => {
    if (message.trim()) {
      // Create a new message object for the user
      const newMessage: Message = {
        id: getMessageId(),
        text: message.trim(),
        isSelf: true,
      };

      // Add the new message to the list
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      // Clear the input field
      setMessage("");
    }
  };

  // Simulate a friend's reply after a short delay
  useEffect(() => {
    // Only simulate if the last message was sent by the user
    if (messages.length > 0 && messages[messages.length - 1].isSelf) {
      const lastMessage = messages[messages.length - 1].text;
      
      // Simulates a loading state before the reply
      const replyPlaceholder: Message = {
        id: getMessageId(),
        text: "typing...",
        isSelf: false,
        isTyping: true,
      };
      
      setMessages((prevMessages) => [...prevMessages, replyPlaceholder]);

      // Set a timeout to simulate a delayed response
      setTimeout(() => {
        const replyText = `I saw your message: "${lastMessage}". What's next?`;
        
        const friendReply: Message = {
          id: getMessageId(),
          text: replyText,
          isSelf: false,
        };
        
        // Remove the "typing..." message and add the real reply
        setMessages((prevMessages) => 
          prevMessages.filter(msg => !msg.isTyping).concat(friendReply)
        );

      }, 2000); // 2-second delay for the reply
    }
  }, [messages]);

  // Scroll to the end of the list when messages are updated
  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  // Use the Message type for the `item` prop from FlatList
  const renderMessage = ({ item }: { item: Message }) => {
    const messageContainerStyle = item.isSelf
      ? "bg-[#20A090] self-end rounded-xl my-1 mx-2 p-3 max-w-[80%]"
      : "bg-[#F3F6F6] self-start rounded-xl my-1 mx-2 p-3 max-w-[80%]";

    const messageTextStyle = item.isSelf
      ? "text-white text-base"
      : "text-gray-900 text-base";

    return (
      <View className={messageContainerStyle}>
        <Text className={messageTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* Chat Messages */}
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
          className="flex-1 p-4"
        />

        {/* Input Area */}
        <View className="flex-row items-center mb-12 p-2 bg-white border-t border-gray-300 w-full">
          {/* Attachment Button */}
          <TouchableOpacity
            onPress={() => console.log("Opening attachment picker")}
            className="p-2 mr-2 rounded-full"
          >
            <Entypo name="attachment" size={24} color="gray" />
          </TouchableOpacity>

          {/* Input */}
          <TextInput
            className="flex-1 min-h-[50px] max-h-[120px] px-4 py-2 bg-[#F3F6F6] text-gray-900 rounded-full"
            placeholder="Type a message..."
            placeholderTextColor="rgb(156 163 175)"
            value={message}
            onChangeText={setMessage}
            multiline
            style={{
              // Adjust padding to center the text vertically
              paddingTop: 14,
              paddingBottom: 14,
            }}
          />

          {/* Send Button */}
          <TouchableOpacity
            onPress={handleSend}
            className={`ml-2 p-3 rounded-full ${message.trim() ? "bg-[#20A090]" : "bg-gray-400"}`}
            disabled={!message.trim()}
          >
            <Ionicons name="send" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
