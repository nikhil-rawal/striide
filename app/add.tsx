import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function AddStreak() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100 px-4">
      <Text className="text-2xl font-bold text-blue-600">Add a New Streak</Text>
      <TextInput
        className="mt-4 w-full p-4 border border-gray-300 rounded-lg"
        placeholder="Enter streak name"
      />
      <TextInput
        className="mt-4 w-full p-4 border border-gray-300 rounded-lg"
        placeholder="Enter streak goal"
        keyboardType="number-pad"
      />
      <TouchableOpacity className="mt-6 px-4 py-2 bg-green-500 rounded-lg">
        <Text className="text-white font-medium">Save Streak</Text>
      </TouchableOpacity>
      <Link href="/" asChild>
        <TouchableOpacity className="mt-4 px-4 py-2 bg-red-500 rounded-lg">
          <Text className="text-white font-medium">Cancel</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
