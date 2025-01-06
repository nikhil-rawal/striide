import { Text, View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <Text className="text-2xl font-bold text-blue-600">
        Welcome to Striide!
      </Text>
      <Text className="text-gray-700 mt-2">
        Track your streaks effectively.
      </Text>
      <Link href="/add" asChild>
        <TouchableOpacity className="mt-4 px-4 py-2 bg-blue-500 rounded-lg">
          <Text className="text-white font-medium">Add a Streak</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
