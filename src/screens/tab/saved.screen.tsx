import { View, TouchableOpacity, Text } from "react-native";

export const SavedScreen = ({ navigation }) => {
  return (
    <View className="flex-1 justify-center items-center">
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("BarcodeScreen")}>
          <Text>Open Barcode</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ProductScreen")}>
          <Text>Open Prodct</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
