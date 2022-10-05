import { View, TouchableOpacity, Text } from "react-native";

import { SafeArea } from "../components/safe-area.component";
import { ProductCard } from "../components/product-card.component";
import { Select } from "native-base";

export const ListScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <View className="justify-center items-center">
        <ProductCard navigation={navigation} />
        <ProductCard navigation={navigation} />
        <ProductCard navigation={navigation} />
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("BarcodeScreen")}
          >
            <Text>Open Barcode</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("ProductModal")}>
            <Text>Open Prodct</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeArea>
  );
};
