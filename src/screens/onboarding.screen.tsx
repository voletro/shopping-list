import { TouchableOpacity, Text } from "react-native";

export const Onboarding1 = ({ navigation }) => {
  return (
    <TouchableOpacity
      className="justify-center items-center mt-10"
      onPress={() => navigation.navigate("2")}
    >
      <Text>Next page</Text>
    </TouchableOpacity>
  );
};

export const Onboarding2 = ({ navigation }) => {
  return (
    <TouchableOpacity
      className="justify-center items-center mt-10"
      onPress={() => navigation.navigate("2")}
    >
      <Text>Success!</Text>
    </TouchableOpacity>
  );
};
