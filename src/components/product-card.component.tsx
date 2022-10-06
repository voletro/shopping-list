import { Box, Row, Image } from "native-base";
import { TouchableOpacity, View, Text, Image as ImageRN } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const ProductCard = () => {
  const navigation = useNavigation();
  return (
    <View className="rounded-lg overflow-hidden mb-2 border-gray-200 border-[1px] bg-gray-50 w-[95%]">
      <TouchableOpacity onPress={() => navigation.navigate("ProductScreen")}>
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
            <View className="justify-center mx-4 my-1 bg-[#dc0022] rounded-md p-2">
              <Row className="justify-between">
                <ImageRN
                  source={require("./../assets/images/coles-logo-white.png")}
                  className="h-8 w-16"
                  resizeMode="contain"
                />
                <Row>
                  <>
                    <Text className="bg-yellow-400 p-2 rounded-md mr-2">
                      SPECIAL
                    </Text>
                    <Text className="text-gray-400 text-2xl mr-2 line-through">
                      {"$11"}
                    </Text>
                    <Text className="text-white text-2xl">{"$11"}</Text>
                  </>
                </Row>
              </Row>
            </View>
            <Row>
              <ImageRN
                source={require("./../assets/images/woolworths-logo-colour.png")}
                className="h-8 w-16"
                resizeMode="contain"
              />
            </Row>
          </View>
        </Row>
      </TouchableOpacity>
    </View>
  );
};
