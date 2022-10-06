import { View, TouchableOpacity, Text } from "react-native";

import { SafeArea } from "../../components/safe-area.component";
import { ProductCard } from "../../components/product-card.component";
import { ScrollView, Select } from "native-base";

export const ListScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <ScrollView>
        <View className="justify-center items-center">
          <ProductCard navigation={navigation} />
          <ProductCard navigation={navigation} />
          <ProductCard navigation={navigation} />
          <ProductCard navigation={navigation} />
          <ProductCard navigation={navigation} />
          <ProductCard navigation={navigation} />
          <ProductCard navigation={navigation} />
          <ProductCard navigation={navigation} />
        </View>
      </ScrollView>
    </SafeArea>
  );
};
