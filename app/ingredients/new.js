import { TextInput } from "react-native";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  return (
    <SafeAreaView>
      <Text>Create new Ingredient</Text>
      <TextInput placeholder="Name" />
      <TextInput placeholder="Calories" />
    </SafeAreaView>
  );
}
