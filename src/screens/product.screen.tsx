import { View, TouchableOpacity, Text, Image as ImageRN } from "react-native";
import { Image, Row, ScrollView, Divider } from "native-base";

export const ProductScreen = ({ navigation }) => {
  return (
    <ScrollView endFillColor="black">
      <View className="p-5 bg-white justify-center items-center">
        <Image
          source={{
            uri: "https://cdn0.woolworths.media/content/wowproductimages/large/703393.jpg",
          }}
          alt="Product Image"
          size="2xl"
        />
      </View>
      <View className="m-4">
        <Text className="text-xl mb-2">Schweppes Lemonade 1.1L</Text>
        <Row className="text-l">
          <Text>1.1L • </Text>
          <Text>2600kJ</Text>
        </Row>
      </View>
      <View className="justify-center mx-4 my-1 bg-[#dc0022] rounded-md p-2">
        <Row className="justify-between">
          <ImageRN
            source={require("./../assets/images/coles-logo-white.png")}
            className="h-7 w-16"
            resizeMode="contain"
          />
          <Text className="text-white text-xl">$1.50</Text>
        </Row>
      </View>
      <View className="justify-center mx-4 my-1 bg-[#1b5432] rounded-md p-2">
        <Row className="justify-between">
          <ImageRN
            source={require("./../assets/images/woolworths-logo-colour.png")}
            className="h-7 w-16"
            resizeMode="contain"
          />
          <Text className="text-xl text-white">$1.50</Text>
        </Row>
      </View>
      <View>
        <Divider my="4" bg="muted.300" />
        <View className="mx-4">
          <Text className="font-bold">PRODUCT DETAILS</Text>
          <Text className="mt-2">
            With a harmonious blend of lemon and lime oils, Schweppes Lemonade
            1.1L delivers a zesty, crisp taste to delight your senses. It's
            handcrafted by Schweppes' Master Blenders, making it an iconic drink
            to share with friends and family. Enjoy chilled on its own, or mix
            into cocktails.
          </Text>
        </View>
      </View>
      <View>
        <Divider my="4" bg="muted.300" />
        <View className="mx-4">
          <Text className="text-l font-bold">INGREDIENTS</Text>
          <Text className="text-l mt-2">
            Carbonated Water, Sugar, Food Acids (330, 331), Natural Flavours
            (Lemon & Lime Oils).
          </Text>
        </View>
      </View>
      <View className="m-2"></View>
    </ScrollView>
  );
};
