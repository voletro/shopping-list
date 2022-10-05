import { Box, Row, Image } from "native-base";
import { TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const ProductCard = () => {
  const navigation = useNavigation();
  return (
    <View className="rounded-lg overflow-hidden mb-2 border-gray-200 border-[1px] bg-gray-50 w-[95%]">
      <TouchableOpacity onPress={() => navigation.navigate("TabGroup")}>
        <Row>
          <View className="p-3 bg-white justify-center items-center">
            <Image
              source={{
                uri: "https://cdn0.woolworths.media/content/wowproductimages/medium/703393.jpg",
              }}
              alt="Product Image"
              size="md"
            />
          </View>
          <View className="p-2 w-9/12 h-full">
            <Text className="font-bold mb-1 max-w-full text-lg leading-tight">
              Schweppes Lemonade 1.1L
            </Text>
            <Row>
              <Text>1.1L • </Text>
              <Text>2600kJ</Text>
            </Row>
          </View>
        </Row>
      </TouchableOpacity>
    </View>
  );
};
