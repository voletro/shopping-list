import {
  View,
  TouchableOpacity,
  Text,
  Image as ImageRN,
  Platform,
  Alert,
} from "react-native";
import { useState } from "react";
import { Image, Row, ScrollView, Divider, ZStack } from "native-base";
import { Check, FolderPlus, ListPlus } from "phosphor-react-native";

const isiOS = Platform.OS === "ios";

const product = {
  name: "Schweppes Lemonade 1.1L",
  imageURL:
    "https://cdn0.woolworths.media/content/wowproductimages/large/703393.jpg",
  size: "1.1L",
  energy: "2600kJ",
  description:
    "With a harmonious blend of lemon and lime oils, Schweppes Lemonade 1.1L delivers a zesty, crisp taste to delight your senses. It's handcrafted by Schweppes' Master Blenders, making it an iconic drink to share with friends and family. Enjoy chilled on its own, or mix into cocktails.",
  ingredients:
    "Carbonated Water, Sugar, Food Acids (330, 331), Natural Flavours (Lemon & Lime Oils).",
  available: {
    coles: true,
    woolworths: true,
  },
  prices: {
    coles: {
      price: 2.5,
      isOnSale: true,
      salePrice: 1.5,
    },
    woolworths: {
      price: 2.5,
      isOnSale: true,
      salePrice: 1.5,
    },
  },
};

export const ProductScreen = ({ navigation }) => {
  const [added, setAdded] = useState(true);

  const removeAlert = () =>
    Alert.alert(
      "Remove Item",
      "Are you sure you want to remove this item from your list?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => setAdded(true) },
      ]
    );

  return (
    <>
      <ScrollView endFillColor="black">
        <View className="p-5 bg-white justify-center items-center">
          <Image
            source={{
              uri: product.imageURL,
            }}
            alt="Product Image"
            size="2xl"
          />
        </View>
        <View className="m-4">
          <Text className="text-xl mb-2">{product.name}</Text>
          <Row className="text-l">
            <Text>{product.size}</Text>
            <Text> • </Text>
            <Text>{product.energy}</Text>
          </Row>
        </View>
        {product.available.coles ? (
          <TouchableOpacity>
            <View className="justify-center mx-4 my-1 bg-[#dc0022] rounded-md p-2">
              <Row className="justify-between">
                <ImageRN
                  source={require("./../assets/images/coles-logo-white.png")}
                  className="h-8 w-16"
                  resizeMode="contain"
                />
                <Row>
                  {product.prices.coles.isOnSale ? (
                    <>
                      <Text className="bg-yellow-400 p-2 rounded-md mr-2">
                        SPECIAL
                      </Text>
                      <Text className="text-gray-400 text-2xl mr-2 line-through">
                        {"$" + product.prices.coles.price}
                      </Text>
                      <Text className="text-white text-2xl">
                        {"$" + product.prices.coles.salePrice}
                      </Text>
                    </>
                  ) : (
                    <Text className="text-white text-2xl">
                      {"$" + product.prices.coles.price}
                    </Text>
                  )}
                </Row>
              </Row>
            </View>
          </TouchableOpacity>
        ) : null}
        {product.available.woolworths ? (
          <TouchableOpacity>
            <View className="justify-center mx-4 my-1 bg-[#1b5432] rounded-md p-2">
              <Row className="justify-between">
                <ImageRN
                  source={require("./../assets/images/woolworths-logo-colour.png")}
                  className="h-8 w-20"
                  resizeMode="contain"
                />
                <Row>
                  {product.prices.woolworths.isOnSale ? (
                    <>
                      <Text className="bg-yellow-400 p-2 rounded-md mr-2">
                        SPECIAL
                      </Text>
                      <Text className="text-gray-400 text-2xl mr-2 line-through">
                        {"$" + product.prices.woolworths.price}
                      </Text>
                      <Text className="text-white text-2xl">
                        {"$" + product.prices.woolworths.salePrice}
                      </Text>
                    </>
                  ) : (
                    <Text className="text-white text-2xl">
                      {"$" + product.prices.woolworths.price}
                    </Text>
                  )}
                </Row>
              </Row>
            </View>
          </TouchableOpacity>
        ) : null}
        <View>
          <Divider my="4" bg="muted.300" />
          <View className="mx-4">
            <Text className="font-bold">PRODUCT DETAILS</Text>
            <Text className="mt-2">{product.description}</Text>
          </View>
        </View>
        <View>
          <Divider my="4" bg="muted.300" />
          <View className="mx-4">
            <Text className="text-l font-bold">INGREDIENTS</Text>
            <Text className="text-l mt-2">{product.ingredients}</Text>
          </View>
        </View>
        <View>
          <Divider my="4" bg="muted.300" />
          <View className="mx-4">
            <Text className="text-l font-bold">NUTRITION INFORMATION</Text>
            <Text className="text-l mt-2">
              Carbonated Water, Sugar, Food Acids (330, 331), Natural Flavours
              (Lemon & Lime Oils).
            </Text>
          </View>
        </View>
        <View className="m-2"></View>
      </ScrollView>
      <View className="bg-gray-100 border-gray-200 border-t-[1px] ">
        <Row className="m-4">
          {added ? (
            <TouchableOpacity
              className="rounded-lg border-gray-200 border-[1px] bg-gray-700 w-[80%] mr-2"
              onPress={() => setAdded(false)}
            >
              <Row className="p-3 justify-center">
                <ListPlus color="white" />
                <Text
                  className="ml-2 self-center h-full text-md font-bold text-white"
                  style={{ textAlignVertical: "center" }}
                >
                  Add To List
                </Text>
              </Row>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              className="rounded-lg border-gray-200 border-[1px] bg-gray-50 w-[80%] mr-2"
              onPress={() => removeAlert()}
            >
              <Row className="p-3 justify-center">
                <Check />
                <Text
                  className="ml-2 self-center h-full text-md font-bold"
                  style={{ textAlignVertical: "center" }}
                >
                  Added
                </Text>
              </Row>
            </TouchableOpacity>
          )}
          <TouchableOpacity className="rounded-lg border-gray-200 border-[1px] bg-gray-50 w-[18%]">
            <Row className="p-3 justify-center">
              <FolderPlus />
            </Row>
          </TouchableOpacity>
        </Row>
        {isiOS ? <View className="my-2"></View> : null}
      </View>
    </>
  );
};
